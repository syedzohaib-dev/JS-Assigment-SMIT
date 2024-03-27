// Assigment--6

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

// 2

var userInput = prompt("What is your name")
document.write("Wellcome to our website " + userInput + "<br>")


// --3--

var a = 2
var b = 1
var result = --a - --b + ++b + b--;

document.write("a is " + a)
document.write("b is " + b)
document.write("Result is " + result)



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
