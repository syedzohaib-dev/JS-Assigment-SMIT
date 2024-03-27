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

