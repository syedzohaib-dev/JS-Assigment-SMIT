// var multiArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// document.write("<h1>" + multiArray)

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
