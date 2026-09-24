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

