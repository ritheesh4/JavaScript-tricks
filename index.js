// 1. Ternary operator
const age = 10;

age > 50
  ? age > 70
    ? console.log("You are getting really old")
    : console.log("You are between 30 and 59")
  : console.log("You are below 30");

// 2. Require function parameters

const isRequired = () => {
  throw new Error("param is required");
};

const hello = (name = isRequired()) => {
  console.log(`hello ${name}`);
};

// This will throw an error because no name is provided
hello();

// This will also throw an error
hello(undefined);

// These are good!
hello(null);
hello("David");


// Type conversion

let int = "15";
int = +int;console.log(int); // Result: 15
console.log(typeof int); 

// Quick float to integer conversion. Without usin Math.ceil() or Math.round().

console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23

// Remove Final Digits
let str = "1553"; 
Number(str.substring(0, str.length - 1)); // Instead of using this, below method can be used.

console.log(1553 / 10   | 0)  // Result: 155
console.log(1553 / 100  | 0)  // Result: 15
console.log(1553 / 1000 | 0)  // Result: 1

// Easiest way to remove last elements from array or truncate an array without using splice().

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;console.log(array); // Result: [0, 1, 2, 3];

// If speed is more important to t remove the array elements use splice
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);console.log(array); // Result: [0, 1, 2, 3]


// Easiest way to get the last elements in an array

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]