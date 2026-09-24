const JS_CHEAT_SHEET_DATA = [
  {
    "num": "1",
    "category": "1. Variables",
    "question_hi": "1. Variables par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Q - var, let, const difference explain karo & code likho\n// var is function scoped or globally scoped, can be re-declared and updated.\n// let is block scoped, cannot be re-declared but can be updated.\n// const is block scoped, cannot be re-declared or updated.\n\n// var declaration example\nvar nameVar = \"Bijay\";\nconsole.log(nameVar); \n\n// let declaration\nlet ageLet = 22;\nconsole.log(ageLet);\n\n// const declaration\nconst isStudent = true;\nconsole.log(isStudent);\n\n// variable reassignment\nageLet = 23; // allowed\n// isStudent = false; // TypeError: Assignment to constant variable.\n\n// const object ko modify karke dikhao\nconst user = { name: \"Bijay\", age: 22 };\nuser.age = 23; // Allowed! Because we are mutating the object properties, not reassigning the variable itself.\nconsole.log(user);\n\n// multiple variables declare karo\nlet a = 1, b = 2, c = 3;\n\n// swapping without third variable\nlet x = 10, y = 20;\nx = x + y; // x=30\ny = x - y; // y=10\nx = x - y; // x=20\nconsole.log(\"Swapped:\", x, y);\n\n// swapping using destructuring\nlet p = 100, q = 200;\n[p, q] = [q, p];\nconsole.log(\"Swapped with destructuring:\", p, q);\n```",
    "question_en": "Code and practice for: 1. Variables",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Q - var, let, const difference explain karo & code likho\n// var is function scoped or globally scoped, can be re-declared and updated.\n// let is block scoped, cannot be re-declared but can be updated.\n// const is block scoped, cannot be re-declared or updated.\n\n// var declaration example\nvar nameVar = \"Bijay\";\nconsole.log(nameVar); \n\n// let declaration\nlet ageLet = 22;\nconsole.log(ageLet);\n\n// const declaration\nconst isStudent = true;\nconsole.log(isStudent);\n\n// variable reassignment\nageLet = 23; // allowed\n// isStudent = false; // TypeError: Assignment to constant variable.\n\n// const object ko modify karke dikhao\nconst user = { name: \"Bijay\", age: 22 };\nuser.age = 23; // Allowed! Because we are mutating the object properties, not reassigning the variable itself.\nconsole.log(user);\n\n// multiple variables declare karo\nlet a = 1, b = 2, c = 3;\n\n// swapping without third variable\nlet x = 10, y = 20;\nx = x + y; // x=30\ny = x - y; // y=10\nx = x - y; // x=20\nconsole.log(\"Swapped:\", x, y);\n\n// swapping using destructuring\nlet p = 100, q = 200;\n[p, q] = [q, p];\nconsole.log(\"Swapped with destructuring:\", p, q);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "2",
    "category": "2. Data Types",
    "question_hi": "2. Data Types par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Coding\nlet name = \"Bijay\";\nlet age = 22;\nlet student = true;\nlet uninitializedVar;\nlet emptyValue = null;\n\n// typeof se sabhi types check karo\nconsole.log(typeof name); // \"string\"\nconsole.log(typeof age); // \"number\"\nconsole.log(typeof student); // \"boolean\"\nconsole.log(typeof uninitializedVar); // \"undefined\"\nconsole.log(typeof 10n); // \"bigint\"\nconsole.log(typeof Symbol(\"id\")); // \"symbol\"\nconsole.log(typeof {}); // \"object\"\n\n// typeof null explain karke code\nconsole.log(typeof null); // \"object\"\n// Explanation: This is a known bug in JavaScript from its early days. Null represents an intentional absence of any object value, but typeof incorrectly returns \"object\".\n\n// primitive vs reference value example\n// Primitive (copied by value)\nlet num1 = 10;\nlet num2 = num1;\nnum1 = 20;\nconsole.log(num1, num2); // 20, 10\n\n// Reference (copied by reference)\nlet obj1 = { val: 10 };\nlet obj2 = obj1;\nobj1.val = 20;\nconsole.log(obj1.val, obj2.val); // 20, 20 (both point to the same memory location)\n```",
    "question_en": "Code and practice for: 2. Data Types",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Coding\nlet name = \"Bijay\";\nlet age = 22;\nlet student = true;\nlet uninitializedVar;\nlet emptyValue = null;\n\n// typeof se sabhi types check karo\nconsole.log(typeof name); // \"string\"\nconsole.log(typeof age); // \"number\"\nconsole.log(typeof student); // \"boolean\"\nconsole.log(typeof uninitializedVar); // \"undefined\"\nconsole.log(typeof 10n); // \"bigint\"\nconsole.log(typeof Symbol(\"id\")); // \"symbol\"\nconsole.log(typeof {}); // \"object\"\n\n// typeof null explain karke code\nconsole.log(typeof null); // \"object\"\n// Explanation: This is a known bug in JavaScript from its early days. Null represents an intentional absence of any object value, but typeof incorrectly returns \"object\".\n\n// primitive vs reference value example\n// Primitive (copied by value)\nlet num1 = 10;\nlet num2 = num1;\nnum1 = 20;\nconsole.log(num1, num2); // 20, 10\n\n// Reference (copied by reference)\nlet obj1 = { val: 10 };\nlet obj2 = obj1;\nobj1.val = 20;\nconsole.log(obj1.val, obj2.val); // 20, 20 (both point to the same memory location)\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "3",
    "category": "3. Operators",
    "question_hi": "3. Operators par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// arithmetic operators\nconsole.log(10 + 5); // 15\nconsole.log(10 - 5); // 5\nconsole.log(10 * 5); // 50\nconsole.log(10 / 5); // 2\nconsole.log(10 % 3); // 1 (remainder)\n\n// comparison operators\nconsole.log(5 > 3); // true\nconsole.log(5 < 3); // false\nconsole.log(5 >= 5); // true\nconsole.log(5 <= 4); // false\n\n// == vs ===\nconsole.log(5 == \"5\"); // true (checks value only, does type coercion)\nconsole.log(5 === \"5\"); // false (checks value and data type strictly)\n\n// != vs !==\nconsole.log(5 != \"5\"); // false \nconsole.log(5 !== \"5\"); // true (strict inequality)\n\n// logical &&, ||, !\nconsole.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!true); // false\n\n// ternary operator\nlet isAdult = age >= 18 ? \"Yes\" : \"No\";\n\n// nullish coalescing ?? (returns right side if left is null or undefined)\nlet username = null;\nconsole.log(username ?? \"Guest\"); // \"Guest\"\n\n// optional chaining ?. (safely access nested properties)\nlet person = { info: { address: \"Delhi\" } };\nconsole.log(person?.info?.city); // undefined (does not throw error)\n\n// exponentiation **\nconsole.log(2 ** 3); // 8 (2 power 3)\n\n// increment/decrement\nlet count = 0;\ncount++; // 1\ncount--; // 0\n\n// Coding questions\n// Check if age >= 18\nlet currentAge = 20;\nconsole.log(currentAge >= 18 ? \"Eligible\" : \"Not Eligible\");\n\n// Find largest of 3 numbers\nlet n1 = 10, n2 = 25, n3 = 15;\nlet largest = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);\nconsole.log(\"Largest:\", largest);\n\n// Check even/odd\nlet numCheck = 7;\nconsole.log(numCheck % 2 === 0 ? \"Even\" : \"Odd\");\n\n// Check positive/negative\nlet val = -5;\nconsole.log(val >= 0 ? \"Positive\" : \"Negative\");\n\n// Use ternary to determine pass/fail\nlet marks = 45;\nlet result = marks >= 33 ? \"Pass\" : \"Fail\";\nconsole.log(result);\n```",
    "question_en": "Code and practice for: 3. Operators",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// arithmetic operators\nconsole.log(10 + 5); // 15\nconsole.log(10 - 5); // 5\nconsole.log(10 * 5); // 50\nconsole.log(10 / 5); // 2\nconsole.log(10 % 3); // 1 (remainder)\n\n// comparison operators\nconsole.log(5 > 3); // true\nconsole.log(5 < 3); // false\nconsole.log(5 >= 5); // true\nconsole.log(5 <= 4); // false\n\n// == vs ===\nconsole.log(5 == \"5\"); // true (checks value only, does type coercion)\nconsole.log(5 === \"5\"); // false (checks value and data type strictly)\n\n// != vs !==\nconsole.log(5 != \"5\"); // false \nconsole.log(5 !== \"5\"); // true (strict inequality)\n\n// logical &&, ||, !\nconsole.log(true && false); // false\nconsole.log(true || false); // true\nconsole.log(!true); // false\n\n// ternary operator\nlet isAdult = age >= 18 ? \"Yes\" : \"No\";\n\n// nullish coalescing ?? (returns right side if left is null or undefined)\nlet username = null;\nconsole.log(username ?? \"Guest\"); // \"Guest\"\n\n// optional chaining ?. (safely access nested properties)\nlet person = { info: { address: \"Delhi\" } };\nconsole.log(person?.info?.city); // undefined (does not throw error)\n\n// exponentiation **\nconsole.log(2 ** 3); // 8 (2 power 3)\n\n// increment/decrement\nlet count = 0;\ncount++; // 1\ncount--; // 0\n\n// Coding questions\n// Check if age >= 18\nlet currentAge = 20;\nconsole.log(currentAge >= 18 ? \"Eligible\" : \"Not Eligible\");\n\n// Find largest of 3 numbers\nlet n1 = 10, n2 = 25, n3 = 15;\nlet largest = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);\nconsole.log(\"Largest:\", largest);\n\n// Check even/odd\nlet numCheck = 7;\nconsole.log(numCheck % 2 === 0 ? \"Even\" : \"Odd\");\n\n// Check positive/negative\nlet val = -5;\nconsole.log(val >= 0 ? \"Positive\" : \"Negative\");\n\n// Use ternary to determine pass/fail\nlet marks = 45;\nlet result = marks >= 33 ? \"Pass\" : \"Fail\";\nconsole.log(result);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "4",
    "category": "4. Conditions",
    "question_hi": "4. Conditions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// if, else, else if, nested if\nlet temp = 30;\nif (temp > 40) {\n    console.log(\"Too Hot\");\n} else if (temp > 25) {\n    console.log(\"Pleasant\");\n} else {\n    console.log(\"Cold\");\n}\n\n// nested if\nif (temp > 0) {\n    if (temp === 30) {\n        console.log(\"Exactly 30\");\n    }\n}\n\n// switch\nlet day = 3;\nswitch(day) {\n    case 1: console.log(\"Monday\"); break;\n    case 2: console.log(\"Tuesday\"); break;\n    case 3: console.log(\"Wednesday\"); break;\n    default: console.log(\"Invalid day\");\n}\n\n// Coding:\n\n// Even/odd using if-else\nlet e = 10;\nif(e % 2 === 0) console.log(\"Even\");\nelse console.log(\"Odd\");\n\n// Positive/negative\nlet p1 = -10;\nif(p1 > 0) console.log(\"Positive\");\nelse if (p1 < 0) console.log(\"Negative\");\nelse console.log(\"Zero\");\n\n// Largest number\nlet a1 = 5, b1 = 10, c1 = 7;\nif(a1 >= b1 && a1 >= c1) console.log(a1);\nelse if(b1 >= a1 && b1 >= c1) console.log(b1);\nelse console.log(c1);\n\n// Grade calculator\nlet score = 85;\nif(score >= 90) console.log(\"A\");\nelse if(score >= 80) console.log(\"B\");\nelse if(score >= 70) console.log(\"C\");\nelse console.log(\"F\");\n\n// Login check\nlet userLoggedIn = true;\nif(userLoggedIn) console.log(\"Welcome\");\nelse console.log(\"Please Login\");\n\n// Age eligibility\nlet agePerson = 16;\nif(agePerson >= 18) console.log(\"Can Vote\");\nelse console.log(\"Cannot Vote\");\n\n// Leap year\nlet year = 2024;\nif ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {\n    console.log(\"Leap Year\");\n} else {\n    console.log(\"Not a Leap Year\");\n}\n\n// Vowel/consonant\nlet char = 'A'.toLowerCase();\nif (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {\n    console.log(\"Vowel\");\n} else {\n    console.log(\"Consonant\");\n}\n\n// Calculator using switch\nlet operator = '+';\nlet op1 = 10, op2 = 5;\nswitch(operator) {\n    case '+': console.log(op1 + op2); break;\n    case '-': console.log(op1 - op2); break;\n    case '*': console.log(op1 * op2); break;\n    case '/': console.log(op1 / op2); break;\n    default: console.log(\"Invalid operator\");\n}\n```",
    "question_en": "Code and practice for: 4. Conditions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// if, else, else if, nested if\nlet temp = 30;\nif (temp > 40) {\n    console.log(\"Too Hot\");\n} else if (temp > 25) {\n    console.log(\"Pleasant\");\n} else {\n    console.log(\"Cold\");\n}\n\n// nested if\nif (temp > 0) {\n    if (temp === 30) {\n        console.log(\"Exactly 30\");\n    }\n}\n\n// switch\nlet day = 3;\nswitch(day) {\n    case 1: console.log(\"Monday\"); break;\n    case 2: console.log(\"Tuesday\"); break;\n    case 3: console.log(\"Wednesday\"); break;\n    default: console.log(\"Invalid day\");\n}\n\n// Coding:\n\n// Even/odd using if-else\nlet e = 10;\nif(e % 2 === 0) console.log(\"Even\");\nelse console.log(\"Odd\");\n\n// Positive/negative\nlet p1 = -10;\nif(p1 > 0) console.log(\"Positive\");\nelse if (p1 < 0) console.log(\"Negative\");\nelse console.log(\"Zero\");\n\n// Largest number\nlet a1 = 5, b1 = 10, c1 = 7;\nif(a1 >= b1 && a1 >= c1) console.log(a1);\nelse if(b1 >= a1 && b1 >= c1) console.log(b1);\nelse console.log(c1);\n\n// Grade calculator\nlet score = 85;\nif(score >= 90) console.log(\"A\");\nelse if(score >= 80) console.log(\"B\");\nelse if(score >= 70) console.log(\"C\");\nelse console.log(\"F\");\n\n// Login check\nlet userLoggedIn = true;\nif(userLoggedIn) console.log(\"Welcome\");\nelse console.log(\"Please Login\");\n\n// Age eligibility\nlet agePerson = 16;\nif(agePerson >= 18) console.log(\"Can Vote\");\nelse console.log(\"Cannot Vote\");\n\n// Leap year\nlet year = 2024;\nif ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {\n    console.log(\"Leap Year\");\n} else {\n    console.log(\"Not a Leap Year\");\n}\n\n// Vowel/consonant\nlet char = 'A'.toLowerCase();\nif (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {\n    console.log(\"Vowel\");\n} else {\n    console.log(\"Consonant\");\n}\n\n// Calculator using switch\nlet operator = '+';\nlet op1 = 10, op2 = 5;\nswitch(operator) {\n    case '+': console.log(op1 + op2); break;\n    case '-': console.log(op1 - op2); break;\n    case '*': console.log(op1 * op2); break;\n    case '/': console.log(op1 / op2); break;\n    default: console.log(\"Invalid operator\");\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "5",
    "category": "5. Loops",
    "question_hi": "5. Loops par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// for loop\nfor (let i = 1; i <= 5; i++) {\n    console.log(i);\n}\n\n// while loop\nlet w = 1;\nwhile(w <= 5) {\n    console.log(w);\n    w++;\n}\n\n// do...while\nlet dw = 1;\ndo {\n    console.log(dw);\n    dw++;\n} while(dw <= 5);\n\n// break and continue\nfor(let i=1; i<=5; i++) {\n    if(i === 3) continue; // skips 3\n    if(i === 5) break; // stops at 5\n    console.log(i);\n}\n\n// Coding:\n\n// Print 1–10\nfor(let i=1; i<=10; i++) console.log(i);\n\n// Print 10–1\nfor(let i=10; i>=1; i--) console.log(i);\n\n// Even numbers\nfor(let i=1; i<=10; i++) {\n    if(i%2 === 0) console.log(i);\n}\n\n// Sum 1–100\nlet sum = 0;\nfor(let i=1; i<=100; i++) sum += i;\nconsole.log(\"Sum:\", sum);\n\n// Multiplication table (e.g. 5)\nfor(let i=1; i<=10; i++) {\n    console.log(`5 x ${i} = ${5*i}`);\n}\n\n// Factorial of 5\nlet fact = 1;\nfor(let i=1; i<=5; i++) fact *= i;\nconsole.log(\"Factorial:\", fact);\n\n// Count digits\nlet digitNum = 12345;\nlet countD = 0;\nwhile(digitNum > 0) {\n    digitNum = Math.floor(digitNum / 10);\n    countD++;\n}\nconsole.log(\"Digits:\", countD);\n\n// Reverse number\nlet revNum = 123;\nlet reversed = 0;\nwhile(revNum > 0) {\n    let remainder = revNum % 10;\n    reversed = reversed * 10 + remainder;\n    revNum = Math.floor(revNum / 10);\n}\nconsole.log(\"Reversed:\", reversed);\n\n// Fibonacci (first 10)\nlet f1 = 0, f2 = 1;\nconsole.log(f1);\nconsole.log(f2);\nfor(let i=3; i<=10; i++) {\n    let next = f1 + f2;\n    console.log(next);\n    f1 = f2;\n    f2 = next;\n}\n\n// Prime number check\nlet primeCheck = 7;\nlet isPrime = true;\nif(primeCheck <= 1) isPrime = false;\nfor(let i=2; i<primeCheck; i++) {\n    if(primeCheck % i === 0) {\n        isPrime = false;\n        break;\n    }\n}\nconsole.log(primeCheck + (isPrime ? \" is Prime\" : \" is not Prime\"));\n\n// Prime numbers 1–100\nfor(let i=2; i<=100; i++) {\n    let pFlag = true;\n    for(let j=2; j<i; j++) {\n        if(i % j === 0) {\n            pFlag = false;\n            break;\n        }\n    }\n    if(pFlag) console.log(i);\n}\n\n// Pattern printing\n// *\n// **\n// ***\nfor(let i=1; i<=3; i++) {\n    let row = \"\";\n    for(let j=1; j<=i; j++) {\n        row += \"*\";\n    }\n    console.log(row);\n}\n```",
    "question_en": "Code and practice for: 5. Loops",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// for loop\nfor (let i = 1; i <= 5; i++) {\n    console.log(i);\n}\n\n// while loop\nlet w = 1;\nwhile(w <= 5) {\n    console.log(w);\n    w++;\n}\n\n// do...while\nlet dw = 1;\ndo {\n    console.log(dw);\n    dw++;\n} while(dw <= 5);\n\n// break and continue\nfor(let i=1; i<=5; i++) {\n    if(i === 3) continue; // skips 3\n    if(i === 5) break; // stops at 5\n    console.log(i);\n}\n\n// Coding:\n\n// Print 1–10\nfor(let i=1; i<=10; i++) console.log(i);\n\n// Print 10–1\nfor(let i=10; i>=1; i--) console.log(i);\n\n// Even numbers\nfor(let i=1; i<=10; i++) {\n    if(i%2 === 0) console.log(i);\n}\n\n// Sum 1–100\nlet sum = 0;\nfor(let i=1; i<=100; i++) sum += i;\nconsole.log(\"Sum:\", sum);\n\n// Multiplication table (e.g. 5)\nfor(let i=1; i<=10; i++) {\n    console.log(`5 x ${i} = ${5*i}`);\n}\n\n// Factorial of 5\nlet fact = 1;\nfor(let i=1; i<=5; i++) fact *= i;\nconsole.log(\"Factorial:\", fact);\n\n// Count digits\nlet digitNum = 12345;\nlet countD = 0;\nwhile(digitNum > 0) {\n    digitNum = Math.floor(digitNum / 10);\n    countD++;\n}\nconsole.log(\"Digits:\", countD);\n\n// Reverse number\nlet revNum = 123;\nlet reversed = 0;\nwhile(revNum > 0) {\n    let remainder = revNum % 10;\n    reversed = reversed * 10 + remainder;\n    revNum = Math.floor(revNum / 10);\n}\nconsole.log(\"Reversed:\", reversed);\n\n// Fibonacci (first 10)\nlet f1 = 0, f2 = 1;\nconsole.log(f1);\nconsole.log(f2);\nfor(let i=3; i<=10; i++) {\n    let next = f1 + f2;\n    console.log(next);\n    f1 = f2;\n    f2 = next;\n}\n\n// Prime number check\nlet primeCheck = 7;\nlet isPrime = true;\nif(primeCheck <= 1) isPrime = false;\nfor(let i=2; i<primeCheck; i++) {\n    if(primeCheck % i === 0) {\n        isPrime = false;\n        break;\n    }\n}\nconsole.log(primeCheck + (isPrime ? \" is Prime\" : \" is not Prime\"));\n\n// Prime numbers 1–100\nfor(let i=2; i<=100; i++) {\n    let pFlag = true;\n    for(let j=2; j<i; j++) {\n        if(i % j === 0) {\n            pFlag = false;\n            break;\n        }\n    }\n    if(pFlag) console.log(i);\n}\n\n// Pattern printing\n// *\n// **\n// ***\nfor(let i=1; i<=3; i++) {\n    let row = \"\";\n    for(let j=1; j<=i; j++) {\n        row += \"*\";\n    }\n    console.log(row);\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "6",
    "category": "6. Functions",
    "question_hi": "6. Functions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// function declaration\r\nfunction sayHello() {\r\n    console.log(\"Hello from declaration\");\r\n}\r\n\r\n// function expression\r\nconst sayHi = function() {\r\n    console.log(\"Hi from expression\");\r\n};\r\n\r\n// arrow function\r\nconst sayHey = () => console.log(\"Hey from arrow\");\r\n\r\n// parameters and arguments\r\nfunction multiply(a, b) { // a, b are parameters\r\n    return a * b;\r\n}\r\nconsole.log(multiply(2, 3)); // 2, 3 are arguments\r\n\r\n// default parameters\r\nfunction greetUser(name = \"Guest\") {\r\n    console.log(\"Hello \" + name);\r\n}\r\n\r\n// rest parameters\r\nfunction sumAll(...numbers) {\r\n    return numbers.reduce((acc, curr) => acc + curr, 0);\r\n}\r\n\r\n// callback function & higher-order function\r\nfunction add(a, b) {\r\n  return a + b;\r\n}\r\n\r\nconst addArrow = (a, b) => a + b;\r\n\r\nfunction calculate(a, b, operation) { // calculate is HOF, operation is callback\r\n  return operation(a, b);\r\n}\r\nconsole.log(calculate(10, 5, add));\n```",
    "question_en": "Code and practice for: 6. Functions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// function declaration\r\nfunction sayHello() {\r\n    console.log(\"Hello from declaration\");\r\n}\r\n\r\n// function expression\r\nconst sayHi = function() {\r\n    console.log(\"Hi from expression\");\r\n};\r\n\r\n// arrow function\r\nconst sayHey = () => console.log(\"Hey from arrow\");\r\n\r\n// parameters and arguments\r\nfunction multiply(a, b) { // a, b are parameters\r\n    return a * b;\r\n}\r\nconsole.log(multiply(2, 3)); // 2, 3 are arguments\r\n\r\n// default parameters\r\nfunction greetUser(name = \"Guest\") {\r\n    console.log(\"Hello \" + name);\r\n}\r\n\r\n// rest parameters\r\nfunction sumAll(...numbers) {\r\n    return numbers.reduce((acc, curr) => acc + curr, 0);\r\n}\r\n\r\n// callback function & higher-order function\r\nfunction add(a, b) {\r\n  return a + b;\r\n}\r\n\r\nconst addArrow = (a, b) => a + b;\r\n\r\nfunction calculate(a, b, operation) { // calculate is HOF, operation is callback\r\n  return operation(a, b);\r\n}\r\nconsole.log(calculate(10, 5, add));\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "7",
    "category": "7. Scope",
    "question_hi": "7. Scope par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nlet globalVar = \"I am global\";\r\n\r\nfunction scopeTest() {\r\n    let functionVar = \"I am function scoped\";\r\n    if (true) {\r\n        let blockVar = \"I am block scoped\";\r\n        var notBlockScoped = \"I am var, so function scoped\";\r\n        const blockConst = \"I am block scoped const\";\r\n    }\r\n    // console.log(blockVar); // ReferenceError\r\n    console.log(notBlockScoped); // Accessible here!\r\n}\r\n\r\n// Lexical Scope & var vs let scope example\r\nvar aVar = 10;\r\nfunction testScope() {\r\n  var bVar = 20;\r\n  console.log(aVar); // 10 (accessible due to lexical scope)\r\n  console.log(bVar); // 20\r\n}\r\ntestScope();\r\n// console.log(bVar); // ReferenceError: bVar is not defined outside\n```",
    "question_en": "Code and practice for: 7. Scope",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nlet globalVar = \"I am global\";\r\n\r\nfunction scopeTest() {\r\n    let functionVar = \"I am function scoped\";\r\n    if (true) {\r\n        let blockVar = \"I am block scoped\";\r\n        var notBlockScoped = \"I am var, so function scoped\";\r\n        const blockConst = \"I am block scoped const\";\r\n    }\r\n    // console.log(blockVar); // ReferenceError\r\n    console.log(notBlockScoped); // Accessible here!\r\n}\r\n\r\n// Lexical Scope & var vs let scope example\r\nvar aVar = 10;\r\nfunction testScope() {\r\n  var bVar = 20;\r\n  console.log(aVar); // 10 (accessible due to lexical scope)\r\n  console.log(bVar); // 20\r\n}\r\ntestScope();\r\n// console.log(bVar); // ReferenceError: bVar is not defined outside\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "8",
    "category": "8. Hoisting 🔥",
    "question_hi": "8. Hoisting 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Explain: Hoisting moves declarations to the top of the scope before execution.\r\n\r\nconsole.log(h1); // undefined\r\nvar h1 = 10;\r\nconsole.log(h1); // 10\r\n\r\n// Internal working:\r\n// var h1;\r\n// console.log(h1);\r\n// h1 = 10;\r\n\r\n// console.log(h2); // ReferenceError: Cannot access 'h2' before initialization\r\nlet h2 = 10;\r\n\r\n// console.log(h3); // ReferenceError\r\nconst h3 = 10;\r\n\r\n// Function hoisting\r\nsayHoistedHello(); // \"Hello\" works because function declarations are fully hoisted\r\nfunction sayHoistedHello() {\r\n  console.log(\"Hello\");\r\n}\r\n\r\n// Function expression hoisting\r\n// sayHoistedHi(); // TypeError: sayHoistedHi is not a function (it is undefined)\r\nvar sayHoistedHi = function () {\r\n  console.log(\"Hello\");\r\n};\n```",
    "question_en": "Code and practice for: 8. Hoisting 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Explain: Hoisting moves declarations to the top of the scope before execution.\r\n\r\nconsole.log(h1); // undefined\r\nvar h1 = 10;\r\nconsole.log(h1); // 10\r\n\r\n// Internal working:\r\n// var h1;\r\n// console.log(h1);\r\n// h1 = 10;\r\n\r\n// console.log(h2); // ReferenceError: Cannot access 'h2' before initialization\r\nlet h2 = 10;\r\n\r\n// console.log(h3); // ReferenceError\r\nconst h3 = 10;\r\n\r\n// Function hoisting\r\nsayHoistedHello(); // \"Hello\" works because function declarations are fully hoisted\r\nfunction sayHoistedHello() {\r\n  console.log(\"Hello\");\r\n}\r\n\r\n// Function expression hoisting\r\n// sayHoistedHi(); // TypeError: sayHoistedHi is not a function (it is undefined)\r\nvar sayHoistedHi = function () {\r\n  console.log(\"Hello\");\r\n};\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "9",
    "category": "9. Temporal Dead Zone",
    "question_hi": "9. Temporal Dead Zone par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Explain: TDZ is the phase between the creation of a variable (let/const) and its initialization where it cannot be accessed.\r\n// console.log(tdzLet); // ReferenceError due to TDZ\r\nlet tdzLet = 10;\r\n\r\n// console.log(tdzConst); // ReferenceError due to TDZ\r\nconst tdzConst = 10;\n```",
    "question_en": "Code and practice for: 9. Temporal Dead Zone",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Explain: TDZ is the phase between the creation of a variable (let/const) and its initialization where it cannot be accessed.\r\n// console.log(tdzLet); // ReferenceError due to TDZ\r\nlet tdzLet = 10;\r\n\r\n// console.log(tdzConst); // ReferenceError due to TDZ\r\nconst tdzConst = 10;\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "10",
    "category": "10. Closures 🔥🔥🔥",
    "question_hi": "10. Closures 🔥🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Explain: A function bundled together with its lexical environment (variables from outer scope).\r\nfunction outer() {\r\n  let count = 0;\r\n\r\n  return function inner() {\r\n    count++;\r\n    console.log(count);\r\n  };\r\n}\r\n\r\nconst counter = outer();\r\ncounter(); // 1\r\ncounter(); // 2\r\ncounter(); // 3\r\n\r\n// Private counter using closure\r\nfunction createPrivateCounter() {\r\n    let privateCount = 0;\r\n    return {\r\n        increment: function() { privateCount++; return privateCount; },\r\n        decrement: function() { privateCount--; return privateCount; },\r\n        getCount: function() { return privateCount; }\r\n    };\r\n}\r\nconst pCounter = createPrivateCounter();\r\nconsole.log(pCounter.increment()); // 1\n```",
    "question_en": "Code and practice for: 10. Closures 🔥🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Explain: A function bundled together with its lexical environment (variables from outer scope).\r\nfunction outer() {\r\n  let count = 0;\r\n\r\n  return function inner() {\r\n    count++;\r\n    console.log(count);\r\n  };\r\n}\r\n\r\nconst counter = outer();\r\ncounter(); // 1\r\ncounter(); // 2\r\ncounter(); // 3\r\n\r\n// Private counter using closure\r\nfunction createPrivateCounter() {\r\n    let privateCount = 0;\r\n    return {\r\n        increment: function() { privateCount++; return privateCount; },\r\n        decrement: function() { privateCount--; return privateCount; },\r\n        getCount: function() { return privateCount; }\r\n    };\r\n}\r\nconst pCounter = createPrivateCounter();\r\nconsole.log(pCounter.increment()); // 1\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "11",
    "category": "11. IIFE (Immediately Invoked Function Expression)",
    "question_hi": "11. IIFE (Immediately Invoked Function Expression) par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n(function () {\r\n  console.log(\"Hello from Normal IIFE\");\r\n})();\r\n\r\n// Arrow IIFE\r\n(() => {\r\n  console.log(\"Hello from Arrow IIFE\");\r\n})();\n```",
    "question_en": "Code and practice for: 11. IIFE (Immediately Invoked Function Expression)",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n(function () {\r\n  console.log(\"Hello from Normal IIFE\");\r\n})();\r\n\r\n// Arrow IIFE\r\n(() => {\r\n  console.log(\"Hello from Arrow IIFE\");\r\n})();\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "12",
    "category": "12. this",
    "question_hi": "12. this par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst thisUser = {\r\n  name: \"Bijay\",\r\n  sayName() {\r\n    // Normal function: 'this' refers to the object calling it\r\n    console.log(this.name); // \"Bijay\"\r\n  }\r\n};\r\nthisUser.sayName();\r\n\r\nconst thisUserArrow = {\r\n  name: \"Bijay\",\r\n  sayName: () => {\r\n    // Arrow function: 'this' refers to the surrounding lexical scope (window/global)\r\n    console.log(this.name); // undefined\r\n  }\r\n};\r\nthisUserArrow.sayName();\n```",
    "question_en": "Code and practice for: 12. this",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst thisUser = {\r\n  name: \"Bijay\",\r\n  sayName() {\r\n    // Normal function: 'this' refers to the object calling it\r\n    console.log(this.name); // \"Bijay\"\r\n  }\r\n};\r\nthisUser.sayName();\r\n\r\nconst thisUserArrow = {\r\n  name: \"Bijay\",\r\n  sayName: () => {\r\n    // Arrow function: 'this' refers to the surrounding lexical scope (window/global)\r\n    console.log(this.name); // undefined\r\n  }\r\n};\r\nthisUserArrow.sayName();\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "13",
    "category": "13. call / apply / bind 🔥",
    "question_hi": "13. call / apply / bind 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst callUser = { name: \"Bijay\" };\r\n\r\nfunction greetWithAge(age) {\r\n  console.log(this.name, age);\r\n}\r\n\r\n// call: passes arguments individually\r\ngreetWithAge.call(callUser, 22); // Bijay 22\r\n\r\n// apply: passes arguments as an array\r\ngreetWithAge.apply(callUser, [22]); // Bijay 22\r\n\r\n// bind: returns a new function with bound 'this'\r\nconst boundFn = greetWithAge.bind(callUser, 22);\r\nboundFn(); // Bijay 22\r\n\r\n// Borrow another object's method\r\nconst person1 = { name: \"Rahul\", greet: function() { console.log(\"Hi \" + this.name); } };\r\nconst person2 = { name: \"Rohan\" };\r\nperson1.greet.call(person2); // Hi Rohan\n```",
    "question_en": "Code and practice for: 13. call / apply / bind 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst callUser = { name: \"Bijay\" };\r\n\r\nfunction greetWithAge(age) {\r\n  console.log(this.name, age);\r\n}\r\n\r\n// call: passes arguments individually\r\ngreetWithAge.call(callUser, 22); // Bijay 22\r\n\r\n// apply: passes arguments as an array\r\ngreetWithAge.apply(callUser, [22]); // Bijay 22\r\n\r\n// bind: returns a new function with bound 'this'\r\nconst boundFn = greetWithAge.bind(callUser, 22);\r\nboundFn(); // Bijay 22\r\n\r\n// Borrow another object's method\r\nconst person1 = { name: \"Rahul\", greet: function() { console.log(\"Hi \" + this.name); } };\r\nconst person2 = { name: \"Rohan\" };\r\nperson1.greet.call(person2); // Hi Rohan\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "14",
    "category": "14. Arrays",
    "question_hi": "14. Arrays par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nlet arr = [1, 2, 3];\r\narr.push(4); // [1, 2, 3, 4] (Adds to end)\r\narr.pop(); // [1, 2, 3] (Removes from end)\r\narr.unshift(0); // [0, 1, 2, 3] (Adds to start)\r\narr.shift(); // [1, 2, 3] (Removes from start)\r\n\r\n// slice: extracts part of array without modifying original\r\nconsole.log(arr.slice(1, 3)); // [2, 3]\r\n\r\n// splice: modifies original array (start, deleteCount, ...itemsToAdd)\r\narr.splice(1, 1, 99); // [1, 99, 3]\r\n\r\n// concat\r\nlet arr2 = [4, 5];\r\nconsole.log(arr.concat(arr2)); // [1, 99, 3, 4, 5]\r\n\r\n// includes\r\nconsole.log(arr.includes(99)); // true\r\n\r\n// indexOf\r\nconsole.log(arr.indexOf(3)); // 2\r\n\r\n// find (returns first matching element)\r\nconsole.log(arr.find(x => x > 50)); // 99\r\n\r\n// findIndex\r\nconsole.log(arr.findIndex(x => x > 50)); // 1\r\n\r\n// some (returns true if at least one matches)\r\nconsole.log(arr.some(x => x > 100)); // false\r\n\r\n// every (returns true if ALL match)\r\nconsole.log(arr.every(x => x > 0)); // true\r\n\r\n// filter\r\nconsole.log(arr.filter(x => x < 10)); // [1, 3]\r\n\r\n// map\r\nconsole.log(arr.map(x => x * 2)); // [2, 198, 6]\r\n\r\n// reduce\r\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0)); // 103\r\n\r\n// forEach\r\narr.forEach(x => console.log(x));\r\n\r\n// sort (modifies original, sorts alphabetically by default)\r\nlet sortArr = [3, 1, 10, 2];\r\nsortArr.sort((a, b) => a - b); // Ascending: [1, 2, 3, 10]\r\n\r\n// reverse\r\nsortArr.reverse(); // [10, 3, 2, 1]\r\n\r\n// join\r\nconsole.log(sortArr.join(\"-\")); // \"10-3-2-1\"\n```",
    "question_en": "Code and practice for: 14. Arrays",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nlet arr = [1, 2, 3];\r\narr.push(4); // [1, 2, 3, 4] (Adds to end)\r\narr.pop(); // [1, 2, 3] (Removes from end)\r\narr.unshift(0); // [0, 1, 2, 3] (Adds to start)\r\narr.shift(); // [1, 2, 3] (Removes from start)\r\n\r\n// slice: extracts part of array without modifying original\r\nconsole.log(arr.slice(1, 3)); // [2, 3]\r\n\r\n// splice: modifies original array (start, deleteCount, ...itemsToAdd)\r\narr.splice(1, 1, 99); // [1, 99, 3]\r\n\r\n// concat\r\nlet arr2 = [4, 5];\r\nconsole.log(arr.concat(arr2)); // [1, 99, 3, 4, 5]\r\n\r\n// includes\r\nconsole.log(arr.includes(99)); // true\r\n\r\n// indexOf\r\nconsole.log(arr.indexOf(3)); // 2\r\n\r\n// find (returns first matching element)\r\nconsole.log(arr.find(x => x > 50)); // 99\r\n\r\n// findIndex\r\nconsole.log(arr.findIndex(x => x > 50)); // 1\r\n\r\n// some (returns true if at least one matches)\r\nconsole.log(arr.some(x => x > 100)); // false\r\n\r\n// every (returns true if ALL match)\r\nconsole.log(arr.every(x => x > 0)); // true\r\n\r\n// filter\r\nconsole.log(arr.filter(x => x < 10)); // [1, 3]\r\n\r\n// map\r\nconsole.log(arr.map(x => x * 2)); // [2, 198, 6]\r\n\r\n// reduce\r\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0)); // 103\r\n\r\n// forEach\r\narr.forEach(x => console.log(x));\r\n\r\n// sort (modifies original, sorts alphabetically by default)\r\nlet sortArr = [3, 1, 10, 2];\r\nsortArr.sort((a, b) => a - b); // Ascending: [1, 2, 3, 10]\r\n\r\n// reverse\r\nsortArr.reverse(); // [10, 3, 2, 1]\r\n\r\n// join\r\nconsole.log(sortArr.join(\"-\")); // \"10-3-2-1\"\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "15",
    "category": "15. Array Coding Questions 🔥🔥",
    "question_hi": "15. Array Coding Questions 🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nlet nums = [1, 5, 2, 10, 5, 8, -2, 12, 10];\r\n\r\n// Find largest & smallest number\r\nconsole.log(\"Largest:\", Math.max(...nums));\r\nconsole.log(\"Smallest:\", Math.min(...nums));\r\n\r\n// Sum array & Average\r\nlet sumArr = nums.reduce((a, b) => a + b, 0);\r\nconsole.log(\"Sum:\", sumArr, \"Avg:\", sumArr / nums.length);\r\n\r\n// Reverse array manually\r\nlet revArr = [];\r\nfor(let i = nums.length - 1; i >= 0; i--) revArr.push(nums[i]);\r\n\r\n// Remove duplicates\r\nlet uniqueNums = [...new Set(nums)];\r\n\r\n// Find duplicate values\r\nlet duplicates = nums.filter((val, index, self) => self.indexOf(val) !== index);\r\n\r\n// Count occurrences\r\nlet countOcc = nums.reduce((acc, curr) => {\r\n    acc[curr] = (acc[curr] || 0) + 1;\r\n    return acc;\r\n}, {});\r\n\r\n// Find even / odd numbers\r\nlet evens = nums.filter(x => x % 2 === 0);\r\nlet odds = nums.filter(x => x % 2 !== 0);\r\n\r\n// Convert array into string\r\nconsole.log(nums.toString());\r\n\r\n// map tasks\r\nlet doubled = nums.map(x => x * 2);\r\nlet squared = nums.map(x => x * x);\r\nlet namesArr = [\"bijay\", \"rahul\"];\r\nconsole.log(namesArr.map(name => name.toUpperCase()));\r\n\r\nlet usersObj = [{name: \"A\", age: 20}, {name: \"B\", age: 25}];\r\nlet userNames = usersObj.map(user => user.name);\r\nlet addedProp = usersObj.map(user => ({...user, isActive: true}));\r\n\r\n// filter tasks\r\nlet adults = usersObj.filter(user => user.age >= 18);\r\nlet expensiveProducts = [{price: 50}, {price: 150}].filter(p => p.price > 100);\r\n\r\n// reduce tasks\r\nlet maxReduce = nums.reduce((max, curr) => curr > max ? curr : max, nums[0]);\r\nlet cart = [{price: 10}, {price: 20}];\r\nlet cartTotal = cart.reduce((sum, item) => sum + item.price, 0);\r\n\r\n// sort tasks\r\nnums.sort((a, b) => a - b); // Ascending\r\nnums.sort((a, b) => b - a); // Descending\r\nusersObj.sort((a, b) => a.age - b.age); // Sort users by age\n```",
    "question_en": "Code and practice for: 15. Array Coding Questions 🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nlet nums = [1, 5, 2, 10, 5, 8, -2, 12, 10];\r\n\r\n// Find largest & smallest number\r\nconsole.log(\"Largest:\", Math.max(...nums));\r\nconsole.log(\"Smallest:\", Math.min(...nums));\r\n\r\n// Sum array & Average\r\nlet sumArr = nums.reduce((a, b) => a + b, 0);\r\nconsole.log(\"Sum:\", sumArr, \"Avg:\", sumArr / nums.length);\r\n\r\n// Reverse array manually\r\nlet revArr = [];\r\nfor(let i = nums.length - 1; i >= 0; i--) revArr.push(nums[i]);\r\n\r\n// Remove duplicates\r\nlet uniqueNums = [...new Set(nums)];\r\n\r\n// Find duplicate values\r\nlet duplicates = nums.filter((val, index, self) => self.indexOf(val) !== index);\r\n\r\n// Count occurrences\r\nlet countOcc = nums.reduce((acc, curr) => {\r\n    acc[curr] = (acc[curr] || 0) + 1;\r\n    return acc;\r\n}, {});\r\n\r\n// Find even / odd numbers\r\nlet evens = nums.filter(x => x % 2 === 0);\r\nlet odds = nums.filter(x => x % 2 !== 0);\r\n\r\n// Convert array into string\r\nconsole.log(nums.toString());\r\n\r\n// map tasks\r\nlet doubled = nums.map(x => x * 2);\r\nlet squared = nums.map(x => x * x);\r\nlet namesArr = [\"bijay\", \"rahul\"];\r\nconsole.log(namesArr.map(name => name.toUpperCase()));\r\n\r\nlet usersObj = [{name: \"A\", age: 20}, {name: \"B\", age: 25}];\r\nlet userNames = usersObj.map(user => user.name);\r\nlet addedProp = usersObj.map(user => ({...user, isActive: true}));\r\n\r\n// filter tasks\r\nlet adults = usersObj.filter(user => user.age >= 18);\r\nlet expensiveProducts = [{price: 50}, {price: 150}].filter(p => p.price > 100);\r\n\r\n// reduce tasks\r\nlet maxReduce = nums.reduce((max, curr) => curr > max ? curr : max, nums[0]);\r\nlet cart = [{price: 10}, {price: 20}];\r\nlet cartTotal = cart.reduce((sum, item) => sum + item.price, 0);\r\n\r\n// sort tasks\r\nnums.sort((a, b) => a - b); // Ascending\r\nnums.sort((a, b) => b - a); // Descending\r\nusersObj.sort((a, b) => a.age - b.age); // Sort users by age\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "16",
    "category": "16. Objects",
    "question_hi": "16. Objects par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// create object\r\nconst objUser = {\r\n  name: \"Bijay\",\r\n  age: 22,\r\n  \"home address\": \"Delhi\" // string key for spaces\r\n};\r\n\r\n// access property\r\nconsole.log(objUser.name); // Dot notation\r\nconsole.log(objUser[\"home address\"]); // Bracket notation\r\n\r\n// modify property\r\nobjUser.age = 23;\r\n\r\n// delete property\r\ndelete objUser[\"home address\"];\r\n\r\n// nested object\r\nconst nestedUser = {\r\n  name: \"Bijay\",\r\n  address: {\r\n    city: \"Delhi\",\r\n    zip: \"110001\"\r\n  }\r\n};\r\nconsole.log(nestedUser.address.city);\r\n\r\n// dynamic / computed property\r\nlet keyName = \"status\";\r\nconst dynamicObj = {\r\n  [keyName]: \"Active\"\r\n};\r\n\r\n// object destructuring\r\nconst { name: uName, age: uAge } = objUser; // renaming variables\r\n\r\n// nested destructuring\r\nconst { address: { city: uCity } } = nestedUser;\r\n\r\n// object spread\r\nconst updatedUser = { ...objUser, country: \"India\" };\r\n\r\n// object rest\r\nconst { age: omittedAge, ...restProps } = updatedUser;\r\nconsole.log(restProps); // contains name, country\n```",
    "question_en": "Code and practice for: 16. Objects",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// create object\r\nconst objUser = {\r\n  name: \"Bijay\",\r\n  age: 22,\r\n  \"home address\": \"Delhi\" // string key for spaces\r\n};\r\n\r\n// access property\r\nconsole.log(objUser.name); // Dot notation\r\nconsole.log(objUser[\"home address\"]); // Bracket notation\r\n\r\n// modify property\r\nobjUser.age = 23;\r\n\r\n// delete property\r\ndelete objUser[\"home address\"];\r\n\r\n// nested object\r\nconst nestedUser = {\r\n  name: \"Bijay\",\r\n  address: {\r\n    city: \"Delhi\",\r\n    zip: \"110001\"\r\n  }\r\n};\r\nconsole.log(nestedUser.address.city);\r\n\r\n// dynamic / computed property\r\nlet keyName = \"status\";\r\nconst dynamicObj = {\r\n  [keyName]: \"Active\"\r\n};\r\n\r\n// object destructuring\r\nconst { name: uName, age: uAge } = objUser; // renaming variables\r\n\r\n// nested destructuring\r\nconst { address: { city: uCity } } = nestedUser;\r\n\r\n// object spread\r\nconst updatedUser = { ...objUser, country: \"India\" };\r\n\r\n// object rest\r\nconst { age: omittedAge, ...restProps } = updatedUser;\r\nconsole.log(restProps); // contains name, country\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "17",
    "category": "17. Object Methods 🔥",
    "question_hi": "17. Object Methods 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst sampleObj = { a: 1, b: 2, c: 3 };\r\n\r\n// Object.keys()\r\nconsole.log(Object.keys(sampleObj)); // [\"a\", \"b\", \"c\"]\r\n\r\n// Object.values()\r\nconsole.log(Object.values(sampleObj)); // [1, 2, 3]\r\n\r\n// Object.entries()\r\nconsole.log(Object.entries(sampleObj)); // [[\"a\",1], [\"b\",2], [\"c\",3]]\r\n\r\n// Object.assign() - merge\r\nconst target = { x: 10 };\r\nObject.assign(target, sampleObj); \r\n\r\n// Object.freeze() - no adding, modifying, deleting\r\nconst frozen = Object.freeze({ prop: 1 });\r\n// frozen.prop = 2; // Fails silently (or error in strict mode)\r\n\r\n// Object.seal() - no adding/deleting, but modifying IS allowed\r\nconst sealed = Object.seal({ prop: 1 });\r\nsealed.prop = 2; // Works!\r\n\r\n// convert object into array\r\nlet entriesArr = Object.entries(sampleObj);\r\n\r\n// convert array into object\r\nlet backToObj = Object.fromEntries(entriesArr);\r\n\r\n// loop through object\r\nfor(let key in sampleObj) {\r\n  console.log(key, sampleObj[key]);\r\n}\r\n\r\n// count object properties\r\nconsole.log(Object.keys(sampleObj).length);\r\n\r\n// merge two objects\r\nlet merged = { ...objUser, ...sampleObj };\r\n\r\n// clone object\r\nlet cloneObj = { ...sampleObj };\n```",
    "question_en": "Code and practice for: 17. Object Methods 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst sampleObj = { a: 1, b: 2, c: 3 };\r\n\r\n// Object.keys()\r\nconsole.log(Object.keys(sampleObj)); // [\"a\", \"b\", \"c\"]\r\n\r\n// Object.values()\r\nconsole.log(Object.values(sampleObj)); // [1, 2, 3]\r\n\r\n// Object.entries()\r\nconsole.log(Object.entries(sampleObj)); // [[\"a\",1], [\"b\",2], [\"c\",3]]\r\n\r\n// Object.assign() - merge\r\nconst target = { x: 10 };\r\nObject.assign(target, sampleObj); \r\n\r\n// Object.freeze() - no adding, modifying, deleting\r\nconst frozen = Object.freeze({ prop: 1 });\r\n// frozen.prop = 2; // Fails silently (or error in strict mode)\r\n\r\n// Object.seal() - no adding/deleting, but modifying IS allowed\r\nconst sealed = Object.seal({ prop: 1 });\r\nsealed.prop = 2; // Works!\r\n\r\n// convert object into array\r\nlet entriesArr = Object.entries(sampleObj);\r\n\r\n// convert array into object\r\nlet backToObj = Object.fromEntries(entriesArr);\r\n\r\n// loop through object\r\nfor(let key in sampleObj) {\r\n  console.log(key, sampleObj[key]);\r\n}\r\n\r\n// count object properties\r\nconsole.log(Object.keys(sampleObj).length);\r\n\r\n// merge two objects\r\nlet merged = { ...objUser, ...sampleObj };\r\n\r\n// clone object\r\nlet cloneObj = { ...sampleObj };\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "18",
    "category": "18. Spread / Rest",
    "question_hi": "18. Spread / Rest par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Array spread\r\nconst arrA = [1, 2, 3];\r\nconst arrB = [...arrA, 4, 5];\r\n\r\n// Object spread\r\nconst userA = { name: \"Bijay\" };\r\nconst userB = { ...userA, age: 22 };\r\n\r\n// Rest\r\nfunction sumRest(...numbers) {\r\n  return numbers.reduce((a, b) => a + b, 0);\r\n}\n```",
    "question_en": "Code and practice for: 18. Spread / Rest",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Array spread\r\nconst arrA = [1, 2, 3];\r\nconst arrB = [...arrA, 4, 5];\r\n\r\n// Object spread\r\nconst userA = { name: \"Bijay\" };\r\nconst userB = { ...userA, age: 22 };\r\n\r\n// Rest\r\nfunction sumRest(...numbers) {\r\n  return numbers.reduce((a, b) => a + b, 0);\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "19",
    "category": "19. Destructuring",
    "question_hi": "19. Destructuring par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Array destructuring\r\nconst [d1, d2, , d4] = [10, 20, 30, 40]; // skips 30\r\n\r\n// Object destructuring\r\nconst { name: dName, age: dAge } = userB;\r\n\r\n// Nested\r\nconst dUser = { address: { city: \"Noida\" } };\r\nconst { address: { city: destCity } } = dUser;\r\n\r\n// Function parameters destructuring\r\nfunction greetDest({ name, age }) {\r\n  console.log(name, age);\r\n}\r\ngreetDest({ name: \"Bijay\", age: 22 });\n```",
    "question_en": "Code and practice for: 19. Destructuring",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Array destructuring\r\nconst [d1, d2, , d4] = [10, 20, 30, 40]; // skips 30\r\n\r\n// Object destructuring\r\nconst { name: dName, age: dAge } = userB;\r\n\r\n// Nested\r\nconst dUser = { address: { city: \"Noida\" } };\r\nconst { address: { city: destCity } } = dUser;\r\n\r\n// Function parameters destructuring\r\nfunction greetDest({ name, age }) {\r\n  console.log(name, age);\r\n}\r\ngreetDest({ name: \"Bijay\", age: 22 });\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "20",
    "category": "20. String Coding",
    "question_hi": "20. String Coding par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nlet str = \"Hello Javascript\";\r\n\r\n// reverse string\r\nlet revStr = str.split(\"\").reverse().join(\"\");\r\n\r\n// palindrome check\r\nlet isPalindrome = (s) => s === s.split(\"\").reverse().join(\"\");\r\n\r\n// count characters (excluding spaces)\r\nlet charCount = str.replace(/\\s/g, \"\").length;\r\n\r\n// count vowels\r\nlet vowelsCount = (str.match(/[aeiou]/gi) || []).length;\r\n\r\n// remove spaces\r\nlet noSpaces = str.replaceAll(\" \", \"\");\r\n\r\n// capitalize first letter\r\nlet capFirst = str.charAt(0).toUpperCase() + str.slice(1);\r\n\r\n// capitalize every word\r\nlet capEvery = str.split(\" \").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(\" \");\r\n\r\n// check substring\r\nconsole.log(str.includes(\"Java\"));\r\n\r\n// count occurrence of a char 'a'\r\nlet occCount = str.split(\"a\").length - 1;\r\n\r\n// remove duplicate characters\r\nlet uniqueChars = [...new Set(str)].join(\"\");\r\n\r\n// longest word\r\nlet longestWord = str.split(\" \").reduce((longest, current) => current.length > longest.length ? current : longest, \"\");\r\n\r\n// shortest word\r\nlet shortestWord = str.split(\" \").reduce((shortest, current) => current.length < shortest.length ? current : shortest, str);\r\n\r\n// Methods:\r\nconsole.log(str.length);\r\nconsole.log(str.charAt(0));\r\nconsole.log(str.indexOf(\"o\"));\r\nconsole.log(str.lastIndexOf(\"a\"));\r\nconsole.log(str.slice(0, 5));\r\nconsole.log(str.substring(0, 5));\r\nconsole.log(str.split(\" \"));\r\nconsole.log(str.replace(\"Hello\", \"Hi\"));\r\nconsole.log(str.trim()); // removes start/end spaces\r\nconsole.log(str.startsWith(\"Hel\"));\r\nconsole.log(str.endsWith(\"pt\"));\n```",
    "question_en": "Code and practice for: 20. String Coding",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nlet str = \"Hello Javascript\";\r\n\r\n// reverse string\r\nlet revStr = str.split(\"\").reverse().join(\"\");\r\n\r\n// palindrome check\r\nlet isPalindrome = (s) => s === s.split(\"\").reverse().join(\"\");\r\n\r\n// count characters (excluding spaces)\r\nlet charCount = str.replace(/\\s/g, \"\").length;\r\n\r\n// count vowels\r\nlet vowelsCount = (str.match(/[aeiou]/gi) || []).length;\r\n\r\n// remove spaces\r\nlet noSpaces = str.replaceAll(\" \", \"\");\r\n\r\n// capitalize first letter\r\nlet capFirst = str.charAt(0).toUpperCase() + str.slice(1);\r\n\r\n// capitalize every word\r\nlet capEvery = str.split(\" \").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(\" \");\r\n\r\n// check substring\r\nconsole.log(str.includes(\"Java\"));\r\n\r\n// count occurrence of a char 'a'\r\nlet occCount = str.split(\"a\").length - 1;\r\n\r\n// remove duplicate characters\r\nlet uniqueChars = [...new Set(str)].join(\"\");\r\n\r\n// longest word\r\nlet longestWord = str.split(\" \").reduce((longest, current) => current.length > longest.length ? current : longest, \"\");\r\n\r\n// shortest word\r\nlet shortestWord = str.split(\" \").reduce((shortest, current) => current.length < shortest.length ? current : shortest, str);\r\n\r\n// Methods:\r\nconsole.log(str.length);\r\nconsole.log(str.charAt(0));\r\nconsole.log(str.indexOf(\"o\"));\r\nconsole.log(str.lastIndexOf(\"a\"));\r\nconsole.log(str.slice(0, 5));\r\nconsole.log(str.substring(0, 5));\r\nconsole.log(str.split(\" \"));\r\nconsole.log(str.replace(\"Hello\", \"Hi\"));\r\nconsole.log(str.trim()); // removes start/end spaces\r\nconsole.log(str.startsWith(\"Hel\"));\r\nconsole.log(str.endsWith(\"pt\"));\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "21",
    "category": "21. Number Coding",
    "question_hi": "21. Number Coding par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nlet numMethods = 5.67;\r\nconsole.log(Math.floor(numMethods)); // 5\r\nconsole.log(Math.ceil(numMethods)); // 6\r\nconsole.log(Math.round(numMethods)); // 6\r\nconsole.log(Math.random()); // between 0 and 1\r\nconsole.log(Math.max(1, 2, 3)); // 3\r\nconsole.log(Math.min(1, 2, 3)); // 1\r\nconsole.log(Math.abs(-10)); // 10\r\nconsole.log(Math.pow(2, 3)); // 8\r\n\r\n// Armstrong Number check (e.g., 153 = 1^3 + 5^3 + 3^3)\r\nfunction isArmstrong(num) {\r\n  let sum = 0;\r\n  let temp = num;\r\n  let digits = num.toString().length;\r\n  while (temp > 0) {\r\n    let remainder = temp % 10;\r\n    sum += Math.pow(remainder, digits);\r\n    temp = Math.floor(temp / 10);\r\n  }\r\n  return sum === num;\r\n}\r\n\r\n// Palindrome number\r\nfunction isNumPalindrome(num) {\r\n  let reversed = parseInt(num.toString().split(\"\").reverse().join(\"\"));\r\n  return num === reversed;\r\n}\r\n\r\n// Sum digits\r\nfunction sumOfDigits(num) {\r\n  return num.toString().split(\"\").reduce((sum, d) => sum + parseInt(d), 0);\r\n}\n```",
    "question_en": "Code and practice for: 21. Number Coding",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nlet numMethods = 5.67;\r\nconsole.log(Math.floor(numMethods)); // 5\r\nconsole.log(Math.ceil(numMethods)); // 6\r\nconsole.log(Math.round(numMethods)); // 6\r\nconsole.log(Math.random()); // between 0 and 1\r\nconsole.log(Math.max(1, 2, 3)); // 3\r\nconsole.log(Math.min(1, 2, 3)); // 1\r\nconsole.log(Math.abs(-10)); // 10\r\nconsole.log(Math.pow(2, 3)); // 8\r\n\r\n// Armstrong Number check (e.g., 153 = 1^3 + 5^3 + 3^3)\r\nfunction isArmstrong(num) {\r\n  let sum = 0;\r\n  let temp = num;\r\n  let digits = num.toString().length;\r\n  while (temp > 0) {\r\n    let remainder = temp % 10;\r\n    sum += Math.pow(remainder, digits);\r\n    temp = Math.floor(temp / 10);\r\n  }\r\n  return sum === num;\r\n}\r\n\r\n// Palindrome number\r\nfunction isNumPalindrome(num) {\r\n  let reversed = parseInt(num.toString().split(\"\").reverse().join(\"\"));\r\n  return num === reversed;\r\n}\r\n\r\n// Sum digits\r\nfunction sumOfDigits(num) {\r\n  return num.toString().split(\"\").reduce((sum, d) => sum + parseInt(d), 0);\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "22",
    "category": "22. Date",
    "question_hi": "22. Date par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nlet now = new Date();\r\nconsole.log(now); // current date & time\r\nconsole.log(now.getDate()); // day of month (1-31)\r\nconsole.log(now.getDay()); // day of week (0-6, 0 is Sunday)\r\nconsole.log(now.getMonth()); // month (0-11, 0 is Jan)\r\nconsole.log(now.getFullYear()); // year (e.g. 2024)\r\nconsole.log(now.getTime()); // timestamp in ms since 1970\r\n\r\n// calculate age\r\nfunction calculateAge(dob) {\r\n  let diff_ms = Date.now() - new Date(dob).getTime();\r\n  let age_dt = new Date(diff_ms);\r\n  return Math.abs(age_dt.getUTCFullYear() - 1970);\r\n}\r\n\r\n// difference between two dates in days\r\nlet date1 = new Date(\"2024-01-01\");\r\nlet date2 = new Date(\"2024-01-10\");\r\nlet diffInDays = (date2 - date1) / (1000 * 60 * 60 * 24);\r\nconsole.log(diffInDays);\n```",
    "question_en": "Code and practice for: 22. Date",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nlet now = new Date();\r\nconsole.log(now); // current date & time\r\nconsole.log(now.getDate()); // day of month (1-31)\r\nconsole.log(now.getDay()); // day of week (0-6, 0 is Sunday)\r\nconsole.log(now.getMonth()); // month (0-11, 0 is Jan)\r\nconsole.log(now.getFullYear()); // year (e.g. 2024)\r\nconsole.log(now.getTime()); // timestamp in ms since 1970\r\n\r\n// calculate age\r\nfunction calculateAge(dob) {\r\n  let diff_ms = Date.now() - new Date(dob).getTime();\r\n  let age_dt = new Date(diff_ms);\r\n  return Math.abs(age_dt.getUTCFullYear() - 1970);\r\n}\r\n\r\n// difference between two dates in days\r\nlet date1 = new Date(\"2024-01-01\");\r\nlet date2 = new Date(\"2024-01-10\");\r\nlet diffInDays = (date2 - date1) / (1000 * 60 * 60 * 24);\r\nconsole.log(diffInDays);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "23",
    "category": "23. JSON",
    "question_hi": "23. JSON par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst jsonUser = { name: \"Bijay\", age: 22 };\r\n\r\n// Convert Object to JSON String\r\nconst jsonString = JSON.stringify(jsonUser);\r\nconsole.log(jsonString); // '{\"name\":\"Bijay\",\"age\":22}'\r\n\r\n// Convert JSON String to Object\r\nconst parsedObj = JSON.parse(jsonString);\r\nconsole.log(parsedObj.name); // \"Bijay\"\n```",
    "question_en": "Code and practice for: 23. JSON",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst jsonUser = { name: \"Bijay\", age: 22 };\r\n\r\n// Convert Object to JSON String\r\nconst jsonString = JSON.stringify(jsonUser);\r\nconsole.log(jsonString); // '{\"name\":\"Bijay\",\"age\":22}'\r\n\r\n// Convert JSON String to Object\r\nconst parsedObj = JSON.parse(jsonString);\r\nconsole.log(parsedObj.name); // \"Bijay\"\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "24",
    "category": "24. DOM 🔥🔥🔥",
    "question_hi": "24. DOM 🔥🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Ensure you run this in browser console or script linked to HTML!\r\n/*\r\n// Selectors\r\nconst elId = document.getElementById(\"myId\");\r\nconst elQuery = document.querySelector(\".myClass\"); // first match\r\nconst elQueryAll = document.querySelectorAll(\"div\"); // all matches (NodeList)\r\n\r\n// Manipulation\r\nif (elId) {\r\n    elId.textContent = \"New Text\"; // Change text\r\n    elId.innerHTML = \"<strong>Bold Text</strong>\"; // HTML content\r\n    elId.style.color = \"red\"; // Change color\r\n    elId.style.backgroundColor = \"yellow\";\r\n    \r\n    // Classes\r\n    elId.classList.add(\"active\");\r\n    elId.classList.remove(\"active\");\r\n    elId.classList.toggle(\"active\");\r\n}\r\n\r\n// Create & Remove element\r\nconst newDiv = document.createElement(\"div\");\r\nnewDiv.textContent = \"I am new!\";\r\ndocument.body.appendChild(newDiv);\r\nnewDiv.remove();\r\n\r\n// Add list item\r\nconst ul = document.createElement(\"ul\");\r\nconst li = document.createElement(\"li\");\r\nli.textContent = \"Item 1\";\r\nul.appendChild(li);\r\ndocument.body.appendChild(ul);\r\n*/\r\n\r\n// Note: For complex UI like Modals, Accordions, Tabs, typically you toggle classes (like 'display: none' vs 'display: block') on click events.\n```",
    "question_en": "Code and practice for: 24. DOM 🔥🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Ensure you run this in browser console or script linked to HTML!\r\n/*\r\n// Selectors\r\nconst elId = document.getElementById(\"myId\");\r\nconst elQuery = document.querySelector(\".myClass\"); // first match\r\nconst elQueryAll = document.querySelectorAll(\"div\"); // all matches (NodeList)\r\n\r\n// Manipulation\r\nif (elId) {\r\n    elId.textContent = \"New Text\"; // Change text\r\n    elId.innerHTML = \"<strong>Bold Text</strong>\"; // HTML content\r\n    elId.style.color = \"red\"; // Change color\r\n    elId.style.backgroundColor = \"yellow\";\r\n    \r\n    // Classes\r\n    elId.classList.add(\"active\");\r\n    elId.classList.remove(\"active\");\r\n    elId.classList.toggle(\"active\");\r\n}\r\n\r\n// Create & Remove element\r\nconst newDiv = document.createElement(\"div\");\r\nnewDiv.textContent = \"I am new!\";\r\ndocument.body.appendChild(newDiv);\r\nnewDiv.remove();\r\n\r\n// Add list item\r\nconst ul = document.createElement(\"ul\");\r\nconst li = document.createElement(\"li\");\r\nli.textContent = \"Item 1\";\r\nul.appendChild(li);\r\ndocument.body.appendChild(ul);\r\n*/\r\n\r\n// Note: For complex UI like Modals, Accordions, Tabs, typically you toggle classes (like 'display: none' vs 'display: block') on click events.\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "25",
    "category": "25. Events 🔥",
    "question_hi": "25. Events 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n/*\r\nconst btn = document.querySelector(\"button\");\r\n\r\n// Click event\r\nbtn.addEventListener(\"click\", (event) => {\r\n  console.log(\"Button Clicked!\");\r\n  console.log(event.target); // Element that triggered the event\r\n});\r\n\r\n// Input event (e.g. textfield)\r\nconst inputEl = document.querySelector(\"input\");\r\ninputEl.addEventListener(\"input\", (e) => {\r\n  console.log(\"Current value:\", e.target.value);\r\n});\r\n\r\n// Change event (triggers on blur or Enter)\r\ninputEl.addEventListener(\"change\", (e) => {\r\n  console.log(\"Changed value:\", e.target.value);\r\n});\r\n\r\n// Keyboard events\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n  if (e.key === \"Enter\") console.log(\"Enter key pressed!\");\r\n});\r\n*/\n```",
    "question_en": "Code and practice for: 25. Events 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n/*\r\nconst btn = document.querySelector(\"button\");\r\n\r\n// Click event\r\nbtn.addEventListener(\"click\", (event) => {\r\n  console.log(\"Button Clicked!\");\r\n  console.log(event.target); // Element that triggered the event\r\n});\r\n\r\n// Input event (e.g. textfield)\r\nconst inputEl = document.querySelector(\"input\");\r\ninputEl.addEventListener(\"input\", (e) => {\r\n  console.log(\"Current value:\", e.target.value);\r\n});\r\n\r\n// Change event (triggers on blur or Enter)\r\ninputEl.addEventListener(\"change\", (e) => {\r\n  console.log(\"Changed value:\", e.target.value);\r\n});\r\n\r\n// Keyboard events\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n  if (e.key === \"Enter\") console.log(\"Enter key pressed!\");\r\n});\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "26",
    "category": "26. Event Delegation",
    "question_hi": "26. Event Delegation par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n/*\r\n// HTML:\r\n// <div id=\"parent\">\r\n//   <button class=\"btn\">Btn 1</button>\r\n//   <button class=\"btn\">Btn 2</button>\r\n// </div>\r\n\r\ndocument.getElementById(\"parent\").addEventListener(\"click\", (event) => {\r\n  // Check if clicked element is a button\r\n  if (event.target.classList.contains(\"btn\")) {\r\n    console.log(\"Button clicked:\", event.target.textContent);\r\n  }\r\n});\r\n// event.target is the actual element clicked (the button)\r\n// event.currentTarget is the element the listener is attached to (the parent div)\r\n*/\n```",
    "question_en": "Code and practice for: 26. Event Delegation",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n/*\r\n// HTML:\r\n// <div id=\"parent\">\r\n//   <button class=\"btn\">Btn 1</button>\r\n//   <button class=\"btn\">Btn 2</button>\r\n// </div>\r\n\r\ndocument.getElementById(\"parent\").addEventListener(\"click\", (event) => {\r\n  // Check if clicked element is a button\r\n  if (event.target.classList.contains(\"btn\")) {\r\n    console.log(\"Button clicked:\", event.target.textContent);\r\n  }\r\n});\r\n// event.target is the actual element clicked (the button)\r\n// event.currentTarget is the element the listener is attached to (the parent div)\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "27",
    "category": "27. Event Bubbling / Capturing",
    "question_hi": "27. Event Bubbling / Capturing par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n/*\r\n// Event Bubbling (Default - inside to outside)\r\ndocument.querySelector(\"button\").addEventListener(\"click\", (e) => {\r\n  console.log(\"Button Clicked\");\r\n  e.stopPropagation(); // Stops the event from bubbling up to the div\r\n});\r\n\r\ndocument.querySelector(\"div\").addEventListener(\"click\", () => {\r\n  console.log(\"Div Clicked\");\r\n});\r\n\r\n// Event Capturing / Trickling (Outside to inside)\r\ndocument.querySelector(\"div\").addEventListener(\"click\", () => {\r\n  console.log(\"Div Clicked (Capturing)\");\r\n}, true); // The 'true' enables capturing\r\n*/\n```",
    "question_en": "Code and practice for: 27. Event Bubbling / Capturing",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n/*\r\n// Event Bubbling (Default - inside to outside)\r\ndocument.querySelector(\"button\").addEventListener(\"click\", (e) => {\r\n  console.log(\"Button Clicked\");\r\n  e.stopPropagation(); // Stops the event from bubbling up to the div\r\n});\r\n\r\ndocument.querySelector(\"div\").addEventListener(\"click\", () => {\r\n  console.log(\"Div Clicked\");\r\n});\r\n\r\n// Event Capturing / Trickling (Outside to inside)\r\ndocument.querySelector(\"div\").addEventListener(\"click\", () => {\r\n  console.log(\"Div Clicked (Capturing)\");\r\n}, true); // The 'true' enables capturing\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "28",
    "category": "28. Timers 🔥🔥🔥",
    "question_hi": "28. Timers 🔥🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// setTimeout\r\nconst timeoutId = setTimeout(() => {\r\n  console.log(\"Hello after 2 seconds\");\r\n}, 2000);\r\n\r\n// clearTimeout\r\nclearTimeout(timeoutId); // Prevents the timeout from running\r\n\r\n// setInterval\r\n// const intervalId = setInterval(() => {\r\n//   console.log(\"Repeating every 1 second\");\r\n// }, 1000);\r\n\r\n// clearInterval\r\n// clearInterval(intervalId); // Stops the interval\r\n\r\n// Run function after 2 seconds\r\nsetTimeout(() => console.log(\"Done!\"), 2000);\r\n\r\n// Stop interval after 5 seconds\r\n// let count = 0;\r\n// const timer = setInterval(() => {\r\n//   count++;\r\n//   console.log(count);\r\n//   if (count === 5) clearInterval(timer);\r\n// }, 1000);\n```",
    "question_en": "Code and practice for: 28. Timers 🔥🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// setTimeout\r\nconst timeoutId = setTimeout(() => {\r\n  console.log(\"Hello after 2 seconds\");\r\n}, 2000);\r\n\r\n// clearTimeout\r\nclearTimeout(timeoutId); // Prevents the timeout from running\r\n\r\n// setInterval\r\n// const intervalId = setInterval(() => {\r\n//   console.log(\"Repeating every 1 second\");\r\n// }, 1000);\r\n\r\n// clearInterval\r\n// clearInterval(intervalId); // Stops the interval\r\n\r\n// Run function after 2 seconds\r\nsetTimeout(() => console.log(\"Done!\"), 2000);\r\n\r\n// Stop interval after 5 seconds\r\n// let count = 0;\r\n// const timer = setInterval(() => {\r\n//   count++;\r\n//   console.log(count);\r\n//   if (count === 5) clearInterval(timer);\r\n// }, 1000);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "29",
    "category": "29. Callback Functions",
    "question_hi": "29. Callback Functions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nfunction greet(name, callback) {\r\n  callback(name);\r\n}\r\n\r\ngreet(\"Bijay\", (name) => {\r\n  console.log(name);\r\n});\r\n\r\n// Custom function with callback\r\nfunction processData(data, callback) {\r\n  let processed = data.toUpperCase();\r\n  callback(processed);\r\n}\r\nprocessData(\"hello\", (res) => console.log(res)); // HELLO\n```",
    "question_en": "Code and practice for: 29. Callback Functions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nfunction greet(name, callback) {\r\n  callback(name);\r\n}\r\n\r\ngreet(\"Bijay\", (name) => {\r\n  console.log(name);\r\n});\r\n\r\n// Custom function with callback\r\nfunction processData(data, callback) {\r\n  let processed = data.toUpperCase();\r\n  callback(processed);\r\n}\r\nprocessData(\"hello\", (res) => console.log(res)); // HELLO\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "30",
    "category": "30. Callback Hell",
    "question_hi": "30. Callback Hell par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Concept: Deeply nested callbacks making code hard to read (Pyramid of Doom).\r\n/*\r\ngetData(function(a){\r\n    getMoreData(a, function(b){\r\n        getMoreData(b, function(c){ \r\n            getMoreData(c, function(d){ \r\n                console.log(d);\r\n            });\r\n        });\r\n    });\r\n});\r\n*/\r\n// We fix this using Promises and async/await.\n```",
    "question_en": "Code and practice for: 30. Callback Hell",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Concept: Deeply nested callbacks making code hard to read (Pyramid of Doom).\r\n/*\r\ngetData(function(a){\r\n    getMoreData(a, function(b){\r\n        getMoreData(b, function(c){ \r\n            getMoreData(c, function(d){ \r\n                console.log(d);\r\n            });\r\n        });\r\n    });\r\n});\r\n*/\r\n// We fix this using Promises and async/await.\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "31",
    "category": "31. Promises 🔥🔥🔥🔥",
    "question_hi": "31. Promises 🔥🔥🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Basic Promise\r\nconst myPromise = new Promise((resolve, reject) => {\r\n  const success = true; // change to false to test reject\r\n  if (success) {\r\n    resolve(\"Success Data\");\r\n  } else {\r\n    reject(\"Error Occurred\");\r\n  }\r\n});\r\n\r\n// then/catch/finally\r\nmyPromise\r\n  .then((result) => {\r\n    console.log(result);\r\n  })\r\n  .catch((error) => {\r\n    console.log(error);\r\n  })\r\n  .finally(() => {\r\n    console.log(\"Promise finished (resolved or rejected)\");\r\n  });\n```",
    "question_en": "Code and practice for: 31. Promises 🔥🔥🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Basic Promise\r\nconst myPromise = new Promise((resolve, reject) => {\r\n  const success = true; // change to false to test reject\r\n  if (success) {\r\n    resolve(\"Success Data\");\r\n  } else {\r\n    reject(\"Error Occurred\");\r\n  }\r\n});\r\n\r\n// then/catch/finally\r\nmyPromise\r\n  .then((result) => {\r\n    console.log(result);\r\n  })\r\n  .catch((error) => {\r\n    console.log(error);\r\n  })\r\n  .finally(() => {\r\n    console.log(\"Promise finished (resolved or rejected)\");\r\n  });\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "32",
    "category": "32. Promise Coding Tasks",
    "question_hi": "32. Promise Coding Tasks par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Create resolved/rejected Promise\r\nconst resolvedProm = Promise.resolve(\"Done\");\r\nconst rejectedProm = Promise.reject(\"Failed\");\r\n\r\n// Custom delay function\r\nfunction delay(ms) {\r\n  return new Promise((resolve) => {\r\n    setTimeout(resolve, ms);\r\n  });\r\n}\r\ndelay(2000).then(() => console.log(\"Resolved after 2 seconds\"));\r\n\r\n// Reject after 2 seconds\r\nfunction delayReject(ms) {\r\n  return new Promise((_, reject) => {\r\n    setTimeout(() => reject(\"Timeout Error\"), ms);\r\n  });\r\n}\r\n\r\n// Convert callback to Promise\r\nfunction getDataPromisified() {\r\n  return new Promise((resolve) => {\r\n    // pretending it's an old callback API\r\n    setTimeout(() => resolve(\"Data fetched\"), 1000);\r\n  });\r\n}\n```",
    "question_en": "Code and practice for: 32. Promise Coding Tasks",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Create resolved/rejected Promise\r\nconst resolvedProm = Promise.resolve(\"Done\");\r\nconst rejectedProm = Promise.reject(\"Failed\");\r\n\r\n// Custom delay function\r\nfunction delay(ms) {\r\n  return new Promise((resolve) => {\r\n    setTimeout(resolve, ms);\r\n  });\r\n}\r\ndelay(2000).then(() => console.log(\"Resolved after 2 seconds\"));\r\n\r\n// Reject after 2 seconds\r\nfunction delayReject(ms) {\r\n  return new Promise((_, reject) => {\r\n    setTimeout(() => reject(\"Timeout Error\"), ms);\r\n  });\r\n}\r\n\r\n// Convert callback to Promise\r\nfunction getDataPromisified() {\r\n  return new Promise((resolve) => {\r\n    // pretending it's an old callback API\r\n    setTimeout(() => resolve(\"Data fetched\"), 1000);\r\n  });\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "33",
    "category": "33. Promise.all 🔥",
    "question_hi": "33. Promise.all 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst p1 = Promise.resolve(\"P1\");\r\nconst p2 = Promise.resolve(\"P2\");\r\nconst p3 = Promise.resolve(\"P3\");\r\n\r\n// Waits for ALL to resolve. If ONE rejects, the whole Promise.all rejects immediately.\r\nPromise.all([p1, p2, p3])\r\n  .then((results) => {\r\n    console.log(\"Promise.all:\", results); // [\"P1\", \"P2\", \"P3\"]\r\n  })\r\n  .catch(err => console.log(err));\n```",
    "question_en": "Code and practice for: 33. Promise.all 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst p1 = Promise.resolve(\"P1\");\r\nconst p2 = Promise.resolve(\"P2\");\r\nconst p3 = Promise.resolve(\"P3\");\r\n\r\n// Waits for ALL to resolve. If ONE rejects, the whole Promise.all rejects immediately.\r\nPromise.all([p1, p2, p3])\r\n  .then((results) => {\r\n    console.log(\"Promise.all:\", results); // [\"P1\", \"P2\", \"P3\"]\r\n  })\r\n  .catch(err => console.log(err));\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "34",
    "category": "34. Promise.allSettled",
    "question_hi": "34. Promise.allSettled par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Waits for all promises to settle (either resolve or reject). Never short-circuits.\r\nPromise.allSettled([p1, Promise.reject(\"Error\"), p3])\r\n  .then((results) => {\r\n    console.log(\"Promise.allSettled:\", results);\r\n    // [{status: \"fulfilled\", value: \"P1\"}, {status: \"rejected\", reason: \"Error\"}, ...]\r\n  });\n```",
    "question_en": "Code and practice for: 34. Promise.allSettled",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Waits for all promises to settle (either resolve or reject). Never short-circuits.\r\nPromise.allSettled([p1, Promise.reject(\"Error\"), p3])\r\n  .then((results) => {\r\n    console.log(\"Promise.allSettled:\", results);\r\n    // [{status: \"fulfilled\", value: \"P1\"}, {status: \"rejected\", reason: \"Error\"}, ...]\r\n  });\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "35",
    "category": "35. Promise.race",
    "question_hi": "35. Promise.race par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Returns the FIRST promise to settle (either resolve OR reject).\r\nPromise.race([\r\n  delay(1000).then(() => \"First\"),\r\n  delay(2000).then(() => \"Second\")\r\n]).then(res => console.log(\"Promise.race:\", res)); // \"First\"\n```",
    "question_en": "Code and practice for: 35. Promise.race",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Returns the FIRST promise to settle (either resolve OR reject).\r\nPromise.race([\r\n  delay(1000).then(() => \"First\"),\r\n  delay(2000).then(() => \"Second\")\r\n]).then(res => console.log(\"Promise.race:\", res)); // \"First\"\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "36",
    "category": "36. Promise.any",
    "question_hi": "36. Promise.any par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Returns the FIRST promise to RESOLVE. Ignores rejections unless ALL reject.\r\nPromise.any([\r\n  Promise.reject(\"Error 1\"),\r\n  delay(1000).then(() => \"First Success\"),\r\n  delay(2000).then(() => \"Second Success\")\r\n]).then(res => console.log(\"Promise.any:\", res)); // \"First Success\"\n```",
    "question_en": "Code and practice for: 36. Promise.any",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Returns the FIRST promise to RESOLVE. Ignores rejections unless ALL reject.\r\nPromise.any([\r\n  Promise.reject(\"Error 1\"),\r\n  delay(1000).then(() => \"First Success\"),\r\n  delay(2000).then(() => \"Second Success\")\r\n]).then(res => console.log(\"Promise.any:\", res)); // \"First Success\"\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "37",
    "category": "37. async / await 🔥🔥🔥🔥",
    "question_hi": "37. async / await 🔥🔥🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Basic Fetch Example\r\nasync function getDataFetch() {\r\n  try {\r\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\r\n    const data = await response.json();\r\n    console.log(\"Async/Await Data:\", data.name);\r\n  } catch (error) {\r\n    console.log(\"Fetch Error:\", error);\r\n  }\r\n}\r\ngetDataFetch();\r\n\r\n// Parallel API calls using async/await and Promise.all\r\nasync function getMultipleData() {\r\n  try {\r\n    const [usersRes, postsRes] = await Promise.all([\r\n      fetch(\"https://jsonplaceholder.typicode.com/users\"),\r\n      fetch(\"https://jsonplaceholder.typicode.com/posts\")\r\n    ]);\r\n    const users = await usersRes.json();\r\n    const posts = await postsRes.json();\r\n    console.log(`Fetched ${users.length} users and ${posts.length} posts`);\r\n  } catch(e) {\r\n    console.log(e);\r\n  }\r\n}\n```",
    "question_en": "Code and practice for: 37. async / await 🔥🔥🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Basic Fetch Example\r\nasync function getDataFetch() {\r\n  try {\r\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\r\n    const data = await response.json();\r\n    console.log(\"Async/Await Data:\", data.name);\r\n  } catch (error) {\r\n    console.log(\"Fetch Error:\", error);\r\n  }\r\n}\r\ngetDataFetch();\r\n\r\n// Parallel API calls using async/await and Promise.all\r\nasync function getMultipleData() {\r\n  try {\r\n    const [usersRes, postsRes] = await Promise.all([\r\n      fetch(\"https://jsonplaceholder.typicode.com/users\"),\r\n      fetch(\"https://jsonplaceholder.typicode.com/posts\")\r\n    ]);\r\n    const users = await usersRes.json();\r\n    const posts = await postsRes.json();\r\n    console.log(`Fetched ${users.length} users and ${posts.length} posts`);\r\n  } catch(e) {\r\n    console.log(e);\r\n  }\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "38",
    "category": "38. Fetch API 🔥",
    "question_hi": "38. Fetch API 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n/*\r\n// GET Request\r\nfetch(\"https://jsonplaceholder.typicode.com/posts/1\")\r\n  .then(res => res.json())\r\n  .then(data => console.log(data));\r\n\r\n// POST Request\r\nfetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n  method: \"POST\",\r\n  headers: {\r\n    \"Content-Type\": \"application/json\"\r\n  },\r\n  body: JSON.stringify({\r\n    title: \"foo\",\r\n    body: \"bar\",\r\n    userId: 1\r\n  })\r\n})\r\n  .then(res => res.json())\r\n  .then(data => console.log(data));\r\n*/\n```",
    "question_en": "Code and practice for: 38. Fetch API 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n/*\r\n// GET Request\r\nfetch(\"https://jsonplaceholder.typicode.com/posts/1\")\r\n  .then(res => res.json())\r\n  .then(data => console.log(data));\r\n\r\n// POST Request\r\nfetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n  method: \"POST\",\r\n  headers: {\r\n    \"Content-Type\": \"application/json\"\r\n  },\r\n  body: JSON.stringify({\r\n    title: \"foo\",\r\n    body: \"bar\",\r\n    userId: 1\r\n  })\r\n})\r\n  .then(res => res.json())\r\n  .then(data => console.log(data));\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "39",
    "category": "39. API Coding Questions (Concepts)",
    "question_hi": "39. API Coding Questions (Concepts) par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Concepts to practice visually:\r\n// - Call API after button click -> document.querySelector('button').addEventListener('click', getData);\r\n// - Call second API using first API's result:\r\n/*\r\nasync function chainedAPIs() {\r\n  const userRes = await fetch('/api/user');\r\n  const user = await userRes.json();\r\n  const postsRes = await fetch(`/api/posts?userId=${user.id}`); // Using user.id here\r\n  const posts = await postsRes.json();\r\n}\r\n*/\n```",
    "question_en": "Code and practice for: 39. API Coding Questions (Concepts)",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Concepts to practice visually:\r\n// - Call API after button click -> document.querySelector('button').addEventListener('click', getData);\r\n// - Call second API using first API's result:\r\n/*\r\nasync function chainedAPIs() {\r\n  const userRes = await fetch('/api/user');\r\n  const user = await userRes.json();\r\n  const postsRes = await fetch(`/api/posts?userId=${user.id}`); // Using user.id here\r\n  const posts = await postsRes.json();\r\n}\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "40",
    "category": "40. Event Loop 🔥🔥🔥🔥",
    "question_hi": "40. Event Loop 🔥🔥🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Predict output question 1:\r\nconsole.log(\"A\"); // Synchronous (Call Stack)\r\n\r\nsetTimeout(() => {\r\n  console.log(\"B\"); // Macrotask Queue\r\n}, 0);\r\n\r\nconsole.log(\"C\"); // Synchronous (Call Stack)\r\n// Output: A, C, B\r\n\r\n// Predict output question 2:\r\nconsole.log(\"1\"); // Call Stack\r\n\r\nPromise.resolve().then(() => {\r\n  console.log(\"2\"); // Microtask Queue (Has higher priority than Macrotask)\r\n});\r\n\r\nsetTimeout(() => {\r\n  console.log(\"3\"); // Macrotask Queue\r\n}, 0);\r\n\r\nconsole.log(\"4\"); // Call Stack\r\n// Output: 1, 4, 2, 3 (Microtasks run before Macrotasks!)\n```",
    "question_en": "Code and practice for: 40. Event Loop 🔥🔥🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Predict output question 1:\r\nconsole.log(\"A\"); // Synchronous (Call Stack)\r\n\r\nsetTimeout(() => {\r\n  console.log(\"B\"); // Macrotask Queue\r\n}, 0);\r\n\r\nconsole.log(\"C\"); // Synchronous (Call Stack)\r\n// Output: A, C, B\r\n\r\n// Predict output question 2:\r\nconsole.log(\"1\"); // Call Stack\r\n\r\nPromise.resolve().then(() => {\r\n  console.log(\"2\"); // Microtask Queue (Has higher priority than Macrotask)\r\n});\r\n\r\nsetTimeout(() => {\r\n  console.log(\"3\"); // Macrotask Queue\r\n}, 0);\r\n\r\nconsole.log(\"4\"); // Call Stack\r\n// Output: 1, 4, 2, 3 (Microtasks run before Macrotasks!)\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "41",
    "category": "41. Microtask / Macrotask",
    "question_hi": "41. Microtask / Macrotask par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconsole.log(\"Start\");\r\n\r\n// Macrotask (setTimeout, setInterval, DOM events)\r\nsetTimeout(() => {\r\n  console.log(\"Macrotask: setTimeout\");\r\n}, 0);\r\n\r\n// Microtask (Promises, queueMicrotask, MutationObserver)\r\nPromise.resolve().then(() => {\r\n  console.log(\"Microtask: Promise\");\r\n});\r\n\r\nqueueMicrotask(() => {\r\n  console.log(\"Microtask: queueMicrotask\");\r\n});\r\n\r\nconsole.log(\"End\");\r\n// Output: Start, End, Microtask: Promise, Microtask: queueMicrotask, Macrotask: setTimeout\r\n// Explanation: Event Loop empties the entire Microtask queue before moving to Macrotask.\n```",
    "question_en": "Code and practice for: 41. Microtask / Macrotask",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconsole.log(\"Start\");\r\n\r\n// Macrotask (setTimeout, setInterval, DOM events)\r\nsetTimeout(() => {\r\n  console.log(\"Macrotask: setTimeout\");\r\n}, 0);\r\n\r\n// Microtask (Promises, queueMicrotask, MutationObserver)\r\nPromise.resolve().then(() => {\r\n  console.log(\"Microtask: Promise\");\r\n});\r\n\r\nqueueMicrotask(() => {\r\n  console.log(\"Microtask: queueMicrotask\");\r\n});\r\n\r\nconsole.log(\"End\");\r\n// Output: Start, End, Microtask: Promise, Microtask: queueMicrotask, Macrotask: setTimeout\r\n// Explanation: Event Loop empties the entire Microtask queue before moving to Macrotask.\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "42",
    "category": "42. Execution Context",
    "question_hi": "42. Execution Context par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Global Execution Context is created first.\r\n// Function Execution Context is created on function call.\r\n\r\nlet globalVal = 10; // Stored in Global Memory\r\n\r\nfunction one() {\r\n  // Function Execution Context for one() created\r\n  two();\r\n}\r\n\r\nfunction two() {\r\n  // Function Execution Context for two() created\r\n  console.log(\"Hello from two\");\r\n}\r\n\r\none();\n```",
    "question_en": "Code and practice for: 42. Execution Context",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Global Execution Context is created first.\r\n// Function Execution Context is created on function call.\r\n\r\nlet globalVal = 10; // Stored in Global Memory\r\n\r\nfunction one() {\r\n  // Function Execution Context for one() created\r\n  two();\r\n}\r\n\r\nfunction two() {\r\n  // Function Execution Context for two() created\r\n  console.log(\"Hello from two\");\r\n}\r\n\r\none();\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "43",
    "category": "43. Call Stack",
    "question_hi": "43. Call Stack par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Call Stack tracks function execution (LIFO - Last In First Out)\r\nfunction main() {\r\n  console.log(\"Main starts\");\r\n  first();\r\n  console.log(\"Main ends\");\r\n}\r\n\r\nfunction first() {\r\n  console.log(\"First starts\");\r\n  second();\r\n  console.log(\"First ends\");\r\n}\r\n\r\nfunction second() {\r\n  console.log(\"Second runs\");\r\n}\r\n\r\nmain();\r\n/* Stack trace during execution:\r\n   1. main() pushed\r\n   2. first() pushed\r\n   3. second() pushed\r\n   4. second() popped\r\n   5. first() popped\r\n   6. main() popped\r\n*/\n```",
    "question_en": "Code and practice for: 43. Call Stack",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Call Stack tracks function execution (LIFO - Last In First Out)\r\nfunction main() {\r\n  console.log(\"Main starts\");\r\n  first();\r\n  console.log(\"Main ends\");\r\n}\r\n\r\nfunction first() {\r\n  console.log(\"First starts\");\r\n  second();\r\n  console.log(\"First ends\");\r\n}\r\n\r\nfunction second() {\r\n  console.log(\"Second runs\");\r\n}\r\n\r\nmain();\r\n/* Stack trace during execution:\r\n   1. main() pushed\r\n   2. first() pushed\r\n   3. second() pushed\r\n   4. second() popped\r\n   5. first() popped\r\n   6. main() popped\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "44",
    "category": "44. Recursion",
    "question_hi": "44. Recursion par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Factorial recursion\r\nfunction factorial(n) {\r\n  if (n === 1) return 1; // Base case\r\n  return n * factorial(n - 1);\r\n}\r\nconsole.log(factorial(5)); // 120\r\n\r\n// Fibonacci recursion\r\nfunction fib(n) {\r\n  if (n <= 1) return n;\r\n  return fib(n - 1) + fib(n - 2);\r\n}\n```",
    "question_en": "Code and practice for: 44. Recursion",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Factorial recursion\r\nfunction factorial(n) {\r\n  if (n === 1) return 1; // Base case\r\n  return n * factorial(n - 1);\r\n}\r\nconsole.log(factorial(5)); // 120\r\n\r\n// Fibonacci recursion\r\nfunction fib(n) {\r\n  if (n <= 1) return n;\r\n  return fib(n - 1) + fib(n - 2);\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "45",
    "category": "45. Higher Order Functions",
    "question_hi": "45. Higher Order Functions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// A function that takes a function as argument OR returns a function\r\nfunction operate(a, b, callback) {\r\n  return callback(a, b);\r\n}\r\n\r\n// map, filter, reduce are HOFs because they accept callback functions\r\nlet arrHof = [1, 2, 3];\r\narrHof.map(x => x * 2);\n```",
    "question_en": "Code and practice for: 45. Higher Order Functions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// A function that takes a function as argument OR returns a function\r\nfunction operate(a, b, callback) {\r\n  return callback(a, b);\r\n}\r\n\r\n// map, filter, reduce are HOFs because they accept callback functions\r\nlet arrHof = [1, 2, 3];\r\narrHof.map(x => x * 2);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "46",
    "category": "46. Pure Functions",
    "question_hi": "46. Pure Functions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Pure: Always returns same output for same input, NO side effects\r\nfunction pureAdd(a, b) {\r\n  return a + b;\r\n}\r\n\r\n// Impure: Modifies external state or relies on external state\r\nlet total = 0;\r\nfunction impureAdd(a) {\r\n  total += a;\r\n  return total;\r\n}\n```",
    "question_en": "Code and practice for: 46. Pure Functions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Pure: Always returns same output for same input, NO side effects\r\nfunction pureAdd(a, b) {\r\n  return a + b;\r\n}\r\n\r\n// Impure: Modifies external state or relies on external state\r\nlet total = 0;\r\nfunction impureAdd(a) {\r\n  total += a;\r\n  return total;\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "47",
    "category": "47. Immutability 🔥",
    "question_hi": "47. Immutability 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst oldArray = [1, 2, 3];\r\nconst newArray = [...oldArray, 4]; // We don't mutate oldArray using push()\r\n\r\nconst oldObject = { name: \"Bijay\", age: 22 };\r\nconst newObject = { ...oldObject, age: 23 }; // Creating new object instead of mutating oldObject.age\r\n\r\n// Updating nested object immutably\r\nconst nestedObj = { info: { city: \"Delhi\" } };\r\nconst newNestedObj = { ...nestedObj, info: { ...nestedObj.info, city: \"Mumbai\" } };\n```",
    "question_en": "Code and practice for: 47. Immutability 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst oldArray = [1, 2, 3];\r\nconst newArray = [...oldArray, 4]; // We don't mutate oldArray using push()\r\n\r\nconst oldObject = { name: \"Bijay\", age: 22 };\r\nconst newObject = { ...oldObject, age: 23 }; // Creating new object instead of mutating oldObject.age\r\n\r\n// Updating nested object immutably\r\nconst nestedObj = { info: { city: \"Delhi\" } };\r\nconst newNestedObj = { ...nestedObj, info: { ...nestedObj.info, city: \"Mumbai\" } };\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "48",
    "category": "48. Shallow Copy / Deep Copy",
    "question_hi": "48. Shallow Copy / Deep Copy par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Shallow Copy (Nested objects still share reference)\r\nconst user1 = { name: \"A\", address: { city: \"Delhi\" } };\r\nconst shallowUser = { ...user1 };\r\nshallowUser.address.city = \"Mumbai\"; \r\nconsole.log(user1.address.city); // \"Mumbai\" (Got mutated!)\r\n\r\n// Deep Copy (Completely independent)\r\nconst user2 = { name: \"B\", address: { city: \"Noida\" } };\r\n\r\n// Modern way (structuredClone)\r\nconst deepUser = structuredClone(user2);\r\n\r\n// Older way (JSON parse/stringify - loses functions and undefined)\r\nconst deepUserOld = JSON.parse(JSON.stringify(user2));\n```",
    "question_en": "Code and practice for: 48. Shallow Copy / Deep Copy",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Shallow Copy (Nested objects still share reference)\r\nconst user1 = { name: \"A\", address: { city: \"Delhi\" } };\r\nconst shallowUser = { ...user1 };\r\nshallowUser.address.city = \"Mumbai\"; \r\nconsole.log(user1.address.city); // \"Mumbai\" (Got mutated!)\r\n\r\n// Deep Copy (Completely independent)\r\nconst user2 = { name: \"B\", address: { city: \"Noida\" } };\r\n\r\n// Modern way (structuredClone)\r\nconst deepUser = structuredClone(user2);\r\n\r\n// Older way (JSON parse/stringify - loses functions and undefined)\r\nconst deepUserOld = JSON.parse(JSON.stringify(user2));\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "49",
    "category": "49. Map / Set",
    "question_hi": "49. Map / Set par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Set - Stores unique values\r\nconst uniqueNumbers = [...new Set([1, 1, 2, 2, 3])]; // [1, 2, 3]\r\nconst mySet = new Set();\r\nmySet.add(1);\r\nmySet.add(2);\r\nmySet.delete(1);\r\nconsole.log(mySet.has(2)); // true\r\n\r\n// Map - Key-value pairs where keys can be ANY type (not just string like Objects)\r\nconst myMap = new Map();\r\nmyMap.set(\"name\", \"Bijay\");\r\nmyMap.set(10, \"Number Key\");\r\nconsole.log(myMap.get(\"name\")); // \"Bijay\"\r\nmyMap.delete(10);\r\nconsole.log(myMap.has(\"name\")); // true\n```",
    "question_en": "Code and practice for: 49. Map / Set",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Set - Stores unique values\r\nconst uniqueNumbers = [...new Set([1, 1, 2, 2, 3])]; // [1, 2, 3]\r\nconst mySet = new Set();\r\nmySet.add(1);\r\nmySet.add(2);\r\nmySet.delete(1);\r\nconsole.log(mySet.has(2)); // true\r\n\r\n// Map - Key-value pairs where keys can be ANY type (not just string like Objects)\r\nconst myMap = new Map();\r\nmyMap.set(\"name\", \"Bijay\");\r\nmyMap.set(10, \"Number Key\");\r\nconsole.log(myMap.get(\"name\")); // \"Bijay\"\r\nmyMap.delete(10);\r\nconsole.log(myMap.has(\"name\")); // true\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "50",
    "category": "50. WeakMap / WeakSet",
    "question_hi": "50. WeakMap / WeakSet par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// WeakSet: Only stores objects. Objects can be garbage collected if no other references exist.\r\nconst ws = new WeakSet();\r\nlet objKey = {};\r\nws.add(objKey);\r\n\r\n// WeakMap: Keys must be objects. Allows garbage collection of keys.\r\nconst wm = new WeakMap();\r\nwm.set(objKey, \"Private Data\");\r\n// objKey = null; // Key gets garbage collected automatically\n```",
    "question_en": "Code and practice for: 50. WeakMap / WeakSet",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// WeakSet: Only stores objects. Objects can be garbage collected if no other references exist.\r\nconst ws = new WeakSet();\r\nlet objKey = {};\r\nws.add(objKey);\r\n\r\n// WeakMap: Keys must be objects. Allows garbage collection of keys.\r\nconst wm = new WeakMap();\r\nwm.set(objKey, \"Private Data\");\r\n// objKey = null; // Key gets garbage collected automatically\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "51",
    "category": "51. Classes 🔥",
    "question_hi": "51. Classes 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nclass User {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  // Method\r\n  greet() {\r\n    console.log(\"Hi, \" + this.name);\r\n  }\r\n\r\n  // Static method (called on class, not instance)\r\n  static info() {\r\n    console.log(\"User class\");\r\n  }\r\n}\r\n\r\nconst u1 = new User(\"Bijay\");\r\nu1.greet();\r\nUser.info();\r\n\r\n// Inheritance\r\nclass Admin extends User {\r\n  constructor(name, role) {\r\n    super(name); // Calls parent constructor\r\n    this.role = role;\r\n  }\r\n}\n```",
    "question_en": "Code and practice for: 51. Classes 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nclass User {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  // Method\r\n  greet() {\r\n    console.log(\"Hi, \" + this.name);\r\n  }\r\n\r\n  // Static method (called on class, not instance)\r\n  static info() {\r\n    console.log(\"User class\");\r\n  }\r\n}\r\n\r\nconst u1 = new User(\"Bijay\");\r\nu1.greet();\r\nUser.info();\r\n\r\n// Inheritance\r\nclass Admin extends User {\r\n  constructor(name, role) {\r\n    super(name); // Calls parent constructor\r\n    this.role = role;\r\n  }\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "52",
    "category": "52. Prototype",
    "question_hi": "52. Prototype par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Before ES6 classes, constructor functions were used.\r\nfunction Person(name) {\r\n  this.name = name;\r\n}\r\n\r\n// Adding method to prototype saves memory (shared among all instances)\r\nPerson.prototype.greet = function () {\r\n  console.log(\"Hello, \" + this.name);\r\n};\r\n\r\nconst p1Obj = new Person(\"Ravi\");\r\np1Obj.greet();\n```",
    "question_en": "Code and practice for: 52. Prototype",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Before ES6 classes, constructor functions were used.\r\nfunction Person(name) {\r\n  this.name = name;\r\n}\r\n\r\n// Adding method to prototype saves memory (shared among all instances)\r\nPerson.prototype.greet = function () {\r\n  console.log(\"Hello, \" + this.name);\r\n};\r\n\r\nconst p1Obj = new Person(\"Ravi\");\r\np1Obj.greet();\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "53",
    "category": "53. Error Handling",
    "question_hi": "53. Error Handling par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\ntry {\r\n  let data = JSON.parse(\"{ malformed JSON }\");\r\n} catch (error) {\r\n  console.log(\"Caught Error:\", error.message);\r\n} finally {\r\n  console.log(\"Executes no matter what\");\r\n}\r\n\r\n// Custom Error\r\nfunction checkAge(age) {\r\n  if (age < 18) {\r\n    throw new Error(\"Must be 18 or older\");\r\n  }\r\n  return true;\r\n}\n```",
    "question_en": "Code and practice for: 53. Error Handling",
    "answer_en": "Practice by typing the code below:\n\n```javascript\ntry {\r\n  let data = JSON.parse(\"{ malformed JSON }\");\r\n} catch (error) {\r\n  console.log(\"Caught Error:\", error.message);\r\n} finally {\r\n  console.log(\"Executes no matter what\");\r\n}\r\n\r\n// Custom Error\r\nfunction checkAge(age) {\r\n  if (age < 18) {\r\n    throw new Error(\"Must be 18 or older\");\r\n  }\r\n  return true;\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "54",
    "category": "54. Modules",
    "question_hi": "54. Modules par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n/*\r\n// file: math.js\r\nexport function add(a, b) { return a + b; }\r\nexport function subtract(a, b) { return a - b; }\r\nexport default function multiply(a, b) { return a * b; }\r\n\r\n// file: app.js\r\nimport multiply, { add, subtract } from './math.js';\r\n*/\n```",
    "question_en": "Code and practice for: 54. Modules",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n/*\r\n// file: math.js\r\nexport function add(a, b) { return a + b; }\r\nexport function subtract(a, b) { return a - b; }\r\nexport default function multiply(a, b) { return a * b; }\r\n\r\n// file: app.js\r\nimport multiply, { add, subtract } from './math.js';\r\n*/\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "55",
    "category": "55. Local Storage",
    "question_hi": "55. Local Storage par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Persists even after browser tab closes. Stored as strings.\r\nlocalStorage.setItem(\"name\", \"Bijay\");\r\nconsole.log(localStorage.getItem(\"name\"));\r\nlocalStorage.removeItem(\"name\");\r\n// localStorage.clear(); // Clears all\r\n\r\n// Storing objects\r\nconst storageObj = { name: \"Rahul\" };\r\nlocalStorage.setItem(\"user\", JSON.stringify(storageObj));\r\nconst retrieved = JSON.parse(localStorage.getItem(\"user\"));\n```",
    "question_en": "Code and practice for: 55. Local Storage",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Persists even after browser tab closes. Stored as strings.\r\nlocalStorage.setItem(\"name\", \"Bijay\");\r\nconsole.log(localStorage.getItem(\"name\"));\r\nlocalStorage.removeItem(\"name\");\r\n// localStorage.clear(); // Clears all\r\n\r\n// Storing objects\r\nconst storageObj = { name: \"Rahul\" };\r\nlocalStorage.setItem(\"user\", JSON.stringify(storageObj));\r\nconst retrieved = JSON.parse(localStorage.getItem(\"user\"));\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "56",
    "category": "56. Session Storage",
    "question_hi": "56. Session Storage par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Similar to LocalStorage, but clears when tab/browser closes.\r\nsessionStorage.setItem(\"sessionID\", \"12345\");\r\nconsole.log(sessionStorage.getItem(\"sessionID\"));\r\nsessionStorage.removeItem(\"sessionID\");\n```",
    "question_en": "Code and practice for: 56. Session Storage",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Similar to LocalStorage, but clears when tab/browser closes.\r\nsessionStorage.setItem(\"sessionID\", \"12345\");\r\nconsole.log(sessionStorage.getItem(\"sessionID\"));\r\nsessionStorage.removeItem(\"sessionID\");\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "57",
    "category": "57. Debouncing 🔥🔥",
    "question_hi": "57. Debouncing 🔥🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Prevents a function from running multiple times in quick succession.\r\n// It waits for a specific time after the last call before executing.\r\nfunction debounce(fn, delay) {\r\n  let timer;\r\n  return function (...args) {\r\n    clearTimeout(timer); // Reset the timer on every call\r\n    timer = setTimeout(() => {\r\n      fn.apply(this, args); // Run the function after delay\r\n    }, delay);\r\n  };\r\n}\r\n\r\n// Example usage (e.g., search box):\r\n// const searchHandler = debounce((query) => console.log(\"Searching:\", query), 500);\r\n// document.querySelector('input').addEventListener('input', (e) => searchHandler(e.target.value));\n```",
    "question_en": "Code and practice for: 57. Debouncing 🔥🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Prevents a function from running multiple times in quick succession.\r\n// It waits for a specific time after the last call before executing.\r\nfunction debounce(fn, delay) {\r\n  let timer;\r\n  return function (...args) {\r\n    clearTimeout(timer); // Reset the timer on every call\r\n    timer = setTimeout(() => {\r\n      fn.apply(this, args); // Run the function after delay\r\n    }, delay);\r\n  };\r\n}\r\n\r\n// Example usage (e.g., search box):\r\n// const searchHandler = debounce((query) => console.log(\"Searching:\", query), 500);\r\n// document.querySelector('input').addEventListener('input', (e) => searchHandler(e.target.value));\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "58",
    "category": "58. Throttling 🔥",
    "question_hi": "58. Throttling 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Ensures a function is called at most once in a specified time period.\r\nfunction throttle(fn, delay) {\r\n  let lastTime = 0;\r\n  return function (...args) {\r\n    const now = new Date().getTime();\r\n    if (now - lastTime >= delay) {\r\n      fn.apply(this, args);\r\n      lastTime = now;\r\n    }\r\n  };\r\n}\r\n\r\n// Example usage (e.g., scroll event):\r\n// const scrollHandler = throttle(() => console.log(\"Scrolling...\"), 1000);\r\n// window.addEventListener('scroll', scrollHandler);\n```",
    "question_en": "Code and practice for: 58. Throttling 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Ensures a function is called at most once in a specified time period.\r\nfunction throttle(fn, delay) {\r\n  let lastTime = 0;\r\n  return function (...args) {\r\n    const now = new Date().getTime();\r\n    if (now - lastTime >= delay) {\r\n      fn.apply(this, args);\r\n      lastTime = now;\r\n    }\r\n  };\r\n}\r\n\r\n// Example usage (e.g., scroll event):\r\n// const scrollHandler = throttle(() => console.log(\"Scrolling...\"), 1000);\r\n// window.addEventListener('scroll', scrollHandler);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "59",
    "category": "59. Memoization",
    "question_hi": "59. Memoization par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Caches the results of expensive function calls based on arguments.\r\nfunction memoize(fn) {\r\n  const cache = {};\r\n  return function (n) {\r\n    if (cache[n]) {\r\n      console.log(\"Fetching from cache\");\r\n      return cache[n];\r\n    }\r\n    console.log(\"Calculating result\");\r\n    const result = fn(n);\r\n    cache[n] = result;\r\n    return result;\r\n  };\r\n}\r\n// const memoizedSquare = memoize((num) => num * num);\n```",
    "question_en": "Code and practice for: 59. Memoization",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Caches the results of expensive function calls based on arguments.\r\nfunction memoize(fn) {\r\n  const cache = {};\r\n  return function (n) {\r\n    if (cache[n]) {\r\n      console.log(\"Fetching from cache\");\r\n      return cache[n];\r\n    }\r\n    console.log(\"Calculating result\");\r\n    const result = fn(n);\r\n    cache[n] = result;\r\n    return result;\r\n  };\r\n}\r\n// const memoizedSquare = memoize((num) => num * num);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "60",
    "category": "60. Currying",
    "question_hi": "60. Currying par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Transforming a function with multiple arguments into a sequence of functions, each taking a single argument.\r\nfunction addCurry(a) {\r\n  return function (b) {\r\n    return function (c) {\r\n      return a + b + c;\r\n    };\r\n  };\r\n}\r\nconsole.log(addCurry(1)(2)(3)); // 6\r\n\r\n// ES6 Arrow Syntax:\r\nconst addCurryArrow = a => b => c => a + b + c;\r\nconsole.log(addCurryArrow(10)(20)(30)); // 60\n```",
    "question_en": "Code and practice for: 60. Currying",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Transforming a function with multiple arguments into a sequence of functions, each taking a single argument.\r\nfunction addCurry(a) {\r\n  return function (b) {\r\n    return function (c) {\r\n      return a + b + c;\r\n    };\r\n  };\r\n}\r\nconsole.log(addCurry(1)(2)(3)); // 6\r\n\r\n// ES6 Arrow Syntax:\r\nconst addCurryArrow = a => b => c => a + b + c;\r\nconsole.log(addCurryArrow(10)(20)(30)); // 60\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "61",
    "category": "61. Function Composition",
    "question_hi": "61. Function Composition par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Combining two or more functions to produce a new function.\r\nconst double = x => x * 2;\r\nconst square = x => x * x;\r\nconst increment = x => x + 1;\r\n\r\n// Read from right to left (increment -> square -> double)\r\nconst compose = (...fns) => (val) => fns.reduceRight((acc, fn) => fn(acc), val);\r\n\r\nconst compute = compose(double, square, increment);\r\nconsole.log(compute(2)); // (2+1) -> 3^2=9 -> 9*2 = 18\n```",
    "question_en": "Code and practice for: 61. Function Composition",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Combining two or more functions to produce a new function.\r\nconst double = x => x * 2;\r\nconst square = x => x * x;\r\nconst increment = x => x + 1;\r\n\r\n// Read from right to left (increment -> square -> double)\r\nconst compose = (...fns) => (val) => fns.reduceRight((acc, fn) => fn(acc), val);\r\n\r\nconst compute = compose(double, square, increment);\r\nconsole.log(compute(2)); // (2+1) -> 3^2=9 -> 9*2 = 18\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "62",
    "category": "62. Partial Application",
    "question_hi": "62. Partial Application par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Fixing a number of arguments to a function, producing another function of smaller arity.\r\nfunction multiplyThree(a, b, c) {\r\n  return a * b * c;\r\n}\r\n\r\n// Bind allows partial application\r\nconst multiplyByTwo = multiplyThree.bind(null, 2); \r\nconsole.log(multiplyByTwo(3, 4)); // 2 * 3 * 4 = 24\n```",
    "question_en": "Code and practice for: 62. Partial Application",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Fixing a number of arguments to a function, producing another function of smaller arity.\r\nfunction multiplyThree(a, b, c) {\r\n  return a * b * c;\r\n}\r\n\r\n// Bind allows partial application\r\nconst multiplyByTwo = multiplyThree.bind(null, 2); \r\nconsole.log(multiplyByTwo(3, 4)); // 2 * 3 * 4 = 24\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "63",
    "category": "63. Generator Functions",
    "question_hi": "63. Generator Functions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Functions that can be paused and resumed.\r\nfunction* generatorFunc() {\r\n  yield 1;\r\n  yield 2;\r\n  yield 3;\r\n}\r\n\r\nconst gen = generatorFunc();\r\nconsole.log(gen.next().value); // 1\r\nconsole.log(gen.next().value); // 2\r\nconsole.log(gen.next().value); // 3\r\nconsole.log(gen.next().value); // undefined\n```",
    "question_en": "Code and practice for: 63. Generator Functions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Functions that can be paused and resumed.\r\nfunction* generatorFunc() {\r\n  yield 1;\r\n  yield 2;\r\n  yield 3;\r\n}\r\n\r\nconst gen = generatorFunc();\r\nconsole.log(gen.next().value); // 1\r\nconsole.log(gen.next().value); // 2\r\nconsole.log(gen.next().value); // 3\r\nconsole.log(gen.next().value); // undefined\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "64",
    "category": "64. Symbols",
    "question_hi": "64. Symbols par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Primitive type used to create unique, hidden identifiers for object properties.\r\nconst sym1 = Symbol(\"id\");\r\nconst sym2 = Symbol(\"id\");\r\nconsole.log(sym1 === sym2); // false\r\n\r\nconst userSym = {\r\n  name: \"Bijay\",\r\n  [sym1]: 12345\r\n};\r\nconsole.log(userSym[sym1]); // 12345\r\n// Note: Symbols do not show up in Object.keys() or for...in loops.\n```",
    "question_en": "Code and practice for: 64. Symbols",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Primitive type used to create unique, hidden identifiers for object properties.\r\nconst sym1 = Symbol(\"id\");\r\nconst sym2 = Symbol(\"id\");\r\nconsole.log(sym1 === sym2); // false\r\n\r\nconst userSym = {\r\n  name: \"Bijay\",\r\n  [sym1]: 12345\r\n};\r\nconsole.log(userSym[sym1]); // 12345\r\n// Note: Symbols do not show up in Object.keys() or for...in loops.\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "65",
    "category": "65. Optional Chaining",
    "question_hi": "65. Optional Chaining par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst optUser = { name: \"Bijay\" };\r\n// Safe access without throwing an error if 'address' is undefined.\r\nconsole.log(optUser?.address?.city); // undefined (instead of TypeError)\n```",
    "question_en": "Code and practice for: 65. Optional Chaining",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst optUser = { name: \"Bijay\" };\r\n// Safe access without throwing an error if 'address' is undefined.\r\nconsole.log(optUser?.address?.city); // undefined (instead of TypeError)\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "66",
    "category": "66. Nullish Coalescing (??)",
    "question_hi": "66. Nullish Coalescing (??) par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Returns RHS only if LHS is null or undefined (not for 0, false, or \"\").\r\nconst val1 = 0 ?? 100; // 0\r\nconst val2 = null ?? 100; // 100\r\nconst val3 = false || 100; // 100 (|| checks for falsy, ?? checks for null/undefined)\n```",
    "question_en": "Code and practice for: 66. Nullish Coalescing (??)",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Returns RHS only if LHS is null or undefined (not for 0, false, or \"\").\r\nconst val1 = 0 ?? 100; // 0\r\nconst val2 = null ?? 100; // 100\r\nconst val3 = false || 100; // 100 (|| checks for falsy, ?? checks for null/undefined)\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "67",
    "category": "67. Regular Expressions",
    "question_hi": "67. Regular Expressions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst email = \"test@example.com\";\r\nconst isValidEmail = /^\\S+@\\S+\\.\\S+$/.test(email); // true\r\nconsole.log(\"Email Valid:\", isValidEmail);\r\n\r\nconst phone = \"9876543210\";\r\nconst isPhone = /^\\d{10}$/.test(phone);\r\n\r\nconst messyString = \"Hello 123 World !\";\r\nconst onlyLetters = messyString.replace(/[^a-zA-Z\\s]/g, \"\"); // \"Hello  World \"\n```",
    "question_en": "Code and practice for: 67. Regular Expressions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst email = \"test@example.com\";\r\nconst isValidEmail = /^\\S+@\\S+\\.\\S+$/.test(email); // true\r\nconsole.log(\"Email Valid:\", isValidEmail);\r\n\r\nconst phone = \"9876543210\";\r\nconst isPhone = /^\\d{10}$/.test(phone);\r\n\r\nconst messyString = \"Hello 123 World !\";\r\nconst onlyLetters = messyString.replace(/[^a-zA-Z\\s]/g, \"\"); // \"Hello  World \"\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "68",
    "category": "68. Algorithms — Fresher Must-Practice",
    "question_hi": "68. Algorithms — Fresher Must-Practice par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Anagram Check\r\nfunction isAnagram(str1, str2) {\r\n  const formatStr = s => s.toLowerCase().split('').sort().join('');\r\n  return formatStr(str1) === formatStr(str2);\r\n}\r\n\r\n// Two Sum\r\nfunction twoSum(arr, target) {\r\n  let map = new Map();\r\n  for (let i = 0; i < arr.length; i++) {\r\n    let complement = target - arr[i];\r\n    if (map.has(complement)) return [map.get(complement), i];\r\n    map.set(arr[i], i);\r\n  }\r\n  return [];\r\n}\r\n\r\n// Missing Number (1 to N)\r\nfunction findMissingNumber(arr, n) {\r\n  let expectedSum = (n * (n + 1)) / 2;\r\n  let actualSum = arr.reduce((a, b) => a + b, 0);\r\n  return expectedSum - actualSum;\r\n}\n```",
    "question_en": "Code and practice for: 68. Algorithms — Fresher Must-Practice",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Anagram Check\r\nfunction isAnagram(str1, str2) {\r\n  const formatStr = s => s.toLowerCase().split('').sort().join('');\r\n  return formatStr(str1) === formatStr(str2);\r\n}\r\n\r\n// Two Sum\r\nfunction twoSum(arr, target) {\r\n  let map = new Map();\r\n  for (let i = 0; i < arr.length; i++) {\r\n    let complement = target - arr[i];\r\n    if (map.has(complement)) return [map.get(complement), i];\r\n    map.set(arr[i], i);\r\n  }\r\n  return [];\r\n}\r\n\r\n// Missing Number (1 to N)\r\nfunction findMissingNumber(arr, n) {\r\n  let expectedSum = (n * (n + 1)) / 2;\r\n  let actualSum = arr.reduce((a, b) => a + b, 0);\r\n  return expectedSum - actualSum;\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "69",
    "category": "69. Nested Arrays",
    "question_hi": "69. Nested Arrays par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst nestedArr = [1, [2, [3, 4]]];\r\n\r\n// Built-in Array.flat()\r\nconsole.log(nestedArr.flat(Infinity)); // [1, 2, 3, 4]\r\n\r\n// Manual flatten (Recursive)\r\nfunction flattenArray(arr) {\r\n  let result = [];\r\n  arr.forEach(item => {\r\n    if (Array.isArray(item)) {\r\n      result = result.concat(flattenArray(item));\r\n    } else {\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\n```",
    "question_en": "Code and practice for: 69. Nested Arrays",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst nestedArr = [1, [2, [3, 4]]];\r\n\r\n// Built-in Array.flat()\r\nconsole.log(nestedArr.flat(Infinity)); // [1, 2, 3, 4]\r\n\r\n// Manual flatten (Recursive)\r\nfunction flattenArray(arr) {\r\n  let result = [];\r\n  arr.forEach(item => {\r\n    if (Array.isArray(item)) {\r\n      result = result.concat(flattenArray(item));\r\n    } else {\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "70",
    "category": "70. Object/Array Transformation 🔥",
    "question_hi": "70. Object/Array Transformation 🔥 par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconst objArr = [\r\n  { name: \"A\", age: 20, category: \"Dev\" },\r\n  { name: \"B\", age: 25, category: \"Design\" },\r\n  { name: \"C\", age: 22, category: \"Dev\" }\r\n];\r\n\r\n// Extract names\r\nconst mappedNames = objArr.map(x => x.name);\r\n\r\n// Filter age > 21\r\nconst over21 = objArr.filter(x => x.age > 21);\r\n\r\n// Group by category\r\nconst grouped = objArr.reduce((acc, curr) => {\r\n  if (!acc[curr.category]) acc[curr.category] = [];\r\n  acc[curr.category].push(curr);\r\n  return acc;\r\n}, {});\r\nconsole.log(grouped);\n```",
    "question_en": "Code and practice for: 70. Object/Array Transformation 🔥",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconst objArr = [\r\n  { name: \"A\", age: 20, category: \"Dev\" },\r\n  { name: \"B\", age: 25, category: \"Design\" },\r\n  { name: \"C\", age: 22, category: \"Dev\" }\r\n];\r\n\r\n// Extract names\r\nconst mappedNames = objArr.map(x => x.name);\r\n\r\n// Filter age > 21\r\nconst over21 = objArr.filter(x => x.age > 21);\r\n\r\n// Group by category\r\nconst grouped = objArr.reduce((acc, curr) => {\r\n  if (!acc[curr.category]) acc[curr.category] = [];\r\n  acc[curr.category].push(curr);\r\n  return acc;\r\n}, {});\r\nconsole.log(grouped);\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "71",
    "category": "71. Output-Based Questions",
    "question_hi": "71. Output-Based Questions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\nconsole.log(typeof null); // \"object\"\r\nconsole.log([] == false); // true (type coercion)\r\nconsole.log([] === false); // false\r\nconsole.log(\"5\" + 2); // \"52\"\r\nconsole.log(\"5\" - 2); // 3\r\nconsole.log(0.1 + 0.2 === 0.3); // false (floating point math quirk)\r\n\r\n// Event Loop output\r\nconsole.log(1);\r\nsetTimeout(() => console.log(2), 0);\r\nPromise.resolve().then(() => console.log(3));\r\nconsole.log(4);\r\n// Output: 1, 4, 3, 2\n```",
    "question_en": "Code and practice for: 71. Output-Based Questions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\nconsole.log(typeof null); // \"object\"\r\nconsole.log([] == false); // true (type coercion)\r\nconsole.log([] === false); // false\r\nconsole.log(\"5\" + 2); // \"52\"\r\nconsole.log(\"5\" - 2); // 3\r\nconsole.log(0.1 + 0.2 === 0.3); // false (floating point math quirk)\r\n\r\n// Event Loop output\r\nconsole.log(1);\r\nsetTimeout(() => console.log(2), 0);\r\nPromise.resolve().then(() => console.log(3));\r\nconsole.log(4);\r\n// Output: 1, 4, 3, 2\n```",
    "source": "added",
    "topic": "jscode"
  },
  {
    "num": "72",
    "category": "72. Advanced-but-Possible Fresher Questions",
    "question_hi": "72. Advanced-but-Possible Fresher Questions par code aur practice",
    "answer_hi": "Neeche diye gaye code ko type karke practice karein:\n\n```javascript\n// Concepts covered:\r\n// - lexical environment & closure (Covered in 7, 10)\r\n// - garbage collection / memory leaks (Objects unreferenced, closures holding large memory)\r\n// - event loop / call stack / microtask queue (Covered in 40-43)\r\n// - currying / memoization / composition (Covered in 59-61)\r\n// - generators / symbols / WeakMap (Covered in 63, 64, 50)\r\n// All these concepts have been practically implemented above!\r\n\r\n// ==========================================\r\n// END OF CHEAT SHEET\r\n// ==========================================\n```",
    "question_en": "Code and practice for: 72. Advanced-but-Possible Fresher Questions",
    "answer_en": "Practice by typing the code below:\n\n```javascript\n// Concepts covered:\r\n// - lexical environment & closure (Covered in 7, 10)\r\n// - garbage collection / memory leaks (Objects unreferenced, closures holding large memory)\r\n// - event loop / call stack / microtask queue (Covered in 40-43)\r\n// - currying / memoization / composition (Covered in 59-61)\r\n// - generators / symbols / WeakMap (Covered in 63, 64, 50)\r\n// All these concepts have been practically implemented above!\r\n\r\n// ==========================================\r\n// END OF CHEAT SHEET\r\n// ==========================================\n```",
    "source": "added",
    "topic": "jscode"
  }
];
