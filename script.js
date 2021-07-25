let firstCard = 3
let secondCard = 7
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard

if(sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("You got Blackjack!")
    hasBlackJack = true
} else {
    console.log("You have lost...")
    isAlive = false
}