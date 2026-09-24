// ==========================================
// 🔥 JAVASCRIPT MASTER CODING CHEAT SHEET
// ==========================================

// ==========================================
// 1. Variables
// ==========================================

// Q - var, let, const difference explain karo & code likho
// var is function scoped or globally scoped, can be re-declared and updated.
// let is block scoped, cannot be re-declared but can be updated.
// const is block scoped, cannot be re-declared or updated.

// var declaration example
var nameVar = "Bijay";
console.log(nameVar); 

// let declaration
let ageLet = 22;
console.log(ageLet);

// const declaration
const isStudent = true;
console.log(isStudent);

// variable reassignment
ageLet = 23; // allowed
// isStudent = false; // TypeError: Assignment to constant variable.

// const object ko modify karke dikhao
const user = { name: "Bijay", age: 22 };
user.age = 23; // Allowed! Because we are mutating the object properties, not reassigning the variable itself.
console.log(user);

// multiple variables declare karo
let a = 1, b = 2, c = 3;

// swapping without third variable
let x = 10, y = 20;
x = x + y; // x=30
y = x - y; // y=10
x = x - y; // x=20
console.log("Swapped:", x, y);

// swapping using destructuring
let p = 100, q = 200;
[p, q] = [q, p];
console.log("Swapped with destructuring:", p, q);


// ==========================================
// 2. Data Types
// ==========================================

// Coding
let name = "Bijay";
let age = 22;
let student = true;
let uninitializedVar;
let emptyValue = null;

// typeof se sabhi types check karo
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof student); // "boolean"
console.log(typeof uninitializedVar); // "undefined"
console.log(typeof 10n); // "bigint"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {}); // "object"

// typeof null explain karke code
console.log(typeof null); // "object"
// Explanation: This is a known bug in JavaScript from its early days. Null represents an intentional absence of any object value, but typeof incorrectly returns "object".

// primitive vs reference value example
// Primitive (copied by value)
let num1 = 10;
let num2 = num1;
num1 = 20;
console.log(num1, num2); // 20, 10

// Reference (copied by reference)
let obj1 = { val: 10 };
let obj2 = obj1;
obj1.val = 20;
console.log(obj1.val, obj2.val); // 20, 20 (both point to the same memory location)


// ==========================================
// 3. Operators
// ==========================================

// arithmetic operators
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1 (remainder)

// comparison operators
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// == vs ===
console.log(5 == "5"); // true (checks value only, does type coercion)
console.log(5 === "5"); // false (checks value and data type strictly)

// != vs !==
console.log(5 != "5"); // false 
console.log(5 !== "5"); // true (strict inequality)

// logical &&, ||, !
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// ternary operator
let isAdult = age >= 18 ? "Yes" : "No";

// nullish coalescing ?? (returns right side if left is null or undefined)
let username = null;
console.log(username ?? "Guest"); // "Guest"

// optional chaining ?. (safely access nested properties)
let person = { info: { address: "Delhi" } };
console.log(person?.info?.city); // undefined (does not throw error)

// exponentiation **
console.log(2 ** 3); // 8 (2 power 3)

// increment/decrement
let count = 0;
count++; // 1
count--; // 0

// Coding questions
// Check if age >= 18
let currentAge = 20;
console.log(currentAge >= 18 ? "Eligible" : "Not Eligible");

// Find largest of 3 numbers
let n1 = 10, n2 = 25, n3 = 15;
let largest = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);
console.log("Largest:", largest);

// Check even/odd
let numCheck = 7;
console.log(numCheck % 2 === 0 ? "Even" : "Odd");

// Check positive/negative
let val = -5;
console.log(val >= 0 ? "Positive" : "Negative");

// Use ternary to determine pass/fail
let marks = 45;
let result = marks >= 33 ? "Pass" : "Fail";
console.log(result);


// ==========================================
// 4. Conditions
// ==========================================

// if, else, else if, nested if
let temp = 30;
if (temp > 40) {
    console.log("Too Hot");
} else if (temp > 25) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}

// nested if
if (temp > 0) {
    if (temp === 30) {
        console.log("Exactly 30");
    }
}

// switch
let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}

// Coding:

// Even/odd using if-else
let e = 10;
if(e % 2 === 0) console.log("Even");
else console.log("Odd");

// Positive/negative
let p1 = -10;
if(p1 > 0) console.log("Positive");
else if (p1 < 0) console.log("Negative");
else console.log("Zero");

// Largest number
let a1 = 5, b1 = 10, c1 = 7;
if(a1 >= b1 && a1 >= c1) console.log(a1);
else if(b1 >= a1 && b1 >= c1) console.log(b1);
else console.log(c1);

// Grade calculator
let score = 85;
if(score >= 90) console.log("A");
else if(score >= 80) console.log("B");
else if(score >= 70) console.log("C");
else console.log("F");

// Login check
let userLoggedIn = true;
if(userLoggedIn) console.log("Welcome");
else console.log("Please Login");

// Age eligibility
let agePerson = 16;
if(agePerson >= 18) console.log("Can Vote");
else console.log("Cannot Vote");

// Leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// Vowel/consonant
let char = 'A'.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// Calculator using switch
let operator = '+';
let op1 = 10, op2 = 5;
switch(operator) {
    case '+': console.log(op1 + op2); break;
    case '-': console.log(op1 - op2); break;
    case '*': console.log(op1 * op2); break;
    case '/': console.log(op1 / op2); break;
    default: console.log("Invalid operator");
}

