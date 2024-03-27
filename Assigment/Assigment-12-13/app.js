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

var vovelCharacter = ("aeiou")
var userinter = prompt("plz enter a one charater word")

if (userinter.length === 1) {
    document.write("Good vovel number is correct" + "<br>")
} else {
    document.write("false not correct" + "<br>")
}

// Correct Password


var userPassword = 12345678
var userInter = prompt("Plz enter your password")
if (userPassword == userInter) {
    document.write("Your password is correct" + "<br>")
} else {
    document.write("Your password was wrong" + "<br>")
}

// --6--

var time = 1900
if ( time <= "0000" && time < 1200) {
    document.write("Good Morning")
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon")
} else if (time >= 1700 && time < 2100) {
    document.write("Good evening")
} else if (time <= 2100 && time < 2359){
    document.write("Good night")
}else {
    document.write("Yuor time is incorrect")
}

// --7--

var hour = 13;
if (hour < 18) {
    document.write("Good day");
}
else {
    document.write("Good evening");
}


