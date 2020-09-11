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

console.log(urlParams.has("post")); // true
console.log(urlParams.get("action")); // "edit"
console.log(urlParams.getAll("action")); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append("active", "1")); // "?post=1234&action=edit&active=1"

//28. Convert to boolean
const isTrue = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"

//29. await multiple async functions to finish by using Promise.all
await Promise.all([anAsyncCall(), thisIsAlsoAsync(), oneMore()]);

//30. Convert to nubmer
let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int);
Result: "number";

//31. Random number generation
//random number from 1 to N
let random = Math.floor(Math.random() * N + 1);

//random number from 1 to 10
let random = Math.floor(Math.random() * 10 + 1);

//random number from 1 to 100
let random = Math.floor(Math.random() * 100 + 1);

//32. Extract unique values
let entries = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1];
let unique_entries = [...new Set(entries)];
console.log(unique_entries);
// [1, 2, 3, 4, 5, 6, 7, 8]

//33. Remove final numbers
let str = "1553";
Number(str.substring(0, str.length - 1));

//34. Stringify a function
const func = () => {
  console.log("This is a function");
};
const stringifiedFunc = `${func}`; /* `() => {
  console.log("This is a function");
}` */

// 35. callable objects
const func = () => {
  // ...
};
func.prop = "value";
console.log(func.prop); // "value"

//36. Lexically- bound class methods
class Example {
  method() {
    console.log(this);
  }
}

const instance = new Example();
const { method } = instance;

method(); // undefined

// 37. Set property with variable

//CSS
// :root {
//   --logoColor: "#333";
//   --headerColor: "green";
//   --avatarWidth: 150px;
// }
myLogo.style.setProperty("--logoColor", "#505168");

// 38. Set up comple values

//CSS
// #myCircle {
//   --xPos: 0px;
//   --yPos: 0px;

//   width: 100px;
//   height: 100px;
//   transform: translate3d(let(--xPos), let(--yPos), 0);
// }

let myCircle = document.querySelector("#myCircle");
setTranslate(50, 75, myCircle);

function setTranslate(xPos, yPos, el) {
  el.style.setProperty("--xPos", xPos + "px");
  el.style.setProperty("--yPos", yPos + "px");
}

// https://www.kirupa.com/html5/css_variables_js_win.htm

// 39. Type coercion/conversion/casting

// String to Number by prepending with plus sign
const strNum = "123.456";
console.log(strNum); // '123.456'
console.log(+strNum); // 123.456
console.log(typeof strNum); // string
console.log(typeof +strNum); // number

// Number to String by adding empty string
const num = 123.456;
console.log(num); // 123.456
console.log("" + num); // '123.456'
console.log(num + ""); // '123.456'
console.log(typeof num); // number
console.log(typeof "" + num); // string

// Boolean to Number by prepending with plus sign
console.log(true); // true
console.log(+true); // 1
console.log(false); // false
console.log(+false); // 0

// Various values to Boolean with double exclamation
console.log(!!1); // true
console.log(!!0); // false
console.log(!!"hello"); // true
console.log(!!""); // false
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!undefined); // false
console.log(!!NaN); // false
console.log(!!null); // false

// Date to Milliseconds by prepending with plus sign
const someDate = new Date();
console.log(typeof someDate); // object
console.log(typeof +someDate); // number

// 40. Flatterning multidimensional arrays
const arr = [11, [22, 33], [44, 55], 66];
const flatArr = [].concat(...arr); // => [11,22,33,44,55,66]

// 50. Map the array without the array.map method

const cities = [
  { name: 'Paris', visited: 'no' },
  { name: 'Lyon', visited: 'no' },
  { name: 'Marseille', visited: 'yes' },
  { name: 'Rome', visited: 'yes' },
  { name: 'Milan', visited: 'no' },
  { name: 'Palermo', visited: 'yes' },
  { name: 'Genoa', visited: 'yes' },
  { name: 'Berlin', visited: 'no' },
  { name: 'Hamburg', visited: 'yes' },
  { name: 'New York', visited: 'yes' }
];

