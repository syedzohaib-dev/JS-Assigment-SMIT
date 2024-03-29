var single = []
var studentDetail = []

var stringArray = ["apple", 'ball', "cat"]
var numberArray = [1, 2, 3]
var boleanArray = [true, false]
var mixArray = ["apple", 1, true]

var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M', 'Phil', 'PhD']

document.write("<h1>Qualification" + "</br>")
document.write("1. " + qualification[0] + "<br>")
document.write("2. " + qualification[1] + "<br>")
document.write("3. " + qualification[2] + "<br>")
document.write("4. " + qualification[3] + "<br>")
document.write("5. " + qualification[4] + "<br>")
document.write("6. " + qualification[5] + "<br>")
document.write("7. " + qualification[6] + "<br>")
document.write("8. " + qualification[7] + "<br>")
document.write("9. " + qualification[8] + "<br>")


// --8--

// --8--

var studentList = ['ali', 'junaid', 'salman']
var studentScore = [222, 333, 444]
var totalMarks = 500

var per1 = studentScore[0] / totalMarks * 100
var per2 = studentScore[1] / totalMarks * 100
var per3 = studentScore[2] / totalMarks * 100


document.write("<h1>Score of ali is: " + studentScore[0] + "Percentage: " + per1 + " %")
document.write("<h1>Score of junaid is: " + studentScore[1] + "Percentage: " + per2 + " %")
document.write("<h1>Score of salman is: " + studentScore[2] + "Percentage: " + per3 + " %<br><br>")

// --9--

var color = ["red", "green", "blue"]
document.write(`Original array: ${color} <br>`)

// a

var colorAddToBeginning = prompt("Which color add to beginning to the array")
color.unshift(colorAddToBeginning)
document.write(`color add the begning of array: ${color} ` + `<br>`)

// b

var colorAddToEnd = prompt("Which color add to end of the array")
color.push(colorAddToEnd)
document.write(`Color add the end of array: ${color}` + `<br>`)

// c

color.unshift("yellow", "blue")

document.write(`Two more color add to beginning: ${color}` + `<br>`)

// d

color.shift()
document.write(`array after deleting first color: ${color}` + `<br>`)

// e

color.pop()
document.write(`array after deleting last color: ${color}` + `<br>`)

// f

var indexToAdd = parseInt(prompt("Enter the index to add the color "))
var colorToAdd = prompt("Enter the color to add")
color.splice(indexToAdd, 0, colorToAdd)
document.write(`Array after adding index color: ${indexToAdd} : ${color}` + `<br>`)

// g

var indexToDelete = parseInt(prompt("Enter the index to delete the color"))
var colorToDelete = parseInt(prompt("Enter the color to delete"))
color.splice(indexToDelete, colorToDelete)
document.write(`Array after deleting index color: ${indexToDelete} : ${color}` + `<br>`)

// --10--

var studentScore = [430, 220, 350, 180]
document.write(`Score of student: ${studentScore}` + `<br>`)
studentScore.sort()

document.write(`Order score of student: ${studentScore}` + "<br>")

// --11--

var city = ["karachi", "lahore", "peshawer", "queta", "mardan", "islamabad"]
document.write("City " + city + "<br>")

var selectedCity = []

selectedCity.push(city[0], city[1], city[2])

document.write(`Selected city: ${selectedCity}` + `<br>`)

// --12--

var catArray = ["This", "is", "my", "cat "]
document.write(`Array:  ${catArray}` + `<br>`)

var pureString = catArray.join(" ")
document.write(`String:  ${pureString}` + `<br>`)

// --13--

var device = ["Keyboard", "Mouse", "Printer", "Moniter"]


document.write(`Device: ${device}` + `<br>`)

document.write(`${device[0]}` + `<br>`)
document.write(`${device[1]}` + `<br>`)
document.write(`${device[2]}` + `<br>`)
document.write(`${device[3]}` + `<br>`)

// --14--


