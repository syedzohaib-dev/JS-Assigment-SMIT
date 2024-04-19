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

// --4--
document.write("<h1>")
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today = new Date()
var theDay = today.getDay()
var nameOfDay = dayNames[theDay]
// document.write(nameOfDay)
if (nameOfDay === dayNames[0] || nameOfDay === dayNames[6]) {
    document.write("Its fun day")
} else {
    document.write("Its not fun day")
}

// --5--

var abhi = new Date()
var currentMonth = abhi.getDate()
if (currentMonth < 15) {
    document.write("First fifteen day of month")
} else if (currentMonth > 15) {
    document.write("Last fifteen day of month")
} else {
    document.write('no first no last')
}
document.write("<br>")

// --6--

var aaj = new Date()

var miliSecond = aaj.getTime()

var eminut = aaj.getTime()

var millisec = miliSecond / (1000 * 60 * 60 * 24);

var elapminut = eminut / (1000 * 60)


document.write("Current Date: " + aaj + "<br>")
document.write("Elapse milisecond since january 1 1970: " + millisec + "<br>")
document.write("Elapsed Minute since january 1 1970: " + elapminut + "<br>")


// --7--

var abhikatime = new Date()

var currentHours = abhikatime.getHours()

if (currentHours < 12) {
    document.write("its AM" + "<br>")
} else {
    document.write("its PM" + "<br>")
}

// --8--

var laterDate = new Date(2020, 11, 31)
document.write("Later date: " + laterDate + "<br>")

// --9--

var oldDate = new Date(2015, 6, 18)

var oldDate2 = oldDate.getDay()
document.write(oldDate2)
var ramzanCalculate = oldDate2 * (1000)
document.write(ramzanCalculate)

.
    // --9--

var ramzanStarDate = new Date(15, 6, 2015)

var aajKiDate = new Date()

var timeDiff = aajKiDate.getTime() - ramzanStarDate.getTime()

var dayPass = Math.floor(timeDiff / (1000 * 3600 * 24))

document.write(dayPass + " day passed since  june 18 2017")
document.write("<br>")

// --10--
var begningDate = new Date(1, 1, 1970)
var old15 = new Date(5, 11, 2015)

var minus = begningDate.getTime() - old15.getTime()

var secondCalculate = Math.floor(minus / 1000)

document.write(secondCalculate + " second had passed since begninning of 2015")
document.write("<br>")

// --11--

var abhikitareek = new Date()
document.write(abhikitareek + "<br>")

var reset = abhikitareek.setHours(16, 12)
// console.log(reset + "fd")
// console.log(abhikitareek + 'sdkcnl')
document.write("1 hour ago " + abhikitareek + "<br>")

// --12--

var aajKaSal = new Date()
document.write(aajKaSal + "<br>")

aajKaSal.setFullYear(aajKaSal.getFullYear() - 100)

document.write("100 saal pehle ki tareek " + aajKaSal)

// --13--

// var userBirth = prompt("plz enter your age")
// var currentYear = new Date().getFullYear()
// var birthCalculating = currentYear - userBirth
// document.write("Your age is" + userBirth + "<br>")
// document.write("Your birth year is " + birthCalculating + "<br>")

// --14--
document.write("<hr>")

document.write("K-ELECTRIC BILL" + "<br>")
document.write("Customer Name: Syed Zohaib" + "<br>")
document.write("Month: April" + "<br>")
document.write("Number Of Unit: 410" + "<br>")
document.write("Charge Per Unit: 16" + "<br>" + "<br>")

document.write("Net amount pay able (with due date): " + 410 * 16 + "<br>")
document.write("Late payment Charge 350" + "<br>")
document.write("Gross amount payable (after due date): " + ((410 * 16) + 350) + "<br>")

document.write("<hr>END<br>")


// assigment-35-38

// --1--
document.write("Assigment-35-38" + "<hr>")

function currentTime() {
    var current = new Date()
    document.write(current + "<br>")

}
currentTime()

// --2--

function greetUser() {
    var name1 = "syed"
    var name2 = "zohaib"
    document.write("Hello " + name1 + " " + name2 + "<br>")
}
greetUser()

// --3--

function sum() {
    var num1 = 22
    var num2 = 44
    var add = num1 + num2
    document.write("The sum of 2 number is " + add)
}
sum()

// --4--

function calculator() {
    var number1 = prompt("Plz enter Number(1)")
    var number2 = prompt("Plz enter Number(2)")
    var operater = prompt("Plz enter Operater like ( + - x /)")
    console.log(typeof(number1))

    if (operater === "+") {
        document.write(number1 + number2)
    }
    else if (operater === "-") {
        document.write(number1 - number2)
    }
    else if (operater === "*") {
        document.write(number1 * number2)
    }
    else if (operater === "/") {
        document.write(number1 / number2)
    }
    else {
        document.write("Invalid Operator")
    }
}
calculator()



