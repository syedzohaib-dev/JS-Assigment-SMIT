var num1 = 3
var num2 = 4
var sum = num1 + num2
document.write("<h1>Sum of 3 & 4 -- " + sum)

var num1 = 3
var num2 = 4
var sum = num1 / num2
document.write("<h1>Divide of 3 & 4 -- " + sum)

var num1 = 3
var num2 = 4
var sum = num1 * num2
document.write("<h1>Multiply of 3 & 4 -- " + sum)

var num1 = 3
var num2 = 4
var sum = num1 - num2
document.write("<h1>Minus of 3 & 4 -- " + sum + "<br><br>")


var value = 33
document.write("original value is " + value + "<br>")
document.write("the value after Increment is " + ++value + "<br>")
document.write("the value after decrement is " + --value + "<br>")
document.write("the value after addition is  7" + 7 + value + "<br>")
document.write("the value after decretion is  7" + --value + "<br>")
var devide = value / 3
document.write("the value reminder is " + devide + "<br><br>")

// movie ticket

var movieTicket = 600
var movieTotal = movieTicket * 5
document.write("The total cost of 5 movie ticket is " + movieTotal + "<br>")

var fiveTable = 5

document.write("5 x 1 = " + (fiveTable * 1) + "<br>")
document.write("5 x 2 = " + (fiveTable * 2) + "<br>")
document.write("5 x 3 = " + (fiveTable * 3) + "<br>")
document.write("5 x 4 = " + (fiveTable * 4) + "<br>")
document.write("5 x 5 = " + (fiveTable * 5) + "<br>")
document.write("5 x 6 = " + (fiveTable * 6) + "<br>")
document.write("5 x 7 = " + (fiveTable * 7) + "<br>")
document.write("5 x 8 = " + (fiveTable * 8) + "<br>")
document.write("5 x 9 = " + (fiveTable * 9) + "<br>")
document.write("5 x 10 = " + (fiveTable * 10) + "<br>")

var celciusTemperature = 41
var ferenHeightTempreture = 103

celciusTemperature = (ferenHeightTempreture - 32) * 5 / 9
ferenHeightTempreture = (celciusTemperature * 9 / 5) + 32

document.write(celciusTemperature + "C" + "  is " + ferenHeightTempreture + "F" + "<br>")
document.write(ferenHeightTempreture + "F" + " is " + celciusTemperature + "C" + "<br>")


// 7---

var item1 = 200
var item2 = 400
var itemQuantity1 = 3
var itemQuantity2 = 4
var total1 = item1 * itemQuantity1
var total2 = item2 * itemQuantity2
var grandTotal = total1 + total2


document.write("Prize of item 1 is " + item1 + "<br>")
document.write("Prize of item 2 is " + item2 + "<br>")
document.write("Quantity of item 1 is " + itemQuantity1 + "<br>")
document.write("Quantity of item 2 is " + itemQuantity2 + "<br>")
document.write("Prize of total item is " + grandTotal + "<br>")

// __8__

var TotalMarks = 1000
var obtainMarks = 784
var percentage = (obtainMarks / TotalMarks) * 100

document.write("Total mark is " + TotalMarks + "<br>")
document.write("Obtain mark is " + obtainMarks + "<br>")
document.write("Percentage is " + percentage + "<br>" + "<br>")

// ___09___

var usCurency = 277
var saudiaCurency = 74
var usTotal = usCurency * 10
var saudiaTotal = saudiaCurency * 25
var countryTotal = saudiaTotal + usTotal

document.write("The total currency of PKR " + countryTotal + "<br>")

var rendomNumber = 10
var arthemetic = (rendomNumber + 5) * 10
var totalArthemetice = arthemetic / 2
document.write("The total number of " + totalArthemetice + "<br>" + "<br>")

var birthYear = 2002
var currentYear = 2024
var ageCalculate = currentYear - birthYear
var ageTotal = ageCalculate - 1

document.write("Birth year is " + birthYear + "<br>")
document.write("Current year is " + currentYear + "<br>")
document.write("Current age is " + ageTotal + "<br>")

// Radius

var radius = 5


var circumference = 2 * Math.PI * radius


var area = Math.PI * radius * radius

document.write("Radius of circle is " + radius + "<br>")
document.write("The circumference is " + circumference.toFixed(2) + "<br>")
document.write("The area is " + area.toFixed(2) + "<br>" + "<br>" + "<br>")

