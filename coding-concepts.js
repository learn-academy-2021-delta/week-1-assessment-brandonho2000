// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.length)

// a) Your answer: give the length of the words within the quotation marks which i believe the answer to be 10
// b) Verify and explain: the log came out to 10, because the .length counts how many letters that is specified in the quotes.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer:3
// b) Verify and explain:the correct answer is l because it is pulling the third letter in the string, not the index of the string.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain:ruby, because it is indexing the 1st item on the array. index's start at 0.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it will log the array but in cappital letters
// b) Verify and explain:i got an error messege stating that TypeError: weekendDays.toUpperCase is not a function



// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: i think it will log numbers because the typeof prefix is asking what is the type of data type will come from a .length attribute.
// b) Verify and explain:Number. i think i was correct in the fact that it was asking for the type of data type will come from a .length command.
