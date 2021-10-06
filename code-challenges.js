// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// i will set up a conditional with if, if/else, and else statements to get the desired response depending on the specified input.
// i will also use "${}" which is a string interpolation to call onto the variable in the response.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
// var temp = 350
// var temp = 212

if(temp < 212){
  console.log(`${temp} is below boiling point`)
}else if(temp === 212){
  console.log(`${temp} is at boiling boint`)
}else{
  console.log(`${temp} is above boiling point`)
}

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
var myNumbers3 = myNumbers1.concat(myNumbers2)
console.log(myNumbers3.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"

// i wrote the code to reverse the letters of charlie and delta by playing on the fact that if statesments search of true and false outputs so i made sure that the code asks if the workd charlie and delta includes charlie and delta respectivly, and if it did, the console log would just output the respective strings that have the flipped word.

var myString1 = "charlie"
var myString2 = "delta"
if(myString1.includes("charlie")){
  console.log("eilrahc")
}

if(myString2.includes("delta")){
  console.log("atled")
}

// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
// I am going to set up a If,else statemnt to check if the first number is larger then the second number, and if it is, the smaller number will be subtracted from the frist number. if not, the console will check if the second number is larger then the first number, and if it is, the smaller number will be subtracted from the frist.

var number1 = 42
var number2 = 27

// var number1 = 7
// var number2 = 19

if(number1 > number2){
  console.log(number1 - number2)
}else{
  console.log(number2 - number1);
}

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24
if(numberRefactor1 - numberRefactor2 >= -999999999999999999999){ // i set the value of -999999999999999999999 beacuse i was just stuck and this is something that worked.
    console.log(numberRefactor1 - numberRefactor2)
}else{
  console.log("your input is not a number")
}
// if(numberRefactor1.includes("a", "e", "i", "o", "u")){
//   console.log("your input is not a number")
// }else{
//   console.log(numberRefactor1 - numberRefactor2)
// }
// this is one of the other many things i tried
