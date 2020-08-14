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

//3. Type conversion

let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int);

//4. Quick float to integer conversion. Without usin Math.ceil() or Math.round().

console.log(23.9 | 0); // Result: 23
console.log(-23.9 | 0); // Result: -23

//5.  Remove Final Digits
let str = "1553";
Number(str.substring(0, str.length - 1)); // Instead of using this, below method can be used.

console.log((1553 / 10) | 0); // Result: 155
console.log((1553 / 100) | 0); // Result: 15
console.log((1553 / 1000) | 0); // Result: 1

//6. Easiest way to remove last elements from array or truncate an array without using splice().

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3];

//7. If speed is more important to t remove the array elements use splice
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
console.log(array); // Result: [0, 1, 2, 3]

//8. Easiest way to get the last elements in an array

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]

//9. Merge array elements
const person = { name: "David Walsh", gender: "Male" };
const tools = { computer: "Mac", editor: "Atom" };
const attributes = { handsomeness: "Extreme", hair: "Brown", eyes: "Blue" };

const summary = { ...person, ...tools, ...attributes };

//10. Self calling function
(function () {
  // some private code that will be executed automatically
})();
(function (a, b) {
  let result = a + b;
  return result;
})(10, 20);

//11. FIlter unique values
// The Set object type was introduced in ES6, and along with ..., the ‘spread’ operator, we can use it to create a new array with only the unique values.

const array = [1, 1, 2, 3, 5, 5, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Result: [1, 2, 3, 5]

// Before ES6, isolating unique values would involve a lot more code than that!
// This trick works for arrays containing primitive types: undefined, null, boolean, string and number . (If you had an array containing objects, functions or additional arrays, you’d need a different approach!)

//12. Float to Integer

console.log(23.9 | 0); // Result: 23
console.log(-23.9 | 0); // Result: -23

//13. Last items in an array
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]

//14. Easier way to fitler out the falsy values from an array
myArray.filter(Boolean);

//15. Merge several objects together
const user = {
  name: "John Ludwig",
  gender: "Male",
};
const college = {
  primary: "Mani Primary School",
  secondary: "Lass Secondary School",
};
const skills = {
  programming: "Extreme",
  swimming: "Average",
  sleeping: "Pro",
};
const summary = { ...user, ...college, ...skills };

//16. Property names can be dynamic.
const dynamic = "color";
let item = {
  brand: "Ford",
  [dynamic]: "Blue",
};
console.log(item);
// { brand: "Ford", color: "Blue" }

//17. Shortening console.log()
let cl = console.log.bind(document);
cl("hi"); // hi

//18. Clone an Object
// deep clone an object
let newObj = JSON.parse(JSON.stringify(obj));
// shallow clone an object
let newObj = Object.assign({}, obj);

//19. Get an Array of all the links in the document.
let allLinks = document.links;

//20. Methods for Navigating the DOM Tree:
ele.parentNode; // find the parent of ele
ele.firstChild; // find the first child node of ele
ele.nextSibling; // find the next sibling of ele
ele.previousSibling; //find the previous sibling of ele

//21. Methods for Removal from the DOM Tree:
ele.replaceChild(x, y); //replace child x of ele with node y
ele.removeChild(x); // remove child x of ele

//22. Methods to Copy Nodes:
ele.cloneNode(false); // clone just the node (shallow copy)
ele.cloneNode(true); // clone the node and its children (deep copy)
ele.importNode(node); // import a node into ele

//23. Methods for General Information:
ele.nodeName; // returns the name attribute or DOM name
ele.nodeType; // returns a number a.e. 3 is Text, 8 is comment
ele.hasChildNodes(); // returns boolean if has children
ele.childNodes; // returns live node list of children
ele.textContent; // gets text of ele if exists
ele.nodeValue; // tends to work the same as textContent
ele.contains(x); // returns true or false if ele contains x

//24. Sort Number arrays
[0, 10, 4, 9, 123, 54, 1].sort((a, b) => a - b); //[0, 1, 4, 9, 10, 54, 123]

//25 Append an array to another array
let array1 = [12, "foo", { name: "Joe" }, -2458];

let array2 = ["Doe", 555, 100];
Array.prototype.push.apply(array1, array2);
/* array1 will be equal to  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */

//26. Easy way to remove falsy values from an array
myArray.filter(Boolean);

//27. To convert NodeList into an array
let elements = document.querySelectorAll("p"); // NodeList
let arrayElements = [].slice.call(elements); // Now the NodeList is an array

let arrayElements = Array.from(elements); // This is another way of converting NodeList to Array


let urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"