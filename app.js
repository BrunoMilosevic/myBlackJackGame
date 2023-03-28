//Assigning variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
//Rendering
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//Assigning functions
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards = [card1, card2];
    sum = card1 + card2; 
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards(as numbers): "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20){
        message = "Wanna draw a new card?";
    } else if (sum === 21) {
        //If player gets a blackjack then he can't draw
        //a new card, this will be set in newCard() below
        message = "You got a BlackJack";
        hasBlackJack = true;
    } else {
        //If the player is out of the game then he can't draw
        //new card, also to be set in newCard() below
        message = "You are out!";
        isAlive = false;
    }
    //setting message to whatever the condition is
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}



