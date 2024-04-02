// --1--

var firstName = prompt("Plz enter your first name");
var lastName = prompt("Plz enter your last name");
var fullName = (firstName + ` ` + lastName);
document.write(`<h1>` + `Your fullname is ${fullName}<br>`)


// --2--

var userMobile = prompt("plz enter your favorite phpne brand")

document.write(`Your favorite phone brand is ${userMobile}<br>`)
document.write(`String length is ${userMobile.length}<br>`)

// --3--

var index = "pakistani"
var wordIndex = index.indexOf('n')
console.log(wordIndex)

document.write("Word of " + index + "<br>")
document.write("Index of word 'n' is " + wordIndex + "<br>")

// --4--

var helloWord = "hello world"
var checkIndex = helloWord.lastIndexOf('l')
console.log(checkIndex)

document.write(`word of ${helloWord}<br>`)
document.write(`Last index of ${checkIndex}<br>`)

// --5--

var country = "pakistani"
var indexNumber = country.charAt(3)
console.log(indexNumber)
document.write(`Word of ${country}<br>`)
document.write(`Character index 3 ${indexNumber}<br>`)

var newName = firstName.concat(lastName)
document.write(`Fullname using concate method ${newName}<br>`)