// ==========================================
// 5. Loops
// ==========================================

// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
let w = 1;
while(w <= 5) {
    console.log(w);
    w++;
}

// do...while
let dw = 1;
do {
    console.log(dw);
    dw++;
} while(dw <= 5);

// break and continue
for(let i=1; i<=5; i++) {
    if(i === 3) continue; // skips 3
    if(i === 5) break; // stops at 5
    console.log(i);
}

// Coding:

// Print 1–10
for(let i=1; i<=10; i++) console.log(i);

// Print 10–1
for(let i=10; i>=1; i--) console.log(i);

// Even numbers
for(let i=1; i<=10; i++) {
    if(i%2 === 0) console.log(i);
}

// Sum 1–100
let sum = 0;
for(let i=1; i<=100; i++) sum += i;
console.log("Sum:", sum);

// Multiplication table (e.g. 5)
for(let i=1; i<=10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}

// Factorial of 5
let fact = 1;
for(let i=1; i<=5; i++) fact *= i;
console.log("Factorial:", fact);

// Count digits
let digitNum = 12345;
let countD = 0;
while(digitNum > 0) {
    digitNum = Math.floor(digitNum / 10);
    countD++;
}
console.log("Digits:", countD);

// Reverse number
let revNum = 123;
let reversed = 0;
while(revNum > 0) {
    let remainder = revNum % 10;
    reversed = reversed * 10 + remainder;
    revNum = Math.floor(revNum / 10);
}
console.log("Reversed:", reversed);

// Fibonacci (first 10)
let f1 = 0, f2 = 1;
console.log(f1);
console.log(f2);
for(let i=3; i<=10; i++) {
    let next = f1 + f2;
    console.log(next);
    f1 = f2;
    f2 = next;
}

