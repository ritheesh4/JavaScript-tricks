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

// 37. Set property with letiable

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

// https://www.kirupa.com/html5/css_letiables_js_win.htm

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

// letious values to Boolean with double exclamation
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

// letious values to Boolean with double exclamation
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

//62. Cache letiables
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

//64. Clone an Object
// deep clone an object
let newObj = JSON.parse(JSON.stringify(obj));
// shallow clone an object
let newObj = Object.assign({}, obj);

//65. Comma operator
let x = 1;
x = (x++, x);
console.log(x);// expected output: 2
x = (2, 3);
console.log(x);
// expected output: 3

// 66. Swap values
let a = 1, b = 2
[a, b] = [b, a]
console.log(a) // -> 2
console.log(b) // -> 1

// 67. Get query string parameters
// Assuming "?post=1234&action=edit"
let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"

// 68. caculate the power
// The following expressions are equivalent:
Math.pow(2, n);
2 << (n - 1);
2**n;
// For example, 2 << 3 = 16 is equivalent to 2 ** 4 = 16 .

//69
// Instead, the bitwise OR operator allows us to write:
console.log(1553 / 10   | 0)  // Result: 155
console.log(1553 / 100  | 0)  // Result: 15
console.log(1553 / 1000 | 0)  // Result: 1

let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result: 3
console.log(0 && null); // Result: 0

let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result: 3
console.log(0 && null); // Result: 0

//70 parameter validation
const isRequired = () => { throw new Error('param is required'); };
const print = (num = isRequired()) => { console.log(`printing ${num}`) };
print(2);//printing 2
print()// error
print(null)//printing null

//71. Promises

const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error('Something went wrong'))];
Promise.all(PromiseArray)
.then(data => console.log('all resolved! here are the resolve values:', data))
.catch(err => console.log('got rejected! reason:', err))

// 72. Quick powers
// The following expressions are equivalent:
Math.pow(2, n);
2 << (n - 1);
2**n;

// 73. Shuffle elements in an array
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(list.sort(function() {
    return Math.random() - 0.5
})); 
// [4, 8, 2, 9, 1, 3, 6, 5, 7]

// 74. merge objects
const person = { name: 'David Walsh', gender: 'Male' };
const tools = { computer: 'Mac', editor: 'Atom' };
const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };

const summary = {...person, ...tools, ...attributes};

// 75. required parameter
const isRequired = () => { throw new Error('param is required'); };

const hello = (name = isRequired()) => { console.log(`hello ${name}`) };

// This will throw an error because no name is provided
hello();

// This will also throw an error
hello(undefined);

// These are good!
hello(null);

// 76. Short circuit evaluation
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100-200') : 'Below 100';

// 77. Generate random set of alphanumeric characters
function generateRandomAlphaNum(len) {
  let rdmString = "";
  for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
  return  rdmString.substr(0, len);

}

// 78. change all images
Array.prototype.slice.call(
  document.querySelectorAll('img')).map(function(tag){
    tag.src = 'http://bit.ly/2okYTfn';
});

// 79. Set a booby trap with setTimeout
setTimeout(function(){
  document.onmousemove = document.onkeypress = 
  function(){
      document.body.style['transition'] = 'transform 3s';
      document.body.style['transform'] = 'rotate(180deg)';
  }
 }, 5000);

 // 80. Append one array to another
 let array1 = [12 , "foo" , {name: "Joe"} , -2458];

let array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2);
/* array1 will be equal to  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */

// 81. Check given argument is an array or not
function isArray(obj){
  return Object.prototype.toString.call(obj) === '[object Array]' ;
}

// 82. let  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
let maxInNumbers = Math.max.apply(Math, numbers); 
let minInNumbers = Math.min.apply(Math, numbers);

// 83. URL access
// JavaScript can access the current URL in parts. For this URL:
`https://thatsanegg.com/example/index.html?s=article`
window.location.protocol == `https:`
window.location.host == `thatsanegg.com`
window.location.pathname == `/example/index.html`
window.location.search == `?s=article`

// 84. Rounding numbers
let n = 3.141592653;
n = n.toFixed(3); // computes n = "3.142"

// 85. Set timeouts to XMLHttp
let xhr = new XMLHttpRequest (); 
xhr.onreadystatechange = function () {  
    if (this.readyState == 4) {  
        clearTimeout(timeout);  
        // do something with response data 
    }  
}  
let timeout = setTimeout( function () {  
    xhr.abort(); // call error callback  
}, 60*1000 /* timeout after a minute */ ); 
xhr.open('GET', url, true);  

xhr.send();

// 86 Clone an object
// deep clone an object
let newObj = JSON.parse(JSON.stringify(obj));
// shallow clone an object
let newObj = Object.assign({}, obj); 

// 87. Generate array of numbers with a limit
let numbersArray = [] , max = 100;
for( let i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100] 

// 88. String trim funciton
String.prototype.trim = function(){return this.replace(/^s+|s+$/g, "");};  

// 89. Transform argument objects into array 
let argArray = Array.prototype.slice.call(arguments);