// Favorite Snack

var favoriteSnake = ("Chocolato")
var currentAge = 22
var maximumAge = 65
var amountperday = 1
var eatTotal = (maximumAge - currentAge) * 365
document.write("The life time supply calculator " + " <br>" + " <br>")
document.write("The Favorite snake " + favoriteSnake + "<br>")
document.write("The current age is " + currentAge + "<br>")
document.write("The maximum age is " + maximumAge + "<br>")
document.write("The amount per day " + amountperday + "<br>")
document.write("The total eating snake " + eatTotal + "<br>")


// Assigment no 06__

var a = 10


document.write("<h1>The value of a is: 10" + "<br>")

document.write("------------------------------------" + "<br>" + "<br>")

document.write("The value of ++a is " + ++a + "<br>")
document.write("Now the value of a is " + a + "<br>" + "<br>")

document.write("The value of a++ is " + a++ + "<br>")
document.write("Now the value of a is " + a + "<br>" + "<br>")

document.write("The value of --a is " + --a + "<br>")
document.write("Now the value of a is " + a + "<br>" + "<br>")

document.write("The value of a-- is " + a-- + "<br>")
document.write("Now the value of a is " + a + "<br>")


var a = 2 
var b = 1
var result = --a - --b + ++b + b--;

document.write("a is " + a)
document.write("b is " + b)
document.write("Result is " + result)


// 26--03--2024

var userInput = prompt("What is your name")
document.write("Wellcome to our website " + userInput + "<br>")

// no--5

var usertableinput = prompt("plz Write a some number")
document.write(`${usertableinput} x 1 = ${usertableinput * 1} <br>`)
document.write(`${usertableinput} x 2 = ${usertableinput * 2} <br>`)
document.write(`${usertableinput} x 3 = ${usertableinput * 3} <br>`)
document.write(`${usertableinput} x 4 = ${usertableinput * 4} <br>`)
document.write(`${usertableinput} x 5 = ${usertableinput * 5} <br>`)
document.write(`${usertableinput} x 6 = ${usertableinput * 6} <br>`)
document.write(`${usertableinput} x 7 = ${usertableinput * 7} <br>`)
document.write(`${usertableinput} x 8 = ${usertableinput * 8} <br>`)
document.write(`${usertableinput} x 9 = ${usertableinput * 9} <br>`)
document.write(`${usertableinput} x 10 = ${usertableinput * 10} <br>`)

// no--6

var subject1 = prompt("plz write your 1 subject")
var subject2 = prompt("plz write your 2 subject")
var subject3 = prompt("plz write your 3 subject")

var totalMarks = 100

var obtain1 = prompt("plz enter obtain marks of subject 1")
var obtain2 = prompt("plz enter obtain marks of subject 2")
var obtain3 = prompt("plz enter obtain marks of subject 3")


var percentage1 = obtain1 / totalMarks * 110
var percentage2 = (obtain2 / totalMarks) * 110
var percentage3 = (obtain3 / totalMarks) * 110

// document.write("per-1 " + percentage1)
// document.write("per-1 " + percentage1)
// document.write("per-1 " + percentage1)
document.write("Subject  Totalmarks  Obtainmarks  Percentage <br>")
document.write(subject1 + " " + totalMarks + " " + obtain1 + " " + percentage1 + "%" + "<br>")
document.write(subject2 + " " + totalMarks + " " + obtain2 + " " + percentage2 + "%" + "<br>")
document.write(subject3 + " " + totalMarks + " " + obtain3 + " " + percentage3 + "%" + "<br>")



// chapter no --09-- if and else 

document.write("<h1>")
var userCity = prompt("plz write your favorite city")
if (userCity == "karachi") {
    document.write("Wellcome to the city of light")

} else {
    document.write("You chose wrong city")
}
document.write("<br>")

// --2--

var userGender = prompt("Plz enter your gender")
if (userGender == "male") {
    document.write("Good Morning Sir")
} else if (userGender == "female") {
    document.write("Good Morning Maam")
} else {
    document.write("Your gender was not show")
}
document.write("<br>")

// --3--

var userColor = prompt("plz select your color  -- Red -- Yellow -- Green")
if (userColor == "red") {
    document.write("Must Stop")
} else if (userColor == "yellow") {
    document.write("Ready to Move")
} else if (userColor == "green") {
    document.write("Move Now")
} else {
    document.write("You chose wrong color")
}
document.write("<br>")