// Prime number check
let primeCheck = 7;
let isPrime = true;
if(primeCheck <= 1) isPrime = false;
for(let i=2; i<primeCheck; i++) {
    if(primeCheck % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(primeCheck + (isPrime ? " is Prime" : " is not Prime"));

// Prime numbers 1–100
for(let i=2; i<=100; i++) {
    let pFlag = true;
    for(let j=2; j<i; j++) {
        if(i % j === 0) {
            pFlag = false;
            break;
        }
    }
    if(pFlag) console.log(i);
}

// Pattern printing
// *
// **
// ***
for(let i=1; i<=3; i++) {
    let row = "";
    for(let j=1; j<=i; j++) {
        row += "*";
    }
    console.log(row);
}

// ==========================================
// 6. Functions
// ==========================================

// function declaration
function sayHello() {
    console.log("Hello from declaration");
}

// function expression
const sayHi = function() {
    console.log("Hi from expression");
};

// arrow function
const sayHey = () => console.log("Hey from arrow");

// parameters and arguments
function multiply(a, b) { // a, b are parameters
    return a * b;
}
console.log(multiply(2, 3)); // 2, 3 are arguments

// default parameters
function greetUser(name = "Guest") {
    console.log("Hello " + name);
}

// rest parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// callback function & higher-order function
function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

function calculate(a, b, operation) { // calculate is HOF, operation is callback
  return operation(a, b);
}
console.log(calculate(10, 5, add));


// ==========================================
// 7. Scope
// ==========================================

let globalVar = "I am global";

function scopeTest() {
    let functionVar = "I am function scoped";
    if (true) {
        let blockVar = "I am block scoped";
        var notBlockScoped = "I am var, so function scoped";
        const blockConst = "I am block scoped const";
    }
    // console.log(blockVar); // ReferenceError
    console.log(notBlockScoped); // Accessible here!
}

// Lexical Scope & var vs let scope example
var aVar = 10;
function testScope() {
  var bVar = 20;
  console.log(aVar); // 10 (accessible due to lexical scope)
  console.log(bVar); // 20
}
testScope();
// console.log(bVar); // ReferenceError: bVar is not defined outside


// ==========================================
// 8. Hoisting 🔥
// ==========================================
// Explain: Hoisting moves declarations to the top of the scope before execution.

console.log(h1); // undefined
var h1 = 10;
console.log(h1); // 10

// Internal working:
// var h1;
// console.log(h1);
// h1 = 10;

// console.log(h2); // ReferenceError: Cannot access 'h2' before initialization
let h2 = 10;

// console.log(h3); // ReferenceError
const h3 = 10;

// Function hoisting
sayHoistedHello(); // "Hello" works because function declarations are fully hoisted
function sayHoistedHello() {
  console.log("Hello");
}

// Function expression hoisting
// sayHoistedHi(); // TypeError: sayHoistedHi is not a function (it is undefined)
var sayHoistedHi = function () {
  console.log("Hello");
};


// ==========================================
// 9. Temporal Dead Zone
// ==========================================

// Explain: TDZ is the phase between the creation of a variable (let/const) and its initialization where it cannot be accessed.
// console.log(tdzLet); // ReferenceError due to TDZ
let tdzLet = 10;

// console.log(tdzConst); // ReferenceError due to TDZ
const tdzConst = 10;


// ==========================================
// 10. Closures 🔥🔥🔥
// ==========================================

// Explain: A function bundled together with its lexical environment (variables from outer scope).
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Private counter using closure
function createPrivateCounter() {
    let privateCount = 0;
    return {
        increment: function() { privateCount++; return privateCount; },
        decrement: function() { privateCount--; return privateCount; },
        getCount: function() { return privateCount; }
    };
}
const pCounter = createPrivateCounter();
console.log(pCounter.increment()); // 1


// ==========================================
// 11. IIFE (Immediately Invoked Function Expression)
// ==========================================

(function () {
  console.log("Hello from Normal IIFE");
})();

// Arrow IIFE
(() => {
  console.log("Hello from Arrow IIFE");
})();


// ==========================================
// 12. this
// ==========================================

const thisUser = {
  name: "Bijay",
  sayName() {
    // Normal function: 'this' refers to the object calling it
    console.log(this.name); // "Bijay"
  }
};
thisUser.sayName();

const thisUserArrow = {
  name: "Bijay",
  sayName: () => {
    // Arrow function: 'this' refers to the surrounding lexical scope (window/global)
    console.log(this.name); // undefined
  }
};
thisUserArrow.sayName();


// ==========================================
// 13. call / apply / bind 🔥
// ==========================================

const callUser = { name: "Bijay" };

function greetWithAge(age) {
  console.log(this.name, age);
}

// call: passes arguments individually
greetWithAge.call(callUser, 22); // Bijay 22

// apply: passes arguments as an array
greetWithAge.apply(callUser, [22]); // Bijay 22

// bind: returns a new function with bound 'this'
const boundFn = greetWithAge.bind(callUser, 22);
boundFn(); // Bijay 22

// Borrow another object's method
const person1 = { name: "Rahul", greet: function() { console.log("Hi " + this.name); } };
const person2 = { name: "Rohan" };
person1.greet.call(person2); // Hi Rohan


// ==========================================
// 14. Arrays
// ==========================================

let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4] (Adds to end)
arr.pop(); // [1, 2, 3] (Removes from end)
arr.unshift(0); // [0, 1, 2, 3] (Adds to start)
arr.shift(); // [1, 2, 3] (Removes from start)

// slice: extracts part of array without modifying original
console.log(arr.slice(1, 3)); // [2, 3]

// splice: modifies original array (start, deleteCount, ...itemsToAdd)
arr.splice(1, 1, 99); // [1, 99, 3]

// concat
let arr2 = [4, 5];
console.log(arr.concat(arr2)); // [1, 99, 3, 4, 5]

// includes
console.log(arr.includes(99)); // true

// indexOf
console.log(arr.indexOf(3)); // 2

// find (returns first matching element)
console.log(arr.find(x => x > 50)); // 99

// findIndex
console.log(arr.findIndex(x => x > 50)); // 1

// some (returns true if at least one matches)
console.log(arr.some(x => x > 100)); // false

// every (returns true if ALL match)
console.log(arr.every(x => x > 0)); // true

// filter
console.log(arr.filter(x => x < 10)); // [1, 3]

// map
console.log(arr.map(x => x * 2)); // [2, 198, 6]

// reduce
console.log(arr.reduce((acc, curr) => acc + curr, 0)); // 103

// forEach
arr.forEach(x => console.log(x));

// sort (modifies original, sorts alphabetically by default)
let sortArr = [3, 1, 10, 2];
sortArr.sort((a, b) => a - b); // Ascending: [1, 2, 3, 10]

// reverse
sortArr.reverse(); // [10, 3, 2, 1]

// join
console.log(sortArr.join("-")); // "10-3-2-1"


// ==========================================
// 15. Array Coding Questions 🔥🔥
// ==========================================

let nums = [1, 5, 2, 10, 5, 8, -2, 12, 10];

// Find largest & smallest number
console.log("Largest:", Math.max(...nums));
console.log("Smallest:", Math.min(...nums));

// Sum array & Average
let sumArr = nums.reduce((a, b) => a + b, 0);
console.log("Sum:", sumArr, "Avg:", sumArr / nums.length);

// Reverse array manually
let revArr = [];
for(let i = nums.length - 1; i >= 0; i--) revArr.push(nums[i]);

// Remove duplicates
let uniqueNums = [...new Set(nums)];

// Find duplicate values
let duplicates = nums.filter((val, index, self) => self.indexOf(val) !== index);

// Count occurrences
let countOcc = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

// Find even / odd numbers
let evens = nums.filter(x => x % 2 === 0);
let odds = nums.filter(x => x % 2 !== 0);

// Convert array into string
console.log(nums.toString());

// map tasks
let doubled = nums.map(x => x * 2);
let squared = nums.map(x => x * x);
let namesArr = ["bijay", "rahul"];
console.log(namesArr.map(name => name.toUpperCase()));

let usersObj = [{name: "A", age: 20}, {name: "B", age: 25}];
let userNames = usersObj.map(user => user.name);
let addedProp = usersObj.map(user => ({...user, isActive: true}));

// filter tasks
let adults = usersObj.filter(user => user.age >= 18);
let expensiveProducts = [{price: 50}, {price: 150}].filter(p => p.price > 100);

// reduce tasks
let maxReduce = nums.reduce((max, curr) => curr > max ? curr : max, nums[0]);
let cart = [{price: 10}, {price: 20}];
let cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

// sort tasks
nums.sort((a, b) => a - b); // Ascending
nums.sort((a, b) => b - a); // Descending
usersObj.sort((a, b) => a.age - b.age); // Sort users by age

// ==========================================
// 16. Objects
// ==========================================

// create object
const objUser = {
  name: "Bijay",
  age: 22,
  "home address": "Delhi" // string key for spaces
};

// access property
console.log(objUser.name); // Dot notation
console.log(objUser["home address"]); // Bracket notation

// modify property
objUser.age = 23;

// delete property
delete objUser["home address"];

// nested object
const nestedUser = {
  name: "Bijay",
  address: {
    city: "Delhi",
    zip: "110001"
  }
};
console.log(nestedUser.address.city);

// dynamic / computed property
let keyName = "status";
const dynamicObj = {
  [keyName]: "Active"
};

// object destructuring
const { name: uName, age: uAge } = objUser; // renaming variables

// nested destructuring
const { address: { city: uCity } } = nestedUser;

// object spread
const updatedUser = { ...objUser, country: "India" };

// object rest
const { age: omittedAge, ...restProps } = updatedUser;
console.log(restProps); // contains name, country


// ==========================================
// 17. Object Methods 🔥
// ==========================================

const sampleObj = { a: 1, b: 2, c: 3 };

// Object.keys()
console.log(Object.keys(sampleObj)); // ["a", "b", "c"]

// Object.values()
console.log(Object.values(sampleObj)); // [1, 2, 3]

// Object.entries()
console.log(Object.entries(sampleObj)); // [["a",1], ["b",2], ["c",3]]

// Object.assign() - merge
const target = { x: 10 };
Object.assign(target, sampleObj); 

// Object.freeze() - no adding, modifying, deleting
const frozen = Object.freeze({ prop: 1 });
// frozen.prop = 2; // Fails silently (or error in strict mode)

// Object.seal() - no adding/deleting, but modifying IS allowed
const sealed = Object.seal({ prop: 1 });
sealed.prop = 2; // Works!

// convert object into array
let entriesArr = Object.entries(sampleObj);

// convert array into object
let backToObj = Object.fromEntries(entriesArr);

// loop through object
for(let key in sampleObj) {
  console.log(key, sampleObj[key]);
}

// count object properties
console.log(Object.keys(sampleObj).length);

// merge two objects
let merged = { ...objUser, ...sampleObj };

// clone object
let cloneObj = { ...sampleObj };


// ==========================================
// 18. Spread / Rest
// ==========================================

// Array spread
const arrA = [1, 2, 3];
const arrB = [...arrA, 4, 5];

// Object spread
const userA = { name: "Bijay" };
const userB = { ...userA, age: 22 };

// Rest
function sumRest(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


// ==========================================
// 19. Destructuring
// ==========================================

// Array destructuring
const [d1, d2, , d4] = [10, 20, 30, 40]; // skips 30

// Object destructuring
const { name: dName, age: dAge } = userB;

// Nested
const dUser = { address: { city: "Noida" } };
const { address: { city: destCity } } = dUser;

// Function parameters destructuring
function greetDest({ name, age }) {
  console.log(name, age);
}
greetDest({ name: "Bijay", age: 22 });


// ==========================================
// 20. String Coding
// ==========================================

let str = "Hello Javascript";

// reverse string
let revStr = str.split("").reverse().join("");

// palindrome check
let isPalindrome = (s) => s === s.split("").reverse().join("");

// count characters (excluding spaces)
let charCount = str.replace(/\s/g, "").length;

// count vowels
let vowelsCount = (str.match(/[aeiou]/gi) || []).length;

// remove spaces
let noSpaces = str.replaceAll(" ", "");

// capitalize first letter
let capFirst = str.charAt(0).toUpperCase() + str.slice(1);

// capitalize every word
let capEvery = str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

// check substring
console.log(str.includes("Java"));

// count occurrence of a char 'a'
let occCount = str.split("a").length - 1;

// remove duplicate characters
let uniqueChars = [...new Set(str)].join("");

// longest word
let longestWord = str.split(" ").reduce((longest, current) => current.length > longest.length ? current : longest, "");

// shortest word
let shortestWord = str.split(" ").reduce((shortest, current) => current.length < shortest.length ? current : shortest, str);

// Methods:
console.log(str.length);
console.log(str.charAt(0));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("a"));
console.log(str.slice(0, 5));
console.log(str.substring(0, 5));
console.log(str.split(" "));
console.log(str.replace("Hello", "Hi"));
console.log(str.trim()); // removes start/end spaces
console.log(str.startsWith("Hel"));
console.log(str.endsWith("pt"));


// ==========================================
// 21. Number Coding
// ==========================================

let numMethods = 5.67;
console.log(Math.floor(numMethods)); // 5
console.log(Math.ceil(numMethods)); // 6
console.log(Math.round(numMethods)); // 6
console.log(Math.random()); // between 0 and 1
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.abs(-10)); // 10
console.log(Math.pow(2, 3)); // 8