//90. Verify given argumnet is a number
function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//91. Verify given argument is an array
function isArray(obj){
  return Object.prototype.toString.call(obj) === '[object Array]' ;
}

// 92. Convert javscript array into csv
let fruits = ['apple', 'peaches', 'oranges', 'mangoes'];
 
let  str = fruits.valueOf();
 
//print str: apple,peaches,oranges,mangoes
let fruits = ['apple', 'peaches', 'oranges', 'mangoes'];
 
let str = fruits.join("|");
 
//print str: apple|peaches|oranges|mangoes

// 93. Convert CSV to array in javascript
let str = "apple, peaches, oranges, mangoes";
 
let  fruitsArray = str.split(",");

// 94. Remove array element by index
function removeByIndex(arr, index) {
    arr.splice(index, 1);
}

test = new Array();
test[0] = 'Apple';
test[1] = 'Ball';
test[2] = 'Cat';
test[3] = 'Dog';

alert("Array before removing elements: "+test);

removeByIndex(test, 2);

alert("Array after removing elements: "+test);

// 95. Calling javascript function from string
let strFun = "someFunction"; //Name of the function to be called
let strParam = "this is the parameter"; //Parameters to be passed in function
 
//Create the function
let fn = window[strFun];
 
//Call the function
fn(strParam);

// 96. remove duplicates from javscript array
function removeDuplicates(arr) {
	let temp = {};
	for (let i = 0; i < arr.length; i++)
		temp[arr[i]] = true;

	let r = [];
	for (let k in temp)
		r.push(k);
	return r;
}

//Usage
let fruits = ['apple', 'orange', 'peach', 'apple', 'strawberry', 'orange'];
let uniquefruits = removeDuplicates(fruits);
//print uniquefruits ['apple', 'orange', 'peach', 'strawberry'];

//97. Create empty obejct

let dict = Object.create(null);

// dict.__proto__ === "undefined"
// No object properties exist until you add them

//98. Query string parameters
let urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"

//99. Destructuring assignments
const person = {
    name: 'Tracie',
    age: 26,
}
const name = person.name
const age = person.age
//with destructuring
const { name, age } = person;

// 100. Short circuit conditionals
if (isValid){
  gotoLogin();
}
//use this:
isValid && gotoLogin();

// 101. Rouding numbers
let n = 3.141592653;
n = n.toFixed(3); // computes n = "3.142"

// 102. Immediate invoke function
(function () {
 // Do fun stuff
 }
)()

//103. Flattening multidimensional arrays
const arr = [11, [22, 33], [44, 55], 66];
const flatArr = [].concat(...arr); //=> [11, 22, 33, 44, 55, 66]

//104. Flattening array more than two dimension
function flattenArray(arr) {  const flattened = [].concat(...arr);  return flattened.some(item => Array.isArray(item)) ?     flattenArray(flattened) : flattened;}

//105. Stringify a function
const func = () => {
  console.log("This is a function");
}
const stringifiedFunc = `${func}`; /* `() => {
  console.log("This is a function");
}` */

// 
// 106. Callable objects
const func = () => {
  // ...
};
func.prop = "value";
console.log(func.prop); // "value"

// Lexically-bound class methods
class Example {
  method() {
    console.log(this);
  }
}

const instance = new Example();
const { method } = instance;

method(); // undefined

//107. Return from constructor
// ...
const cache = {};

class Node {
  constructor(config) {
    const id = hash(`${config}`);

    if (cache[id]) {
      return cache[id];
    } else {
      cache[id] = this;
      config();
    }
  }
}

const node = new Node(() => {});
const nodeReference = new Node(() => {});
const secondNode = new Node(() => {
  console.log("Hello");
});

console.log(node === nodeReference, node === secondNode); // true, false

//108. Startws With() and ends With()
const image ='hill-mountain.png';
const validImage = image.endsWith('.png');
// result: true

const hillMountain = 'Hill Mountain';
const startsWith = hillMountain.startsWith('Hill');
// result: true

//109. entires() method
//The entries() method returns a new Array Iterator object that contains the key/ value pairs for each index in the array
const arr = ['a', 'b', 'c']
const iterator = arr.entries()
console.log(iterator.next().value) 
// Result: Array [0, "a"]
console.log(iterator.next().value)
//Result: Array [1, 'b']

//110. Javascript some and every functions
const moneyHeist = [
{name : 'Denvar', age: '25'},
{name : 'Oslo', age: '40'},
{name : 'Tokyo', age: '17'}
]

moneyHeist.every(el => el.age > 18)
//return  false

moneyHiest.some(el => el.age < 18 )
//return true

//111. Array replacer by json
const user = {
'username': 'helperscripter',
'email': 'help@helperscript.com',
'password': 'yourpassword'
}

const userString = JSON.stirngify(user, ['username', 'email']);
//result: 
// {
// 'username': 'helperscripter',
// 'email': 'help@helperscript.com'
// }


//112. Finally method

//113. Short circuting
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100-200') : 'Below 100';

// Avoid negative indexes
let numbersArray = [1,2,3,4,5]; 
let from = numbersArray.indexOf("foo") ;  // from is equal to -1 
numbersArray.splice(from,2);    // will return [5]