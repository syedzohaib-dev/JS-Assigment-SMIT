// // --1--

// var firstName = prompt("Plz enter your first name");
// var lastName = prompt("Plz enter your last name");
// var fullName = (firstName + ` ` + lastName);
// document.write(`<h1>` + `Your fullname is ${fullName}<br>`)


// // --2--

// var userMobile = prompt("plz enter your favorite phpne brand")

// document.write(`Your favorite phone brand is ${userMobile}<br>`)
// document.write(`String length is ${userMobile.length}<br>`)

// // --3--

// var index = "pakistani"
// var wordIndex = index.indexOf('n')
// console.log(wordIndex)

// document.write("Word of " + index + "<br>")
// document.write("Index of word 'n' is " + wordIndex + "<br>")

// // --4--

// var helloWord = "hello world"
// var checkIndex = helloWord.lastIndexOf('l')
// console.log(checkIndex)

// document.write(`word of ${helloWord}<br>`)
// document.write(`Last index of ${checkIndex}<br>`)

// // --5--

// var country = "pakistani"
// var indexNumber = country.charAt(3)
// console.log(indexNumber)
// document.write(`Word of ${country}<br>`)
// document.write(`Character index 3 ${indexNumber}<br>`)

// // --6--

// var newName = firstName.concat(lastName)
// document.write(`Fullname using concate method ${newName}<br>`)

// // --7--

// var cityReplace = "Hayderabad"
// var replace = cityReplace.replace("Hayder", "Islam")

// document.write(`City ${cityReplace}<br>`)
// document.write(`After replacement ${replace}<br>`)

// // --8--

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var changes = message.replace(/and/g, "&")
// console.log(changes)
// document.write("Before message " + message + "<br>")
// document.write("After message " + changes + "<br>")


// // --9--

// var value = "840"
// var convertToNumber = parseInt(value)

// document.write(`value: ${value}<br>`)
// document.write(`Type: ${typeof (value)}<br>`)
// document.write(`value: ${convertToNumber}<br>`)
// document.write(`Type: ${typeof (convertToNumber)}<br>`)

// // --10--

// var smallInput = prompt("Plz enter your item")
// var capital = smallInput.toUpperCase()

// document.write("User input " + smallInput + "<br>")
// document.write("Upper case " + capital + "<br>")

// // --11--

// var titleInput = prompt("plz enter a word for title")
// var titleAnswer = titleInput.charAt(0).toUpperCase() + titleInput.substr(1).toLowerCase();
// console.log(titleAnswer)
// document.write(`User Input ${titleInput}<br>`)
// document.write(`Title case ${titleAnswer}<br>`)

// // --12--

// var number = 12.43
// var numToStr = number.toString().replace(".", "")
// console.log(numToStr)
// document.write(`Number ${number}<br>`)
// document.write(`Result ${numToStr}<br>`)

// // --13--

// var specialUser = prompt("Plz enter username")
// var specialSymbol = ["!", ",", ".", "@"]
// var checkCondition = false

// for (var i = 0; i < specialSymbol.length; i++) {
//     if (specialUser.includes(specialSymbol[i])) {
//         alert("incorrect username")
//         checkCondition = true
//         break;
//     }
// }
// if (checkCondition === false) {
//     alert, ("correct")
// }

// // --14--

// var bakery = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties']
// var userInter = prompt("Wellcome to our bakery what do you want")

// var checkItem = false

// for (var i = 0; i <= bakery.length; i++) {
//     if (userInter.toLowerCase() == bakery[i]) {
//         document.write(userInter + ' is available at index ' + bakery.indexOf(userInter))
//         checkItem = true
//     }
// }
// if (checkItem === false) {
//     document.write(`We are sorry ${userInter} is not available`)
// }

// --15--

var userPassword = prompt("Plz enter a valid password")
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphabet = /[a-zA-Z]/
var passwordCondition = false

for (var i = 0; i < nums.length; i++) {
    if (userPassword >= 6 || userPassword.charAt(0) != nums[i]) {
        alert("yes")
        passwordCondition = true
        break;
    }

}
if (passwordCondition === false) {
    alert("no")
}

// --16--

var uni = ('Universty Of Karachi')
var uniArray = uni.split("")

for (var i = 0; i < uniArray.length; i++) {
    document.write("<h1>" + uniArray[i] + "<br>")
}

// --17--

var userCountry = prompt("plz enter your country")
var checkLastWord = userCountry.charAt(userCountry.length - 1)

document.write(`User input ${userCountry}<br>`)
document.write(`Last word ${checkLastWord}<br>`)

// console.log(checkLastWord)

// --18--



var foxy = ("The quick brown fox jumps over the lazy dog")

var lower = foxy.toLowerCase()

var word = lower.split(" ")

var count = 0

for (var i = 0; i < word.length; i++) {
    if (word[i] === 'the') {
        count++
    }
}
console.log(count)
document.write(foxy + "<br>")
document.write("Word the in sentence is " + count + "<br>")