// Armstrong Number check (e.g., 153 = 1^3 + 5^3 + 3^3)
function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  let digits = num.toString().length;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += Math.pow(remainder, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

// Palindrome number
function isNumPalindrome(num) {
  let reversed = parseInt(num.toString().split("").reverse().join(""));
  return num === reversed;
}

// Sum digits
function sumOfDigits(num) {
  return num.toString().split("").reduce((sum, d) => sum + parseInt(d), 0);
}


// ==========================================
// 22. Date
// ==========================================

let now = new Date();
console.log(now); // current date & time
console.log(now.getDate()); // day of month (1-31)
console.log(now.getDay()); // day of week (0-6, 0 is Sunday)
console.log(now.getMonth()); // month (0-11, 0 is Jan)
console.log(now.getFullYear()); // year (e.g. 2024)
console.log(now.getTime()); // timestamp in ms since 1970

// calculate age
function calculateAge(dob) {
  let diff_ms = Date.now() - new Date(dob).getTime();
  let age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

// difference between two dates in days
let date1 = new Date("2024-01-01");
let date2 = new Date("2024-01-10");
let diffInDays = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log(diffInDays);


// ==========================================
// 23. JSON
// ==========================================

const jsonUser = { name: "Bijay", age: 22 };

// Convert Object to JSON String
const jsonString = JSON.stringify(jsonUser);
console.log(jsonString); // '{"name":"Bijay","age":22}'

// Convert JSON String to Object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "Bijay"


// ==========================================
// 24. DOM 🔥🔥🔥
// ==========================================

// Ensure you run this in browser console or script linked to HTML!
/*
// Selectors
const elId = document.getElementById("myId");
const elQuery = document.querySelector(".myClass"); // first match
const elQueryAll = document.querySelectorAll("div"); // all matches (NodeList)

// Manipulation
if (elId) {
    elId.textContent = "New Text"; // Change text
    elId.innerHTML = "<strong>Bold Text</strong>"; // HTML content
    elId.style.color = "red"; // Change color
    elId.style.backgroundColor = "yellow";
    
    // Classes
    elId.classList.add("active");
    elId.classList.remove("active");
    elId.classList.toggle("active");
}

// Create & Remove element
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";
document.body.appendChild(newDiv);
newDiv.remove();

// Add list item
const ul = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "Item 1";
ul.appendChild(li);
document.body.appendChild(ul);
*/

// Note: For complex UI like Modals, Accordions, Tabs, typically you toggle classes (like 'display: none' vs 'display: block') on click events.


// ==========================================
// 25. Events 🔥
// ==========================================

/*
const btn = document.querySelector("button");

// Click event
btn.addEventListener("click", (event) => {
  console.log("Button Clicked!");
  console.log(event.target); // Element that triggered the event
});

// Input event (e.g. textfield)
const inputEl = document.querySelector("input");
inputEl.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});

// Change event (triggers on blur or Enter)
inputEl.addEventListener("change", (e) => {
  console.log("Changed value:", e.target.value);
});

// Keyboard events
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") console.log("Enter key pressed!");
});
*/
// ==========================================
// 26. Event Delegation
// ==========================================

/*
// HTML:
// <div id="parent">
//   <button class="btn">Btn 1</button>
//   <button class="btn">Btn 2</button>
// </div>

document.getElementById("parent").addEventListener("click", (event) => {
  // Check if clicked element is a button
  if (event.target.classList.contains("btn")) {
    console.log("Button clicked:", event.target.textContent);
  }
});
// event.target is the actual element clicked (the button)
// event.currentTarget is the element the listener is attached to (the parent div)
*/

// ==========================================
// 27. Event Bubbling / Capturing
// ==========================================

/*
// Event Bubbling (Default - inside to outside)
document.querySelector("button").addEventListener("click", (e) => {
  console.log("Button Clicked");
  e.stopPropagation(); // Stops the event from bubbling up to the div
});

document.querySelector("div").addEventListener("click", () => {
  console.log("Div Clicked");
});

// Event Capturing / Trickling (Outside to inside)
document.querySelector("div").addEventListener("click", () => {
  console.log("Div Clicked (Capturing)");
}, true); // The 'true' enables capturing
*/


// ==========================================
// 28. Timers 🔥🔥🔥
// ==========================================

// setTimeout
const timeoutId = setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

// clearTimeout
clearTimeout(timeoutId); // Prevents the timeout from running

// setInterval
// const intervalId = setInterval(() => {
//   console.log("Repeating every 1 second");
// }, 1000);

// clearInterval
// clearInterval(intervalId); // Stops the interval

// Run function after 2 seconds
setTimeout(() => console.log("Done!"), 2000);

// Stop interval after 5 seconds
// let count = 0;
// const timer = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 5) clearInterval(timer);
// }, 1000);


// ==========================================
// 29. Callback Functions
// ==========================================

function greet(name, callback) {
  callback(name);
}

greet("Bijay", (name) => {
  console.log(name);
});

// Custom function with callback
function processData(data, callback) {
  let processed = data.toUpperCase();
  callback(processed);
}
processData("hello", (res) => console.log(res)); // HELLO


// ==========================================
// 30. Callback Hell
// ==========================================

// Concept: Deeply nested callbacks making code hard to read (Pyramid of Doom).
/*
getData(function(a){
    getMoreData(a, function(b){
        getMoreData(b, function(c){ 
            getMoreData(c, function(d){ 
                console.log(d);
            });
        });
    });
});
*/
// We fix this using Promises and async/await.


// ==========================================
// 31. Promises 🔥🔥🔥🔥
// ==========================================

// Basic Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // change to false to test reject
  if (success) {
    resolve("Success Data");
  } else {
    reject("Error Occurred");
  }
});

