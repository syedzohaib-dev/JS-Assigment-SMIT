// --1--

var current = new Date()
document.write("<h1>" + current + "<br>")

// --2--

var monthName = ["January", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var now = new Date()
var theMonth = now.getMonth()
var nameOfMonth = monthName[theMonth]
document.write("Curent Month: " + nameOfMonth + "<br>")

// --3--

var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nowDay = new Date()
var theDay = nowDay.getDay()
var nameOfDay = dayName[theDay]
document.write("Current Day: " + nameOfDay + "<br>")

// --4--


