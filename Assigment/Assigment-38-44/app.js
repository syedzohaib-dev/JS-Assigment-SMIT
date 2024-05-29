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

function calculateCurrencyNotes(amountInHundreds) {
    const denominations = [100, 50, 10];
    let remainingAmount = amountInHundreds * 100; // Convert amount to rupees
    let notes = {};

    for (let denomination of denominations) {
        let count = Math.floor(remainingAmount / denomination);
        notes[denomination] = count;
        remainingAmount -= count * denomination;
    }

    return notes;
}

// Example usage:
const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds: "));
const currencyNotes = calculateCurrencyNotes(amountInHundreds);
console.log("Currency notes to be given:");
for (let denomination in currencyNotes) {
    console.log(`Rs. ${denomination}: ${currencyNotes[denomination]}`);
}


// END...