// then/catch/finally
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise finished (resolved or rejected)");
  });


// ==========================================
// 32. Promise Coding Tasks
// ==========================================

// Create resolved/rejected Promise
const resolvedProm = Promise.resolve("Done");
const rejectedProm = Promise.reject("Failed");

// Custom delay function
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
delay(2000).then(() => console.log("Resolved after 2 seconds"));

// Reject after 2 seconds
function delayReject(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Timeout Error"), ms);
  });
}

// Convert callback to Promise
function getDataPromisified() {
  return new Promise((resolve) => {
    // pretending it's an old callback API
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}


// ==========================================
// 33. Promise.all 🔥
// ==========================================

const p1 = Promise.resolve("P1");
const p2 = Promise.resolve("P2");
const p3 = Promise.resolve("P3");

// Waits for ALL to resolve. If ONE rejects, the whole Promise.all rejects immediately.
Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("Promise.all:", results); // ["P1", "P2", "P3"]
  })
  .catch(err => console.log(err));


// ==========================================
// 34. Promise.allSettled
// ==========================================

// Waits for all promises to settle (either resolve or reject). Never short-circuits.
Promise.allSettled([p1, Promise.reject("Error"), p3])
  .then((results) => {
    console.log("Promise.allSettled:", results);
    // [{status: "fulfilled", value: "P1"}, {status: "rejected", reason: "Error"}, ...]
  });