// --4--

var userfuel = prompt("how many fuel in car in liters")
if (userfuel <= 0.25) {
    document.write("plz fill out the tank in your car")
}
else {
    document.write("Your tank is full")
}
document.write("<br>")

// --5--

var a = 4
if (++a === 5) {
    alert("given condition for variable a is true")
}

var b = 82
if (b++ === 83) {
    alert("given condition of variable b is true")
}

var c = 12
if (c++ === 13)    {
    alert("condition-1 is true")
}
if (c === 13) {
    alert("condition 2 is true")
}
if (++c < 14) {
    alert("condition 3 is true")
}
if (c === 14) {
    alert("condition 4 is true")
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var userObtain = prompt("plz enter the obtain marks of subject 1")




var userTotal = 300

var percentage = userObtain / userTotal * 100


if (percentage >= "80") {
    document.write("grade: A-one" + "<br>" + "<br>")
    document.write("Excelent" + "<br>")

} else if (percentage >= "70") {
    document.write("grade: A" + "<br>" + "<br>")
    document.write("Good")

} else if (percentage >= "60") {
    document.write("grade: B" + "<br>" + "<br>")
    document.write("You Need To Improve")
}
//  else (percentage <= "60") {
//     document.write("FAIL " + "<br>")
//     document.write("SORRY")
// }



document.write("Total marks is: " + userTotal + "<br>")
document.write("Obtained marks is: " + userObtain + "<br>")
document.write("Percentage is: " + percentage + "<br>")
// document.write("Grade B")

//  --7--
var secretNumber = 7
var secretUser = prompt("plz Enter your secret number")

if (secretNumber == secretUser) {
    document.write("<h1>you win " + "<br>")

} else if (secretNumber == 8) {
    document.write(" too close" + "<br>")
}
else {
    document.write("Wrong answer" + "<br>")
}


// // --8--

var userDivide = prompt("plz write and check this number is divide by 3")
// userDivide / 3
if (userDivide % 3 === 0) {
    document.write("your number is divide by 3" + "<br>")
} else {
    document.write("not divide by 3" + "<br>")
}

// --9--

var userEO = prompt("Plz enter your any number")
if (userEO % 2 === 0) {
    document.write("Even Number" + "<br>")
} else {
    document.write("ODD Number" + "<br>")
}

// --10--

var outdoorTemp = prompt("plz enter the temperature")

if (outdoorTemp > 40) {
    document.write("it his to hot outsite")
} else if (outdoorTemp > 30) {
    document.write("The weather today is normal ")
} else if (outdoorTemp > 20) {
    document.write("Today weather is cool")
} else if (outdoorTemp > 10) {
    document.write("'OMG' today weather is to cold")
}
else {
    document.write("you no" + "<br>")
}

// --11--

// user Calculator

var userMath1 = prompt("plz enter a first number")
var usermath2 = prompt("plz enter your secong number")

var statement = prompt("plz enter the types +  _  *  %  /")


if (statement == "+") {
    document.write(userMath1 + usermath2)
} else if (statement == "-") {
    document.write(userMath1 - usermath2)
}
else if (statement == "*") {
    document.write(userMath1 * usermath2)
}
else if (statement == "%") {
    document.write(userMath1 % usermath2)
}
else if (statement == "/") {
    document.write(userMath1 / usermath2)
}
else {
    document.write("you wrong" + "<br>")
}
document.write("<br>")

//   ---------------------- 12-13

// ---2---
document.write("<h1>")
var userinteger1 = prompt("plz enter first integar number")
var userinteger2 = prompt("plz enter second integar number")

if (userinteger1 > userinteger2) {
    document.write("first integer is grater then two" + "<br>")
} else if (userinteger2 > userinteger1) {
    document.write("Secong integar is grater then first" + "<br>")
} else {
    document.write("Both are equal" + "<br>")
}

// --3--


var userzero = prompt("plz enter the number positive or negetivve")

if (userzero > 0) {
    document.write("number is positive" + "<br>")
}
else if (userzero < 0) {
    document.write("number is negetive" + "<br>")
}
else {
    document.write("number is Zero" + "<br>")
}

// --4--

var vovelCharacter = ("a", "e", "i", "o", "u")
var userinter = prompt("plz enter a one charater word")
if (userinter == vovelCharacter) {
    document.write("Good")
} else {
    document.write("false")
}














































