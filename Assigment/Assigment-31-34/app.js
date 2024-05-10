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

document.write("<br>")

// --5--

function square(x) {
    return x * x

}
var result = square(4)
document.write(result)
document.write("<br>")

// --6--

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
document.write(factorial(5))
document.write("<br>")

// --7--

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}
counting(12, 23)
document.write("<br>")

// --8--


function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
        return side * side
    }
    const baseSquare = calculateSquare(base)
    const perpendicularSquare = calculateSquare(perpendicular)
    const hypotenuseSquare = baseSquare + perpendicularSquare
    const hypotenuse = Math.sqrt(hypotenuseSquare)
    return hypotenuse
}

const base = 3
const perpendicular = 4
const hypotenuse = calculateHypotenuse(base, perpendicular)
console.log("hypotenuse " + hypotenuse)

// --9--

function calculateRectangle(width, height) {
    return width * height
}
var result = calculateRectangle(2, 3)
console.log("The area of triangle " + result)

function calculateRectangleVariable() {
    var width = 2
    var height = 3
    var total = width * height
    return total
}
var caltotal = calculateRectangleVariable()
console.log("The area of triangle " + caltotal)

// --10--

function palindrome() {

    var word = "mam"
    var word1 = word.charAt(0)
    console.log("1--" + word)
    var word2 = word.charAt(word.length - 1)
    console.log("2--" + word2)
    var word12 = word.charAt(1)
    console.log("12--" + word12)
    var word22 = word.charAt(word.length - 2)
    console.log(word22)
    if (word1 === word2 && word12 === word22) {
        console.log(word + " is palindrome")
    } else {
        console.log(word + " is not palindrome")
    }
}
palindrome()

// --11--/

function convertUpperCase(str) {
    let word = str.split(' ')
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
    }
    return word.join(' ')
}
let exampleStr = "the quick brown fox"
let outut = convertUpperCase(exampleStr)
console.log(outut)

// --12--

function findLongestWord(str) {
    let word = str.split(' ')

    let longestWord = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longestWord.length) {
            longestWord = word[i]
        }
    }
    return longestWord
}

let exampleString = 'Web Development Tutorial';
let longestWord = findLongestWord(exampleString)

console.log(longestWord)

// --13--

function findWord(str, letter) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++
        }
    }
    return count
}
var result = findWord('JSResourceS.com', 'o')
console.log("Number of occurrences " + result)

// --14--

function clacCircumference(radius) {
    var circumferenceCircle = 2 * Math.PI * radius
    console.log("The circumference is " + circumferenceCircle.toFixed(2))

}

function calcArea(radius) {
    var areaCircle = Math.PI * radius * radius
    console.log("The area is " + areaCircle.toFixed(2))
}

clacCircumference(5)
calcArea(5)

// --38--44

// --1--

function value(a, b) {
    return a + b
}
var result = value(3, 5)
console.log(result)

// --2--

function isLeaper(Lyear) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false
        } else {
            return true
        }
    } else {
        false
    }

}
let Lyear = 2023
if (isLeaper(Lyear)) {
    console.log("is leaper")
} else {
    console.log("not leaper")
}


// --3--

// function calculateS(a, b, c) {
//     return (a + b + c) / 2
// }

// function calculateArea(a, b, c) {
//     const S = calculateS(a, b, c)
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c))
// }

// let a = 3
// let b = 4
// let c = 5
// let area = calculateArea(a, b, c)
// console.log("Area of triangle " + area)

// --4--

// function finalExam(english, urdu, math) {
//     function english(sub1) {
//         var average = (sub1 / 80) * 100
//         return average.toFixed(2)
//     }
//     function urdu(sub2) {
//         var average = (sub2 / 80) * 100
//         return average.toFixed(2)
//     }
//     function math(sub3) {
//         var average = (sub3 / 80) * 100
//         return average.toFixed(2)
//     }

//     var result1 = english(44)
//     console.log("The english percentage " + result1)

//     var result2 = urdu(55)
//     console.log("The urdu percentage " + result2)

//     var result3 = math(66)
//     console.log("The math percentage " + result3)
//     return result1, result2, result3
// }
// finalExam(44, 55, 66)

// --5--

// function indexOff(string, word) {