// ==========================================
// 35. Promise.race
// ==========================================

// Returns the FIRST promise to settle (either resolve OR reject).
Promise.race([
  delay(1000).then(() => "First"),
  delay(2000).then(() => "Second")
]).then(res => console.log("Promise.race:", res)); // "First"


// ==========================================
// 36. Promise.any
// ==========================================

// Returns the FIRST promise to RESOLVE. Ignores rejections unless ALL reject.
Promise.any([
  Promise.reject("Error 1"),
  delay(1000).then(() => "First Success"),
  delay(2000).then(() => "Second Success")
]).then(res => console.log("Promise.any:", res)); // "First Success"


// ==========================================
// 37. async / await 🔥🔥🔥🔥
// ==========================================

// Basic Fetch Example
async function getDataFetch() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log("Async/Await Data:", data.name);
  } catch (error) {
    console.log("Fetch Error:", error);
  }
}
getDataFetch();

// Parallel API calls using async/await and Promise.all
async function getMultipleData() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);
    const users = await usersRes.json();
    const posts = await postsRes.json();
    console.log(`Fetched ${users.length} users and ${posts.length} posts`);
  } catch(e) {
    console.log(e);
  }
}


// ==========================================
// 38. Fetch API 🔥
// ==========================================

/*
// GET Request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));

// POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
*/


// ==========================================
// 39. API Coding Questions (Concepts)
// ==========================================

// Concepts to practice visually:
// - Call API after button click -> document.querySelector('button').addEventListener('click', getData);
// - Call second API using first API's result:
/*
async function chainedAPIs() {
  const userRes = await fetch('/api/user');
  const user = await userRes.json();
  const postsRes = await fetch(`/api/posts?userId=${user.id}`); // Using user.id here
  const posts = await postsRes.json();
}
*/


// ==========================================
// 40. Event Loop 🔥🔥🔥🔥
// ==========================================

// Predict output question 1:
console.log("A"); // Synchronous (Call Stack)

setTimeout(() => {
  console.log("B"); // Macrotask Queue
}, 0);

console.log("C"); // Synchronous (Call Stack)
// Output: A, C, B

// Predict output question 2:
console.log("1"); // Call Stack

Promise.resolve().then(() => {
  console.log("2"); // Microtask Queue (Has higher priority than Macrotask)
});

setTimeout(() => {
  console.log("3"); // Macrotask Queue
}, 0);

console.log("4"); // Call Stack
// Output: 1, 4, 2, 3 (Microtasks run before Macrotasks!)

// ==========================================
// 41. Microtask / Macrotask
// ==========================================

console.log("Start");

// Macrotask (setTimeout, setInterval, DOM events)
setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

// Microtask (Promises, queueMicrotask, MutationObserver)
Promise.resolve().then(() => {
  console.log("Microtask: Promise");
});

queueMicrotask(() => {
  console.log("Microtask: queueMicrotask");
});

console.log("End");
// Output: Start, End, Microtask: Promise, Microtask: queueMicrotask, Macrotask: setTimeout
// Explanation: Event Loop empties the entire Microtask queue before moving to Macrotask.


// ==========================================
// 42. Execution Context
// ==========================================

// Global Execution Context is created first.
// Function Execution Context is created on function call.

let globalVal = 10; // Stored in Global Memory

function one() {
  // Function Execution Context for one() created
  two();
}

function two() {
  // Function Execution Context for two() created
  console.log("Hello from two");
}

one();


// ==========================================
// 43. Call Stack
// ==========================================

// Call Stack tracks function execution (LIFO - Last In First Out)
function main() {
  console.log("Main starts");
  first();
  console.log("Main ends");
}

function first() {
  console.log("First starts");
  second();
  console.log("First ends");
}

function second() {
  console.log("Second runs");
}

main();
/* Stack trace during execution:
   1. main() pushed
   2. first() pushed
   3. second() pushed
   4. second() popped
   5. first() popped
   6. main() popped
*/


