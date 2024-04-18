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

// -----------------------

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