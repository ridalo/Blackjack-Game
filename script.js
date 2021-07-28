let firstCard = 3
let secondCard = 7
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""

if(sum < 21) {
    message = "Do you want to draw a new card?"
    whiteJack = true
} else if (sum === 21) {
    message = "You got Blackjack!"
    hasBlackJack = true
} else {
    message = "You have lost..."
    isAlive = false
}