// ==========================================
// 44. Recursion
// ==========================================

// Factorial recursion
function factorial(n) {
  if (n === 1) return 1; // Base case
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Fibonacci recursion
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}


// ==========================================
// 45. Higher Order Functions
// ==========================================

// A function that takes a function as argument OR returns a function
function operate(a, b, callback) {
  return callback(a, b);
}

// map, filter, reduce are HOFs because they accept callback functions
let arrHof = [1, 2, 3];
arrHof.map(x => x * 2); 


// ==========================================
// 46. Pure Functions
// ==========================================

// Pure: Always returns same output for same input, NO side effects
function pureAdd(a, b) {
  return a + b;
}

// Impure: Modifies external state or relies on external state
let total = 0;
function impureAdd(a) {
  total += a;
  return total;
}


// ==========================================
// 47. Immutability 🔥
// ==========================================

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4]; // We don't mutate oldArray using push()

const oldObject = { name: "Bijay", age: 22 };
const newObject = { ...oldObject, age: 23 }; // Creating new object instead of mutating oldObject.age

// Updating nested object immutably
const nestedObj = { info: { city: "Delhi" } };
const newNestedObj = { ...nestedObj, info: { ...nestedObj.info, city: "Mumbai" } };


// ==========================================
// 48. Shallow Copy / Deep Copy
// ==========================================

// Shallow Copy (Nested objects still share reference)
const user1 = { name: "A", address: { city: "Delhi" } };
const shallowUser = { ...user1 };
shallowUser.address.city = "Mumbai"; 
console.log(user1.address.city); // "Mumbai" (Got mutated!)

// Deep Copy (Completely independent)
const user2 = { name: "B", address: { city: "Noida" } };

// Modern way (structuredClone)
const deepUser = structuredClone(user2);

// Older way (JSON parse/stringify - loses functions and undefined)
const deepUserOld = JSON.parse(JSON.stringify(user2));


// ==========================================
// 49. Map / Set
// ==========================================

// Set - Stores unique values
const uniqueNumbers = [...new Set([1, 1, 2, 2, 3])]; // [1, 2, 3]
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.delete(1);
console.log(mySet.has(2)); // true

// Map - Key-value pairs where keys can be ANY type (not just string like Objects)
const myMap = new Map();
myMap.set("name", "Bijay");
myMap.set(10, "Number Key");
console.log(myMap.get("name")); // "Bijay"
myMap.delete(10);
console.log(myMap.has("name")); // true


// ==========================================
// 50. WeakMap / WeakSet
// ==========================================

// WeakSet: Only stores objects. Objects can be garbage collected if no other references exist.
const ws = new WeakSet();
let objKey = {};
ws.add(objKey);

// WeakMap: Keys must be objects. Allows garbage collection of keys.
const wm = new WeakMap();
wm.set(objKey, "Private Data");
// objKey = null; // Key gets garbage collected automatically


// ==========================================
// 51. Classes 🔥
// ==========================================

class User {
  constructor(name) {
    this.name = name;
  }

  // Method
  greet() {
    console.log("Hi, " + this.name);
  }

  // Static method (called on class, not instance)
  static info() {
    console.log("User class");
  }
}

const u1 = new User("Bijay");
u1.greet();
User.info();

// Inheritance
class Admin extends User {
  constructor(name, role) {
    super(name); // Calls parent constructor
    this.role = role;
  }
}


// ==========================================
// 52. Prototype
// ==========================================

// Before ES6 classes, constructor functions were used.
function Person(name) {
  this.name = name;
}

// Adding method to prototype saves memory (shared among all instances)
Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

const p1Obj = new Person("Ravi");
p1Obj.greet();


// ==========================================
// 53. Error Handling
// ==========================================

try {
  let data = JSON.parse("{ malformed JSON }");
} catch (error) {
  console.log("Caught Error:", error.message);
} finally {
  console.log("Executes no matter what");
}

// Custom Error
function checkAge(age) {
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  return true;
}


// ==========================================
// 54. Modules
// ==========================================

/*
// file: math.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export default function multiply(a, b) { return a * b; }

// file: app.js
import multiply, { add, subtract } from './math.js';
*/


// ==========================================
// 55. Local Storage
// ==========================================

// Persists even after browser tab closes. Stored as strings.
localStorage.setItem("name", "Bijay");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
// localStorage.clear(); // Clears all

// Storing objects
const storageObj = { name: "Rahul" };
localStorage.setItem("user", JSON.stringify(storageObj));
const retrieved = JSON.parse(localStorage.getItem("user"));


// ==========================================
// 56. Session Storage
// ==========================================

// Similar to LocalStorage, but clears when tab/browser closes.
sessionStorage.setItem("sessionID", "12345");
console.log(sessionStorage.getItem("sessionID"));
sessionStorage.removeItem("sessionID");
// ==========================================
// 57. Debouncing 🔥🔥
// ==========================================

// Prevents a function from running multiple times in quick succession.
// It waits for a specific time after the last call before executing.
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Reset the timer on every call
    timer = setTimeout(() => {
      fn.apply(this, args); // Run the function after delay
    }, delay);
  };
}

// Example usage (e.g., search box):
// const searchHandler = debounce((query) => console.log("Searching:", query), 500);
// document.querySelector('input').addEventListener('input', (e) => searchHandler(e.target.value));


