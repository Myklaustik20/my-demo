let player = {
    name: "Julio",
    chips: 100
}
let cards = []//define a card array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

// this function is used to return a random number in all the cards
function getRandomCard() {
   let randonNumber = Math.floor(Math.random() * 13) + 1
   if (randonNumber > 10) {
    return 10
   } else if (randonNumber === 1){
    return 11
   } else {
        return randonNumber
   }
}

//startGame function starts here
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]//re-assign the card array
    sum = firstCard + secondCard
     renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    //this for loop allows us to render all the cards in the card array
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
   } else if (sum === 21) {
        message = "You've got Blackjack"
       hasBlackJack = true
   } else {
       message = "You're out of the game!"
       isAlive = false
   }

   messageEl.textContent = message
// console.log(isAlive)
}

//startGame function ends here

//newCard function starts here
function newCard() {
    /*
        this tells the newCard button to only run if you are still
         alive in the game and have not hit a blackjack yet
     */
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)// we use this to push a new card to the cards array
        renderGame()
    }
   
}
