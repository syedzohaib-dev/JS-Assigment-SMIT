 
var multiArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
document.write("<h1>" + multiArray)

var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < matrix.length; i++) {
    document.write("<h1>" + matrix[i].join(" ") + "<br>");
}
document.write("<br>")

// var numericCounting = 1
for (var i = 1; i < 11; i++) {
    document.write(i + "<br>")
}

var userNumber = parseInt(prompt("Which number you want to show table"))
var userLength = parseInt(prompt("how many length you show"))

for (var userNumber = 0; i <= userLength.length; i++) {
    document.write(userNumber)
}

var basket = ['apple', 'mango', 'stawbarry', 'graps']

for (var i = 0; i <= basket.length; i++) {
    console.log(basket[i])
}

// --3--

document.write(`Counting from 1 to 10 <br>`)

for (var i = 1; i < 11; i++) {
    document.write("<h1>" + i + "<br>")
}

// --04--

var input = parseInt(prompt("which table you want to show"))
var length = parseInt(prompt("How many length of table"))
document.write(`Table of ${input} using for loop` + `<br>`)
for (var i = 1; i <= length; i++) {

    document.write(`${input} x ${i} = ${input * i}` + `<br>`)
}

// --05--

var fruit = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for (var i = 0; i < fruit.length; i++) {
    document.write(fruit[i] + "<br>")
}
document.write(`Element at index 0 is ${fruit[0]}` + `<br>`)
document.write(`Element at index 1 is ${fruit[1]}` + `<br>`)
document.write(`Element at index 2 is ${fruit[2]}` + `<br>`)
document.write(`Element at index 3 is ${fruit[3]}` + `<br>`)
document.write(`Element at index 4 is ${fruit[4]}` + `<br>`)

// --6--

// a
document.write(`Counting: ` + `<br>`)
for (var i = 1; i < 16; i++) {
    document.write(i + `,`)
}
document.write("<br>")

// b
document.write(`Reverce Counting: ` + `<br>`)
for (var i = 11; i >= 1; i--) {
    document.write(i + ',')
}
document.write("<br>")

// c

document.write("Even Number: <br>")
for (var i = 2; i <= 20; i += 2) {
    document.write(i + `,`)
}
document.write("<br>")


// d

document.write("Odd number: <br>")
for (var i = 1; i <= 21; i += 2) {
    document.write(i + `,`)
}
document.write("<br>")

// e
document.write("Series: <br>")
for (var i = 2; i <= 21; i += 2) {
    document.write(`${i}k` + `, `)
}

// --7--

var bakery = ['cake', 'biscuit', 'apple pie', 'cake rusk', 'bun', 'baqar khani']
var userInput = prompt("Hello! which item you want to buy")
var itemFound = false

for (var i = 0; i < bakery.length; i++) {
    if (userInput == bakery[i]) {
        itemFound = true
        alert(`[${userInput}] is available at index ${bakery.length} in our bakery`)
        break;
    }
}
if (itemFound === false) {
    alert(`We are sorry [${userInput}] is not available in our bakery`)
}
document.write("<br>")

// --8--

var large = [22, 54, 87, 28, 73]

var max = large[0]
for (var i = 1; i < large.length; i++) {
    if (large[i] > max) {
        max = large[i]
    }
}
// console.log(max)
document.write("Array items " + large + "<br>")
document.write("Largest number  " + max + "<br>")

// --9--

var small = [22, 54, 87, 28, 73]


var min = small[0]
for (var i = 1; i > small.length; i++) {
    if (small[i] < min) {
        min = small[i]
    }
}
document.write("Array items " + small + "<br>")
document.write("Smallest number " + min + "<br>")

// --10--


document.write("Multiple of 5 <br>")
for (var j = 5; j <= 100; j += 5) {
    document.write(j + ", ")
}