// ==========================================
// 58. Throttling 🔥
// ==========================================

// Ensures a function is called at most once in a specified time period.
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// Example usage (e.g., scroll event):
// const scrollHandler = throttle(() => console.log("Scrolling..."), 1000);
// window.addEventListener('scroll', scrollHandler);


// ==========================================
// 59. Memoization
// ==========================================

// Caches the results of expensive function calls based on arguments.
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log("Fetching from cache");
      return cache[n];
    }
    console.log("Calculating result");
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
// const memoizedSquare = memoize((num) => num * num);


// ==========================================
// 60. Currying
// ==========================================

// Transforming a function with multiple arguments into a sequence of functions, each taking a single argument.
function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addCurry(1)(2)(3)); // 6

// ES6 Arrow Syntax:
const addCurryArrow = a => b => c => a + b + c;
console.log(addCurryArrow(10)(20)(30)); // 60


// ==========================================
// 61. Function Composition
// ==========================================

// Combining two or more functions to produce a new function.
const double = x => x * 2;
const square = x => x * x;
const increment = x => x + 1;

// Read from right to left (increment -> square -> double)
const compose = (...fns) => (val) => fns.reduceRight((acc, fn) => fn(acc), val);

const compute = compose(double, square, increment);
console.log(compute(2)); // (2+1) -> 3^2=9 -> 9*2 = 18


// ==========================================
// 62. Partial Application
// ==========================================

// Fixing a number of arguments to a function, producing another function of smaller arity.
function multiplyThree(a, b, c) {
  return a * b * c;
}

// Bind allows partial application
const multiplyByTwo = multiplyThree.bind(null, 2); 
console.log(multiplyByTwo(3, 4)); // 2 * 3 * 4 = 24


// ==========================================
// 63. Generator Functions
// ==========================================

// Functions that can be paused and resumed.
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunc();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined


// ==========================================
// 64. Symbols
// ==========================================

// Primitive type used to create unique, hidden identifiers for object properties.
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false

const userSym = {
  name: "Bijay",
  [sym1]: 12345
};
console.log(userSym[sym1]); // 12345
// Note: Symbols do not show up in Object.keys() or for...in loops.


// ==========================================
// 65. Optional Chaining
// ==========================================

const optUser = { name: "Bijay" };
// Safe access without throwing an error if 'address' is undefined.
console.log(optUser?.address?.city); // undefined (instead of TypeError)


// ==========================================
// 66. Nullish Coalescing (??)
// ==========================================

// Returns RHS only if LHS is null or undefined (not for 0, false, or "").
const val1 = 0 ?? 100; // 0
const val2 = null ?? 100; // 100
const val3 = false || 100; // 100 (|| checks for falsy, ?? checks for null/undefined)


// ==========================================
// 67. Regular Expressions
// ==========================================

const email = "test@example.com";
const isValidEmail = /^\S+@\S+\.\S+$/.test(email); // true
console.log("Email Valid:", isValidEmail);

const phone = "9876543210";
const isPhone = /^\d{10}$/.test(phone);

const messyString = "Hello 123 World !";
const onlyLetters = messyString.replace(/[^a-zA-Z\s]/g, ""); // "Hello  World "


// ==========================================
// 68. Algorithms — Fresher Must-Practice
// ==========================================

// Anagram Check
function isAnagram(str1, str2) {
  const formatStr = s => s.toLowerCase().split('').sort().join('');
  return formatStr(str1) === formatStr(str2);
}

// Two Sum
function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
  }
  return [];
}

// Missing Number (1 to N)
function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}


// ==========================================
// 69. Nested Arrays
// ==========================================

const nestedArr = [1, [2, [3, 4]]];

// Built-in Array.flat()
console.log(nestedArr.flat(Infinity)); // [1, 2, 3, 4]

// Manual flatten (Recursive)
function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}


// ==========================================
// 70. Object/Array Transformation 🔥
// ==========================================

const objArr = [
  { name: "A", age: 20, category: "Dev" },
  { name: "B", age: 25, category: "Design" },
  { name: "C", age: 22, category: "Dev" }
];

// Extract names
const mappedNames = objArr.map(x => x.name);

// Filter age > 21
const over21 = objArr.filter(x => x.age > 21);

// Group by category
const grouped = objArr.reduce((acc, curr) => {
  if (!acc[curr.category]) acc[curr.category] = [];
  acc[curr.category].push(curr);
  return acc;
}, {});
console.log(grouped);


// ==========================================
// 71. Output-Based Questions
// ==========================================

console.log(typeof null); // "object"
console.log([] == false); // true (type coercion)
console.log([] === false); // false
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(0.1 + 0.2 === 0.3); // false (floating point math quirk)

// Event Loop output
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
// Output: 1, 4, 3, 2


// ==========================================
// 72. Advanced-but-Possible Fresher Questions
// ==========================================

// Concepts covered:
// - lexical environment & closure (Covered in 7, 10)
// - garbage collection / memory leaks (Objects unreferenced, closures holding large memory)
// - event loop / call stack / microtask queue (Covered in 40-43)
// - currying / memoization / composition (Covered in 59-61)
// - generators / symbols / WeakMap (Covered in 63, 64, 50)
// All these concepts have been practically implemented above!

// ==========================================
// END OF CHEAT SHEET
// ==========================================
