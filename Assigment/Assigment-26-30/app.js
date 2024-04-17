// assigment --26-30--

// --1--

// var number = parseFloat(prompt("plz enter a positive number"))

// document.write("<h1>Number " + number + '<br>')
// document.write("Round off value " + Math.round(number) + '<br>')
// document.write("Floor value " + Math.floor(number) + '<br>')
// document.write("Ceil value " + Math.ceil(number) + '<br>')

// // --2--

// var negetiveNumber = parseFloat(prompt("plz enter a positive number"))

// document.write("Number " + negetiveNumber + '<br>')
// document.write("Round off value " + Math.round(negetiveNumber) + '<br>')
// document.write("Floor value " + Math.floor(negetiveNumber) + '<br>')
// document.write("Ceil value " + Math.ceil(negetiveNumber) + '<br>')


// --3--

var absoluteValue = -4
var absoluteUpdate = Math.abs(absoluteValue)

document.write(`The absolute value of ${absoluteValue} is ${absoluteUpdate} <br>`)

// --4--

var dice = Math.random()

var diceRandom = (dice * 6) + 1

var diceDown = Math.floor(diceRandom)

document.write(diceDown + "<br>")

// --5--

var coin = Math.random()

var coinRandom = (coin * 2) + 1
var coinDown = Math.floor(coinRandom)

document.write(coinDown + "<br>")

// --6--

var randomCounting = Math.random()

var calculation = (randomCounting * 100) + 1

var down = Math.floor(calculation)

document.write("Random number between 1 to 100 - " + down + "<br>")


// --7--

var userWeight = parseInt(prompt("Plz enter your weight"))

document.write(`The weight of user is ${userWeight} kilograms <br>`)

// --8--

var secretNumber = 5
var userSecret = parseInt(prompt("plz enter a secret number 1 to 10"))

if (secretNumber == userSecret) {
    document.write("you win")
} else {
    document.write("you lose")
}
