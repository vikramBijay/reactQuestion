const JAVASCRIPT_DATA = [
  {
    "num": "1",
    "category": "1. JS Basics (1–10)",
    "question_hi": "Hoisting kya hai?",
    "answer_hi": "Hoisting JavaScript ka default behaviour hai jisme variable aur function declarations ko unke scope ke top par move kar diya jata hai. Isse wo declare hone se pehle bhi access kiye ja sakte hain, lekin unka value abhi assigned nahi hota (var ke case me undefined milta hai).\n\n```js\nconsole.log(a); // undefined (hoisted)\nvar a = 5;\n\nconsole.log(b); // ReferenceError\nlet b = 10;\n```",
    "question_en": "What is Hoisting?",
    "answer_en": "Hoisting is the default behaviour of JavaScript in which variable and function declarations are moved to the top of their scope. This allows them to be accessed before they are actually declared in the code, though their value is not yet assigned (var gives undefined until then).\n\n```js\nconsole.log(a); // undefined (hoisted)\nvar a = 5;\n\nconsole.log(b); // ReferenceError\nlet b = 10;\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "2",
    "category": "1. JS Basics (1–10)",
    "question_hi": "var, let aur const me kya difference hai?",
    "answer_hi": "var function-scoped hota hai, block scope follow nahi karta, re-declare aur reassign dono allowed hain, aur hoisting ke time undefined se initialize hota hai.\nlet block-scoped hota hai, same scope me re-declare nahi ho sakta lekin reassign ho sakta hai, hoisted to hota hai but declaration se pehle access nahi ho sakta (temporal dead zone).\nconst bhi block-scoped hota hai, ise re-declare ya reassign nahi kiya ja sakta, aur declaration ke time hi value dena zaroori hota hai. Real world example: value of Pi.\n\n```js\nvar x = 1;\nvar x = 2; // allowed\n\nlet y = 1;\ny = 2; // allowed\n// let y = 3; // Error: already declared\n\nconst PI = 3.14;\n// PI = 3; // Error: can't reassign\n```",
    "question_en": "What is the difference between var, let, and const?",
    "answer_en": "var is function-scoped, does not follow block scope, allows re-declaration and reassignment, and is hoisted with an initial value of undefined.\nlet is block-scoped, cannot be re-declared in the same scope but allows reassignment; it is hoisted but inaccessible before declaration (temporal dead zone).\nconst is also block-scoped, cannot be re-declared or reassigned, and a value must be assigned at the time of declaration. A real-world example is the value of Pi.\n\n```js\nvar x = 1;\nvar x = 2; // allowed\n\nlet y = 1;\ny = 2; // allowed\n// let y = 3; // Error: already declared\n\nconst PI = 3.14;\n// PI = 3; // Error: can't reassign\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "3",
    "category": "1. JS Basics (1–10)",
    "question_hi": "== aur === me kya difference hai?",
    "answer_hi": "== sirf values compare karta hai, data type nahi; JavaScript comparison se pehle automatically type conversion karta hai jisse unexpected result aur logical bugs aa sakte hain.\n=== zyada strict hota hai aur value ke sath data type bhi compare karta hai, koi type conversion nahi hota, isliye ye comparison ko safe aur recommended banata hai.\n\n```js\nconsole.log(1 == '1');  // true (type conversion hoti hai)\nconsole.log(1 === '1'); // false (type match nahi karta)\n```",
    "question_en": "What is the difference between == and ===?",
    "answer_en": "== compares only values, not data type; JavaScript automatically converts data types before comparing, which can cause unexpected results and logical bugs.\n=== is stricter and compares both value and data type at the same time, with no type conversion, making comparisons safer and recommended.\n\n```js\nconsole.log(1 == '1');  // true (type conversion happens)\nconsole.log(1 === '1'); // false (types don't match)\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "4",
    "category": "1. JS Basics (1–10)",
    "question_hi": "JavaScript me data types ke kitne types hote hain?",
    "answer_hi": "JavaScript me 2 types ke data types hote hain: primitive aur non-primitive.\nPrimitive: 7 data types hote hain — number, bigInt, boolean, string, symbol, null, undefined. Yeh single value store karne ke liye use hote hain.\nNon-primitive: array, object — complex aur multiple data store karne ke liye use hote hain.\n\n```js\ntypeof 42;         // \"number\"\ntypeof 'hi';        // \"string\"\ntypeof true;        // \"boolean\"\ntypeof undefined;   // \"undefined\"\ntypeof null;        // \"object\" (JS ka ek known quirk)\ntypeof [1, 2];       // \"object\"\ntypeof {};           // \"object\"\n```",
    "question_en": "What are the types of data types in JavaScript?",
    "answer_en": "There are 2 types of data types in JavaScript: primitive and non-primitive.\nPrimitive: there are 7 data types — number, bigInt, boolean, string, symbol, null, undefined. They are used to store a single value.\nNon-primitive: array, object — used to store complex and multiple data.\n\n```js\ntypeof 42;         // \"number\"\ntypeof 'hi';        // \"string\"\ntypeof true;        // \"boolean\"\ntypeof undefined;   // \"undefined\"\ntypeof null;        // \"object\" (a well-known JS quirk)\ntypeof [1, 2];       // \"object\"\ntypeof {};           // \"object\"\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "5",
    "category": "1. JS Basics (1–10)",
    "question_hi": "null aur undefined me kya difference hai?",
    "answer_hi": "Null ka matlab hai variable ko intentionally empty rakha gaya hai — ye memory me exist karta hai lekin uski koi value assigned nahi hai; hum usually null assign karte hain ye batane ke liye ki 'kuch nahi hai yaha'.\nUndefined ka matlab hai variable exist karta hai lekin abhi tak usko koi value assign nahi ki gayi, null bhi nahi. JavaScript automatically aise variables ko undefined assign kar deta hai.\n\n```js\nlet a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null\n```",
    "question_en": "What is the difference between null and undefined?",
    "answer_en": "Null means a variable is intentionally left empty — it exists in memory but has no value assigned to it; we usually assign null to indicate 'nothing here'.\nUndefined means a variable exists but has not been assigned a value yet, not even null. JavaScript automatically assigns undefined to such variables.\n\n```js\nlet a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "6",
    "category": "1. JS Basics (1–10)",
    "question_hi": "Scope kya hai JavaScript me?",
    "answer_hi": "Scope us area ko refer karta hai jaha ek variable access ya use kiya ja sakta hai. Agar variable function ke andar bana hai, toh wo sirf usi function ke andar use ho sakta hai (local scope). Agar sabhi functions ke bahar bana hai, toh usse kahi se bhi access kiya ja sakta hai (global scope).\nJavaScript me scope ke types hote hain: Global Scope, Local/Function Scope, aur Block Scope `{ }`.\n\n```js\nlet globalVar = 'accessible everywhere';\n\nfunction test() {\n  let localVar = 'only inside test()';\n  console.log(globalVar); // works\n}\ntest();\nconsole.log(localVar); // ReferenceError\n```",
    "question_en": "What is Scope in JavaScript?",
    "answer_en": "Scope means the area of a program where a variable can be used or accessed. If a variable is created inside a function, it can only be used inside that function (local scope). If it is created outside all functions, it can be accessed anywhere (global scope).\nJavaScript has the following types of scope: Global Scope, Local/Function Scope, and Block Scope `{ }`.\n\n```js\nlet globalVar = 'accessible everywhere';\n\nfunction test() {\n  let localVar = 'only inside test()';\n  console.log(globalVar); // works\n}\ntest();\nconsole.log(localVar); // ReferenceError\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "7",
    "category": "1. JS Basics (1–10)",
    "question_hi": "Scope Chain kya hai aur JavaScript variable ko kaise dhundhta hai?",
    "answer_hi": "Scope chain wo process hai jisse JS ek variable ko dhundta hai — pehle current scope me dekhta hai, agar nahi milta toh outer (parent) scope me, aur phir uske bhi outer scope me, ye process global scope tak chalta rehta hai. Agar variable phir bhi nahi milta, toh JavaScript reference error throw kar deta hai.\n\n```js\nlet a = 'global';\nfunction outer() {\n  let b = 'outer';\n  function inner() {\n    console.log(a, b); // scope chain se dono mil jaate hain\n  }\n  inner();\n}\nouter();\n```",
    "question_en": "What is the Scope Chain and how does JavaScript look up a variable?",
    "answer_en": "JS first looks for a variable inside the current scope. If it is not found, it looks in the outer (parent) scope, then the next outer scope, and continues this way until it reaches the global scope. If the variable is still not found, JavaScript throws a reference error.\n\n```js\nlet a = 'global';\nfunction outer() {\n  let b = 'outer';\n  function inner() {\n    console.log(a, b); // both found via the scope chain\n  }\n  inner();\n}\nouter();\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "8",
    "category": "1. JS Basics (1–10)",
    "question_hi": "Lexical Scope kya hai?",
    "answer_hi": "Lexical scope ka matlab hai ki variable ki accessibility uske source code me likhe jane ki jagah se decide hoti hai. Example: agar ek function kisi doosre function ke andar defined hai, toh inner function outer function ki variables ko access kar sakta hai, lekin outer function inner function ki variables ko access nahi kar sakta.\n\n```js\nfunction outer() {\n  let name = 'JS';\n  function inner() {\n    console.log(name); // accessible, lexical scope ki wajah se\n  }\n  inner();\n}\nouter();\n```",
    "question_en": "What is Lexical Scope?",
    "answer_en": "Lexical scope means a variable's accessibility is determined by where it is written in the source code. Example: If a function is defined inside another function, the inner function can access the variables of the outer function, but the outer function cannot access the variables of the inner function.\n\n```js\nfunction outer() {\n  let name = 'JS';\n  function inner() {\n    console.log(name); // accessible due to lexical scope\n  }\n  inner();\n}\nouter();\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "9",
    "category": "1. JS Basics (1–10)",
    "question_hi": "Debugger kya hai?",
    "answer_hi": "Debugger JavaScript ka ek tool hai jo hume code me bugs dhundhne aur unhe hataane me help karta hai, program ke execution ko beech me rok kar.\n\n```js\nfunction add(a, b) {\n  debugger; // devtools open hone par yaha execution pause ho jaayega\n  return a + b;\n}\nadd(2, 3);\n```",
    "question_en": "What is a debugger?",
    "answer_en": "A debugger is a tool in JavaScript which allows us to find and remove bugs in our code by stopping the execution of the program at specific points.\n\n```js\nfunction add(a, b) {\n  debugger; // execution pauses here when devtools is open\n  return a + b;\n}\nadd(2, 3);\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "10",
    "category": "1. JS Basics (1–10)",
    "question_hi": "JavaScript me errors ke kitne types hote hain?",
    "answer_hi": "JavaScript me mainly 4 types ke errors hote hain:\n1. Syntax Error — code galat likha hone par, JS use samajh nahi paata, program run hi nahi hota jab tak fix na ho.\n2. Reference Error — jab kisi undeclared variable ko access karne ki koshish ki jaati hai.\n3. Type Error — jab kisi value par galat operation kiya jaata hai (jaise non-function ko call karna).\n4. Logical Error — code successfully run hota hai lekin galat logic ki wajah se wrong result deta hai, console me koi error message nahi dikhta.\n\n```js\nconsole.log(x); // ReferenceError: x is not defined\nnull.foo();      // TypeError\nlet a = 5\nlet a = 10;       // SyntaxError: already declared\n```",
    "question_en": "What are the different types of errors in JavaScript?",
    "answer_en": "There are four main types of errors in JavaScript:\n1. Syntax Error — happens when the code is written incorrectly, so JavaScript cannot understand it and the program will not run until fixed.\n2. Reference Error — occurs when trying to access an undeclared variable.\n3. Type Error — occurs when an operation is performed on a value of the wrong type.\n4. Logical Error — the code runs successfully but gives the wrong result due to incorrect logic; no error message is shown in the console.\n\n```js\nconsole.log(x); // ReferenceError: x is not defined\nnull.foo();      // TypeError\nlet a = 5\nlet a = 10;       // SyntaxError: already declared\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "11",
    "category": "2. Execution Context & Call Stack (11–15)",
    "question_hi": "Execution Context kya hai?",
    "answer_hi": "Execution Context wo environment hai jisme JavaScript code execute hota hai, isme variables, functions, aur 'this' ki value store hoti hai.\nGlobal Execution Context (GEC) — jab JS file run hoti hai to sabse pehle ye create hota hai, isme global variables aur functions store hote hain.\nFunction Execution Context (FEC) — jab bhi koi function call hota hai to uske liye naya execution context banta hai.\nCreation Phase — is phase me memory allocate hoti hai, variables ko undefined se initialize kiya jaata hai (hoisting) aur scope chain set hoti hai.\nExecution Phase — is phase me code line by line actually run hota hai aur variables ko real values assign hoti hain.\n\n```js\nconsole.log(a); // undefined (creation phase me hoisted)\nvar a = 10;      // execution phase me real value assign hoti hai\n```",
    "question_en": "What is an Execution Context?",
    "answer_en": "An Execution Context is the environment in which JavaScript code is executed; it stores variables, functions, and the value of 'this'.\nGlobal Execution Context (GEC) — created first when the JS file runs; it holds global variables and functions.\nFunction Execution Context (FEC) — created every time a function is called.\nCreation Phase — memory is allocated, variables are initialized with undefined (hoisting), and the scope chain is set up.\nExecution Phase — the code actually runs line by line and variables get their real values assigned.\n\n```js\nconsole.log(a); // undefined (hoisted during creation phase)\nvar a = 10;      // real value assigned during execution phase\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "12",
    "category": "2. Execution Context & Call Stack (11–15)",
    "question_hi": "Call Stack kya hai?",
    "answer_hi": "Call Stack ek mechanism hai jo JavaScript me track karta hai ki kaunse functions run ho rahe hain aur kis order me.\n- Jab koi function call hota hai, wo call stack ke top par add hota hai.\n- Execution complete hone ke baad usse remove kar diya jaata hai.\n- Ye JS ko step-by-step execution manage karne me help karta hai, kyunki JS ek time me ek hi task execute karta hai, LIFO (Last In, First Out) pattern follow karke.\n\n```js\nfunction a() { b(); }\nfunction b() { c(); }\nfunction c() { console.log('done'); }\na();\n// Call Stack: a -> b -> c -> (finish in reverse order)\n```",
    "question_en": "What is the Call Stack?",
    "answer_en": "The call stack is a mechanism in JavaScript that keeps track of which functions are running and in what order.\n- When a function is called, it is added to the top of the call stack.\n- It is removed once it finishes execution.\n- It helps JavaScript manage execution step by step, since JS executes code one task at a time, following the LIFO (Last In, First Out) pattern.\n\n```js\nfunction a() { b(); }\nfunction b() { c(); }\nfunction c() { console.log('done'); }\na();\n// Call Stack: a -> b -> c -> (finish in reverse order)\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "13",
    "category": "2. Execution Context & Call Stack (11–15)",
    "question_hi": "Garbage Collection kya hai?",
    "answer_hi": "Garbage Collection ek automatic process hai jisme un objects ko memory se hata diya jaata hai jo ab program ke liye reachable ya needed nahi hain, isse memory free ho jaati hai.\n\n```js\nlet obj = { name: 'temp' };\nobj = null; // ab garbage collector isse memory se hata dega\n```",
    "question_en": "What is Garbage Collection?",
    "answer_en": "Garbage collection is an automatic process of freeing up memory by removing objects that are no longer reachable or needed by the program.\n\n```js\nlet obj = { name: 'temp' };\nobj = null; // now eligible for garbage collection\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "14",
    "category": "2. Execution Context & Call Stack (11–15)",
    "question_hi": "BOM (Browser Object Model) kya hai?",
    "answer_hi": "BOM ka matlab hai Browser Object Model. Ye JavaScript ko browser ke sath interact karne ki suvidha deta hai, sirf HTML/webpage content se nahi. BOM ki help se hum browser features jaise window, location, history, navigator, etc. ko control kar sakte hain.\n\n```js\nconsole.log(window.location.href); // current page ka URL\nconsole.log(window.history.length); // history me pages ki count\n```",
    "question_en": "What is BOM (Browser Object Model)?",
    "answer_en": "BOM stands for Browser Object Model. It allows JavaScript to interact with the browser itself, not just the HTML/webpage content. Using BOM, we can control browser features like window, location, history, navigator, etc.\n\n```js\nconsole.log(window.location.href); // current page's URL\nconsole.log(window.history.length); // number of pages in history\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "15",
    "category": "2. Execution Context & Call Stack (11–15)",
    "question_hi": "DOM (Document Object Model) kya hai?",
    "answer_hi": "DOM ka matlab hai Document Object Model. Ye HTML/XML document ko ek tree-like structure of objects ke roop me represent karta hai, jisse JavaScript webpage ke elements, structure aur content ko access aur manipulate kar sakta hai.\n\n```js\ndocument.getElementById('title').textContent = 'Updated!';\n```",
    "question_en": "What is DOM (Document Object Model)?",
    "answer_en": "DOM stands for Document Object Model. It represents the HTML/XML document as a tree-like structure of objects, allowing JavaScript to access and manipulate the elements, structure, and content of a webpage.\n\n```js\ndocument.getElementById('title').textContent = 'Updated!';\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "16",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "'this' JavaScript me kaise kaam karta hai?",
    "answer_hi": "JavaScript me 'this' us object ko refer karta hai jo function ko call kar raha hai, aur uski value is baat par depend karti hai ki function ko kaise call kiya gaya hai, na ki wo kaha likha gaya hai. Arrow functions apni 'this' apni parent scope se inherit karte hain aur unki apni khud ki 'this' nahi hoti.\n\n```js\nconst obj = {\n  name: 'Amit',\n  greet() {\n    console.log(this.name); // 'this' obj ko refer karta hai\n  }\n};\nobj.greet(); // Amit\n```",
    "question_en": "How does 'this' work in JavaScript?",
    "answer_en": "In JavaScript, 'this' refers to the object that calls the function, and its value depends on how the function is called, not where it is written. Arrow functions inherit their 'this' from the parent scope and don't have their own 'this'.\n\n```js\nconst obj = {\n  name: 'Amit',\n  greet() {\n    console.log(this.name); // 'this' refers to obj\n  }\n};\nobj.greet(); // Amit\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "17",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Arrow function kya hai?",
    "answer_hi": "Arrow functions JavaScript me function banane ka short syntax hai aur unki apni khud ki 'this' nahi hoti — ye ES6 version me introduce hue the. Ye 'this' ki problem ko solve karte hain apni 'this' ko parent scope se inherit karke.\n\n```js\nconst add = (a, b) => a + b;\n```",
    "question_en": "What is an Arrow Function?",
    "answer_en": "Arrow functions are a short syntax for creating functions in JavaScript and they don't have their own 'this' — they were introduced in ES6. They solve the 'this' problem by inheriting 'this' from the parent scope.\n\n```js\nconst add = (a, b) => a + b;\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "18",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "IIFE (Immediately Invoked Function Expression) kya hai?",
    "answer_hi": "IIFE ek function hai jise define hone ke immediately baad execute (invoke) kar diya jaata hai, uske baad `()` lagakar. Ye apna khud ka scope banata hai, isse iske andar ki variables global environment ya doosri files ke code me leak ya conflict nahi karti.\n\n```js\n(function () {\n  // code here\n})();\n```",
    "question_en": "What is an IIFE (Immediately Invoked Function Expression)?",
    "answer_en": "An IIFE is a function that is defined and executed (invoked) immediately after its creation, using parentheses `()` right after it. It is used to create its own scope, so that variables inside it don't leak into or conflict with the global environment or code in other files.\n\n```js\n(function () {\n  // code here\n})();\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "19",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Higher Order Functions (HOF) kya hai?",
    "answer_hi": "Higher Order Functions wo functions hain jo dusre functions ko argument ke roop me accept karte hain ya kisi function ko return karte hain.\nPurpose:\n- Code duplication kam karta hai\n- Functions ko arguments ke roop me pass karne ki suvidha deta hai\n- Doosre function se function return karne ki suvidha deta hai\n\nExample: `map()`, `filter()`, `reduce()`\n\n```js\nfunction higherOrder(fn) {\n  return fn(5);\n}\nhigherOrder(x => x * 2); // 10\n```",
    "question_en": "What are Higher Order Functions (HOF)?",
    "answer_en": "Higher Order Functions are functions that accept other functions as arguments or return a function.\nPurpose:\n- Reduces code duplication\n- Allows passing functions as arguments\n- Allows returning functions from another function\n\nExample: `map()`, `filter()`, `reduce()`\n\n```js\nfunction higherOrder(fn) {\n  return fn(5);\n}\nhigherOrder(x => x * 2); // 10\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "20",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Closure kya hai?",
    "answer_hi": "Closure JavaScript ka ek concept hai jisme ek inner function outer function ki variables ko yaad rakhta hai aur use karta hai, tab bhi jab outer function ka execution complete ho gaya ho.\n\n```js\nfunction outer() {\n  let count = 0;\n  function inner() {\n    count++;\n    return count;\n  }\n  return inner;\n}\n```",
    "question_en": "What is a Closure?",
    "answer_en": "A closure in JavaScript is a concept where an inner function remembers and uses variables from its outer function, even after the outer function has finished running/executing.\n\n```js\nfunction outer() {\n  let count = 0;\n  function inner() {\n    count++;\n    return count;\n  }\n  return inner;\n}\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "21",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Callback function kya hai?",
    "answer_hi": "Callback function wo function hota hai jise ek doosre function ke andar argument ke roop me pass kiya jaata hai aur usko wo function baad me execute (call) karta hai.\n\n```js\nfunction greet(name, callback) {\n  console.log('Hello ' + name);\n  callback();\n}\ngreet('Amit', () => console.log('Callback executed'));\n```",
    "question_en": "What is a Callback Function?",
    "answer_en": "A callback function is a function that is passed as an argument to another function and is executed (called) later by that function.\n\n```js\nfunction greet(name, callback) {\n  console.log('Hello ' + name);\n  callback();\n}\ngreet('Amit', () => console.log('Callback executed'));\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "22",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Rest operator kya hai?",
    "answer_hi": "Rest operator (`...`) ka use multiple arguments ko ek single array me collect karne ke liye kiya jaata hai. Ye zyada tar function parameters me use hota hai jaha arguments ki number fix nahi hoti.\n\n```js\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6\n```",
    "question_en": "What is the Rest operator?",
    "answer_en": "The rest operator (`...`) is used to collect multiple arguments into a single array. It is mostly used in function parameters when the number of arguments isn't fixed.\n\n```js\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "23",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Spread operator kya hai?",
    "answer_hi": "Spread operator (`...`) ka use array aur objects ko unpack/spread karne ke liye kiya jaata hai. Ise tab use karte hain jab function call me ek se zyada individual arguments expected ya required hote hain.\n\n```js\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }\n```",
    "question_en": "What is the Spread operator?",
    "answer_en": "The spread operator (`...`) is used to spread out arrays and objects. It is used when a function call expects or requires one or more individual arguments.\n\n```js\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "24",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Memoization kya hai?",
    "answer_hi": "Memoization ek optimization technique hai jisme function call ka result store kar liya jaata hai, taaki dobara wahi calculation na karni pade. Ye performance improve karta hai time aur computation bachaakar, aur zyada tar expensive aur repetitive calculations me use hota hai.\n\n```js\nfunction memoize(fn) {\n  const cache = {};\n  return (n) => {\n    if (cache[n] !== undefined) return cache[n];\n    const result = fn(n);\n    cache[n] = result;\n    return result;\n  };\n}\n```",
    "question_en": "What is Memoization?",
    "answer_en": "Memoization is an optimization technique where the result of a function call is stored so that we do not need to recalculate it again. It improves performance by saving time and computation, and is mostly used for expensive and repetitive calculations.\n\n```js\nfunction memoize(fn) {\n  const cache = {};\n  return (n) => {\n    if (cache[n] !== undefined) return cache[n];\n    const result = fn(n);\n    cache[n] = result;\n    return result;\n  };\n}\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "25",
    "category": "3. Functions, this & Closures (16–25)",
    "question_hi": "Prototype kya hai?",
    "answer_hi": "Prototype JavaScript ka wo mechanism hai jo objects ko doosre object se properties aur methods inherit karne ki suvidha deta hai, aur ye tab use hota hai jab hum multiple objects ke beech common functionality share karna chahte hain.\n\n```js\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function () {\n  console.log('Hi, ' + this.name);\n};\n\nconst p = new Person('Riya');\np.sayHi(); // Hi, Riya\n```",
    "question_en": "What is a Prototype?",
    "answer_en": "Prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from another object; it is used when we want to share common functionality across multiple objects.\n\n```js\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function () {\n  console.log('Hi, ' + this.name);\n};\n\nconst p = new Person('Riya');\np.sayHi(); // Hi, Riya\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "26",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Event loop kya hai JavaScript me?",
    "answer_hi": "JavaScript ek synchronous, single-threaded programming language hai, isliye ye ek sath multiple tasks perform nahi kar sakti. Isi problem ko solve karne ke liye event loop ka concept aata hai, jo JavaScript ko multiple tasks perform karne me help karta hai bina rukhe. Ye check karta hai ki main thread free hai ya nahi, phir queue se pending tasks lekar unhe ek-ek karke run karta hai. Event loop asynchronous operations handle karne ke liye bahut zaroori hai.",
    "question_en": "What is the Event Loop in JavaScript?",
    "answer_en": "Since JavaScript is a synchronous, single-threaded programming language, it cannot perform multiple tasks at the same time. The concept of the event loop solves this by helping JavaScript perform multiple tasks without stopping — it checks if the main thread is free, then takes pending tasks from the queue and runs them one by one. The event loop is important for handling asynchronous operations in JavaScript.",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "27",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Microtask Queue aur Callback (Macrotask) Queue me kya difference hai? Promise callback pehle kyu chalta hai aur setTimeout() baad me kyu?",
    "answer_hi": "Microtask Queue me Promises (.then, .catch, .finally) aur async/await ke callbacks jaate hain, jabki Callback/Macrotask Queue me setTimeout, setInterval, aur DOM events ke callbacks jaate hain.\nEvent loop hamesha microtask queue ko pehle completely empty karta hai, uske baad hi macrotask queue se next task uthata hai. Isi wajah se Promise ka callback setTimeout se pehle chalta hai, kyunki JS pehle saare microtasks finish karta hai, phir call stack free hone par macrotask queue se next item lekar run karta hai.\n\n```js\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// Output: 1 4 3 2\n```",
    "question_en": "What is the difference between the Microtask Queue and Callback (Macrotask) Queue? Why does a Promise callback run before setTimeout()?",
    "answer_en": "The Microtask Queue holds callbacks from Promises (.then, .catch, .finally) and async/await, while the Callback/Macrotask Queue holds callbacks from setTimeout, setInterval, and DOM events.\nThe event loop always fully empties the microtask queue before picking the next task from the macrotask queue. That's why a Promise callback runs before setTimeout — JS finishes all microtasks first, then, once the call stack is free, picks up the next item from the macrotask queue.\n\n```js\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// Output: 1 4 3 2\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "28",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Promises kya hote hain?",
    "answer_hi": "Promises JavaScript me asynchronous operations handle karne ke liye use hote hain, `.then()` aur `.catch()` methods ki help se. Ek promise ek value ko represent karta hai jo abhi available ho sakti hai, baad me ho sakti hai, ya kabhi nahi bhi ho sakti. Multiple asynchronous operations hone par promises ka code lamba aur chained dikhne lag sakta hai.",
    "question_en": "What are Promises?",
    "answer_en": "Promises are used to handle asynchronous operations in JS using .then() and .catch() methods. A promise represents a value that may be available now, later, or never. Promises can make code look long and chained when there are multiple asynchronous operations.",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "29",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Async/Await kya hai?",
    "answer_hi": "Async/Await asynchronous operations handle karne ka ek simple tarika hai, jisse code normal synchronous code jaisa dikhta hai.\nasync function se pehle use hota hai use asynchronous banane ke liye.\nawait ek async function ke andar use hota hai execution ko rokne ke liye jab tak Promise resolve na ho jaaye. Isse code likhna, padhna aur debug karna chained `.then()` promises ke comparison me aasaan ho jaata hai.\n\n```js\nasync function getData() {\n  const res = await fetch('url');\n  const data = await res.json();\n  return data;\n}\n```",
    "question_en": "What is Async/Await?",
    "answer_en": "Async/Await is a simple way to handle asynchronous operations, making the code look like normal synchronous code.\nasync is used before a function to make it asynchronous.\nawait is used inside an async function to pause execution until a Promise is resolved. It makes the code easier to write, read, and debug compared to chained .then() promises.\n\n```js\nasync function getData() {\n  const res = await fetch('url');\n  const data = await res.json();\n  return data;\n}\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "30",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Non-blocking operation kya hai JavaScript me?",
    "answer_hi": "Iska matlab hai ki JavaScript kisi task (jaise file reading, API call) ke finish hone ka wait nahi karti, instead baaki code continue karke run karti rehti hai aur result ko baad me handle karti hai — jaise callback, promise, async/await, timer aur event loop.\n\n```js\nconsole.log('Start');\nsetTimeout(() => console.log('Async task'), 0);\nconsole.log('End');\n// Output: Start, End, Async task\n```",
    "question_en": "What is a non-blocking operation in JavaScript?",
    "answer_en": "It means JavaScript does not wait for a task (like file reading or an API call) to finish — instead, it continues running other code and handles the result later, using mechanisms like callbacks, promises, async/await, timers, and the event loop.\n\n```js\nconsole.log('Start');\nsetTimeout(() => console.log('Async task'), 0);\nconsole.log('End');\n// Output: Start, End, Async task\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "31",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Debounce kya hai?",
    "answer_hi": "Debounce ek technique hai jo ye limit karti hai ki koi function kitni baar run ho. Ye ensure karta hai ki function tabhi execute ho jab user ne event trigger karna certain delay ke liye rok diya ho. Ye commonly search input me use hota hai taaki har keystroke par API call na ho.\n\n```js\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n```",
    "question_en": "What is Debounce?",
    "answer_en": "Debounce is a technique used to limit how often a function runs. It ensures that a function executes only after a certain delay, and only when the user has stopped triggering the event. It is commonly used on search inputs to avoid calling the API on every keystroke.\n\n```js\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "32",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Throttling kya hai?",
    "answer_hi": "Throttling ek technique hai jisme function ko fixed time interval me sirf ek baar chalne diya jaata hai, chahe event kitni baar bhi trigger ho. Ye tab useful hota hai jab hum ek continuous event (jaise scroll ya resize) ko regular intervals par handle karna chahte hain, na ki har baar.\n\n```js\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => (inThrottle = false), limit);\n    }\n  };\n}\n```",
    "question_en": "What is Throttling?",
    "answer_en": "Throttling is a technique in which a function is allowed to run only once in a fixed time interval, no matter how many times the event is triggered. It is useful when we want to handle a continuous event (like scroll or resize) at regular intervals rather than every single time.\n\n```js\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => (inThrottle = false), limit);\n    }\n  };\n}\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "33",
    "category": "4. Async JavaScript & Event Loop (26–33)",
    "question_hi": "Debouncing vs Throttling — dono me kya difference hai?",
    "answer_hi": "Debounce function ko tabhi run karta hai jab event trigger hona ek certain delay ke liye ruk jaaye — matlab sirf last call count hota hai (jaise search input).\nThrottle function ko fixed time interval me sirf ek baar run hone deta hai, event chahe continuously trigger hota rahe (jaise scroll ya window resize).\nDono ka goal performance improve karna hai, lekin debounce 'wait karo aur last call chalao' approach follow karta hai, jabki throttle 'regular intervals par chalao' approach follow karta hai. Ye React/Frontend interviews me bahut common question hai.",
    "question_en": "What is the difference between Debouncing and Throttling?",
    "answer_en": "Debounce runs the function only after the event has stopped triggering for a certain delay — only the last call counts (e.g., search input).\nThrottle allows the function to run only once in a fixed time interval, no matter how continuously the event is triggered (e.g., scroll or window resize).\nBoth aim to improve performance, but debounce follows a 'wait and run the last call' approach, while throttle follows a 'run at regular intervals' approach. This is a very common question in React/Frontend interviews.",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "34",
    "category": "5. Objects & Object Methods (34–38)",
    "question_hi": "Object.keys() kya karta hai?",
    "answer_hi": "Object.keys() ek object ki sirf 'keys' (property names) ka array return karta hai.\n\n```js\nconst obj = { a: 1, b: 2 };\nObject.keys(obj); // ['a', 'b']\n```",
    "question_en": "What does Object.keys() do?",
    "answer_en": "Object.keys() returns an array of only the 'keys' (property names) of an object.\n\n```js\nconst obj = { a: 1, b: 2 };\nObject.keys(obj); // ['a', 'b']\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "35",
    "category": "5. Objects & Object Methods (34–38)",
    "question_hi": "Object.values() kya karta hai?",
    "answer_hi": "Object.values() ek object ki sirf 'values' ka array return karta hai.\n\n```js\nconst obj = { a: 1, b: 2 };\nObject.values(obj); // [1, 2]\n```",
    "question_en": "What does Object.values() do?",
    "answer_en": "Object.values() returns an array of only the 'values' of an object.\n\n```js\nconst obj = { a: 1, b: 2 };\nObject.values(obj); // [1, 2]\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "36",
    "category": "5. Objects & Object Methods (34–38)",
    "question_hi": "Object.entries() kya karta hai?",
    "answer_hi": "Object.entries() object ki key-value pairs ka array return karta hai, jaha har pair khud ek [key, value] array hota hai. Ye tab useful hota hai jab hum object ko loop me iterate karna chahte hain.\n\n```js\nconst obj = { a: 1, b: 2 };\nObject.entries(obj); // [['a', 1], ['b', 2]]\n```",
    "question_en": "What does Object.entries() do?",
    "answer_en": "Object.entries() returns an array of the object's key-value pairs, where each pair is itself a [key, value] array. It is useful when we want to iterate over an object in a loop.\n\n```js\nconst obj = { a: 1, b: 2 };\nObject.entries(obj); // [['a', 1], ['b', 2]]\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "37",
    "category": "5. Objects & Object Methods (34–38)",
    "question_hi": "Object.assign() kya karta hai?",
    "answer_hi": "Object.assign() ek ya zyada source objects ki properties ko ek target object me copy karta hai aur updated target object return karta hai. Ye zyada tar objects ko merge karne ya shallow copy banane ke liye use hota hai.\n\n```js\nconst target = { a: 1 };\nconst source = { b: 2 };\nObject.assign(target, source); // { a: 1, b: 2 }\n```",
    "question_en": "What does Object.assign() do?",
    "answer_en": "Object.assign() copies the properties of one or more source objects into a target object and returns the updated target object. It is mostly used to merge objects or create a shallow copy.\n\n```js\nconst target = { a: 1 };\nconst source = { b: 2 };\nObject.assign(target, source); // { a: 1, b: 2 }\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "38",
    "category": "5. Objects & Object Methods (34–38)",
    "question_hi": "Object.freeze() aur Object.seal() me kya difference hai?",
    "answer_hi": "Object.freeze() object ko completely lock kar deta hai — na hi hum existing properties ki value change kar sakte hain, na naya property add kar sakte hain, na existing ko delete kar sakte hain.\nObject.seal() thoda kam strict hai — hum existing properties ki value change kar sakte hain, lekin naya property add ya kisi existing ko delete nahi kar sakte.\n\n```js\nconst obj1 = Object.freeze({ a: 1 });\nobj1.a = 2; // no effect\n\nconst obj2 = Object.seal({ b: 1 });\nobj2.b = 2; // allowed\nobj2.c = 3; // not allowed\n```",
    "question_en": "What is the difference between Object.freeze() and Object.seal()?",
    "answer_en": "Object.freeze() completely locks an object — you can neither change the value of existing properties, nor add new properties, nor delete existing ones.\nObject.seal() is less strict — you can change the value of existing properties, but cannot add new properties or delete existing ones.\n\n```js\nconst obj1 = Object.freeze({ a: 1 });\nobj1.a = 2; // no effect\n\nconst obj2 = Object.seal({ b: 1 });\nobj2.b = 2; // allowed\nobj2.c = 3; // not allowed\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "39",
    "category": "6. Array Methods (39–52)",
    "question_hi": "push() kya karta hai?",
    "answer_hi": "push() array ke end me ek element add karne ke liye use hota hai. Ye original array ko modify karta hai.\n\n```js\nconst arr = [1, 2];\narr.push(3); // [1, 2, 3]\n```",
    "question_en": "What is push()?",
    "answer_en": "push() is used to add one element at the end of an array. It modifies the original array.\n\n```js\nconst arr = [1, 2];\narr.push(3); // [1, 2, 3]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "40",
    "category": "6. Array Methods (39–52)",
    "question_hi": "unshift() kya karta hai?",
    "answer_hi": "unshift() array ke beginning me ek element add karne ke liye use hota hai.\n\n```js\nconst arr = [2, 3];\narr.unshift(1); // [1, 2, 3]\n```",
    "question_en": "What is unshift()?",
    "answer_en": "unshift() is used to add one element at the beginning of an array.\n\n```js\nconst arr = [2, 3];\narr.unshift(1); // [1, 2, 3]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "41",
    "category": "6. Array Methods (39–52)",
    "question_hi": "pop() kya karta hai?",
    "answer_hi": "pop() array ke last element ko remove karne ke liye use hone wala method hai.\n\n```js\nconst arr = [1, 2, 3];\narr.pop(); // arr = [1, 2]\n```",
    "question_en": "What is pop()?",
    "answer_en": "pop() is a method used to remove the last element from an array.\n\n```js\nconst arr = [1, 2, 3];\narr.pop(); // arr = [1, 2]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "42",
    "category": "6. Array Methods (39–52)",
    "question_hi": "shift() kya karta hai?",
    "answer_hi": "shift() array ke first element ko remove karne wala method hai.\n\n```js\nconst arr = [1, 2, 3];\narr.shift(); // arr = [2, 3]\n```",
    "question_en": "What is shift()?",
    "answer_en": "shift() is a method that removes the first element from an array.\n\n```js\nconst arr = [1, 2, 3];\narr.shift(); // arr = [2, 3]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "43",
    "category": "6. Array Methods (39–52)",
    "question_hi": "splice() kya karta hai?",
    "answer_hi": "splice() zyada tar array ke ek specific position par elements remove, add ya replace karne ke liye use hota hai. Ye original array ko directly modify karta hai, naya array nahi banata. Ye starting index, remove karne wale elements ki number, aur optional add karne wale elements leta hai. Ye mutable method hai (yaani original array ko change karta hai).\n\n```js\nconst arr = [1, 2, 3, 4];\narr.splice(1, 2, 'a'); // arr = [1, 'a', 4]\n```",
    "question_en": "What is splice()?",
    "answer_en": "splice() is used mostly to remove, add, or replace elements at a specific position in an array. It directly modifies the original array instead of creating a new one. It takes the starting index, the number of elements to remove, and optional elements to add. It is a mutable method (i.e., it changes the original array).\n\n```js\nconst arr = [1, 2, 3, 4];\narr.splice(1, 2, 'a'); // arr = [1, 'a', 4]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "44",
    "category": "6. Array Methods (39–52)",
    "question_hi": "slice() kya karta hai?",
    "answer_hi": "slice() array ke ek portion ko extract karke ek naya array ke roop me return karta hai. Ye original array ko modify nahi karta. Ye starting index aur end index leta hai. Ye non-mutable method hai.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.slice(1, 3); // [2, 3], arr unchanged\n```",
    "question_en": "What is slice()?",
    "answer_en": "slice() is used to extract a portion of an array and return it as a new array. It does not modify the original array. It takes a starting index and an end index. It is a non-mutable method.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.slice(1, 3); // [2, 3], arr unchanged\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "45",
    "category": "6. Array Methods (39–52)",
    "question_hi": "map() kya karta hai?",
    "answer_hi": "map() original array ke har element par ek function apply karke ek naya array banata hai. Ye tab use hota hai jab humein data ko transform karna ho.\n\n```js\nconst arr = [1, 2, 3];\narr.map(x => x * 2); // [2, 4, 6]\n```",
    "question_en": "What is map()?",
    "answer_en": "map() creates a new array by applying a function to every element of the original array. It is used when we need to transform the data.\n\n```js\nconst arr = [1, 2, 3];\narr.map(x => x * 2); // [2, 4, 6]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "46",
    "category": "6. Array Methods (39–52)",
    "question_hi": "filter() kya karta hai?",
    "answer_hi": "filter() ek naya array banata hai jisme sirf wo elements hote hain jo ek specific test (condition jo true return karti hai) pass karte hain.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.filter(x => x % 2 === 0); // [2, 4]\n```",
    "question_en": "What is filter()?",
    "answer_en": "filter() creates a new array containing only the elements that passed a specific test (a condition that returns true).\n\n```js\nconst arr = [1, 2, 3, 4];\narr.filter(x => x % 2 === 0); // [2, 4]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "47",
    "category": "6. Array Methods (39–52)",
    "question_hi": "reduce() kya karta hai?",
    "answer_hi": "reduce() array ke har element par ek reducer function execute karta hai aur usse ek single output value (result) me reduce kar deta hai.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.reduce((sum, x) => sum + x, 0); // 10\n```",
    "question_en": "What is reduce()?",
    "answer_en": "reduce() executes a reducer function on each element of the array and reduces it into a single output value (the result).\n\n```js\nconst arr = [1, 2, 3, 4];\narr.reduce((sum, x) => sum + x, 0); // 10\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "48",
    "category": "6. Array Methods (39–52)",
    "question_hi": "find() kya karta hai?",
    "answer_hi": "find() array me pehla element return karta hai jo given condition ko satisfy karta hai. Agar koi element match nahi karta, toh undefined return karta hai.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.find(x => x > 2); // 3\n```",
    "question_en": "What is find()?",
    "answer_en": "find() returns the first element in the array that satisfies the given condition. If no element matches, it returns undefined.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.find(x => x > 2); // 3\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "49",
    "category": "6. Array Methods (39–52)",
    "question_hi": "findIndex() kya karta hai?",
    "answer_hi": "findIndex() array me pehle element ka index return karta hai jo given condition ko satisfy karta hai. Agar koi element match nahi karta, toh -1 return karta hai.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.findIndex(x => x > 2); // 2\n```",
    "question_en": "What is findIndex()?",
    "answer_en": "findIndex() returns the index of the first element in the array that satisfies the given condition. If no element matches, it returns -1.\n\n```js\nconst arr = [1, 2, 3, 4];\narr.findIndex(x => x > 2); // 2\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "50",
    "category": "6. Array Methods (39–52)",
    "question_hi": "some() kya karta hai?",
    "answer_hi": "some() check karta hai ki array me kam se kam ek element condition ko satisfy karta hai ya nahi. Agar haan toh true return karta hai, warna false.\n\n```js\nconst arr = [1, 2, 3];\narr.some(x => x > 2); // true\n```",
    "question_en": "What is some()?",
    "answer_en": "some() checks whether at least one element in the array satisfies the given condition. It returns true if so, otherwise false.\n\n```js\nconst arr = [1, 2, 3];\narr.some(x => x > 2); // true\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "51",
    "category": "6. Array Methods (39–52)",
    "question_hi": "every() kya karta hai?",
    "answer_hi": "every() check karta hai ki array ke saare elements condition ko satisfy karte hain ya nahi. Sabhi satisfy karne par true return karta hai, warna false.\n\n```js\nconst arr = [2, 4, 6];\narr.every(x => x % 2 === 0); // true\n```",
    "question_en": "What is every()?",
    "answer_en": "every() checks whether all elements in the array satisfy the given condition. It returns true only if all elements satisfy it, otherwise false.\n\n```js\nconst arr = [2, 4, 6];\narr.every(x => x % 2 === 0); // true\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "52",
    "category": "6. Array Methods (39–52)",
    "question_hi": "includes() kya karta hai?",
    "answer_hi": "includes() check karta hai ki array me ek given value exist karti hai ya nahi, aur true ya false return karta hai.\n\n```js\nconst arr = [1, 2, 3];\narr.includes(2); // true\n```",
    "question_en": "What is includes()?",
    "answer_en": "includes() checks whether a given value exists in the array, and returns true or false.\n\n```js\nconst arr = [1, 2, 3];\narr.includes(2); // true\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "53",
    "category": "6. Array Methods (39–52)",
    "question_hi": "forEach() kya karta hai?",
    "answer_hi": "forEach() array ke har element par ek function execute karta hai, lekin ye naya array return nahi karta (map() ke opposite). Ye zyada tar sirf iteration ke liye use hota hai, jaise console me print karna ya side-effects karna.\n\n```js\nconst arr = [1, 2, 3];\narr.forEach(x => console.log(x)); // prints 1, 2, 3\n```",
    "question_en": "What is forEach()?",
    "answer_en": "forEach() executes a function on each element of the array, but unlike map(), it does not return a new array. It is mostly used purely for iteration, such as printing to console or performing side-effects.\n\n```js\nconst arr = [1, 2, 3];\narr.forEach(x => console.log(x)); // prints 1, 2, 3\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "54",
    "category": "7. Storage & Copying (54–58)",
    "question_hi": "Cookies, Session Storage aur Local Storage me kya difference hai?",
    "answer_hi": "Cookies — chhoti data hoti hai jo browser store karta hai aur har request ke sath server ko send karta hai; inki expiry date, limited size hoti hai aur zyada tar authentication ke liye use hoti hain.\nSession Storage — ek single tab session ke liye browser me data store karta hai, tab band hone par data clear ho jaata hai aur ye tabs ke beech share nahi hota.\nLocal Storage — browser me data ko no expiry time ke sath store karta hai, browser band hone ke baad bhi data persist karta hai aur multiple tabs ke beech share hota hai.\n\n```js\ndocument.cookie = 'name=Amit; expires=Fri, 31 Dec 2026 23:59:59 GMT';\nsessionStorage.setItem('name', 'Amit'); // tab band hone par clear\nlocalStorage.setItem('name', 'Amit');   // no expiry\n```",
    "question_en": "What is the difference between Cookies, Session Storage, and Local Storage?",
    "answer_en": "Cookies — small data stored by the browser and sent to the server with every request; they have an expiry date, limited size, and are often used for authentication.\nSession Storage — stores data in the browser for a single tab session; the data is cleared when the tab is closed and is not shared across tabs.\nLocal Storage — stores data in the browser with no expiry time; the data persists even after closing the browser and is shared across multiple tabs.\n\n```js\ndocument.cookie = 'name=Amit; expires=Fri, 31 Dec 2026 23:59:59 GMT';\nsessionStorage.setItem('name', 'Amit'); // cleared when tab closes\nlocalStorage.setItem('name', 'Amit');   // no expiry\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "55",
    "category": "7. Storage & Copying (54–58)",
    "question_hi": "Deep Copy kya hai?",
    "answer_hi": "Deep copy ek object ya array ki completely independent copy banane ka process hai. Copy kiye gaye object me kiye gaye changes original object ko affect nahi karte, kyunki sabhi values memory me alag alag store hoti hain.\n\n```js\nconst original = { a: 1, nested: { b: 2 } };\nconst deep = JSON.parse(JSON.stringify(original));\n\ndeep.nested.b = 99;\nconsole.log(original.nested.b); // 2 (unaffected)\n```",
    "question_en": "What is a Deep Copy?",
    "answer_en": "A deep copy is the process of creating a completely independent copy of an object or array. Changes made to the copied object do not affect the original object, because all the values are stored separately in memory.\n\n```js\nconst original = { a: 1, nested: { b: 2 } };\nconst deep = JSON.parse(JSON.stringify(original));\n\ndeep.nested.b = 99;\nconsole.log(original.nested.b); // 2 (unaffected)\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "56",
    "category": "7. Storage & Copying (54–58)",
    "question_hi": "Shallow Copy kya hai?",
    "answer_hi": "Shallow copy ek naya object ya array banane ke liye use hoti hai, lekin uske andar ke nested objects/arrays original ke sath same memory reference share karte hain. Iska matlab hai ki agar hum copied object me nested data change karte hain, toh original object bhi change ho jaayega. Sirf top-level values copy hoti hain, jabki deeper (nested) values original data se linked rehti hain.\n\n```js\nconst original = { a: 1, nested: { b: 2 } };\nconst shallow = { ...original };\n\nshallow.nested.b = 99;\nconsole.log(original.nested.b); // 99 (original bhi change ho gaya)\n```",
    "question_en": "What is a Shallow Copy?",
    "answer_en": "A shallow copy is used to create a new object or array, but the nested objects/arrays inside it still share the same reference in memory as the original. This means that if we change the nested data in the copied object, the original object will also change. Only top-level values are copied, while deeper (nested) values remain linked to the original data.\n\n```js\nconst original = { a: 1, nested: { b: 2 } };\nconst shallow = { ...original };\n\nshallow.nested.b = 99;\nconsole.log(original.nested.b); // 99 (original also changed)\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "57",
    "category": "7. Storage & Copying (54–58)",
    "question_hi": "Polyfill kya hai?",
    "answer_hi": "Polyfills extra code ke pieces hote hain jo purane browsers me modern JavaScript features provide karne ke liye use hote hain, jo unhe support nahi karte. Agar koi browser JS ke kisi built-in feature ya method ko support nahi karta, toh polyfill manually wahi functionality implement kar deta hai taaki code fir bhi kaam kare.\n\n```js\nArray.prototype.myMap = function (callback) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) {\n    result.push(callback(this[i], i, this));\n  }\n  return result;\n};\n\n[1, 2, 3].myMap(x => x * 2); // [2, 4, 6]\n```",
    "question_en": "What is a Polyfill?",
    "answer_en": "Polyfills are extra pieces of code used to provide modern JavaScript features in older browsers that do not support them. If a browser does not support a built-in feature or method of JS, the polyfill manually implements the same functionality so the code still works.\n\n```js\nArray.prototype.myMap = function (callback) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) {\n    result.push(callback(this[i], i, this));\n  }\n  return result;\n};\n\n[1, 2, 3].myMap(x => x * 2); // [2, 4, 6]\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "58",
    "category": "7. Storage & Copying (54–58)",
    "question_hi": "Caching kya hai?",
    "answer_hi": "Caching data ko temporarily store karne ka process hai taaki future me usse jaldi access kiya ja sake. Same data ko baar baar original source se load karne ke bajaye, data ek temporary storage jise cache kehte hain, me save kiya jaata hai. Jab data dobara chahiye hota hai, toh usse cache se liya jaata hai, jisse speed aur performance improve hoti hai.\nExample: Browser images, CSS, aur JS files ko cache karta hai taaki next time page load fast ho.\n\n```js\nconst cache = new Map();\n\nfunction getData(key) {\n  if (cache.has(key)) return cache.get(key); // cache se return\n  const data = fetchExpensiveData(key);\n  cache.set(key, data);\n  return data;\n}\n```",
    "question_en": "What is Caching?",
    "answer_en": "Caching is the process of storing data temporarily so that it can be accessed faster in the future. Instead of loading the same data again and again from the original source, the data is saved in a temporary storage called a cache. When the data is needed again, it is taken from the cache, which improves speed and performance.\nExample: A browser caches images, CSS, and JS files so that the next time the page loads, it loads faster.\n\n```js\nconst cache = new Map();\n\nfunction getData(key) {\n  if (cache.has(key)) return cache.get(key); // return from cache\n  const data = fetchExpensiveData(key);\n  cache.set(key, data);\n  return data;\n}\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "59",
    "category": "8. Networking & APIs (59–62)",
    "question_hi": "OAuth kya hai?",
    "answer_hi": "OAuth ek authorization system hai jo ek application ko user ki data access karne deta hai bina unka password puchhe. Isme, user apni login details share karne ke bajaye permission deta hai — trusted services (jaise Google) ke through, app ko ek special token milta hai, aur ye token sirf allowed data access karne ke liye use hota hai.",
    "question_en": "What is OAuth?",
    "answer_en": "OAuth is an authorization system that lets an application access a user's data without asking for their password. Here, the user gives permission instead of sharing login details — through trusted services like Google, an app receives a special token, and this token is used to access only the allowed data.",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "60",
    "category": "8. Networking & APIs (59–62)",
    "question_hi": "Fetch API kya hai?",
    "answer_hi": "Fetch API JavaScript ka ek built-in method hai jo network requests (jaise server se data get karna ya send karna) banane ke liye use hota hai. Ye ek Promise return karta hai, isliye ise `.then()` ya `async/await` ke sath use kiya jaata hai. Ye purane `XMLHttpRequest` ka modern aur cleaner alternative hai.\n\n```js\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));\n```",
    "question_en": "What is the Fetch API?",
    "answer_en": "The Fetch API is a built-in JavaScript method used to make network requests (like getting or sending data to a server). It returns a Promise, so it is used with .then() or async/await. It is a modern and cleaner alternative to the older XMLHttpRequest.\n\n```js\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "61",
    "category": "8. Networking & APIs (59–62)",
    "question_hi": "JSON.parse() aur JSON.stringify() me kya difference hai?",
    "answer_hi": "JSON.stringify() ek JavaScript object/array ko JSON string me convert karta hai — ye tab useful hota hai jab data ko server ko send karna ho ya localStorage me save karna ho.\nJSON.parse() ek JSON string ko wapas JavaScript object/array me convert karta hai — ye tab useful hota hai jab server se ya storage se aaya hua JSON data read karna ho.\n\n```js\nconst obj = { name: 'Rahul' };\nconst str = JSON.stringify(obj); // '{\"name\":\"Rahul\"}'\nconst parsed = JSON.parse(str); // { name: 'Rahul' }\n```",
    "question_en": "What is the difference between JSON.parse() and JSON.stringify()?",
    "answer_en": "JSON.stringify() converts a JavaScript object/array into a JSON string — useful when sending data to a server or saving it in localStorage.\nJSON.parse() converts a JSON string back into a JavaScript object/array — useful when reading JSON data received from a server or storage.\n\n```js\nconst obj = { name: 'Rahul' };\nconst str = JSON.stringify(obj); // '{\"name\":\"Rahul\"}'\nconst parsed = JSON.parse(str); // { name: 'Rahul' }\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "62",
    "category": "8. Networking & APIs (59–62)",
    "question_hi": "Modules (import/export) kya hote hain JavaScript me?",
    "answer_hi": "ES6 Modules JavaScript code ko multiple files me organize karne ki suvidha dete hain. `export` ka use hota hai kisi variable, function, ya class ko doosri file me use karne ke liye available banane ke liye, aur `import` ka use hota hai unhe kisi doosri file me laane ke liye. Isse code reusable, maintainable aur organized banta hai.\n\n```js\n// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add } from './math.js';\n```",
    "question_en": "What are Modules (import/export) in JavaScript?",
    "answer_en": "ES6 Modules allow JavaScript code to be organized across multiple files. `export` is used to make a variable, function, or class available for use in another file, and `import` is used to bring it into another file. This makes code reusable, maintainable, and organized.\n\n```js\n// math.js\nexport function add(a, b) { return a + b; }\n\n// app.js\nimport { add } from './math.js';\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "63",
    "category": "9. DOM Events (Frontend) (63–65)",
    "question_hi": "Event delegation kya hai?",
    "answer_hi": "Event delegation ka matlab hai parent element par ek event listener add karna, instead of har child par alag alag listener lagane ke. Jab koi child click hota hai, event bubble up hokar parent tak pahunchta hai. Isse performance improve hoti hai aur dynamic elements ke liye bhi acche se kaam karta hai.\nConcept: capturing, targeting aur bubbling.\n\n```js\ndocument.getElementById('list').addEventListener('click', (e) => {\n  if (e.target.tagName === 'LI') {\n    console.log('Clicked:', e.target.textContent);\n  }\n});\n```",
    "question_en": "What is Event Delegation?",
    "answer_en": "Event delegation means adding one event listener to the parent instead of adding many listeners to each child. When a child is clicked, the event bubbles up and reaches the parent. This improves performance and works well for dynamic elements.\nConcept: capturing, targeting, and bubbling.\n\n```js\ndocument.getElementById('list').addEventListener('click', (e) => {\n  if (e.target.tagName === 'LI') {\n    console.log('Clicked:', e.target.textContent);\n  }\n});\n```",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "64",
    "category": "9. DOM Events (Frontend) (63–65)",
    "question_hi": "Event Bubbling aur Event Capturing me kya difference hai?",
    "answer_hi": "Event Bubbling me event sabse innermost (target) element se start hokar outer parent elements ki taraf jaata hai — 'bottom to top' direction.\nEvent Capturing (jise trickling bhi kehte hain) me event sabse outer element se start hokar innermost target element tak jaata hai — 'top to bottom' direction.\nDefault behaviour bubbling hota hai, lekin `addEventListener` ke third parameter ko `true` set karke capturing enable kiya ja sakta hai.\n\n```js\nelement.addEventListener('click', handler, true); // capturing\nelement.addEventListener('click', handler, false); // bubbling (default)\n```",
    "question_en": "What is the difference between Event Bubbling and Event Capturing?",
    "answer_en": "In Event Bubbling, the event starts from the innermost (target) element and moves up towards the outer parent elements — a 'bottom to top' direction.\nIn Event Capturing (also called trickling), the event starts from the outermost element and moves down to the innermost target element — a 'top to bottom' direction.\nBubbling is the default behaviour, but capturing can be enabled by setting the third parameter of `addEventListener` to `true`.\n\n```js\nelement.addEventListener('click', handler, true); // capturing\nelement.addEventListener('click', handler, false); // bubbling (default)\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "65",
    "category": "9. DOM Events (Frontend) (63–65)",
    "question_hi": "preventDefault() aur stopPropagation() me kya difference hai?",
    "answer_hi": "preventDefault() browser ke default behaviour ko rokta hai (jaise form submit hona, link navigate karna, checkbox toggle hona), lekin event ko bubble ya capture hone se nahi rokta.\nstopPropagation() event ko aage bubble ya capture hone se rokta hai (matlab parent/child listeners trigger nahi honge), lekin browser ke default behaviour ko nahi rokta.\n\n```js\nform.addEventListener('submit', (e) => {\n  e.preventDefault(); // form submit nahi hoga\n});\n\nchild.addEventListener('click', (e) => {\n  e.stopPropagation(); // parent tak event nahi jaayega\n});\n```",
    "question_en": "What is the difference between preventDefault() and stopPropagation()?",
    "answer_en": "preventDefault() stops the browser's default behaviour (like a form submitting, a link navigating, or a checkbox toggling), but it does not stop the event from bubbling or capturing.\nstopPropagation() stops the event from bubbling or capturing further (meaning parent/child listeners won't be triggered), but it does not stop the browser's default behaviour.\n\n```js\nform.addEventListener('submit', (e) => {\n  e.preventDefault(); // form will not submit\n});\n\nchild.addEventListener('click', (e) => {\n  e.stopPropagation(); // event won't reach the parent\n});\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "66",
    "category": "10. Modern ES6+ Syntax (66–71)",
    "question_hi": "Destructuring kya hai?",
    "answer_hi": "Destructuring ek syntax hai jo arrays ya objects ki values ko directly separate variables me extract karne ki suvidha deta hai, ek concise aur readable tarike se.\n\n```js\nconst { name, age } = { name: 'Amit', age: 25 };\nconst [first, second] = [1, 2];\n```",
    "question_en": "What is Destructuring?",
    "answer_en": "Destructuring is a syntax that allows extracting values from arrays or objects directly into separate variables, in a concise and readable way.\n\n```js\nconst { name, age } = { name: 'Amit', age: 25 };\nconst [first, second] = [1, 2];\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "67",
    "category": "10. Modern ES6+ Syntax (66–71)",
    "question_hi": "Template Literals kya hote hain?",
    "answer_hi": "Template literals backticks (` `) ka use karke strings banane ka tarika hai. Ye variables aur expressions ko `${}` ke andar directly string me embed karne ki suvidha dete hain, aur multi-line strings bhi easily likhne dete hain — jisse traditional string concatenation ki zaroorat nahi rehti.\n\n```js\nconst name = 'Priya';\nconsole.log(`Hello, ${name}!`);\n```",
    "question_en": "What are Template Literals?",
    "answer_en": "Template literals are a way to create strings using backticks (` `). They allow variables and expressions to be embedded directly into a string using `${}`, and also make writing multi-line strings easy — eliminating the need for traditional string concatenation.\n\n```js\nconst name = 'Priya';\nconsole.log(`Hello, ${name}!`);\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "68",
    "category": "10. Modern ES6+ Syntax (66–71)",
    "question_hi": "Optional Chaining (?.) kya hai?",
    "answer_hi": "Optional chaining (`?.`) ek object ki deeply nested property ko safely access karne ki suvidha deta hai, bina error throw kiye, agar beech me koi property `null` ya `undefined` ho. Agar chain me kahi bhi value missing hoti hai, toh error ke bajaye `undefined` return hota hai.\n\n```js\nconst user = { address: null };\nconsole.log(user.address?.city); // undefined, no error\n```",
    "question_en": "What is Optional Chaining (?.)?",
    "answer_en": "Optional chaining (`?.`) allows safely accessing a deeply nested property of an object without throwing an error if a property in between is `null` or `undefined`. If any value in the chain is missing, `undefined` is returned instead of an error.\n\n```js\nconst user = { address: null };\nconsole.log(user.address?.city); // undefined, no error\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "69",
    "category": "10. Modern ES6+ Syntax (66–71)",
    "question_hi": "Nullish Coalescing (??) kya hai?",
    "answer_hi": "Nullish coalescing operator (`??`) left-hand side value return karta hai agar wo `null` ya `undefined` nahi hai, warna right-hand side value return karta hai. Ye `||` se different hai kyunki `||` falsy values (jaise `0`, `''`, `false`) ko bhi replace kar deta hai, jabki `??` sirf `null`/`undefined` ke liye replace karta hai.\n\n```js\nconst count = 0;\nconsole.log(count || 10); // 10 (0 is falsy)\nconsole.log(count ?? 10); // 0 (0 is not null/undefined)\n```",
    "question_en": "What is Nullish Coalescing (??)?",
    "answer_en": "The nullish coalescing operator (`??`) returns the left-hand side value if it is not `null` or `undefined`, otherwise it returns the right-hand side value. It differs from `||` because `||` also replaces falsy values (like `0`, `''`, `false`), whereas `??` only replaces `null`/`undefined`.\n\n```js\nconst count = 0;\nconsole.log(count || 10); // 10 (0 is falsy)\nconsole.log(count ?? 10); // 0 (0 is not null/undefined)\n```",
    "source": "added",
    "topic": "javascript"
  },
  {
    "num": "70",
    "category": "10. Modern ES6+ Syntax (66–71)",
    "question_hi": "ES6 kya hai?",
    "answer_hi": "ES6 (ECMAScript 2015) ne JavaScript me kayi naye features introduce kiye jaise let/const, arrow functions, classes, promises, template literals, destructuring, spread/rest operators, aur modules (import/export). Ye JavaScript ko cleaner, aur modern development ke liye zyada powerful banata hai.",
    "question_en": "What is ES6?",
    "answer_en": "ES6 (ECMAScript 2015) introduced several new features to JavaScript such as let/const, arrow functions, classes, promises, template literals, destructuring, spread/rest operators, and modules (import/export). It made JavaScript cleaner and more powerful for modern development.",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "71",
    "category": "10. Modern ES6+ Syntax (66–71)",
    "question_hi": "Server-side aur Client-side me kya difference hai?",
    "answer_hi": "Server-side: Code server par run hota hai. Ye business logic, databases, aur APIs handle karne ke liye use hota hai. Example: Node.js.\nClient-side: Code browser (client) par run hota hai aur UI/interface handle karne ke liye use hota hai jisse user directly interact karta hai.",
    "question_en": "What is the difference between Server-side and Client-side?",
    "answer_en": "Server-side: Code runs on the server. It is used to handle business logic, databases, and APIs. Example: Node.js.\nClient-side: Code runs on the browser (client) and is used to handle the UI/interface that the user directly interacts with.",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "72",
    "category": "11. Performance & Optimization (72)",
    "question_hi": "Frontend application ka bundle size kaise reduce karein?",
    "answer_hi": "Unused code remove karo — unused functions, libraries, aur components ko delete karo taaki bundle me sirf needed code jaaye.\nCode Splitting — bade components ko chhote components/chunks me divide karo.\nLazy Loading — component files ko sirf tab load karo jab unki zaroorat ho.\nCode compress karo — extra spaces aur comments hata kar code ko minify karo.\nHeavy libraries ke bajaye lightweight libraries use karo.",
    "question_en": "How can we reduce the bundle size of a frontend application?",
    "answer_en": "Remove unused code – Delete unused functions, libraries, and components so only needed code goes into the bundle.\nCode Splitting – Divide large components into smaller components/chunks.\nLazy Loading – Load component files only when needed.\nCompress code – Minify code by removing extra spaces and comments.\nUse lightweight libraries instead of heavy ones.",
    "source": "doc",
    "topic": "javascript"
  },
  {
    "num": "73",
    "category": "",
    "question_hi": " what is temporary dead zone",
    "answer_hi": " it is time between variable creation and its initialization where the let and const cannot be accessed",
    "question_en": " what is temporary dead zone",
    "answer_en": " it is time between variable creation and its initialization where the let and const cannot be accessed",
    "source": "doc",
    "topic": "javascript"
  }
];