const cityNames = Array.from(cities,({names})=> name);
console.log(cityNames);
// outputs ["Paris", "Lyon", "Marseille", "Rome", "Milan", "Palermo", "Genoa", "Berlin", "Hamburg", "New York"]

//51. So other truthy
console.log(0 && {a: 1}) // 0console.log(false && 'a') // falseconsole.log('2' && 5) // 5console.log([] || false) // []console.log(NaN || null) // nullconsole.log(true || 'a') // true

// 52. THe not not !! oeprator

if (foo === undefined || foo === null ) {}
if (foo.length === 0){}

if (!! foo){}

// 53. Self calling function
(function(){
  // some private code that will be executed automatically
})();  
(function(a,b){
  let result = a+b;
  return result;
})(10,20)


//54. Query string paramerters

// Assuming "?post=1234&action=edit"

let urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"

// Various values to Boolean with double exclamation
console.log(!!1); // true
console.log(!!0); // false
console.log(!!"hello"); // true
console.log(!!""); // false
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!undefined); // false
console.log(!!NaN); // false
console.log(!!null); // false


//55. Extract unique values
let entries = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1];
let unique_entries = [...new Set(entries)];
console.log(unique_entries);
// [1, 2, 3, 4, 5, 6, 7, 8]


//56. To convert NodeList into an array
let elements = document.querySelectorAll("p"); // NodeList
let arrayElements = [].slice.call(elements); // Now the NodeList is an array

let arrayElements = Array.from(elements); // This is another way of converting NodeList to Array

let urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has("post")); // true
console.log(urlParams.get("action")); // "edit"
console.log(urlParams.getAll("action")); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append("active", "1")); // "?post=1234&action=edit&active=1"

//57. Convert to nubmer
let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int);
Result: "number";

//58. Access current location
// JavaScript can access the current URL in parts. For this URL:
`https://thatsanegg.com/example/index.html?s=article`
window.location.protocol == `https:`
window.location.host == `thatsanegg.com`
window.location.pathname == `/example/index.html`
window.location.search == `?s=article`

//59 Destructuring assignments
const object = { number: 10 };
// Grabbing number
const { number } = object;
// Grabbing number and renaming it as otherNumber
const { number: otherNumber } = object;
console.log(otherNumber); //10

//60. Methods for General Information:
ele.nodeName; // returns the name attribute or DOM name
ele.nodeType; // returns a number a.e. 3 is Text, 8 is comment
ele.hasChildNodes(); // returns boolean if has children
ele.childNodes; // returns live node list of children
ele.textContent; // gets text of ele if exists
ele.nodeValue; // tends to work the same as textContent
ele.contains(x); // returns true or false if ele contains x

//61. If speed is more important to t remove the array elements use splice
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
console.log(array); // Result: [0, 1, 2, 3]

//62. Dynamic object keys
const obj = {
  name: "Austin",
  language: "JavaScript"
}

let key = "name"

console.log(obj.name) // Austin
console.log(obj["name"]) // Austin
key = "name"
console.log(obj[key]) // Austin

console.log(obj.language) // JavaScript
console.log(obj["language"]) // JavaScript
key = "language"

// Number to String by adding empty string
const num = 123.456;
console.log(num); // 123.456
console.log("" + num); // '123.456'
console.log(num + ""); // '123.456'
console.log(typeof num); // number
console.log(typeof "" + num); // string

//62. Cache variables
let cached = document.getElementById('someElement');
cached.addClass('cached-element');

//63 shuffle array elements
let list = [1, 2, 3];
console.log(list.sort(function() {
    return Math.random() - 0.5
})); // [2,1,3]

//64. Dynamic object keys
const obj = {
  name: "Austin",
  language: "JavaScript"
}

let key = "name"