//     for (var i = 0; i < string.length; i++) {

//         if (string[i] === word) {
//             return i
//         }
//     }
//     return - 1
// }

// var string = "A black cat"
// let word = "b"
// console.log(indexOff(string, word))

// --6--

function deleteVovel(sentence, vovel) {
    var conArr = sentence.split(' ')
    for (var i = 0; i < conArr.length; i++) {
        if (conArr[i].includes(vovel)) {
            console.log(conArr.delete([i]))
        }
    }
    return conArr
}
var sentence = "my name is developer"
var vovel = ['a', 'e', 'i', 'o', 'u']
console.log(deleteVovel(sentence, vovel))

// --7--

function line(sentence) {
    var vovel = "ea"
    var result = ""
    for (var i = 0; i < sentence.length; i++) {
        if (!vovel.includes(sentence[i])) {
            result += sentence[i]
        }
    }
    return result
}
var sentence = "Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui"
var result = line(sentence)
document.write(result)

document.write("<br>")
document.write("<br>")

// --8--

function distanceMeter(km) {
    var distanceInMeter = km * 1000
    return distanceInMeter

}
function distanceFeet(km) {
    var distanceInFeet = km * 3281
    return distanceInFeet
}
function distanceInches(km) {
    var distanceInInches = km * 39370
    return distanceInInches
}
function distanceCentimeter(km) {
    var distanceInCentimeter = km * 100000
    return distanceInCentimeter
}
var km = 22
document.write(km + "Kilometer to Meter " + distanceMeter(km) + "<br>")
document.write(km + "Kilometer to Feet " + distanceFeet(km) + "<br>")
document.write(km + "Kilometer to Inches " + distanceInches(km) + "<br>")
document.write(km + "Kilometer to Centimeter " + distanceCentimeter(km) + "<br>")


document.write("<br>")

// --9--

function calculateOverTimePay(hoursWork) {
    var normalHours = 40
    var overTimeRate = 12.00
    if (hoursWork <= normalHours) {
        return 0
    }
    else {
        var overTimeHours = hoursWork - normalHours;
        var overTimePay = overTimeHours * overTimeRate;
        return overTimePay

    }
}
var hoursWork = 44
var overTimePay = calculateOverTimePay(hoursWork)
document.write("Overtime Pay rupess " + overTimePay.toFixed(2))

// --10--

// function denomination(enter) {
//     // var enter = parseInt(prompt("plz enter number to withdraw"))
//     var a = 'hundred'
//     var b = 'fifty'
//     var c = 'ten'
//     var convertArr = enter.split('')
//     // console.log(convertArr)
//     for (var i = 0; i < convertArr.length; i++) {
//         if (convertArr.length[i]) {
//             console.log("you have 4 hundred not")
//             // return i
//         }
//     }
// }
// denomination('460')

// __________________________________________________

// function calculateCurrencyNotes(amountInHundreds) {
//     const denomination = [100, 50, 10]
//     let remainingAmoun = amountInHundreds * 100
//     let notes = {}

//     for (let denomination of denomination) {
//         let count = math.floor(remainingAmoun / denomination)
//         notes[denomination] = count
//         remainingAmoun -= count + denomination
//     }
//     return notes
// }

// const amountInHundreds = 450
// const currencyNote = calculateCurrencyNotes(amountInHundreds)
// console.log("Currency notes to be given:");
// for (let denomination in currencyNote) {
//     console.log(`Rs. ${denomination}: ${currencyNote[denomination]}`);
// }


// /////////

// function calculateCurrencyNotes(amountInHundreds) {
//     const denominations = [100, 50, 10];
//     let remainingAmount = amountInHundreds * 100; // Convert amount to rupees
//     let notes = {};

//     for (let denomination of denominations) {
//         let count = Math.floor(remainingAmount / denomination);
//         notes[denomination] = count;
//         remainingAmount -= count * denomination;
//     }

//     return notes;
// }

// // Example usage:
// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds: "));
// const currencyNotes = calculateCurrencyNotes(amountInHundreds);
// console.log("Currency notes to be given:");
// for (let denomination in currencyNotes) {
//     console.log(`Rs. ${denomination}: ${currencyNotes[denomination]}`);
// }


// END...



