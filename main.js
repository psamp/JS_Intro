var givenName;
// Q: What does `givenName` equal right now?
// A: Nothing.

givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: The string, "Tim".

givenName = "JD";
// Q: What is `givenName` set to right now?
// A: The string, "JD".

var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: The string, "Hello, how are you?"


var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: high - low, or 50 - 10.


math = high - "5";
// Q: What is `math` set to?
// A: Math is set to high - string "5," or 50 - 5.


// Create a variable to calculate Tim's age
// The answer should read "Tim is 31 years old"
var born = 1983;
var today = 2015;

var age = today - born;

var age = age - 1;

var dob;

var dob = "Tim is " + age + " years old.";

console.log(dob);

// Store some information following in variables.
var yourName;
var instructorName;

yourName = "Princess";
instructorName = "Tim and JD";

var statement = yourName + " is taking a class at The Iron Yard, her instructors' names are " + instructorName + ".";
console.log(statement);