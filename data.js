const DATA = [
  {
    "num": "1",
    "category": "1. React Basics (1–15)",
    "question_hi": "What is React?",
    "answer_hi": "React is a JavaScript library developed by Facebook (Meta) for building user interfaces, particularly single-page applications. It allows us for building reusable components that manage their own state. Key advantages: component-driven architecture, optimized updates through the virtual DOM, declarative approach for better readability.",
    "question_en": "What is React?",
    "answer_en": "React is a JavaScript library developed by Facebook (Meta) for building user interfaces, particularly single-page applications. It allows us for building reusable components that manage their own state. Key advantages: component-driven architecture, optimized updates through the virtual DOM, declarative approach for better readability.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "2",
    "category": "1. React Basics (1–15)",
    "question_hi": "Why do we use React?",
    "answer_hi": "We use React because it lets us build UIs using reusable components, gives fast/optimized updates through the virtual DOM, and follows a declarative approach that makes code easier to read and maintain. It also has a huge community and ecosystem, making development faster.",
    "question_en": "Why do we use React?",
    "answer_en": "We use React because it lets us build UIs using reusable components, gives fast/optimized updates through the virtual DOM, and follows a declarative approach that makes code easier to read and maintain. It also has a huge community and ecosystem, making development faster.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "3",
    "category": "1. React Basics (1–15)",
    "question_hi": "Features of React",
    "answer_hi": "From doc: component-driven architecture, optimized updates through the virtual DOM, declarative approach for better readability. Additional key features: JSX syntax, one-way data binding, reusable components, Hooks, large ecosystem/community support, React Native for mobile apps.",
    "question_en": "Features of React",
    "answer_en": "From doc: component-driven architecture, optimized updates through the virtual DOM, declarative approach for better readability. Additional key features: JSX syntax, one-way data binding, reusable components, Hooks, large ecosystem/community support, React Native for mobile apps.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "4",
    "category": "1. React Basics (1–15)",
    "question_hi": "SPA (Single Page Application) kya hota hai?",
    "answer_hi": "SPA ek aisa web application hota hai jisme pura app sirf ek hi HTML page par load hota hai. Jab user navigate karta hai, to poora page reload nahi hota — sirf jo content change hua hai wahi JavaScript ke through dynamically update ho jaata hai. Isse app fast aur smooth feel karta hai. React commonly SPAs banane ke liye use hota hai.",
    "question_en": "What is an SPA (Single Page Application)?",
    "answer_en": "An SPA is a web application where the entire app loads on a single HTML page. When the user navigates, the whole page doesn't reload — only the content that changed is dynamically updated through JavaScript. This makes the app feel fast and smooth. React is commonly used to build SPAs.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "5",
    "category": "1. React Basics (1–15)",
    "question_hi": "JSX kya hai?",
    "answer_hi": "The JSX stand for JavaScript XML. JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. JSX then gets converted into JavaScript function call by Babel. It makes building React components easier.",
    "question_en": "What is JSX?",
    "answer_en": "The JSX stand for JavaScript XML. JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. JSX then gets converted into JavaScript function call by Babel. It makes building React components easier.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "6",
    "category": "1. React Basics (1–15)",
    "question_hi": "Babel kya karta hai?",
    "answer_hi": "From doc: JSX gets converted into JavaScript function calls by Babel. In general — Babel is a JavaScript compiler/transpiler jo modern JS (ES6+) aur JSX code ko plain, browser-compatible JavaScript (usually ES5) mein convert karta hai, taaki purane browsers bhi code run kar sakein.",
    "question_en": "What does Babel do?",
    "answer_en": "From doc: JSX gets converted into JavaScript function calls by Babel. In general — Babel is a JavaScript compiler/transpiler jo modern JS (ES6+) aur JSX code ko plain, browser-compatible JavaScript (usually ES5) mein convert karta hai, taaki purane browsers bhi code run kar sakein.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "7",
    "category": "1. React Basics (1–15)",
    "question_hi": "ReactDOM kya hai?",
    "answer_hi": "ReactDOM ek package hai jo DOM-specific methods (jaise `ReactDOM.createRoot()` / `render()`) provide karta hai, jinka use React components ko actual browser DOM mein render karne ke liye hota hai. React component/virtual DOM logic handle karta hai, jabki ReactDOM us logic ko real DOM se connect karta hai.",
    "question_en": "What is ReactDOM?",
    "answer_en": "ReactDOM is a package that provides DOM-specific methods (like ReactDOM.createRoot() / render()), which are used to render React components into the actual browser DOM. React handles the component/virtual DOM logic, while ReactDOM connects that logic to the real DOM.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "8",
    "category": "1. React Basics (1–15)",
    "question_hi": "Virtual DOM kya hai?",
    "answer_hi": "The virtual DOM is an in-memory representation of the real DOM. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
    "question_en": "What is the Virtual DOM?",
    "answer_en": "The virtual DOM is an in-memory representation of the real DOM. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "9",
    "category": "1. React Basics (1–15)",
    "question_hi": "Real DOM vs Virtual DOM",
    "answer_hi": "Real DOM directly browser ka actual document structure hota hai — koi bhi change hone par pura tree update/re-paint hota hai, jo slow hota hai. Virtual DOM ek in-memory lightweight copy hoti hai jisme changes pehle apply hote hain aur fir diffing ke through sirf necessary parts real DOM mein update hote hain.\nDoc ke according, Virtual DOM ke benefits: ⚡ faster performance (changes pehle virtual DOM par apply hoti hain), 🔍 minimal updates (sirf necessary changes real DOM tak jaati hain), 🧠 efficient rendering (unnecessary re-renders avoid hote hain).\nDownsides: 🧩 extra memory usage (virtual DOM real DOM ke upar ek extra layer hai), 📉 simple/static UIs ke liye direct DOM manipulation zyada fast ho sakti hai.",
    "question_en": "Real DOM vs Virtual DOM",
    "answer_en": "The Real DOM is the browser's actual document structure — any change causes the whole tree to update/re-paint, which is slow. The Virtual DOM is a lightweight in-memory copy where changes are applied first, and then only the necessary parts are updated in the real DOM through diffing.\n\nBenefits of the Virtual DOM:\n- Faster performance — changes are applied to the virtual DOM first.\n- Minimal updates — only the necessary changes reach the real DOM.\n- Efficient rendering — avoids unnecessary re-renders.\n\nDownsides:\n- Extra memory usage — the virtual DOM is an extra layer on top of the real DOM.\n- For simple/static UIs, direct DOM manipulation can be faster.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "10",
    "category": "1. React Basics (1–15)",
    "question_hi": "Virtual DOM kaise work karta hai?",
    "answer_hi": "The virtual DOM in React is an in-memory representation of the real DOM. When state or props change, React creates a new virtual DOM tree, compares it to the previous one by using a diffing algorithm, and efficiently updates the parts of the real DOM that has changed.",
    "question_en": "How does the Virtual DOM work?",
    "answer_en": "The virtual DOM in React is an in-memory representation of the real DOM. When state or props change, React creates a new virtual DOM tree, compares it to the previous one by using a diffing algorithm, and efficiently updates the parts of the real DOM that has changed.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "11",
    "category": "1. React Basics (1–15)",
    "question_hi": "Reconciliation kya hai?",
    "answer_hi": "Reconciliation is the process by which React updates the actual DOM to match the virtual DOM. It compares the new virtual DOM tree with the previous one and calculates the minimum number of changes required to update the actual DOM, avoiding unnecessary re-renders.",
    "question_en": "What is reconciliation?",
    "answer_en": "Reconciliation is the process by which React updates the actual DOM to match the virtual DOM. It compares the new virtual DOM tree with the previous one and calculates the minimum number of changes required to update the actual DOM, avoiding unnecessary re-renders.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "12",
    "category": "1. React Basics (1–15)",
    "question_hi": "Diffing Algorithm kya hai?",
    "answer_hi": "Diffing algorithm wo process hai jisse React purani aur nayi virtual DOM tree ko compare karke pata lagata hai ki exactly kya change hua hai. Har node ko exhaustively compare karne ke bajaye, React smart heuristics use karta hai (jaise same-type elements compare karna, lists mein `key` prop use karna), jisse comparison bahut fast (roughly O(n)) ho jaati hai aur real DOM ke liye minimum changes calculate ho jaate hain.",
    "question_en": "What is the Diffing Algorithm?",
    "answer_en": "The diffing algorithm is the process React uses to compare the previous and new virtual DOM trees to figure out exactly what changed. Instead of comparing every node exhaustively, React uses smart heuristics (like comparing elements of the same type, and using the key prop for lists), which makes the comparison very fast (roughly O(n)) and lets React calculate the minimum changes needed for the real DOM.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "13",
    "category": "1. React Basics (1–15)",
    "question_hi": "React Element vs React Component",
    "answer_hi": "- React Node refers to any unit that can be displayed on screen, such as an element, string, number, boolean, null, or array.\n- React Element is an immutable object that describes what should be displayed on the screen. It is usually created using JSX or React.createElement.\n- React Component refers to a function or class that returns React Elements. Components help in building reusable UI pieces.\n- In short: Node → Anything that can be rendered. Element → What should be rendered. Component → What creates elements.",
    "question_en": "React Element vs React Component",
    "answer_en": "- React Node refers to any unit that can be displayed on screen, such as an element, string, number, boolean, null, or array.\n- React Element is an immutable object that describes what should be displayed on the screen. It is usually created using JSX or React.createElement.\n- React Component refers to a function or class that returns React Elements. Components help in building reusable UI pieces.\n- In short: Node → Anything that can be rendered. Element → What should be rendered. Component → What creates elements.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "14",
    "category": "1. React Basics (1–15)",
    "question_hi": "Functional Component vs Class Component",
    "answer_hi": "Class components are ES6 classes that extend React.Component. They can hold state, lifecycle methods, and other features. Functional components are simple JavaScript functions that take props and return JSX. With the introduction of hooks, functional components can also handle state and lifecycle methods.",
    "question_en": "Functional Component vs Class Component",
    "answer_en": "Class components are ES6 classes that extend React.Component. They can hold state, lifecycle methods, and other features. Functional components are simple JavaScript functions that take props and return JSX. With the introduction of hooks, functional components can also handle state and lifecycle methods.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "15",
    "category": "1. React Basics (1–15)",
    "question_hi": "React Fragment kya hai?",
    "answer_hi": "The Fragments allow us to group multiple elements together without adding extra nodes to the DOM. It is useful when a component needs to return more than one element, but we don't want to wrap them inside an unnecessary container like a div.",
    "question_en": "What is a React Fragment?",
    "answer_en": "The Fragments allow us to group multiple elements together without adding extra nodes to the DOM. It is useful when a component needs to return more than one element, but we don't want to wrap them inside an unnecessary container like a div.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "16",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Props kya hote hain?",
    "answer_hi": "The Props are the properties. Props are input data of the components that passes data from a parent component to a child component. Props are immutable, meaning a children component cannot modify the props it receives.",
    "question_en": "What are props?",
    "answer_en": "The Props are the properties. Props are input data of the components that passes data from a parent component to a child component. Props are immutable, meaning a children component cannot modify the props it receives.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "17",
    "category": "2. Components & Props (16–25)",
    "question_hi": "State kya hoti hai?",
    "answer_hi": "State are internal data of a component and can change over time, usually in response to user interactions or events. When state changes, the component re-renders automatically. State is used to handle user interactions, form inputs, and API data.",
    "question_en": "What is state?",
    "answer_en": "State are internal data of a component and can change over time, usually in response to user interactions or events. When state changes, the component re-renders automatically. State is used to handle user interactions, form inputs, and API data.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "18",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Props vs State",
    "answer_hi": "In simple terms: Props → external, read-only data. State → internal, mutable data.",
    "question_en": "Props vs State",
    "answer_en": "In simple terms: Props → external, read-only data. State → internal, mutable data.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "19",
    "category": "2. Components & Props (16–25)",
    "question_hi": "One-way data binding",
    "answer_hi": "In React, one-way data flow means data moves from parent to child components through props.",
    "question_en": "One-way data binding",
    "answer_en": "In React, one-way data flow means data moves from parent to child components through props.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "20",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Parent to Child communication",
    "answer_hi": "Parent component apne child component ko data props ke through pass karta hai. Parent apne JSX mein child component call karte time attribute jaisa data deta hai (e.g. `<Child name=\"John\" />`), aur child us data ko `props.name` ke through access karta hai.",
    "question_en": "Parent to Child communication",
    "answer_en": "A parent component passes data to its child component through props. In JSX, the parent passes data like an attribute when calling the child component (e.g. `<Child name=\"John\" />`), and the child accesses that data through `props.name`.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "21",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Child to Parent communication",
    "answer_hi": "Child se parent ko data bhejne ke liye, parent apne child ko ek function prop ke roop mein pass karta hai (callback function). Child component us function ko call karta hai aur data ko argument ke roop mein pass karta hai, jisse parent ka state update ho jaata hai.",
    "question_en": "Child to Parent communication",
    "answer_en": "To send data from child to parent, the parent passes a function to the child as a prop (a callback function). The child calls that function and passes data as an argument, which updates the parent's state.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "22",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Prop Drilling kya hai?",
    "answer_hi": "Prop drilling ek aisi situation hai jahan data ko multiple nested components ke through pass karna padta hai sirf isliye ki wo kisi deep child component tak pahunche, chahe beech ke components ko us data ki zarurat na ho. Doc ke according, lifting state up aur Context API se prop drilling avoid kiya ja sakta hai: \"By lifting state up, you can avoid prop drilling and make state management simple and clean.\"",
    "question_en": "What is prop drilling?",
    "answer_en": "Prop drilling is a situation where data has to be passed through multiple nested components just so it reaches some deep child component, even though the components in between don't need that data. According to the doc, lifting state up and the Context API can help avoid prop drilling: \"By lifting state up, you can avoid prop drilling and make state management simple and clean.\"",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "23",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Default Props",
    "answer_hi": "Default props ek default value define karte hain kisi prop ke liye, jo tab use hoti hai jab parent component us prop ko pass hi nahi karta. Example: `Component.defaultProps = { name: \"Guest\" }` ya function parameter mein default value dena `function Component({ name = \"Guest\" })`.",
    "question_en": "Default Props",
    "answer_en": "Default props define a default value for a prop, which is used when the parent component doesn't pass that prop at all. Example: `Component.defaultProps = { name: \"Guest\" }` or giving a default value in the function parameter: `function Component({ name = \"Guest\" })`.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "24",
    "category": "2. Components & Props (16–25)",
    "question_hi": "PropTypes",
    "answer_hi": "PropTypes are used to check the type of props passed to the components. They ensure that the correct type of data is provided and warn developers during development if there is any issues. PropTypes helps catch errors early and improves overall code quality. Key points: checks props at runtime (not compile time), helps catch bugs during development, shows warnings in the console (not errors).",
    "question_en": "PropTypes",
    "answer_en": "PropTypes are used to check the type of props passed to the components. They ensure that the correct type of data is provided and warn developers during development if there is any issues. PropTypes helps catch errors early and improves overall code quality. Key points: checks props at runtime (not compile time), helps catch bugs during development, shows warnings in the console (not errors).",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "25",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Children Prop",
    "answer_hi": "`children` ek special prop hai jo kisi component ke opening aur closing tags ke beech likhe gaye content ko refer karta hai. Example: `<Card><h1>Hello</h1></Card>` mein `<h1>Hello</h1>`, Card component ke andar `props.children` ke through accessible hota hai. Ye reusable wrapper/layout components banane mein kaafi useful hai.",
    "question_en": "Children Prop",
    "answer_en": "`children` is a special prop that refers to the content written between a component's opening and closing tags. Example: in `<Card><h1>Hello</h1></Card>`, the `<h1>Hello</h1>` is accessible inside the Card component through `props.children`. This is very useful for building reusable wrapper/layout components.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "26",
    "category": "3. Rendering (26–35)",
    "question_hi": "Re-render kya hota hai?",
    "answer_hi": "In React, re-rendering refers to updating the user interface (UI) in response to changes in state or props. When the state or props change, React re-renders the component to reflect the updated data in the UI. This process involves recalculating the JSX returned by the component and comparing the new JSX with the previous one using the Virtual DOM.",
    "question_en": "What is a re-render?",
    "answer_en": "In React, re-rendering refers to updating the user interface (UI) in response to changes in state or props. When the state or props change, React re-renders the component to reflect the updated data in the UI. This process involves recalculating the JSX returned by the component and comparing the new JSX with the previous one using the Virtual DOM.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "27",
    "category": "3. Rendering (26–35)",
    "question_hi": "Re-render kab hota hai?",
    "answer_hi": "Re-render tab hota hai jab kisi component ka state ya props change hote hain — React automatically us component ko re-render karke UI ko updated data ke saath reflect karta hai.",
    "question_en": "When does a re-render happen?",
    "answer_en": "A re-render happens when a component's state or props change — React automatically re-renders that component to reflect the updated data in the UI.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "28",
    "category": "3. Rendering (26–35)",
    "question_hi": "Key prop kyu use hoti hai?",
    "answer_hi": "The key prop is used to uniquely identify elements in a list. It helps in reordering, and managing items efficiently. Without unique keys, React may re-render elements unnecessarily, causing performance issues and UI bugs.",
    "question_en": "Why is the key prop used?",
    "answer_en": "The key prop is used to uniquely identify elements in a list. It helps in reordering, and managing items efficiently. Without unique keys, React may re-render elements unnecessarily, causing performance issues and UI bugs.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "29",
    "category": "3. Rendering (26–35)",
    "question_hi": "Array index key use karna sahi hai?",
    "answer_hi": "Using the array index as a key prop can cause performance issues and unexpected behavior, especially when items are reordered or removed. React relies on key prop to uniquely identify elements. When index are used in place of unique keys, React can update the wrong components, leading to unnecessary re-renders or incorrect data being displayed.",
    "question_en": "Is it okay to use the array index as a key?",
    "answer_en": "Using the array index as a key prop can cause performance issues and unexpected behavior, especially when items are reordered or removed. React relies on key prop to uniquely identify elements. When index are used in place of unique keys, React can update the wrong components, leading to unnecessary re-renders or incorrect data being displayed.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "30",
    "category": "3. Rendering (26–35)",
    "question_hi": "Conditional Rendering",
    "answer_hi": "Conditional rendering ka matlab hai kisi condition ke basis par different UI dikhana. React mein ye normal JavaScript conditions (if-else, ternary operator `condition ? A : B`, ya logical `&&` operator) ke through JSX ke andar kiya jaata hai.",
    "question_en": "Conditional Rendering",
    "answer_en": "Conditional rendering means showing different UI based on some condition. In React, this is done using normal JavaScript conditions inside JSX — if-else, the ternary operator (`condition ? A : B`), or the logical `&&` operator.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "31",
    "category": "3. Rendering (26–35)",
    "question_hi": "Lists Rendering",
    "answer_hi": "Lists render karne ke liye JavaScript ka `.map()` method use hota hai, jisse array ke har item ke liye ek JSX element return hota hai. Har item ko ek unique `key` prop dena zaroori hota hai taaki React efficiently update kar sake.",
    "question_en": "Lists Rendering",
    "answer_en": "Lists are rendered using JavaScript's `.map()` method, which returns a JSX element for each item in the array. Each item needs a unique `key` prop so React can update efficiently.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "32",
    "category": "3. Rendering (26–35)",
    "question_hi": "React.memo",
    "answer_hi": "Doc mein Pure Components ke context mein mention hai: functional components React.memo use karke pure component jaisa behavior achieve kar sakte hain — yani props/state change hone par hi re-render honge, shallow comparison ke through.",
    "question_en": "React.memo",
    "answer_en": "Your doc mentions this in the context of Pure Components: functional components can use React.memo to get pure-component-like behavior — meaning they only re-render when props/state change, using shallow comparison.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "33",
    "category": "3. Rendering (26–35)",
    "question_hi": "Pure Component",
    "answer_hi": "Pure Components in React are components that re-render only when their props or state change. They use shallow comparison to detect changes, which helps prevent unnecessary re-renders and improves performance. Class components can extend React.PureComponent to become pure. Functional components can use React.memo to achieve the same behavior.",
    "question_en": "Pure Component",
    "answer_en": "Pure Components in React are components that re-render only when their props or state change. They use shallow comparison to detect changes, which helps prevent unnecessary re-renders and improves performance. Class components can extend React.PureComponent to become pure. Functional components can use React.memo to achieve the same behavior.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "34",
    "category": "3. Rendering (26–35)",
    "question_hi": "Lazy Loading",
    "answer_hi": "It means loading components only when they are needed instead of loading everything at once. This makes the app load faster because only the important parts load first, and other components load later when the user opens them. Lazy loading is usually done using React.lazy() and Suspense.",
    "question_en": "Lazy Loading",
    "answer_en": "It means loading components only when they are needed instead of loading everything at once. This makes the app load faster because only the important parts load first, and other components load later when the user opens them. Lazy loading is usually done using React.lazy() and Suspense.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "35",
    "category": "3. Rendering (26–35)",
    "question_hi": "Suspense",
    "answer_hi": "React Suspense is a feature that allows a component to wait while the data is loading and shows a fallback UI like a loader instead of a blank screen. Once the data is loaded it shows the actual content, and this improving user experience.",
    "question_en": "Suspense",
    "answer_en": "React Suspense is a feature that allows a component to wait while the data is loading and shows a fallback UI like a loader instead of a blank screen. Once the data is loaded it shows the actual content, and this improving user experience.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "36",
    "category": "4. Hooks (36–55)",
    "question_hi": "React Hooks kya hain?",
    "answer_hi": "In React, a Hook is a special function that allows the functional components to use React features like state and lifecycle methods. It removes the need for class components and makes code simpler and easier to manage. Common examples are useState and useEffect.",
    "question_en": "What are React Hooks?",
    "answer_en": "In React, a Hook is a special function that allows the functional components to use React features like state and lifecycle methods. It removes the need for class components and makes code simpler and easier to manage. Common examples are useState and useEffect.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "37",
    "category": "4. Hooks (36–55)",
    "question_hi": "Hooks ke rules",
    "answer_hi": "React hooks should be called at the top level of a function, not inside loops, conditions, or nested functions. They must only be used within React function components. They must start with \"use\".",
    "question_en": "Rules of Hooks",
    "answer_en": "React hooks should be called at the top level of a function, not inside loops, conditions, or nested functions. They must only be used within React function components. They must start with \"use\".",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "38",
    "category": "4. Hooks (36–55)",
    "question_hi": "useState",
    "answer_hi": "useState ek hook hai jo functional components mein state add karne ke liye use hota hai. Ye ek array return karta hai — current state value aur ek function jisse state ko update kiya ja sakta hai. Example: `const [count, setCount] = useState(0);`",
    "question_en": "useState",
    "answer_en": "useState is a hook used to add state in functional components. It returns an array — the current state value and a function to update that state. Example: `const [count, setCount] = useState(0);`",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "39",
    "category": "4. Hooks (36–55)",
    "question_hi": "Functional update",
    "answer_hi": "Jab naya state pichle state par depend karta hai, tab state ko update karne ke liye ek function pass karte hain (jisme prev state milta hai) instead of direct value — isse \"functional update\" kehte hain. Example: `setCount(prevCount => prevCount + 1);` Ye batching ke time stale state issues se bachata hai.",
    "question_en": "Functional update",
    "answer_en": "When the new state depends on the previous state, we pass a function (which receives the previous state) to the state updater instead of a direct value — this is called a \"functional update\". Example: `setCount(prevCount => prevCount + 1);` This avoids stale state issues during batching.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "40",
    "category": "4. Hooks (36–55)",
    "question_hi": "useEffect",
    "answer_hi": "useEffect is use for handling the side effect, it runs asynchronously after the DOM has rendered, making it suitable for tasks such as data fetching, API calls, and subscriptions without blocking the UI.",
    "question_en": "useEffect",
    "answer_en": "useEffect is use for handling the side effect, it runs asynchronously after the DOM has rendered, making it suitable for tasks such as data fetching, API calls, and subscriptions without blocking the UI.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "41",
    "category": "4. Hooks (36–55)",
    "question_hi": "Dependency Array",
    "answer_hi": "The dependency array of useEffect controls when the effect re-runs:\n- If it's empty, the effect runs only once after the initial render.\n- If it contains variables, the effect re-runs whenever any of those variables change.\n- If omitted, the effect runs after every render.",
    "question_en": "Dependency Array",
    "answer_en": "The dependency array of useEffect controls when the effect re-runs:\n- If it's empty, the effect runs only once after the initial render.\n- If it contains variables, the effect re-runs whenever any of those variables change.\n- If omitted, the effect runs after every render.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "42",
    "category": "4. Hooks (36–55)",
    "question_hi": "Cleanup Function",
    "answer_hi": "Cleanup function useEffect ke andar return kiya jaane wala ek function hota hai, jo component unmount hone se pehle ya agle effect run hone se pehle chalta hai. Isse hum subscriptions, timers, event listeners jaise resources ko clean/remove karte hain, taaki memory leaks na ho. Example: `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);`",
    "question_en": "Cleanup Function",
    "answer_en": "A cleanup function is a function returned inside useEffect, which runs before the component unmounts or before the effect runs again. It's used to clean up resources like subscriptions, timers, and event listeners, to prevent memory leaks. Example: `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);`",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "43",
    "category": "4. Hooks (36–55)",
    "question_hi": "useRef",
    "answer_hi": "useRef is a hook used to store mutable data that stays the same across renders without causing the component to re-render when the value changes. It is commonly used to access DOM elements directly and to keep mutable values, such as counters or timers, that need to persist during the lifecycle of a component.",
    "question_en": "useRef",
    "answer_en": "useRef is a hook used to store mutable data that stays the same across renders without causing the component to re-render when the value changes. It is commonly used to access DOM elements directly and to keep mutable values, such as counters or timers, that need to persist during the lifecycle of a component.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "44",
    "category": "4. Hooks (36–55)",
    "question_hi": "useMemo",
    "answer_hi": "The useMemo hook is used to store the result of expensive calculations and only recompute them when dependencies change. This helps improve performance by avoiding unnecessary recalculations.",
    "question_en": "useMemo",
    "answer_en": "The useMemo hook is used to store the result of expensive calculations and only recompute them when dependencies change. This helps improve performance by avoiding unnecessary recalculations.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "45",
    "category": "4. Hooks (36–55)",
    "question_hi": "useCallback",
    "answer_hi": "The useCallback hook saves a function so it doesn't re-create on every render. It only changes when its dependencies change, helping improve performance.",
    "question_en": "useCallback",
    "answer_en": "The useCallback hook saves a function so it doesn't re-create on every render. It only changes when its dependencies change, helping improve performance.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "46",
    "category": "4. Hooks (36–55)",
    "question_hi": "useContext",
    "answer_hi": "useContext ek hook hai jo humein React Context ki value ko directly access karne deta hai, bina props ko manually har level par pass kiye (yani prop drilling avoid hoti hai). Example: `const value = useContext(MyContext);`\nDoc ke according, context performance optimize karne ke 2 ways: (1) large contexts ko chhote contexts mein split karo, taaki ek value change hone par sab components re-render na hon; (2) context value ko useMemo se memoize karo, taaki React har render par naya object na banaye.",
    "question_en": "useContext",
    "answer_en": "useContext is a hook that lets us directly access the value of a React Context, without manually passing props through every level (i.e. it avoids prop drilling). Example: `const value = useContext(MyContext);`\n\nAccording to the doc, there are 2 ways to optimize context performance: (1) split large contexts into smaller ones, so a change in one value doesn't re-render all components; (2) memoize the context value with useMemo, so React doesn't create a new object on every render.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "47",
    "category": "4. Hooks (36–55)",
    "question_hi": "useReducer",
    "answer_hi": "The useReducer hook manages complex state logic in functional components, serving as an alternative to useState. And it's ideal when state has multiple fields, or when the next state relies on the previous one. The useReducer hook accepts a reducer function + an initial state.",
    "question_en": "useReducer",
    "answer_en": "The useReducer hook manages complex state logic in functional components, serving as an alternative to useState. And it's ideal when state has multiple fields, or when the next state relies on the previous one. The useReducer hook accepts a reducer function + an initial state.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "48",
    "category": "4. Hooks (36–55)",
    "question_hi": "Custom Hooks",
    "answer_hi": "Custom hooks apne khud ke reusable hooks hote hain jo hum banate hain kisi common logic ko multiple components mein reuse karne ke liye. Inka naam hamesha \"use\" se start hota hai (jaise useFetch, useLocalStorage), aur ye internally React ke built-in hooks (useState, useEffect, etc.) ka use karte hain.",
    "question_en": "Custom Hooks",
    "answer_en": "Custom hooks are your own reusable hooks that you create to reuse some common logic across multiple components. Their name always starts with \"use\" (like useFetch, useLocalStorage), and internally they use React's built-in hooks (useState, useEffect, etc.).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "49",
    "category": "4. Hooks (36–55)",
    "question_hi": "useLayoutEffect",
    "answer_hi": "useLayoutEffect runs synchronously after DOM updates but before the browser paints, making it suitable for tasks like measuring DOM elements. (useEffect ke opposite — useEffect asynchronously DOM render ke baad chalta hai.)",
    "question_en": "useLayoutEffect",
    "answer_en": "useLayoutEffect runs synchronously after DOM updates but before the browser paints, making it suitable for tasks like measuring DOM elements. (The opposite of useEffect — useEffect runs asynchronously after the DOM renders.)",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "50",
    "category": "4. Hooks (36–55)",
    "question_hi": "useImperativeHandle",
    "answer_hi": "useImperativeHandle hook forwardRef ke saath use hota hai, aur ye control karta hai ki parent component ko child ke ref ke through kaunse values/methods expose honge. Isse hum child ke internal implementation ko hide karke sirf specific functions (jaise focus(), reset()) parent ko expose kar sakte hain.",
    "question_en": "useImperativeHandle",
    "answer_en": "The useImperativeHandle hook is used together with forwardRef, and it controls which values/methods are exposed to the parent component through the child's ref. This lets us hide the child's internal implementation and expose only specific functions (like focus(), reset()) to the parent.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "51",
    "category": "4. Hooks (36–55)",
    "question_hi": "forwardRef",
    "answer_hi": "forwardRef() is a React function that allows us to pass a ref from parent component to one of its children component.",
    "question_en": "forwardRef",
    "answer_en": "forwardRef() is a React function that allows us to pass a ref from parent component to one of its children component.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "52",
    "category": "4. Hooks (36–55)",
    "question_hi": "useId",
    "answer_hi": "useId ek hook hai jo unique, stable IDs generate karta hai jo server-side aur client-side rendering dono mein match karte hain. Ye mainly accessibility attributes (jaise label aur input ko id/htmlFor se link karna) ke liye use hota hai, especially jab same component multiple baar render ho.",
    "question_en": "useId",
    "answer_en": "useId is a hook that generates unique, stable IDs that match between server-side and client-side rendering. It's mainly used for accessibility attributes (like linking a label and an input with id/htmlFor), especially when the same component renders multiple times.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "53",
    "category": "4. Hooks (36–55)",
    "question_hi": "useTransition",
    "answer_hi": "useTransition ek hook hai jo kisi state update ko \"non-urgent\" (transition) mark karne deta hai, taaki React usse lower priority de aur urgent updates (jaise typing) ko pehle handle kare. Ye ek `isPending` boolean aur ek `startTransition` function return karta hai, jisse UI responsive rehti hai bade updates ke dauran bhi.",
    "question_en": "useTransition",
    "answer_en": "useTransition is a hook that lets you mark a state update as \"non-urgent\" (a transition), so React gives it lower priority and handles urgent updates (like typing) first. It returns an isPending boolean and a startTransition function, which keeps the UI responsive even during large updates.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "54",
    "category": "4. Hooks (36–55)",
    "question_hi": "useDeferredValue",
    "answer_hi": "useDeferredValue ek hook hai jo kisi value ka ek \"deferred\" (delayed) version deta hai, jo UI ko blocking updates se bachata hai. Jab koi value fast change hoti hai (jaise search input), useDeferredValue us value ka thoda purana version use karne deta hai jab tak urgent renders complete na ho jaayein — isse UI smooth rehti hai.",
    "question_en": "useDeferredValue",
    "answer_en": "useDeferredValue is a hook that gives you a \"deferred\" (delayed) version of a value, which prevents the UI from being blocked by updates. When a value changes quickly (like a search input), useDeferredValue lets you keep using a slightly older version of that value until urgent renders finish — keeping the UI smooth.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "55",
    "category": "4. Hooks (36–55)",
    "question_hi": "Difference between all hooks",
    "answer_hi": "- **useState** → simple state manage karta hai.\n- **useReducer** → complex/multiple-field state manage karta hai.\n- **useEffect** → side effects async, DOM paint ke baad chalta hai.\n- **useLayoutEffect** → side effects sync, DOM paint se pehle chalta hai.\n- **useRef** → mutable value store karta hai, re-render trigger nahi karta.\n- **useMemo** → computed value ko memoize karta hai.\n- **useCallback** → function reference ko memoize karta hai.\n- **useContext** → context ki value access karta hai bina prop drilling ke.\n- **useTransition** → non-urgent state updates ko defer karta hai.\n- **useDeferredValue** → kisi value ka delayed version deta hai.\n- **useId** → unique stable IDs generate karta hai.\n- **useImperativeHandle** → ref ke through expose hone wale methods control karta hai.\n- **forwardRef** → ref ko parent se child tak forward karta hai.",
    "question_en": "Difference between all hooks",
    "answer_en": "- useState → manages simple state.\n- useReducer → manages complex/multi-field state.\n- useEffect → runs side effects asynchronously, after the DOM paints.\n- useLayoutEffect → runs side effects synchronously, before the DOM paints.\n- useRef → stores a mutable value, doesn't trigger a re-render.\n- useMemo → memoizes a computed value.\n- useCallback → memoizes a function reference.\n- useContext → accesses context value without prop drilling.\n- useTransition → defers non-urgent state updates.\n- useDeferredValue → gives a delayed version of a value.\n- useId → generates unique, stable IDs.\n- useImperativeHandle → controls which methods are exposed through a ref.\n- forwardRef → forwards a ref from parent to child.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "56",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "What is React Fiber?",
    "answer_hi": "React Fiber is a complete rewrite of React's core algorithm. It is designed to improve performance and enable new features like async rendering, error boundaries, and incremental rendering. It breaks the rendering process into smaller chunks, allow React to pause, kill, or prioritize updates.",
    "question_en": "What is React Fiber?",
    "answer_en": "React Fiber is a complete rewrite of React's core algorithm. It is designed to improve performance and enable new features like async rendering, error boundaries, and incremental rendering. It breaks the rendering process into smaller chunks, allow React to pause, kill, or prioritize updates.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "57",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Shadow DOM vs Virtual DOM",
    "answer_hi": "The Shadow DOM is a web standard that keeps a part of the DOM separate and isolated from the main document. It helps in create reusable components that do not affect global CSS or JavaScript. The virtual DOM is an in-memory representation of the real DOM — it allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
    "question_en": "Shadow DOM vs Virtual DOM",
    "answer_en": "The Shadow DOM is a web standard that keeps a part of the DOM separate and isolated from the main document. It helps in create reusable components that do not affect global CSS or JavaScript. The virtual DOM is an in-memory representation of the real DOM — it allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "58",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Controlled vs Uncontrolled Components",
    "answer_hi": "Controlled components in React are the components whose state and behaviors are managed by React components using states, while the uncontrolled components manage their own state and control their behaviors with the help of DOM.",
    "question_en": "Controlled vs Uncontrolled Components",
    "answer_en": "Controlled components in React are the components whose state and behaviors are managed by React components using states, while the uncontrolled components manage their own state and control their behaviors with the help of DOM.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "59",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "createElement vs cloneElement",
    "answer_hi": "- **createElement**: used to create a new element. It takes the type, props, and children, and returns a new element. It is mostly used internally by JSX.\n- **cloneElement**: used to clone an existing React element and optionally modify the props. It keeps the original children and state while allowing us to pass new props. This is useful when you want to manipulate an element without recreating it.",
    "question_en": "createElement vs cloneElement",
    "answer_en": "- **createElement**: used to create a new element. It takes the type, props, and children, and returns a new element. It is mostly used internally by JSX.\n- **cloneElement**: used to clone an existing React element and optionally modify the props. It keeps the original children and state while allowing us to pass new props. This is useful when you want to manipulate an element without recreating it.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "60",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Stateless vs Stateful Components",
    "answer_hi": "Stateless components in React are components that do not manage their internal state. They simply receive data through props and render the UI based on that data — usually functional components, mainly used for presentational purposes (render UI based on props, display-focused).\nStateful components in React are components that manage their own internal state. They can update their state in response to user interactions, and they re-render when the state changes.",
    "question_en": "Stateless vs Stateful Components",
    "answer_en": "Stateless components in React are components that do not manage their internal state. They simply receive data through props and render the UI based on that data — usually functional components, mainly used for presentational purposes (render UI based on props, display-focused).\nStateful components in React are components that manage their own internal state. They can update their state in response to user interactions, and they re-render when the state changes.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "61",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "TypeScript vs PropTypes",
    "answer_hi": "There are two ways for type checking in React — TypeScript and PropTypes.\nTypeScript is a superset of JavaScript (includes everything JS has + extra features like type checking). It checks props, state, and functions during development (compile time), helping catch errors early before the code runs. This improves code safety and reduces bugs.\nPropTypes is a runtime type-checking library used to check whether a component receives the correct props. Key points: checks props at runtime not compile time, helps catch bugs during development, shows warnings in the console not errors.",
    "question_en": "TypeScript vs PropTypes",
    "answer_en": "There are two ways for type checking in React — TypeScript and PropTypes.\nTypeScript is a superset of JavaScript (includes everything JS has + extra features like type checking). It checks props, state, and functions during development (compile time), helping catch errors early before the code runs. This improves code safety and reduces bugs.\nPropTypes is a runtime type-checking library used to check whether a component receives the correct props. Key points: checks props at runtime not compile time, helps catch bugs during development, shows warnings in the console not errors.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "62",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Error Boundaries",
    "answer_hi": "Error Boundaries is a process which catches JavaScript errors in their child components, log them, and display a fallback UI instead of crashing the application.",
    "question_en": "Error Boundaries",
    "answer_en": "Error Boundaries is a process which catches JavaScript errors in their child components, log them, and display a fallback UI instead of crashing the application.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "63",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Lifecycle Methods",
    "answer_hi": "In React, the lifecycle methods describe the different stages of a component's life, which are Mounting, Updating, and Unmounting.\n- The mounting phase occurs when a component is created and displayed on the screen for the first time, and it is mainly used for tasks like fetching data or making API calls.\n- The updating phase occurs when a component's state or props change, causing it to re-render, and it is used to update the UI based on new data or perform side effects.\n- The unmounting phase occurs when a component is removed from the DOM, when user navigates to a different page, and it is important for cleaning up resources like event listeners, subscriptions, or timers to prevent memory leaks.",
    "question_en": "Lifecycle Methods",
    "answer_en": "In React, the lifecycle methods describe the different stages of a component's life, which are Mounting, Updating, and Unmounting.\n- The mounting phase occurs when a component is created and displayed on the screen for the first time, and it is mainly used for tasks like fetching data or making API calls.\n- The updating phase occurs when a component's state or props change, causing it to re-render, and it is used to update the UI based on new data or perform side effects.\n- The unmounting phase occurs when a component is removed from the DOM, when user navigates to a different page, and it is important for cleaning up resources like event listeners, subscriptions, or timers to prevent memory leaks.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "64",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Flux Pattern",
    "answer_hi": "A one-way data flow architecture used to manage data in frontend applications. In Flux, data moves in a single direction: Action → Dispatcher → Store → View → Action. It simplifies debugging and enhancing maintainability.",
    "question_en": "Flux Pattern",
    "answer_en": "A one-way data flow architecture used to manage data in frontend applications. In Flux, data moves in a single direction: Action → Dispatcher → Store → View → Action. It simplifies debugging and enhancing maintainability.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "65",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "React Anti-Patterns",
    "answer_hi": "Anti-patterns are bad practices that make code slow or hard to maintain. Examples include: changing state directly instead of using setState/useState, not using proper keys in lists, and keeping state too deeply nested.",
    "question_en": "React Anti-Patterns",
    "answer_en": "Anti-patterns are bad practices that make code slow or hard to maintain. Examples include: changing state directly instead of using setState/useState, not using proper keys in lists, and keeping state too deeply nested.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "66",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Concurrent Mode",
    "answer_hi": "Concurrent Mode allows React to work on multiple tasks by prioritizing updates, which improving performance and user experience. React uses the priority system in Concurrent Mode to schedule updates — it can break up large updates into smaller chunks and give priority to user interactions (like clicks or input) to ensure the app remains responsive.",
    "question_en": "Concurrent Mode",
    "answer_en": "Concurrent Mode allows React to work on multiple tasks by prioritizing updates, which improving performance and user experience. React uses the priority system in Concurrent Mode to schedule updates — it can break up large updates into smaller chunks and give priority to user interactions (like clicks or input) to ensure the app remains responsive.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "67",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Presentational vs Container Components",
    "answer_hi": "Presentational components only focus on the UI — they display data using HTML and CSS and usually don't manage state. Container components are used to manage the logic and state, like fetching data, managing state, and passing information to presentational components.",
    "question_en": "Presentational vs Container Components",
    "answer_en": "Presentational components only focus on the UI — they display data using HTML and CSS and usually don't manage state. Container components are used to manage the logic and state, like fetching data, managing state, and passing information to presentational components.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "68",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "React Router",
    "answer_hi": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.",
    "question_en": "React Router",
    "answer_en": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "56",
    "category": "5. Forms (56–63)",
    "question_hi": "Controlled Component",
    "answer_hi": "Controlled components in React are the components whose state and behaviors are managed by React components using states. Input ki value React state se control hoti hai (`value={state}` + `onChange` handler), isliye React hamesha \"source of truth\" hota hai.",
    "question_en": "Controlled Component",
    "answer_en": "Controlled components in React are the components whose state and behaviors are managed by React components using states. Input ki value React state se control hoti hai (`value={state}` + `onChange` handler), isliye React hamesha \"source of truth\" hota hai.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "57",
    "category": "5. Forms (56–63)",
    "question_hi": "Uncontrolled Component",
    "answer_hi": "Uncontrolled components manage their own state and control their behaviors with the help of the DOM (React state ke bajaye). Inki value ko access karne ke liye `useRef` ka use hota hai, DOM khud apni value maintain karta hai.",
    "question_en": "Uncontrolled Component",
    "answer_en": "Uncontrolled components manage their own state and control their behaviors with the help of the DOM (React state ke bajaye). Inki value ko access karne ke liye `useRef` ka use hota hai, DOM khud apni value maintain karta hai.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "58",
    "category": "5. Forms (56–63)",
    "question_hi": "Form Handling",
    "answer_hi": "Form handling ka matlab hai form ke input fields ki values ko manage karna, unhe state mein store karna, submit event ko handle karna, aur validation apply karna. React mein generally controlled components ke through hota hai — har input ka `value` state se aata hai aur `onChange` se state update hoti hai, phir `onSubmit` par data process kiya jaata hai.",
    "question_en": "Form Handling",
    "answer_en": "Form handling means managing the values of form input fields, storing them in state, handling the submit event, and applying validation. In React, this is generally done using controlled components — each input's value comes from state and is updated via onChange, and the data is processed on submit.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "59",
    "category": "5. Forms (56–63)",
    "question_hi": "Validation",
    "answer_hi": "Validation ka matlab hai form submit karne se pehle check karna ki user ne sahi/complete data diya hai ya nahi (jaise required fields, email format, password length). Ye manually (if-conditions) ya libraries (Formik + Yup, React Hook Form) ke through kiya ja sakta hai, aur errors ko state mein store karke user ko dikhaya jaata hai.",
    "question_en": "Validation",
    "answer_en": "Validation means checking, before the form is submitted, whether the user has provided correct/complete data (like required fields, email format, password length). This can be done manually (if-conditions) or with libraries (Formik + Yup, React Hook Form), storing errors in state and showing them to the user.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "60",
    "category": "5. Forms (56–63)",
    "question_hi": "Prevent Default",
    "answer_hi": "`event.preventDefault()` ek method hai jo kisi event ka default browser behavior rokta hai. Forms mein isse form submit hone par page reload hone se roka jaata hai: `const handleSubmit = (e) => { e.preventDefault(); ... }`.",
    "question_en": "Prevent Default",
    "answer_en": "event.preventDefault() is a method that stops the default browser behavior for an event. In forms, it's used to stop the page from reloading when the form is submitted: `const handleSubmit = (e) => { e.preventDefault(); ... }`.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "61",
    "category": "5. Forms (56–63)",
    "question_hi": "Multiple Inputs",
    "answer_hi": "Multiple inputs ko ek hi state object mein handle karne ke liye, har input ka `name` attribute set karke ek common `onChange` handler use karte hain, jo dynamically state ke us key ko update karta hai: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`.",
    "question_en": "Multiple Inputs",
    "answer_en": "To handle multiple inputs with a single state object, give each input a `name` attribute and use one common onChange handler that dynamically updates that key in state: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "62",
    "category": "5. Forms (56–63)",
    "question_hi": "File Upload",
    "answer_hi": "File upload ke liye `<input type=\"file\" onChange={handleFile} />` use hota hai. `e.target.files[0]` se selected file milti hai, jise state mein store karke ya FormData object banaakar API ko (multipart/form-data ke through) bheja jaata hai.",
    "question_en": "File Upload",
    "answer_en": "For file uploads, use `<input type=\"file\" onChange={handleFile} />`. `e.target.files[0]` gives you the selected file, which can be stored in state or added to a FormData object and sent to the API (via multipart/form-data).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "63",
    "category": "5. Forms (56–63)",
    "question_hi": "Form Libraries",
    "answer_hi": "Form libraries forms ko manage karna aasan banati hain — state, validation, aur errors ko handle karti hain taaki boilerplate code kam likhna pade. Popular libraries: **Formik**, **React Hook Form** (performance-friendly, less re-renders), aur validation ke liye **Yup** / **Zod** inke saath commonly use hoti hain.",
    "question_en": "Form Libraries",
    "answer_en": "Form libraries make it easier to manage forms — they handle state, validation, and errors so you write less boilerplate code. Popular libraries: Formik, React Hook Form (performance-friendly, fewer re-renders), and Yup / Zod are commonly used alongside them for validation.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "64",
    "category": "6. Lifecycle (64–69)",
    "question_hi": "Component Lifecycle",
    "answer_hi": "In React, the lifecycle methods describe the different stages of a component's life, which are Mounting, Updating, and Unmounting.",
    "question_en": "Component Lifecycle",
    "answer_en": "In React, the lifecycle methods describe the different stages of a component's life, which are Mounting, Updating, and Unmounting.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "65",
    "category": "6. Lifecycle (64–69)",
    "question_hi": "Mounting",
    "answer_hi": "The mounting phase occurs when a component is created and displayed on the screen for the first time, and it is mainly used for tasks like fetching data or making API calls. (Functional components mein ye `useEffect(() => {...}, [])` se handle hota hai.)",
    "question_en": "Mounting",
    "answer_en": "The mounting phase occurs when a component is created and displayed on the screen for the first time, and it is mainly used for tasks like fetching data or making API calls. (Functional components mein ye `useEffect(() => {...}, [])` se handle hota hai.)",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "66",
    "category": "6. Lifecycle (64–69)",
    "question_hi": "Updating",
    "answer_hi": "The updating phase occurs when a component's state or props change, causing it to re-render, and it is used to update the UI based on new data or perform side effects.",
    "question_en": "Updating",
    "answer_en": "The updating phase occurs when a component's state or props change, causing it to re-render, and it is used to update the UI based on new data or perform side effects.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "67",
    "category": "6. Lifecycle (64–69)",
    "question_hi": "Unmounting",
    "answer_hi": "The unmounting phase occurs when a component is removed from the DOM, when user navigate to different page, and it is important for cleaning up resources like event listeners, subscriptions, or timers to prevent memory leaks.",
    "question_en": "Unmounting",
    "answer_en": "The unmounting phase occurs when a component is removed from the DOM, when user navigate to different page, and it is important for cleaning up resources like event listeners, subscriptions, or timers to prevent memory leaks.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "68",
    "category": "6. Lifecycle (64–69)",
    "question_hi": "Error Boundary",
    "answer_hi": "Error Boundaries is a process which catches JavaScript errors in their child components, log them, and display a fallback UI instead of crashing the application. (Sirf class components error boundaries ban sakte hain, `componentDidCatch` / `getDerivedStateFromError` ke through.)",
    "question_en": "Error Boundary",
    "answer_en": "Error Boundaries is a process which catches JavaScript errors in their child components, log them, and display a fallback UI instead of crashing the application. (Sirf class components error boundaries ban sakte hain, `componentDidCatch` / `getDerivedStateFromError` ke through.)",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "69",
    "category": "6. Lifecycle (64–69)",
    "question_hi": "Cleanup",
    "answer_hi": "Cleanup, useEffect ke andar return kiye gaye function ke through hota hai, jo component unmount hone se pehle ya effect dobara run hone se pehle chalta hai — subscriptions, timers, event listeners ko remove karne ke liye, taaki memory leaks na ho.",
    "question_en": "Cleanup",
    "answer_en": "Cleanup happens through the function returned inside useEffect, which runs before the component unmounts or before the effect runs again — used to remove subscriptions, timers, and event listeners, to prevent memory leaks.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "70",
    "category": "7. Performance (70–78)",
    "question_hi": "Performance Optimization",
    "answer_hi": "React app ko optimize karne ke common tarike: memoization (React.memo, useMemo, useCallback), code splitting/lazy loading, list rendering mein proper keys use karna, unnecessary re-renders avoid karna, large context ko split karna, aur images/assets ko optimize karna.",
    "question_en": "Performance Optimization",
    "answer_en": "Common ways to optimize a React app: memoization (React.memo, useMemo, useCallback), code splitting/lazy loading, using proper keys in list rendering, avoiding unnecessary re-renders, splitting large contexts, and optimizing images/assets.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "71",
    "category": "7. Performance (70–78)",
    "question_hi": "Memoization",
    "answer_hi": "Memoization ek technique hai jisme expensive computation ya function/component ke result ko cache/store kar liya jaata hai, taaki wahi input dobara aane par recompute na karna pade. React mein ye `useMemo` (value memoize), `useCallback` (function memoize), aur `React.memo` (component memoize) ke through hota hai.",
    "question_en": "Memoization",
    "answer_en": "Memoization is a technique where the result of an expensive computation or function/component is cached/stored, so it doesn't need to be recomputed for the same input again. In React, this is done via useMemo (memoize a value), useCallback (memoize a function), and React.memo (memoize a component).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "72",
    "category": "7. Performance (70–78)",
    "question_hi": "React.memo vs useMemo vs useCallback",
    "answer_hi": "- **React.memo**: pura component memoize karta hai — agar props change nahi hue, to component re-render nahi hota.\n- **useMemo**: ek computed value memoize karta hai — expensive calculation sirf dependencies change hone par dobara chalti hai.\n- **useCallback**: ek function reference memoize karta hai — taaki wo function har render par naya na bane (child components ko unnecessary re-render se bachata hai).",
    "question_en": "React.memo vs useMemo vs useCallback",
    "answer_en": "- React.memo: memoizes an entire component — if the props haven't changed, the component doesn't re-render.\n- useMemo: memoizes a computed value — an expensive calculation only re-runs when its dependencies change.\n- useCallback: memoizes a function reference — so the function isn't recreated on every render (prevents unnecessary re-renders of child components).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "73",
    "category": "7. Performance (70–78)",
    "question_hi": "Code Splitting",
    "answer_hi": "Code splitting ka matlab hai poore app ka JavaScript bundle ek saath load karne ke bajaye, use chhote-chhote parts (chunks) mein todna aur unhe zarurat padne par load karna. Isse initial load time kam hota hai. React mein ye `React.lazy()` + `Suspense`, ya dynamic `import()` ke through hota hai.",
    "question_en": "Code Splitting",
    "answer_en": "Code splitting means breaking the app's JavaScript bundle into smaller chunks instead of loading it all at once, and loading them only when needed. This reduces the initial load time. In React, it's done via React.lazy() + Suspense, or dynamic import().",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "74",
    "category": "7. Performance (70–78)",
    "question_hi": "Debouncing",
    "answer_hi": "Debouncing ek technique hai jisme kisi function ko tabhi run hone diya jaata hai jab user ne action karna band kar diya ho ek fixed time ke liye (jaise typing rukne ke 300ms baad search API call karna). Isse unnecessary/frequent function calls avoid hoti hain.",
    "question_en": "Debouncing",
    "answer_en": "Debouncing is a technique where a function is only allowed to run after the user has stopped performing an action for a fixed amount of time (e.g. calling a search API 300ms after the user stops typing). This avoids unnecessary/frequent function calls.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "75",
    "category": "7. Performance (70–78)",
    "question_hi": "Throttling",
    "answer_hi": "Throttling ek technique hai jisme kisi function ko ek fixed time interval mein sirf ek baar run hone diya jaata hai, chahe event kitni baar bhi trigger ho (jaise scroll ya resize event ko har 200ms mein sirf ek baar handle karna). Isse performance improve hoti hai continuous events par.",
    "question_en": "Throttling",
    "answer_en": "Throttling is a technique where a function is only allowed to run once in a fixed time interval, no matter how many times the event is triggered (e.g. handling a scroll or resize event only once every 200ms). This improves performance for continuous events.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "76",
    "category": "7. Performance (70–78)",
    "question_hi": "Concurrent Rendering",
    "answer_hi": "Concurrent Mode allows React to work on multiple tasks by prioritizing updates, which improving performance and user experience. React uses the priority system in Concurrent Mode to schedule updates. It can break up large updates into smaller chunks and give priority to user interactions (like clicks or input) to ensure the app remains responsive.",
    "question_en": "Concurrent Rendering",
    "answer_en": "Concurrent Mode allows React to work on multiple tasks by prioritizing updates, which improving performance and user experience. React uses the priority system in Concurrent Mode to schedule updates. It can break up large updates into smaller chunks and give priority to user interactions (like clicks or input) to ensure the app remains responsive.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "77",
    "category": "7. Performance (70–78)",
    "question_hi": "React Fiber",
    "answer_hi": "React Fiber is a complete rewrite of React's core algorithm. It is designed to improve performance and enable new features like async rendering, error boundaries, and incremental rendering. It breaks the rendering process into smaller chunks, allow React to pause, kill, or prioritize updates.",
    "question_en": "React Fiber",
    "answer_en": "React Fiber is a complete rewrite of React's core algorithm. It is designed to improve performance and enable new features like async rendering, error boundaries, and incremental rendering. It breaks the rendering process into smaller chunks, allow React to pause, kill, or prioritize updates.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "78",
    "category": "7. Performance (70–78)",
    "question_hi": "Strict Mode",
    "answer_hi": "`<React.StrictMode>` ek development-only tool hai jo potential problems ko detect karne mein madad karta hai — jaise unsafe lifecycle methods, deprecated APIs, ya side effects. Ye components ko intentionally double-render karta hai (dev mein hi) taaki impure/unsafe code identify ho sake. Production build par iska koi effect nahi hota.",
    "question_en": "Strict Mode",
    "answer_en": "`<React.StrictMode>` is a development-only tool that helps detect potential problems — like unsafe lifecycle methods, deprecated APIs, or side effects. It intentionally double-renders components (only in dev) so impure/unsafe code can be identified. It has no effect on the production build.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "79",
    "category": "8. State Management (79–86)",
    "question_hi": "Context API",
    "answer_hi": "Context API React ka built-in feature hai jo data ko component tree ke through manually har level par props pass kiye bina share karne deta hai (prop drilling avoid karta hai). `createContext()` se context banta hai, `<Context.Provider value={...}>` se value provide hoti hai, aur `useContext(Context)` se access hoti hai.",
    "question_en": "Context API",
    "answer_en": "The Context API is a built-in React feature that lets you share data across the component tree without manually passing props through every level (it avoids prop drilling). `createContext()` creates a context, `<Context.Provider value={...}>` provides the value, and `useContext(Context)` accesses it.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "80",
    "category": "8. State Management (79–86)",
    "question_hi": "Context vs Redux",
    "answer_hi": "Context API simple/small-scale global state ke liye achi hai (jaise theme, auth user) — lightweight aur built-in hai, lekin frequent updates par performance issues de sakta hai. Redux large, complex applications ke liye better hai — predictable state management, dev tools, middleware support (jaise async logic ke liye), aur better debugging deta hai, lekin thoda zyada boilerplate hota hai.",
    "question_en": "Context vs Redux",
    "answer_en": "The Context API is good for simple/small-scale global state (like theme, logged-in user) — it's lightweight and built-in, but can cause performance issues with frequent updates. Redux is better for large, complex applications — it gives predictable state management, dev tools, middleware support (for async logic, for example), and better debugging, though it comes with more boilerplate.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "81",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux Basics",
    "answer_hi": "Redux ek state management library hai jo poore app ka state ek single central **store** mein rakhti hai. Components is store se data read karte hain aur state change karne ke liye **actions** dispatch karte hain, jinhe **reducers** handle karke naya state return karte hain. Flow: Action → Dispatch → Reducer → Store → UI update.",
    "question_en": "Redux Basics",
    "answer_en": "Redux is a state management library that keeps the entire app's state in a single central store. Components read data from this store and dispatch actions to change state, which reducers handle and return a new state for. Flow: Action → Dispatch → Reducer → Store → UI update.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "82",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux Toolkit",
    "answer_hi": "Redux Toolkit (RTK) Redux ka official, recommended tarika hai jo boilerplate code kam karta hai. Ye `configureStore`, `createSlice` (actions + reducers ek saath), aur built-in Immer (jisse state ko \"mutate\" jaisa likhna allowed hota hai lekin actually immutably update hota hai) jaisi utilities provide karta hai, jisse Redux likhna aasan ho jaata hai.",
    "question_en": "Redux Toolkit",
    "answer_en": "Redux Toolkit (RTK) is the official, recommended way to write Redux, reducing boilerplate code. It provides utilities like configureStore, createSlice (actions + reducers together), and built-in Immer (which lets you write state updates that look like mutations but are actually applied immutably), making Redux much easier to write.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "83",
    "category": "8. State Management (79–86)",
    "question_hi": "Store",
    "answer_hi": "Store Redux ka wo single object hota hai jisme poore application ka state store hota hai. Ye `createStore` (ya RTK ke `configureStore`) se banta hai, aur iske paas methods hote hain: `getState()` (current state read karna), `dispatch(action)` (state change trigger karna), aur `subscribe()` (state change par listen karna).",
    "question_en": "Store",
    "answer_en": "The store is that single object in Redux which holds the entire application's state. It's created with createStore (or configureStore in RTK), and has methods like getState() (read current state), dispatch(action) (trigger a state change), and subscribe() (listen for state changes).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "84",
    "category": "8. State Management (79–86)",
    "question_hi": "Reducer",
    "answer_hi": "Reducer ek pure function hota hai jo current state aur ek action leta hai, aur uske basis par naya state return karta hai: `(state, action) => newState`. Ye kabhi bhi original state ko directly mutate nahi karta — hamesha naya state object return karta hai.",
    "question_en": "Reducer",
    "answer_en": "A reducer is a pure function that takes the current state and an action, and returns the new state based on it: `(state, action) => newState`. It never mutates the original state directly — it always returns a new state object.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "85",
    "category": "8. State Management (79–86)",
    "question_hi": "Action",
    "answer_hi": "Action ek plain JavaScript object hota hai jo describe karta hai ki \"kya hua hai\". Iska ek `type` property zaroor hota hai (jaise `{ type: \"INCREMENT\" }`), aur optionally extra data (`payload`) bhi ho sakta hai. Actions ko `dispatch()` ke through store tak bheja jaata hai, jisse reducer trigger hota hai.",
    "question_en": "Action",
    "answer_en": "An action is a plain JavaScript object that describes \"what happened\". It always has a `type` property (like `{ type: \"INCREMENT\" }`), and can optionally carry extra data (`payload`). Actions are sent to the store via `dispatch()`, which triggers the reducer.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "86",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux Thunk",
    "answer_hi": "Redux Thunk ek middleware hai jo Redux mein async logic (jaise API calls) handle karne deta hai. Normally actions plain objects hote hain, lekin thunk ki wajah se hum ek **function** bhi dispatch kar sakte hain, jiske andar async code (jaise `fetch`) likh kar, response aane par actual action dispatch kiya ja sakta hai.",
    "question_en": "Redux Thunk",
    "answer_en": "Redux Thunk is a middleware that lets you handle async logic (like API calls) in Redux. Normally actions are plain objects, but with thunk you can dispatch a function instead — inside which you write async code (like fetch), and dispatch the actual action once the response arrives.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "87",
    "category": "9. Routing (87–92)",
    "question_hi": "React Router",
    "answer_hi": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.",
    "question_en": "React Router",
    "answer_en": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "88",
    "category": "9. Routing (87–92)",
    "question_hi": "BrowserRouter",
    "answer_hi": "`BrowserRouter` React Router ka ek component hai jo app ko HTML5 History API use karke routing capability deta hai — clean URLs (bina `#` ke) allow karta hai. Poore app ko `<BrowserRouter>` se wrap kiya jaata hai taaki routing kaam kare.",
    "question_en": "BrowserRouter",
    "answer_en": "BrowserRouter is a React Router component that gives the app routing capability using the HTML5 History API — it allows clean URLs (without #). The whole app is wrapped with `<BrowserRouter>` for routing to work.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "89",
    "category": "9. Routing (87–92)",
    "question_hi": "Routes",
    "answer_hi": "`<Routes>` ek container/wrapper component hai jiske andar saare `<Route>` elements define kiye jaate hain. Ye current URL ke match hone wale sabse best-matching `<Route>` ko render karta hai.",
    "question_en": "Routes",
    "answer_en": "`<Routes>` is a container/wrapper component inside which all the `<Route>` elements are defined. It renders the best-matching `<Route>` for the current URL.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "90",
    "category": "9. Routing (87–92)",
    "question_hi": "Route",
    "answer_hi": "`<Route>` ek single path aur uske corresponding component ka mapping define karta hai: `<Route path=\"/about\" element={<About />} />`. Jab URL us path se match karta hai, to specified component render hota hai.",
    "question_en": "Route",
    "answer_en": "`<Route>` defines a mapping between a single path and its corresponding component: `<Route path=\"/about\" element={<About />} />`. When the URL matches that path, the specified component is rendered.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "91",
    "category": "9. Routing (87–92)",
    "question_hi": "Link vs NavLink",
    "answer_hi": "- **Link**: page reload kiye bina navigation ke liye use hota hai — normal `<a>` tag ki jagah: `<Link to=\"/about\">About</Link>`.\n- **NavLink**: `Link` jaisa hi hai, lekin ye automatically active route ko style karne ki ability deta hai (jaise `isActive` class), jo mostly navigation menus mein current page highlight karne ke liye use hota hai.",
    "question_en": "Link vs NavLink",
    "answer_en": "- Link: used for navigation without a page reload — instead of a normal `<a>` tag: `<Link to=\"/about\">About</Link>`.\n- NavLink: same as Link, but it automatically gives you the ability to style the active route (like an `isActive` class), mostly used to highlight the current page in navigation menus.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "92",
    "category": "9. Routing (87–92)",
    "question_hi": "useNavigate",
    "answer_hi": "`useNavigate` ek hook hai jo programmatically navigate karne ke liye use hota hai (jaise button click ya form submit ke baad redirect karna): `const navigate = useNavigate(); navigate(\"/dashboard\");`",
    "question_en": "useNavigate",
    "answer_en": "useNavigate is a hook used to navigate programmatically (e.g. redirecting after a button click or form submit): `const navigate = useNavigate(); navigate(\"/dashboard\");`",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "93",
    "category": "10. APIs (93–96)",
    "question_hi": "Fetch API",
    "answer_hi": "`fetch()` ek built-in browser API hai jo HTTP requests bhejne ke liye use hota hai. Ye ek Promise return karta hai: `fetch(url).then(res => res.json()).then(data => ...)`. Errors ko `.catch()` se handle kiya jaata hai, aur note — fetch sirf network error par reject hota hai, HTTP error status (404, 500) par nahi.",
    "question_en": "Fetch API",
    "answer_en": "`fetch()` is a built-in browser API used to send HTTP requests. It returns a Promise: `fetch(url).then(res => res.json()).then(data => ...)`. Errors are handled with `.catch()` — note that fetch only rejects on a network error, not on an HTTP error status (404, 500).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "94",
    "category": "10. APIs (93–96)",
    "question_hi": "Axios",
    "answer_hi": "Axios ek popular third-party library hai jo HTTP requests karne ke liye use hoti hai. Fetch ke comparison mein isme automatic JSON parsing, better error handling (HTTP error status par bhi reject hoti hai), request/response interceptors, aur timeout support built-in milta hai — isliye ye developers mein zyada popular hai.",
    "question_en": "Axios",
    "answer_en": "Axios is a popular third-party library used to make HTTP requests. Compared to fetch, it comes with automatic JSON parsing, better error handling (it rejects on HTTP error status too), request/response interceptors, and built-in timeout support — which is why it's more popular among developers.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "95",
    "category": "10. APIs (93–96)",
    "question_hi": "API Error Handling",
    "answer_hi": "API calls ke errors handle karne ke liye try-catch (async/await ke saath) ya `.catch()` (promises ke saath) use kiya jaata hai. Achi practice hai: network errors, HTTP status errors (4xx/5xx), aur unexpected errors ko alag-alag handle karna, aur user ko meaningful error message dikhana (loading/error state ke through).",
    "question_en": "API Error Handling",
    "answer_en": "API call errors are handled using try-catch (with async/await) or .catch() (with promises). Good practice is to handle network errors, HTTP status errors (4xx/5xx), and unexpected errors separately, and show the user a meaningful error message (via loading/error state).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "96",
    "category": "10. APIs (93–96)",
    "question_hi": "Loading & Error State",
    "answer_hi": "API calls ke dauran UI ko teen states mein manage karna common practice hai: `loading` (data fetch ho raha hai — spinner dikhana), `error` (request fail hui — error message dikhana), aur `data` (success — actual content dikhana). Ye generally `useState` (ya React Query jaisi library) se manage kiya jaata hai.",
    "question_en": "Loading & Error State",
    "answer_en": "It's common practice to manage the UI in three states during API calls: loading (data is being fetched — show a spinner), error (the request failed — show an error message), and data (success — show the actual content). This is usually managed with useState (or a library like React Query).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "97",
    "category": "11. Advanced (97–100)",
    "question_hi": "HOC (Higher Order Component)",
    "answer_hi": "HOC ek function hota hai jo ek component leta hai aur ek naya, enhanced component return karta hai: `const EnhancedComponent = withSomething(OriginalComponent)`. Isse common logic (jaise authentication check, data fetching) ko multiple components mein reuse kiya ja sakta hai bina code duplicate kiye.",
    "question_en": "HOC (Higher Order Component)",
    "answer_en": "An HOC is a function that takes a component and returns a new, enhanced component: `const EnhancedComponent = withSomething(OriginalComponent)`. This lets you reuse common logic (like an authentication check or data fetching) across multiple components without duplicating code.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "98",
    "category": "11. Advanced (97–100)",
    "question_hi": "Render Props",
    "answer_hi": "Render Props ek pattern hai jisme ek component ek prop leta hai jiski value ek function hoti hai, aur wo function batata hai ki kya render karna hai. Isse logic ko components ke beech share kiya ja sakta hai: `<DataProvider render={data => <Display data={data} />} />`. (Aaj-kal iski jagah zyadatar custom hooks use hote hain.)",
    "question_en": "Render Props",
    "answer_en": "Render Props is a pattern where a component takes a prop whose value is a function, and that function decides what to render. This lets you share logic between components: `<DataProvider render={data => <Display data={data} />} />`. (These days, custom hooks are mostly used instead.)",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "99",
    "category": "11. Advanced (97–100)",
    "question_hi": "Portals",
    "answer_hi": "Portals (`ReactDOM.createPortal`) ek feature hai jisse hum kisi child component ko uske parent DOM hierarchy se bahar, kisi doosre DOM node mein render kar sakte hain — jabki React tree mein wo logically andar hi rehta hai. Ye modals, tooltips, aur dropdowns banane mein useful hota hai (taaki CSS overflow/z-index issues na aayein).",
    "question_en": "Portals",
    "answer_en": "Portals (ReactDOM.createPortal) let you render a child component outside its parent's DOM hierarchy, into a different DOM node — while it logically stays inside the React tree. This is useful for building modals, tooltips, and dropdowns (to avoid CSS overflow/z-index issues).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "100",
    "category": "11. Advanced (97–100)",
    "question_hi": "SSR vs CSR vs SSG",
    "answer_hi": "- **CSR (Client-Side Rendering)**: HTML browser mein JavaScript ke through render hota hai — initial load thoda slow, SEO thoda weak, but interactions fast hote hain baad mein. (Normal React app.)\n- **SSR (Server-Side Rendering)**: HTML server par pehle se render karke browser ko bheja jaata hai — faster initial load, better SEO. (Next.js jaisi framework se possible.)\n- **SSG (Static Site Generation)**: HTML build time par hi generate ho jaata hai (pehle se ready hota hai), aur bas serve kiya jaata hai — sabse fast, best for content jo baar-baar change nahi hota (blogs, docs).",
    "question_en": "SSR vs CSR vs SSG",
    "answer_en": "- CSR (Client-Side Rendering): HTML is rendered in the browser via JavaScript — slightly slower initial load, weaker SEO, but fast interactions afterward. (A normal React app.)\n- SSR (Server-Side Rendering): HTML is rendered on the server in advance and sent to the browser — faster initial load, better SEO. (Possible with frameworks like Next.js.)\n- SSG (Static Site Generation): HTML is generated at build time (ready in advance) and just served — the fastest option, best for content that doesn't change often (blogs, docs).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Difference between useMemo & useCallback",
    "answer_hi": "`useMemo` ek computed **value** ko memoize karta hai; `useCallback` ek **function** ko memoize karta hai (jo technically `useMemo(() => fn, deps)` jaisा hi hai, bas function ke liye shorthand hai).",
    "question_en": "Difference between useMemo & useCallback",
    "answer_en": "useMemo memoizes a computed value; useCallback memoizes a function (which is technically the same as `useMemo(() => fn, deps)` — just a shorthand for functions).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Difference between Props & State",
    "answer_hi": "Props → external, read-only data (parent se aati hai). State → internal, mutable data (component khud manage karta hai).",
    "question_en": "Difference between Props & State",
    "answer_en": "Props → external, read-only data (comes from the parent). State → internal, mutable data (the component manages it itself).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Difference between let, var, const",
    "answer_hi": "- `var`: function-scoped, re-declare/update dono allowed, hoisting hoti hai (undefined ke saath).\n- `let`: block-scoped, update allowed but re-declare nahi, hoisting hoti hai but \"temporal dead zone\" ki wajah se access nahi hota init se pehle.\n- `const`: block-scoped, na update na re-declare (value reassign nahi kar sakte, lekin object/array ke andar ke properties change kar sakte hain).",
    "question_en": "Difference between let, var, const",
    "answer_en": "- var: function-scoped, both redeclaring and updating are allowed, gets hoisted (initialized with undefined).\n- let: block-scoped, updating is allowed but not redeclaring; it's hoisted too, but the \"temporal dead zone\" means it can't be accessed before its initialization.\n- const: block-scoped, neither updating nor redeclaring is allowed (you can't reassign the value, though you can change properties inside an object/array).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Difference between == and ===",
    "answer_hi": "`==` (loose equality) comparison se pehle type conversion karta hai (`\"5\" == 5` → true). `===` (strict equality) type conversion nahi karta, value aur type dono match hone chahiye (`\"5\" === 5` → false).",
    "question_en": "Difference between == and ===",
    "answer_en": "`==` (loose equality) converts types before comparing (`\"5\" == 5` → true). `===` (strict equality) doesn't convert types — both value and type must match (`\"5\" === 5` → false).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Event Bubbling & Capturing",
    "answer_hi": "- **Bubbling**: event pehle sabse andar wale (target) element par trigger hota hai, phir upar ki taraf parent elements tak \"bubble\" karta hai.\n- **Capturing**: event ka opposite flow — sabse upar (root) se shuru hokar neeche target element tak jaata hai. Default JS mein bubbling use hoti hai; capturing enable karne ke liye `addEventListener(event, fn, true)` use hota hai.",
    "question_en": "Event Bubbling & Capturing",
    "answer_en": "- Bubbling: the event first triggers on the innermost (target) element, then \"bubbles\" up through its parent elements.\n- Capturing: the opposite flow — it starts at the root and goes down to the target element. By default, JS uses bubbling; to enable capturing, use `addEventListener(event, fn, true)`.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Closures",
    "answer_hi": "Closure ek function hota hai jo apne outer (lexical) scope ke variables ko yaad rakhta hai, chahe outer function execute ho chuka ho. Isse data privacy (jaise counters) aur state persist karne jaisi cheezein possible hoti hain.",
    "question_en": "Closures",
    "answer_en": "A closure is a function that remembers the variables from its outer (lexical) scope, even after the outer function has finished executing. This makes things like data privacy (e.g. counters) and persisting state possible.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Hoisting",
    "answer_hi": "Hoisting JavaScript ka wo behavior hai jisme variable aur function declarations ko unke scope ke top par \"move\" kar diya jaata hai (execution se pehle), memory allocation ke waqt. `var` aur function declarations hoist hoti hain (usable value ke saath/undefined), lekin `let`/`const` technically hoist hoti hain but temporal dead zone ki wajah se use se pehle access nahi ki ja sakti.",
    "question_en": "Hoisting",
    "answer_en": "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope (before execution), during the memory allocation phase. var and function declarations are hoisted (usable/with undefined), but let/const are technically hoisted too — though the temporal dead zone means they can't be accessed before being initialized.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Debouncing",
    "answer_hi": "(Q74 dekho) — function ko tabhi run karna jab user action rukne ke baad ek fixed time guzar jaaye.",
    "question_en": "Debouncing",
    "answer_en": "(See the Debouncing card above) — running a function only after a fixed amount of time has passed since the user stopped the action.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Throttling",
    "answer_hi": "(Q75 dekho) — function ko ek fixed interval mein sirf ek baar run hone dena.",
    "question_en": "Throttling",
    "answer_en": "(See the Throttling card above) — allowing a function to run only once in a fixed interval.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Promise",
    "answer_hi": "Promise ek JavaScript object hai jo kisi async operation ke eventual success (`resolve`) ya failure (`reject`) ko represent karta hai. Iske 3 states hote hain: `pending`, `fulfilled`, `rejected`. `.then()`, `.catch()`, `.finally()` se handle kiya jaata hai.",
    "question_en": "Promise",
    "answer_en": "A Promise is a JavaScript object that represents the eventual success (resolve) or failure (reject) of an async operation. It has 3 states: pending, fulfilled, rejected. Handled with .then(), .catch(), .finally().",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Async Await",
    "answer_hi": "`async/await` Promises ko handle karne ka ek cleaner, synchronous-jaisa syntax hai. `async` function hamesha ek Promise return karta hai; `await` keyword uske andar kisi Promise ke resolve hone tak wait karta hai bina blocking kiye poore thread ko. Errors ko `try...catch` se handle kiya jaata hai.",
    "question_en": "Async Await",
    "answer_en": "async/await is a cleaner, synchronous-looking syntax for handling Promises. An async function always returns a Promise; the await keyword inside it waits for a Promise to resolve, without blocking the whole thread. Errors are handled with try...catch.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Event Loop",
    "answer_hi": "Event loop JavaScript ka wo mechanism hai jo single-threaded hone ke bawajood asynchronous operations handle karne deta hai. Ye continuously check karta hai ki call stack khali hai ya nahi — agar khali hai, to callback queue (ya microtask queue, jo Promises ke liye priority mein hoti hai) se agla task uthakar call stack mein daal deta hai.",
    "question_en": "Event Loop",
    "answer_en": "The event loop is the mechanism that lets JavaScript, despite being single-threaded, handle asynchronous operations. It continuously checks whether the call stack is empty — if it is, it picks up the next task from the callback queue (or the microtask queue, which has priority for Promises) and pushes it onto the call stack.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "REST API",
    "answer_hi": "REST (Representational State Transfer) ek architectural style hai APIs design karne ke liye, jisme resources ko URLs (endpoints) ke through access kiya jaata hai, aur standard HTTP methods use hote hain: `GET` (read), `POST` (create), `PUT`/`PATCH` (update), `DELETE` (remove).",
    "question_en": "REST API",
    "answer_en": "REST (Representational State Transfer) is an architectural style for designing APIs, where resources are accessed through URLs (endpoints), using standard HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "CORS",
    "answer_hi": "CORS (Cross-Origin Resource Sharing) ek browser security feature hai jo control karta hai ki ek website (origin) kisi doosre origin (different domain/port) se resources request kar sakti hai ya nahi. Server ko specific headers (`Access-Control-Allow-Origin`) bhejni padti hain taaki cross-origin requests allow ho sakein.",
    "question_en": "CORS",
    "answer_en": "CORS (Cross-Origin Resource Sharing) is a browser security feature that controls whether a website (origin) can request resources from a different origin (different domain/port). The server has to send specific headers (Access-Control-Allow-Origin) to allow cross-origin requests.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "JWT Authentication",
    "answer_hi": "JWT (JSON Web Token) ek compact, self-contained token hota hai jo user ki identity/claims ko securely represent karta hai. Login ke baad server ek JWT generate karke client ko deta hai, aur client har request ke saath (usually `Authorization` header mein) ye token bhejta hai, jisse server verify karke user ko authenticate karta hai — bina session store kiye (stateless).",
    "question_en": "JWT Authentication",
    "answer_en": "JWT (JSON Web Token) is a compact, self-contained token that securely represents a user's identity/claims. After login, the server generates a JWT and gives it to the client, and the client sends this token with every request (usually in the Authorization header), which the server verifies to authenticate the user — without storing a session (stateless).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "LocalStorage vs SessionStorage",
    "answer_hi": "- **LocalStorage**: data browser mein permanently store hota hai (tab/browser band karne ke baad bhi rehta hai), jab tak manually clear na kiya jaaye.\n- **SessionStorage**: data sirf current tab/session ke liye store hota hai — tab band karte hi delete ho jaata hai.\nDono ki storage limit ~5-10MB hoti hai aur data sirf strings ke roop mein store hota hai.",
    "question_en": "LocalStorage vs SessionStorage",
    "answer_en": "- LocalStorage: data is stored permanently in the browser (persists even after closing the tab/browser), until manually cleared.\n- SessionStorage: data is stored only for the current tab/session — it's deleted as soon as the tab is closed.\nBoth have a storage limit of ~5-10MB, and data is stored only as strings.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Cookies",
    "answer_hi": "Cookies chhoti text files hoti hain jo browser mein store hoti hain aur har HTTP request ke saath server ko automatically bheji jaati hain. Inka use sessions, authentication tokens, aur user preferences store karne ke liye hota hai. Expiry date set ki ja sakti hai, aur `HttpOnly`/`Secure` flags se inhe safer banaya ja sakta hai.",
    "question_en": "Cookies",
    "answer_en": "Cookies are small text files stored in the browser and automatically sent to the server with every HTTP request. They're used to store sessions, authentication tokens, and user preferences. An expiry date can be set, and HttpOnly/Secure flags can make them safer.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Authentication vs Authorization",
    "answer_hi": "**Authentication** verify karta hai ki user **kaun hai** (login — username/password, OTP, etc.). **Authorization** decide karta hai ki authenticated user **kya kar sakta hai** (permissions/roles — jaise admin vs normal user access).",
    "question_en": "Authentication vs Authorization",
    "answer_en": "Authentication verifies who the user is (login — username/password, OTP, etc.). Authorization decides what an authenticated user is allowed to do (permissions/roles — like admin vs regular user access).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Git Commands",
    "answer_hi": "Kuch common Git commands: `git init` (naya repo banana), `git clone` (existing repo copy karna), `git add` (changes stage karna), `git commit -m \"message\"` (changes save karna), `git push` (remote par bhejna), `git pull` (remote se latest lena), `git branch` (branches manage karna), `git merge` (branches combine karna), `git status` (current state dekhna), `git log` (history dekhna).",
    "question_en": "Git Commands",
    "answer_en": "Some common Git commands: git init (create a new repo), git clone (copy an existing repo), git add (stage changes), git commit -m \"message\" (save changes), git push (send to remote), git pull (get the latest from remote), git branch (manage branches), git merge (combine branches), git status (see current state), git log (see history).",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "npm vs npx",
    "answer_hi": "- **npm**: package manager hai — packages ko install, update, aur manage karne ke liye use hota hai (`npm install package-name`).\n- **npx**: npm ke saath aata hai, aur ye kisi package ko **bina permanently install kiye** ek baar run karne deta hai (jaise `npx create-react-app my-app`) — directly npm registry se fetch karke execute kar deta hai.",
    "question_en": "npm vs npx",
    "answer_en": "- npm: a package manager — used to install, update, and manage packages (npm install package-name).\n- npx: comes bundled with npm, and lets you run a package once without permanently installing it (e.g. npx create-react-app my-app) — it fetches and executes directly from the npm registry.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "package.json",
    "answer_hi": "`package.json` ek project ki configuration file hai jisme project ka naam, version, dependencies, devDependencies, scripts (jaise `npm start`, `npm build`), aur other metadata define hoti hai. Ye Node.js/React projects ka \"identity card\" hota hai.",
    "question_en": "package.json",
    "answer_en": "package.json is a project's configuration file, where the project's name, version, dependencies, devDependencies, scripts (like npm start, npm build), and other metadata are defined. It's the \"identity card\" of a Node.js/React project.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Vite vs CRA",
    "answer_hi": "**CRA (Create React App)**: purana, official React setup tool tha, lekin Webpack-based hone ki wajah se build/start slow hota hai, aur ab officially deprecated/less recommended hai.\n**Vite**: naya, modern build tool hai jo bahut fast hai — native ES modules use karke instant dev server start karta hai aur fast hot-reload deta hai. Aajkal Vite React projects banane ke liye most-recommended option hai.",
    "question_en": "Vite vs CRA",
    "answer_en": "CRA (Create React App): the older, official React setup tool, but being Webpack-based makes builds/starts slow, and it's now officially deprecated/less recommended.\nVite: a newer, modern build tool that's very fast — it uses native ES modules for an instant dev server start and fast hot-reload. Vite is the most recommended option for React projects these days.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": null,
    "category": "Bonus: JS & Tooling (2026 Frequently Asked)",
    "question_hi": "Tailwind CSS Basics",
    "answer_hi": "Tailwind ek utility-first CSS framework hai, jisme pre-defined utility classes directly HTML/JSX mein use karke styling ki jaati hai (jaise `class=\"bg-blue-500 text-white p-4 rounded-lg\"`), custom CSS likhne ke bajaye. Isse development fast hota hai, consistent design milta hai, aur unused CSS build ke time automatically remove ho jaata hai (purge/JIT mode).",
    "question_en": "Tailwind CSS Basics",
    "answer_en": "Tailwind is a utility-first CSS framework, where you style directly in HTML/JSX using pre-defined utility classes (like `class=\"bg-blue-500 text-white p-4 rounded-lg\"`), instead of writing custom CSS. This makes development faster, gives a consistent design, and unused CSS is automatically removed at build time (purge/JIT mode).",
    "source": "written",
    "topic": "react"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is Python?",
    "answer_hi": "> **Python is a high-level, general-purpose, interpreted programming language known for its readable syntax, dynamic typing, and large standard library.**",
    "question_en": "What is Python?",
    "answer_en": "> **Python is a high-level, general-purpose, interpreted programming language known for its readable syntax, dynamic typing, and large standard library.**",
    "source": "written",
    "topic": "python",
    "num": "137"
  },
  {
    "category": "Python Basics",
    "question_hi": "Is Python a compiled or interpreted language?",
    "answer_hi": "> **Python is generally considered an interpreted language. However, before execution, Python first compiles the source code into bytecode (`.pyc`). This bytecode is then executed by the Python Virtual Machine (PVM). So, Python uses both compilation and interpretation internally, but it is commonly referred to as an interpreted language because the PVM executes the bytecode rather than running native machine code directly.**\r\n\r\n**Short version (30-second answer):**\r\n\r\n> **Python is an interpreted language. Internally, it first compiles the source code into bytecode, and then the Python Virtual Machine (PVM) interprets and executes that bytecode. That's why Python is called an interpreted language, even though it performs a compilation step internally.**\r\n\r\nThis is the version most interviewers expect.",
    "question_en": "Is Python a compiled or interpreted language?",
    "answer_en": "> **Python is generally considered an interpreted language. However, before execution, Python first compiles the source code into bytecode (`.pyc`). This bytecode is then executed by the Python Virtual Machine (PVM). So, Python uses both compilation and interpretation internally, but it is commonly referred to as an interpreted language because the PVM executes the bytecode rather than running native machine code directly.**\r\n\r\n**Short version (30-second answer):**\r\n\r\n> **Python is an interpreted language. Internally, it first compiles the source code into bytecode, and then the Python Virtual Machine (PVM) interprets and executes that bytecode. That's why Python is called an interpreted language, even though it performs a compilation step internally.**\r\n\r\nThis is the version most interviewers expect.",
    "source": "doc",
    "topic": "python",
    "num": "138"
  },
  {
    "category": "Python Basics",
    "question_hi": "What are the key features of Python?",
    "answer_hi": "> **Python has many useful features. It has a simple and easy-to-read syntax, which makes it beginner-friendly. It uses dynamic typing, so we don't need to declare variable types. Python provides automatic memory management, so developers don't have to manage memory manually. It has a large standard library with many built-in modules. It is cross-platform, meaning the same code can run on Windows, Linux, and macOS. Python also supports multiple programming paradigms, including procedural, object-oriented, and functional programming.**\r\n\r\n### Short version (30 seconds)\r\n\r\n> **Python is easy to learn because of its simple syntax. It supports dynamic typing, automatic memory management, a large standard library, cross-platform compatibility, and multiple programming styles such as procedural, object-oriented, and functional programming.**\r\n\r\nThis version is clear, professional, and ideal for freshers' interviews.",
    "question_en": "What are the key features of Python?",
    "answer_en": "> **Python has many useful features. It has a simple and easy-to-read syntax, which makes it beginner-friendly. It uses dynamic typing, so we don't need to declare variable types. Python provides automatic memory management, so developers don't have to manage memory manually. It has a large standard library with many built-in modules. It is cross-platform, meaning the same code can run on Windows, Linux, and macOS. Python also supports multiple programming paradigms, including procedural, object-oriented, and functional programming.**\r\n\r\n### Short version (30 seconds)\r\n\r\n> **Python is easy to learn because of its simple syntax. It supports dynamic typing, automatic memory management, a large standard library, cross-platform compatibility, and multiple programming styles such as procedural, object-oriented, and functional programming.**\r\n\r\nThis version is clear, professional, and ideal for freshers' interviews.",
    "source": "doc",
    "topic": "python",
    "num": "139"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is PEP 8?",
    "answer_hi": "### **Interview Answer (Simple English):**\r\n\r\n> **PEP 8 is the official style guide for Python. It provides coding rules such as proper indentation, naming conventions, line length, and formatting. Following PEP 8 makes the code clean, readable, and easy for other developers to understand and maintain.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **PEP 8 is Python's official coding style guide. It defines rules for writing clean and consistent code, such as indentation, variable naming, line length, and formatting, making the code easier to read and maintain.**",
    "question_en": "What is PEP 8?",
    "answer_en": "### **Interview Answer (Simple English):**\r\n\r\n> **PEP 8 is the official style guide for Python. It provides coding rules such as proper indentation, naming conventions, line length, and formatting. Following PEP 8 makes the code clean, readable, and easy for other developers to understand and maintain.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **PEP 8 is Python's official coding style guide. It defines rules for writing clean and consistent code, such as indentation, variable naming, line length, and formatting, making the code easier to read and maintain.**",
    "source": "doc",
    "topic": "python",
    "num": "140"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is the difference between Python 2 and Python 3?",
    "answer_hi": "> **Python 3 is the latest version of Python and is used for modern development, while Python 2 is an older version that is no longer supported. In Python 3, `print` is written as a function using `print()`, division with `/` gives the exact result, and it supports Unicode by default. Python 3 also has better features and improved performance, so it is the preferred version today.**\r\n\r\n### Even shorter (best for HR/technical interviews):\r\n\r\n> **Python 3 is the latest and most commonly used version of Python, while Python 2 is an older version that is no longer supported. Python 3 uses `print()` as a function, provides better features and performance, and is the preferred choice for developing new applications.**\r\n\r\nYe version natural lagta hai aur ek fresher confidently bol sakta hai.",
    "question_en": "What is the difference between Python 2 and Python 3?",
    "answer_en": "> **Python 3 is the latest version of Python and is used for modern development, while Python 2 is an older version that is no longer supported. In Python 3, `print` is written as a function using `print()`, division with `/` gives the exact result, and it supports Unicode by default. Python 3 also has better features and improved performance, so it is the preferred version today.**\r\n\r\n### Even shorter (best for HR/technical interviews):\r\n\r\n> **Python 3 is the latest and most commonly used version of Python, while Python 2 is an older version that is no longer supported. Python 3 uses `print()` as a function, provides better features and performance, and is the preferred choice for developing new applications.**\r\n\r\nYe version natural lagta hai aur ek fresher confidently bol sakta hai.",
    "source": "doc",
    "topic": "python",
    "num": "141"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is indentation and why does Python rely on it?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Indentation is the space or tab at the beginning of a line of code. In Python, indentation is used to define code blocks, such as loops, functions, and `if` statements, instead of using curly braces (`{}`). Proper indentation makes the code easy to read and is required for the program to run correctly.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Indentation means adding spaces or tabs before a line of code. Python uses indentation to define code blocks instead of curly braces. It improves code readability and is mandatory in Python.**\r\n\r\n💡 **Interview Tip:** If the interviewer asks *\"What happens if indentation is incorrect?\"*, you can answer:\r\n\r\n> **Python raises an `IndentationError` because indentation is part of Python's syntax.**",
    "question_en": "What is indentation and why does Python rely on it?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Indentation is the space or tab at the beginning of a line of code. In Python, indentation is used to define code blocks, such as loops, functions, and `if` statements, instead of using curly braces (`{}`). Proper indentation makes the code easy to read and is required for the program to run correctly.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Indentation means adding spaces or tabs before a line of code. Python uses indentation to define code blocks instead of curly braces. It improves code readability and is mandatory in Python.**\r\n\r\n💡 **Interview Tip:** If the interviewer asks *\"What happens if indentation is incorrect?\"*, you can answer:\r\n\r\n> **Python raises an `IndentationError` because indentation is part of Python's syntax.**",
    "source": "doc",
    "topic": "python",
    "num": "142"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is a Python virtual environment?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A Python virtual environment is an isolated environment for a Python project. It has its own Python interpreter and installed packages. This allows different projects to use different versions of the same package without causing conflicts.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A virtual environment is an isolated workspace for a Python project. It keeps the project's packages separate from other projects, so there are no dependency conflicts.**\r\n\r\n### **If asked \"Why do we use it?\"**\r\n\r\n> **We use a virtual environment to manage project dependencies separately and avoid conflicts between different projects.**",
    "question_en": "What is a Python virtual environment?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A Python virtual environment is an isolated environment for a Python project. It has its own Python interpreter and installed packages. This allows different projects to use different versions of the same package without causing conflicts.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A virtual environment is an isolated workspace for a Python project. It keeps the project's packages separate from other projects, so there are no dependency conflicts.**\r\n\r\n### **If asked \"Why do we use it?\"**\r\n\r\n> **We use a virtual environment to manage project dependencies separately and avoid conflicts between different projects.**",
    "source": "doc",
    "topic": "python",
    "num": "143"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is CPython?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **CPython is the default and most widely used implementation of Python. It is written in the C programming language. CPython converts Python code into bytecode and then executes it using the Python Virtual Machine (PVM).**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **CPython is the standard implementation of Python written in C. It compiles Python code into bytecode and executes it using the Python Virtual Machine (PVM).**\r\n\r\n💡 **Interview Tip:** If the interviewer asks, **\"Which implementation do we normally use?\"**, you can answer:\r\n\r\n> **We normally use CPython, as it is the default and most widely used implementation of Python.**",
    "question_en": "What is CPython?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **CPython is the default and most widely used implementation of Python. It is written in the C programming language. CPython converts Python code into bytecode and then executes it using the Python Virtual Machine (PVM).**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **CPython is the standard implementation of Python written in C. It compiles Python code into bytecode and executes it using the Python Virtual Machine (PVM).**\r\n\r\n💡 **Interview Tip:** If the interviewer asks, **\"Which implementation do we normally use?\"**, you can answer:\r\n\r\n> **We normally use CPython, as it is the default and most widely used implementation of Python.**",
    "source": "doc",
    "topic": "python",
    "num": "144"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is the difference between a script and a module?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A script is a Python file that is run directly to perform a specific task. A module is a Python file that is imported into another program so its functions, classes, or variables can be reused. In simple terms, a script is executed, while a module is imported.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A script is a Python file that runs a program, while a module is a Python file that is imported to reuse its code in other programs.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Script = Run directly**\r\n* **Module = Import and reuse**",
    "question_en": "What is the difference between a script and a module?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A script is a Python file that is run directly to perform a specific task. A module is a Python file that is imported into another program so its functions, classes, or variables can be reused. In simple terms, a script is executed, while a module is imported.**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A script is a Python file that runs a program, while a module is a Python file that is imported to reuse its code in other programs.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Script = Run directly**\r\n* **Module = Import and reuse**",
    "source": "doc",
    "topic": "python",
    "num": "145"
  },
  {
    "category": "Python Basics",
    "question_hi": "What is dynamic typing?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Dynamic typing means that we do not need to declare the data type of a variable. Python automatically determines the type based on the value assigned at runtime. A variable can also store different types of values at different times.**\r\n\r\n**Example:**\r\n\r\n```python\r\nx = 10        # Integer\r\nx = \"Hello\"   # String\r\nx = 3.14      # Float\r\n```\r\n\r\nHere, the same variable `x` stores different data types.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dynamic typing means Python automatically determines the data type of a variable at runtime. We do not need to declare the type, and the same variable can hold different types of values.**\r\n\r\nQ . What is the difference between mutable and immutable types?\r\n\r\nA .  **Interview Answer (Simple English):**\r\n\r\n> **Mutable objects can be changed after they are created, while immutable objects cannot be changed after creation. If we modify an immutable object, Python creates a new object instead of changing the existing one.**\r\n\r\n**Examples:**\r\n\r\n* **Mutable:** `list`, `dict`, `set`\r\n* **Immutable:** `int`, `float`, `str`, `tuple`, `frozenset`\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Mutable data types can be modified after creation, while immutable data types cannot. Common mutable types are `list`, `dict`, and `set`, whereas `int`, `str`, and `tuple` are immutable.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Mutable = Can Change** ✅\r\n* **Immutable = Cannot Change** ❌",
    "question_en": "What is dynamic typing?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Dynamic typing means that we do not need to declare the data type of a variable. Python automatically determines the type based on the value assigned at runtime. A variable can also store different types of values at different times.**\r\n\r\n**Example:**\r\n\r\n```python\r\nx = 10        # Integer\r\nx = \"Hello\"   # String\r\nx = 3.14      # Float\r\n```\r\n\r\nHere, the same variable `x` stores different data types.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dynamic typing means Python automatically determines the data type of a variable at runtime. We do not need to declare the type, and the same variable can hold different types of values.**\r\n\r\nQ . What is the difference between mutable and immutable types?\r\n\r\nA .  **Interview Answer (Simple English):**\r\n\r\n> **Mutable objects can be changed after they are created, while immutable objects cannot be changed after creation. If we modify an immutable object, Python creates a new object instead of changing the existing one.**\r\n\r\n**Examples:**\r\n\r\n* **Mutable:** `list`, `dict`, `set`\r\n* **Immutable:** `int`, `float`, `str`, `tuple`, `frozenset`\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Mutable data types can be modified after creation, while immutable data types cannot. Common mutable types are `list`, `dict`, and `set`, whereas `int`, `str`, and `tuple` are immutable.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Mutable = Can Change** ✅\r\n* **Immutable = Cannot Change** ❌",
    "source": "doc",
    "topic": "python",
    "num": "146"
  },
  {
    "category": "Data Types",
    "question_hi": "What are Python's built-in data types?",
    "answer_hi": "> **int, float, complex, str, bool, list, tuple, set, frozenset, dict, and NoneType are the core built-in types.**",
    "question_en": "What are Python's built-in data types?",
    "answer_en": "> **int, float, complex, str, bool, list, tuple, set, frozenset, dict, and NoneType are the core built-in types.**",
    "source": "written",
    "topic": "python",
    "num": "147"
  },
  {
    "category": "Data Types",
    "question_hi": "What is the difference between mutable and immutable types?",
    "answer_hi": "> **Mutable types like list, dict, and set can be changed after creation. Immutable types like int, str, tuple, and frozenset cannot be changed — any 'modification' creates a new object.**",
    "question_en": "What is the difference between mutable and immutable types?",
    "answer_en": "> **Mutable types like list, dict, and set can be changed after creation. Immutable types like int, str, tuple, and frozenset cannot be changed — any 'modification' creates a new object.**",
    "source": "written",
    "topic": "python",
    "num": "148"
  },
  {
    "category": "Data Types",
    "question_hi": "What is type casting or conversion?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Type casting, also called type conversion, is the process of converting a value from one data type to another. For example, we can convert a string to an integer using `int()`, or an integer to a float using `float()`.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnum = \"10\"\r\nx = int(num)      # String to Integer\r\n\r\ny = float(5)      # Integer to Float\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Type casting is the process of converting one data type into another. In Python, we use built-in functions like `int()`, `float()`, `str()`, and `bool()` for type conversion.**\r\n\r\n💡 **Interview Tip:** If the interviewer asks **\"Why do we use type casting?\"**, you can answer:\r\n\r\n> **We use type casting to convert data into the required type so that we can perform operations correctly.**",
    "question_en": "What is type casting or conversion?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Type casting, also called type conversion, is the process of converting a value from one data type to another. For example, we can convert a string to an integer using `int()`, or an integer to a float using `float()`.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnum = \"10\"\r\nx = int(num)      # String to Integer\r\n\r\ny = float(5)      # Integer to Float\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Type casting is the process of converting one data type into another. In Python, we use built-in functions like `int()`, `float()`, `str()`, and `bool()` for type conversion.**\r\n\r\n💡 **Interview Tip:** If the interviewer asks **\"Why do we use type casting?\"**, you can answer:\r\n\r\n> **We use type casting to convert data into the required type so that we can perform operations correctly.**",
    "source": "doc",
    "topic": "python",
    "num": "149"
  },
  {
    "category": "Data Types",
    "question_hi": "What is the difference between int and float division?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, the `/` operator performs true division and always returns a floating-point result, while the `//` operator performs floor division and returns the integer part by rounding down to the nearest whole number.**\r\n\r\n**Example:**\r\n\r\n```python\r\n10 / 3   # Output: 3.3333333333333335\r\n10 // 3  # Output: 3\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `/` operator returns the exact result as a float, while the `//` operator returns the floor value by removing the decimal part and rounding down.**\r\n\r\n⚠️ **Interview Tip:** If the interviewer asks about negative numbers, remember:\r\n\r\n```python\r\n10 // 3    # 3\r\n-10 // 3   # -4\r\n```\r\n\r\nBecause **floor division rounds down**, not just toward zero. This is a common interview follow-up.",
    "question_en": "What is the difference between int and float division?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, the `/` operator performs true division and always returns a floating-point result, while the `//` operator performs floor division and returns the integer part by rounding down to the nearest whole number.**\r\n\r\n**Example:**\r\n\r\n```python\r\n10 / 3   # Output: 3.3333333333333335\r\n10 // 3  # Output: 3\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `/` operator returns the exact result as a float, while the `//` operator returns the floor value by removing the decimal part and rounding down.**\r\n\r\n⚠️ **Interview Tip:** If the interviewer asks about negative numbers, remember:\r\n\r\n```python\r\n10 // 3    # 3\r\n-10 // 3   # -4\r\n```\r\n\r\nBecause **floor division rounds down**, not just toward zero. This is a common interview follow-up.",
    "source": "doc",
    "topic": "python",
    "num": "150"
  },
  {
    "category": "Data Types",
    "question_hi": "What is None and how is it used?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`None` is a special value in Python that represents the absence of a value or no value. It is commonly used to initialize variables, as a default function argument, or as the return value of a function when no value is explicitly returned.**\r\n\r\n**Example:**\r\n\r\n```python\r\nx = None\r\n\r\ndef greet():\r\n    print(\"Hello\")\r\n\r\nresult = greet()\r\nprint(result)   # Output: None\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`None` is a special value in Python that represents no value or the absence of a value. It is often used as a default value or returned by functions that do not explicitly return anything.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* `0` → a number\r\n* `\"\"` → an empty string\r\n* `[]` → an empty list\r\n* **`None` → no value at all** ✅",
    "question_en": "What is None and how is it used?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`None` is a special value in Python that represents the absence of a value or no value. It is commonly used to initialize variables, as a default function argument, or as the return value of a function when no value is explicitly returned.**\r\n\r\n**Example:**\r\n\r\n```python\r\nx = None\r\n\r\ndef greet():\r\n    print(\"Hello\")\r\n\r\nresult = greet()\r\nprint(result)   # Output: None\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`None` is a special value in Python that represents no value or the absence of a value. It is often used as a default value or returned by functions that do not explicitly return anything.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* `0` → a number\r\n* `\"\"` → an empty string\r\n* `[]` → an empty list\r\n* **`None` → no value at all** ✅",
    "source": "doc",
    "topic": "python",
    "num": "151"
  },
  {
    "category": "Data Types",
    "question_hi": "What is the difference between deep copy and shallow copy?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A shallow copy creates a new object, but the nested objects are still shared with the original object. A deep copy creates a completely independent copy, including all nested objects. So, changes made to a deep copy do not affect the original object.**\r\n\r\n**Example:**\r\n\r\n```python\r\nimport copy\r\n\r\na = [[1, 2], [3, 4]]\r\n\r\nb = copy.copy(a)       # Shallow copy\r\nc = copy.deepcopy(a)   # Deep copy\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **In a shallow copy, only the outer object is copied, while nested objects are shared. In a deep copy, both the outer object and all nested objects are copied, making it completely independent.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Shallow Copy = Outer object copied, inner objects shared.**\r\n* **Deep Copy = Everything copied independently.**",
    "question_en": "What is the difference between deep copy and shallow copy?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A shallow copy creates a new object, but the nested objects are still shared with the original object. A deep copy creates a completely independent copy, including all nested objects. So, changes made to a deep copy do not affect the original object.**\r\n\r\n**Example:**\r\n\r\n```python\r\nimport copy\r\n\r\na = [[1, 2], [3, 4]]\r\n\r\nb = copy.copy(a)       # Shallow copy\r\nc = copy.deepcopy(a)   # Deep copy\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **In a shallow copy, only the outer object is copied, while nested objects are shared. In a deep copy, both the outer object and all nested objects are copied, making it completely independent.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Shallow Copy = Outer object copied, inner objects shared.**\r\n* **Deep Copy = Everything copied independently.**",
    "source": "doc",
    "topic": "python",
    "num": "152"
  },
  {
    "category": "Strings",
    "question_hi": "How do you reverse a string in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The most common way to reverse a string in Python is by using slicing. We use `[::-1]`, which returns a new string in reverse order.**\r\n\r\n**Example:**\r\n\r\n```python\r\ntext = \"Python\"\r\nreversed_text = text[::-1]\r\n\r\nprint(reversed_text)\r\n# Output: nohtyP\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can reverse a string in Python using slicing with `[::-1]`. It returns a new string with the characters in reverse order.**",
    "question_en": "How do you reverse a string in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The most common way to reverse a string in Python is by using slicing. We use `[::-1]`, which returns a new string in reverse order.**\r\n\r\n**Example:**\r\n\r\n```python\r\ntext = \"Python\"\r\nreversed_text = text[::-1]\r\n\r\nprint(reversed_text)\r\n# Output: nohtyP\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can reverse a string in Python using slicing with `[::-1]`. It returns a new string with the characters in reverse order.**",
    "source": "doc",
    "topic": "python",
    "num": "153"
  },
  {
    "category": "Strings",
    "question_hi": "What is string slicing?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **String slicing is the process of extracting a part of a string using the syntax `[start:stop:step]`. The `start` index is inclusive, the `stop` index is exclusive, and the `step` defines how many positions to move each time. If any value is omitted, Python uses the default value.**\r\n\r\n**Example:**\r\n\r\n```python\r\ntext = \"Hello\"\r\n\r\nprint(text[1:4])   # ell\r\nprint(text[:3])    # Hel\r\nprint(text[::2])   # Hlo\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **String slicing is used to extract a part of a string using `[start:stop:step]`. It allows us to access specific characters or create a substring.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* `start` → where to begin (included)\r\n* `stop` → where to end (not included)\r\n* `step` → how many positions to move each time",
    "question_en": "What is string slicing?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **String slicing is the process of extracting a part of a string using the syntax `[start:stop:step]`. The `start` index is inclusive, the `stop` index is exclusive, and the `step` defines how many positions to move each time. If any value is omitted, Python uses the default value.**\r\n\r\n**Example:**\r\n\r\n```python\r\ntext = \"Hello\"\r\n\r\nprint(text[1:4])   # ell\r\nprint(text[:3])    # Hel\r\nprint(text[::2])   # Hlo\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **String slicing is used to extract a part of a string using `[start:stop:step]`. It allows us to access specific characters or create a substring.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* `start` → where to begin (included)\r\n* `stop` → where to end (not included)\r\n* `step` → how many positions to move each time",
    "source": "doc",
    "topic": "python",
    "num": "154"
  },
  {
    "category": "Strings",
    "question_hi": "What is the difference between str.format() and f-strings?",
    "answer_hi": "> **Both format strings with embedded values, but f-strings (f'{value}') are evaluated inline at runtime, are more concise, and generally faster than the older .format() method.**",
    "question_en": "What is the difference between str.format() and f-strings?",
    "answer_en": "> **Both format strings with embedded values, but f-strings (f'{value}') are evaluated inline at runtime, are more concise, and generally faster than the older .format() method.**",
    "source": "written",
    "topic": "python",
    "num": "155"
  },
  {
    "category": "Strings",
    "question_hi": "How do you check if a string is a palindrome?",
    "answer_hi": "> **Compare the string to its reverse: s == s[::-1] returns True if the string reads the same forwards and backwards.**",
    "question_en": "How do you check if a string is a palindrome?",
    "answer_en": "> **Compare the string to its reverse: s == s[::-1] returns True if the string reads the same forwards and backwards.**",
    "source": "written",
    "topic": "python",
    "num": "156"
  },
  {
    "category": "Strings",
    "question_hi": "What are some common string methods?",
    "answer_hi": "> **upper() and lower() change case, strip() removes surrounding whitespace, split() breaks a string into a list, and join() combines a list of strings using a separator.**",
    "question_en": "What are some common string methods?",
    "answer_en": "> **upper() and lower() change case, strip() removes surrounding whitespace, split() breaks a string into a list, and join() combines a list of strings using a separator.**",
    "source": "written",
    "topic": "python",
    "num": "157"
  },
  {
    "category": "Strings",
    "question_hi": "What is the difference between a string and a bytes object?",
    "answer_hi": "> **A str holds unicode text, while a bytes object holds raw binary data. Strings are encoded to bytes (encode()) and bytes are decoded back to strings (decode()).**",
    "question_en": "What is the difference between a string and a bytes object?",
    "answer_en": "> **A str holds unicode text, while a bytes object holds raw binary data. Strings are encoded to bytes (encode()) and bytes are decoded back to strings (decode()).**",
    "source": "written",
    "topic": "python",
    "num": "158"
  },
  {
    "category": "Strings",
    "question_hi": "How do you concatenate strings efficiently?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The most efficient way to concatenate multiple strings in Python is by using the `join()` method. It is faster than using the `+` operator repeatedly because strings are immutable, and `join()` creates the final string more efficiently.**\r\n\r\n**Example:**\r\n\r\n```python\r\nwords = [\"Hello\", \"World\"]\r\n\r\nresult = \" \".join(words)\r\n\r\nprint(result)\r\n# Output: Hello World\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **For joining multiple strings, `join()` is the preferred and more efficient method. Using the `+` operator repeatedly creates new string objects each time, which is less efficient.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Few strings → `+` is okay.**\r\n* **Many strings (especially in loops) → use `''.join()` because it's faster and more efficient.**",
    "question_en": "How do you concatenate strings efficiently?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The most efficient way to concatenate multiple strings in Python is by using the `join()` method. It is faster than using the `+` operator repeatedly because strings are immutable, and `join()` creates the final string more efficiently.**\r\n\r\n**Example:**\r\n\r\n```python\r\nwords = [\"Hello\", \"World\"]\r\n\r\nresult = \" \".join(words)\r\n\r\nprint(result)\r\n# Output: Hello World\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **For joining multiple strings, `join()` is the preferred and more efficient method. Using the `+` operator repeatedly creates new string objects each time, which is less efficient.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Few strings → `+` is okay.**\r\n* **Many strings (especially in loops) → use `''.join()` because it's faster and more efficient.**",
    "source": "doc",
    "topic": "python",
    "num": "159"
  },
  {
    "category": "Strings",
    "question_hi": "Are strings mutable in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **No, strings are immutable in Python. This means that once a string is created, it cannot be changed. Any operation like `replace()` or concatenation creates and returns a new string instead of modifying the original string.**\r\n\r\n**Example:**\r\n\r\n```python\r\ntext = \"Hello\"\r\n\r\nnew_text = text.replace(\"H\", \"J\")\r\n\r\nprint(text)      # Hello\r\nprint(new_text)  # Jello\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **No, strings are immutable in Python. Once a string is created, it cannot be modified. Any operation on a string returns a new string object instead of changing the original one.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Strings = Immutable ❌ (cannot change)**\r\n* **Lists = Mutable ✅ (can change)**",
    "question_en": "Are strings mutable in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **No, strings are immutable in Python. This means that once a string is created, it cannot be changed. Any operation like `replace()` or concatenation creates and returns a new string instead of modifying the original string.**\r\n\r\n**Example:**\r\n\r\n```python\r\ntext = \"Hello\"\r\n\r\nnew_text = text.replace(\"H\", \"J\")\r\n\r\nprint(text)      # Hello\r\nprint(new_text)  # Jello\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **No, strings are immutable in Python. Once a string is created, it cannot be modified. Any operation on a string returns a new string object instead of changing the original one.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Strings = Immutable ❌ (cannot change)**\r\n* **Lists = Mutable ✅ (can change)**",
    "source": "doc",
    "topic": "python",
    "num": "160"
  },
  {
    "category": "Control Flow",
    "question_hi": "What are Python's comparison and logical operators?",
    "answer_hi": "> **Comparison operators include ==, !=, <, >, <=, >=. Logical operators are and, or, and not, used to combine or invert boolean expressions.**",
    "question_en": "What are Python's comparison and logical operators?",
    "answer_en": "> **Comparison operators include ==, !=, <, >, <=, >=. Logical operators are and, or, and not, used to combine or invert boolean expressions.**",
    "source": "written",
    "topic": "python",
    "num": "161"
  },
  {
    "category": "Control Flow",
    "question_hi": "What is the difference between 'is' and '=='?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The `==` operator compares the values of two objects to check if they are equal, while the `is` operator compares their identity to check if both variables refer to the same object in memory.**\r\n\r\n**Example:**\r\n\r\n```python\r\na = [1, 2]\r\nb = [1, 2]\r\n\r\nprint(a == b)   # True  (same values)\r\nprint(a is b)   # False (different objects)\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`==` checks whether the values are equal, while `is` checks whether two variables refer to the same object in memory.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`==` → Compare Values**\r\n* **`is` → Compare Memory/Object Identity**",
    "question_en": "What is the difference between 'is' and '=='?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The `==` operator compares the values of two objects to check if they are equal, while the `is` operator compares their identity to check if both variables refer to the same object in memory.**\r\n\r\n**Example:**\r\n\r\n```python\r\na = [1, 2]\r\nb = [1, 2]\r\n\r\nprint(a == b)   # True  (same values)\r\nprint(a is b)   # False (different objects)\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`==` checks whether the values are equal, while `is` checks whether two variables refer to the same object in memory.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`==` → Compare Values**\r\n* **`is` → Compare Memory/Object Identity**",
    "source": "doc",
    "topic": "python",
    "num": "162"
  },
  {
    "category": "Control Flow",
    "question_hi": "What is the ternary operator in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The ternary operator is a one-line way to write an `if-else` statement. It is used to choose one value if a condition is true, and another value if the condition is false.**\r\n\r\n**Syntax:**\r\n\r\n```python\r\nvalue_if_true if condition else value_if_false\r\n```\r\n\r\n**Example:**\r\n\r\n```python\r\nage = 18\r\n\r\nstatus = \"Adult\" if age >= 18 else \"Minor\"\r\n\r\nprint(status)\r\n# Output: Adult\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The ternary operator is a shorthand for an `if-else` statement. It lets us write a conditional expression in a single line using the syntax: `value_if_true if condition else value_if_false`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal `if-else` → Multiple lines**\r\n* **Ternary operator → Same logic in one line**",
    "question_en": "What is the ternary operator in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The ternary operator is a one-line way to write an `if-else` statement. It is used to choose one value if a condition is true, and another value if the condition is false.**\r\n\r\n**Syntax:**\r\n\r\n```python\r\nvalue_if_true if condition else value_if_false\r\n```\r\n\r\n**Example:**\r\n\r\n```python\r\nage = 18\r\n\r\nstatus = \"Adult\" if age >= 18 else \"Minor\"\r\n\r\nprint(status)\r\n# Output: Adult\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The ternary operator is a shorthand for an `if-else` statement. It lets us write a conditional expression in a single line using the syntax: `value_if_true if condition else value_if_false`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal `if-else` → Multiple lines**\r\n* **Ternary operator → Same logic in one line**",
    "source": "doc",
    "topic": "python",
    "num": "163"
  },
  {
    "category": "Control Flow",
    "question_hi": "What is the difference between break, continue, and pass?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`break`, `continue`, and `pass` are loop control statements in Python. `break` immediately exits the loop, `continue` skips the current iteration and moves to the next one, and `pass` does nothing. It is used as a placeholder when a statement is required but no action needs to be performed.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# break\r\nfor i in range(5):\r\n    if i == 3:\r\n        break\r\n    print(i)\r\n# Output: 0 1 2\r\n```\r\n\r\n```python\r\n# continue\r\nfor i in range(5):\r\n    if i == 2:\r\n        continue\r\n    print(i)\r\n# Output: 0 1 3 4\r\n```\r\n\r\n```python\r\n# pass\r\nfor i in range(3):\r\n    if i == 1:\r\n        pass\r\n    print(i)\r\n# Output: 0 1 2\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`break` stops the loop completely, `continue` skips the current iteration and moves to the next one, and `pass` does nothing. It is used as a placeholder in the code.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`break` → Exit the loop**\r\n* **`continue` → Skip current iteration**\r\n* **`pass` → Do nothing**",
    "question_en": "What is the difference between break, continue, and pass?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`break`, `continue`, and `pass` are loop control statements in Python. `break` immediately exits the loop, `continue` skips the current iteration and moves to the next one, and `pass` does nothing. It is used as a placeholder when a statement is required but no action needs to be performed.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# break\r\nfor i in range(5):\r\n    if i == 3:\r\n        break\r\n    print(i)\r\n# Output: 0 1 2\r\n```\r\n\r\n```python\r\n# continue\r\nfor i in range(5):\r\n    if i == 2:\r\n        continue\r\n    print(i)\r\n# Output: 0 1 3 4\r\n```\r\n\r\n```python\r\n# pass\r\nfor i in range(3):\r\n    if i == 1:\r\n        pass\r\n    print(i)\r\n# Output: 0 1 2\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`break` stops the loop completely, `continue` skips the current iteration and moves to the next one, and `pass` does nothing. It is used as a placeholder in the code.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`break` → Exit the loop**\r\n* **`continue` → Skip current iteration**\r\n* **`pass` → Do nothing**",
    "source": "doc",
    "topic": "python",
    "num": "164"
  },
  {
    "category": "Control Flow",
    "question_hi": "How does a for loop differ from a while loop?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A `for` loop is used to iterate over a sequence, such as a list, tuple, string, or range, when the number of iterations is known. A `while` loop is used when the number of iterations is not known in advance and continues to run as long as a given condition is true.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# for loop\r\nfor i in range(5):\r\n    print(i)\r\n```\r\n\r\n```python\r\n# while loop\r\ni = 0\r\nwhile i < 5:\r\n    print(i)\r\n    i += 1\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A `for` loop is used when the number of iterations is known or when iterating over a sequence. A `while` loop is used when the loop should continue until a condition becomes false.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`for` loop → Known number of iterations**\r\n* **`while` loop → Condition-based / Unknown number of iterations**",
    "question_en": "How does a for loop differ from a while loop?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A `for` loop is used to iterate over a sequence, such as a list, tuple, string, or range, when the number of iterations is known. A `while` loop is used when the number of iterations is not known in advance and continues to run as long as a given condition is true.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# for loop\r\nfor i in range(5):\r\n    print(i)\r\n```\r\n\r\n```python\r\n# while loop\r\ni = 0\r\nwhile i < 5:\r\n    print(i)\r\n    i += 1\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A `for` loop is used when the number of iterations is known or when iterating over a sequence. A `while` loop is used when the loop should continue until a condition becomes false.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`for` loop → Known number of iterations**\r\n* **`while` loop → Condition-based / Unknown number of iterations**",
    "source": "doc",
    "topic": "python",
    "num": "165"
  },
  {
    "category": "Control Flow",
    "question_hi": "What is the else clause in a loop used for?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The `else` clause in a `for` or `while` loop is executed only if the loop finishes normally without encountering a `break` statement. It is commonly used when searching for an item. If the item is not found and the loop completes, the `else` block is executed.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [1, 2, 3]\r\n\r\nfor num in numbers:\r\n    if num == 5:\r\n        print(\"Found\")\r\n        break\r\nelse:\r\n    print(\"Not Found\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nNot Found\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `else` block in a loop runs only when the loop completes normally without a `break` statement. It is often used in search operations.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Loop ends normally → `else` runs ✅**\r\n* **Loop exits with `break` → `else` does not run ❌**",
    "question_en": "What is the else clause in a loop used for?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The `else` clause in a `for` or `while` loop is executed only if the loop finishes normally without encountering a `break` statement. It is commonly used when searching for an item. If the item is not found and the loop completes, the `else` block is executed.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [1, 2, 3]\r\n\r\nfor num in numbers:\r\n    if num == 5:\r\n        print(\"Found\")\r\n        break\r\nelse:\r\n    print(\"Not Found\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nNot Found\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `else` block in a loop runs only when the loop completes normally without a `break` statement. It is often used in search operations.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Loop ends normally → `else` runs ✅**\r\n* **Loop exits with `break` → `else` does not run ❌**",
    "source": "doc",
    "topic": "python",
    "num": "166"
  },
  {
    "category": "Control Flow",
    "question_hi": "What is the walrus operator (:=)?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The walrus operator (`:=`) was introduced in Python 3.8. It allows us to assign a value to a variable while using it in an expression. This helps write shorter and more readable code by avoiding a separate assignment statement.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [1, 2, 3, 4]\r\n\r\nif (n := len(numbers)) > 3:\r\n    print(f\"Length is {n}\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nLength is 4\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The walrus operator (`:=`) allows us to assign a value to a variable inside an expression. It was introduced in Python 3.8 and helps write shorter and cleaner code.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* `=` → Assign a value.\r\n* `:=` → **Assign and use the value at the same time.**",
    "question_en": "What is the walrus operator (:=)?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The walrus operator (`:=`) was introduced in Python 3.8. It allows us to assign a value to a variable while using it in an expression. This helps write shorter and more readable code by avoiding a separate assignment statement.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [1, 2, 3, 4]\r\n\r\nif (n := len(numbers)) > 3:\r\n    print(f\"Length is {n}\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nLength is 4\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The walrus operator (`:=`) allows us to assign a value to a variable inside an expression. It was introduced in Python 3.8 and helps write shorter and cleaner code.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* `=` → Assign a value.\r\n* `:=` → **Assign and use the value at the same time.**",
    "source": "doc",
    "topic": "python",
    "num": "167"
  },
  {
    "category": "Control Flow",
    "question_hi": "What is short-circuit evaluation?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Short-circuit evaluation means Python stops evaluating a logical expression as soon as the final result is known. With `and`, Python stops when it finds the first `False` value. With `or`, Python stops when it finds the first `True` value. This improves performance by avoiding unnecessary evaluations.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# AND\r\nx = 5\r\n\r\nif x > 10 and x / 0 > 1:\r\n    print(\"Hello\")\r\n\r\n# x > 10 is False, so Python does not evaluate x / 0.\r\n```\r\n\r\n```python\r\n# OR\r\nx = 15\r\n\r\nif x > 10 or x / 0 > 1:\r\n    print(\"Hello\")\r\n\r\n# x > 10 is True, so Python does not evaluate x / 0.\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Short-circuit evaluation means Python stops checking a logical expression as soon as the result is determined. With `and`, it stops at the first `False`, and with `or`, it stops at the first `True`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`and` → Stop at first `False` ❌**\r\n* **`or` → Stop at first `True` ✅**",
    "question_en": "What is short-circuit evaluation?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Short-circuit evaluation means Python stops evaluating a logical expression as soon as the final result is known. With `and`, Python stops when it finds the first `False` value. With `or`, Python stops when it finds the first `True` value. This improves performance by avoiding unnecessary evaluations.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# AND\r\nx = 5\r\n\r\nif x > 10 and x / 0 > 1:\r\n    print(\"Hello\")\r\n\r\n# x > 10 is False, so Python does not evaluate x / 0.\r\n```\r\n\r\n```python\r\n# OR\r\nx = 15\r\n\r\nif x > 10 or x / 0 > 1:\r\n    print(\"Hello\")\r\n\r\n# x > 10 is True, so Python does not evaluate x / 0.\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Short-circuit evaluation means Python stops checking a logical expression as soon as the result is determined. With `and`, it stops at the first `False`, and with `or`, it stops at the first `True`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`and` → Stop at first `False` ❌**\r\n* **`or` → Stop at first `True` ✅**",
    "source": "doc",
    "topic": "python",
    "num": "168"
  },
  {
    "category": "Functions",
    "question_hi": "How do you define a function in Python?",
    "answer_hi": "> **Using the def keyword followed by a name, parentheses with parameters, and a colon, e.g. def greet(name): return f'Hello {name}'.**",
    "question_en": "How do you define a function in Python?",
    "answer_en": "> **Using the def keyword followed by a name, parentheses with parameters, and a colon, e.g. def greet(name): return f'Hello {name}'.**",
    "source": "written",
    "topic": "python",
    "num": "169"
  },
  {
    "category": "Functions",
    "question_hi": "What is the difference between *args and **kwargs?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`*args` and `**kwargs` are used when we don't know how many arguments will be passed to a function. `*args` collects multiple positional arguments into a tuple, while `**kwargs` collects multiple keyword arguments into a dictionary. This makes functions more flexible.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# *args\r\ndef add(*args):\r\n    return sum(args)\r\n\r\nprint(add(1, 2, 3))   # 6\r\n```\r\n\r\n```python\r\n# **kwargs\r\ndef show_info(**kwargs):\r\n    print(kwargs)\r\n\r\nshow_info(name=\"Vikram\", age=22)\r\n# {'name': 'Vikram', 'age': 22}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`*args` is used to accept multiple positional arguments as a tuple, while `**kwargs` is used to accept multiple keyword arguments as a dictionary.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`*args` → Positional arguments → Tuple `()`**\r\n* **`**kwargs` → Keyword arguments → Dictionary `{}`**",
    "question_en": "What is the difference between *args and **kwargs?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`*args` and `**kwargs` are used when we don't know how many arguments will be passed to a function. `*args` collects multiple positional arguments into a tuple, while `**kwargs` collects multiple keyword arguments into a dictionary. This makes functions more flexible.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# *args\r\ndef add(*args):\r\n    return sum(args)\r\n\r\nprint(add(1, 2, 3))   # 6\r\n```\r\n\r\n```python\r\n# **kwargs\r\ndef show_info(**kwargs):\r\n    print(kwargs)\r\n\r\nshow_info(name=\"Vikram\", age=22)\r\n# {'name': 'Vikram', 'age': 22}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`*args` is used to accept multiple positional arguments as a tuple, while `**kwargs` is used to accept multiple keyword arguments as a dictionary.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`*args` → Positional arguments → Tuple `()`**\r\n* **`**kwargs` → Keyword arguments → Dictionary `{}`**",
    "source": "doc",
    "topic": "python",
    "num": "170"
  },
  {
    "category": "Functions",
    "question_hi": "What are default arguments?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Default arguments are function parameters that already have a predefined value. If the user does not provide a value while calling the function, Python automatically uses the default value.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef greet(name=\"Guest\"):\r\n    print(\"Hello,\", name)\r\n\r\ngreet()          # Hello, Guest\r\ngreet(\"Vikram\")  # Hello, Vikram\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Default arguments are parameters with predefined values. If no value is passed when calling the function, Python uses the default value automatically.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Value passed → Uses passed value.**\r\n* **No value passed → Uses default value.**",
    "question_en": "What are default arguments?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Default arguments are function parameters that already have a predefined value. If the user does not provide a value while calling the function, Python automatically uses the default value.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef greet(name=\"Guest\"):\r\n    print(\"Hello,\", name)\r\n\r\ngreet()          # Hello, Guest\r\ngreet(\"Vikram\")  # Hello, Vikram\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Default arguments are parameters with predefined values. If no value is passed when calling the function, Python uses the default value automatically.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Value passed → Uses passed value.**\r\n* **No value passed → Uses default value.**",
    "source": "doc",
    "topic": "python",
    "num": "171"
  },
  {
    "category": "Functions",
    "question_hi": "What is a lambda function?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A lambda function is a small anonymous function in Python. It is created using the `lambda` keyword and can have any number of arguments but only one expression. It is commonly used for short and simple operations, especially with functions like `map()`, `filter()`, and `sorted()`.**\r\n\r\n**Example:**\r\n\r\n```python\r\nsquare = lambda x: x * x\r\n\r\nprint(square(5))\r\n# Output: 25\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A lambda function is an anonymous function written using the `lambda` keyword. It is used for short, one-line operations and is often passed as an argument to functions like `map()`, `filter()`, and `sorted()`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`def` → Regular named function**\r\n* **`lambda` → Small anonymous one-line function**",
    "question_en": "What is a lambda function?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A lambda function is a small anonymous function in Python. It is created using the `lambda` keyword and can have any number of arguments but only one expression. It is commonly used for short and simple operations, especially with functions like `map()`, `filter()`, and `sorted()`.**\r\n\r\n**Example:**\r\n\r\n```python\r\nsquare = lambda x: x * x\r\n\r\nprint(square(5))\r\n# Output: 25\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A lambda function is an anonymous function written using the `lambda` keyword. It is used for short, one-line operations and is often passed as an argument to functions like `map()`, `filter()`, and `sorted()`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`def` → Regular named function**\r\n* **`lambda` → Small anonymous one-line function**",
    "source": "doc",
    "topic": "python",
    "num": "172"
  },
  {
    "category": "Functions",
    "question_hi": "What is the difference between a function and a method?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A function is a block of code that is defined independently and can be called directly by its name. A method is a function that is defined inside a class and is called using an object of that class. In Python, methods automatically receive `self` as the first parameter.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# Function\r\ndef greet():\r\n    print(\"Hello\")\r\n\r\ngreet()\r\n```\r\n\r\n```python\r\n# Method\r\nclass Student:\r\n    def greet(self):\r\n        print(\"Hello\")\r\n\r\ns = Student()\r\ns.greet()\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A function is an independent block of code, while a method is a function defined inside a class and called using an object. Methods automatically receive `self` as the first parameter.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Function → Independent**\r\n* **Method → Belongs to a class and is called through an object (`object.method()`)**",
    "question_en": "What is the difference between a function and a method?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A function is a block of code that is defined independently and can be called directly by its name. A method is a function that is defined inside a class and is called using an object of that class. In Python, methods automatically receive `self` as the first parameter.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# Function\r\ndef greet():\r\n    print(\"Hello\")\r\n\r\ngreet()\r\n```\r\n\r\n```python\r\n# Method\r\nclass Student:\r\n    def greet(self):\r\n        print(\"Hello\")\r\n\r\ns = Student()\r\ns.greet()\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A function is an independent block of code, while a method is a function defined inside a class and called using an object. Methods automatically receive `self` as the first parameter.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Function → Independent**\r\n* **Method → Belongs to a class and is called through an object (`object.method()`)**",
    "source": "doc",
    "topic": "python",
    "num": "173"
  },
  {
    "category": "Functions",
    "question_hi": "What is recursion? Give an example.",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Recursion is a technique in which a function calls itself to solve a problem. Each recursive call works on a smaller part of the problem until it reaches a base case, which stops the recursion.**\r\n\r\n**Example (Factorial):**\r\n\r\n```python\r\ndef factorial(n):\r\n    if n == 0:\r\n        return 1      # Base case\r\n    return n * factorial(n - 1)\r\n\r\nprint(factorial(5))\r\n# Output: 120\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Recursion is a process where a function calls itself to solve a smaller version of the same problem. It always needs a base case to stop the recursive calls.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Recursion = Function calls itself.**\r\n* **Base case = Stops the recursion.**\r\n* **Without a base case, recursion will continue until a `RecursionError` occurs.**",
    "question_en": "What is recursion? Give an example.",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Recursion is a technique in which a function calls itself to solve a problem. Each recursive call works on a smaller part of the problem until it reaches a base case, which stops the recursion.**\r\n\r\n**Example (Factorial):**\r\n\r\n```python\r\ndef factorial(n):\r\n    if n == 0:\r\n        return 1      # Base case\r\n    return n * factorial(n - 1)\r\n\r\nprint(factorial(5))\r\n# Output: 120\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Recursion is a process where a function calls itself to solve a smaller version of the same problem. It always needs a base case to stop the recursive calls.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Recursion = Function calls itself.**\r\n* **Base case = Stops the recursion.**\r\n* **Without a base case, recursion will continue until a `RecursionError` occurs.**",
    "source": "doc",
    "topic": "python",
    "num": "174"
  },
  {
    "category": "Functions",
    "question_hi": "What is variable scope and the LEGB rule?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Variable scope is the area where a variable can be accessed in a program. Python follows the LEGB rule to find a variable. It searches in this order: Local, Enclosing, Global, and Built-in. If the variable is not found in one scope, Python checks the next one.**\r\n\r\n**LEGB stands for:**\r\n\r\n* **L – Local:** Variables inside the current function.\r\n* **E – Enclosing:** Variables in the outer function (nested functions).\r\n* **G – Global:** Variables defined outside all functions.\r\n* **B – Built-in:** Python's built-in names and functions, like `len()` and `print()`.\r\n\r\n**Example:**\r\n\r\n```python\r\nx = \"Global\"\r\n\r\ndef show():\r\n    x = \"Local\"\r\n    print(x)\r\n\r\nshow()      # Local\r\nprint(x)    # Global\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Variable scope defines where a variable can be accessed. Python follows the LEGB rule to search for variables: Local, Enclosing, Global, and Built-in.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**LEGB = Local → Enclosing → Global → Built-in**\r\n\r\nPython always searches in this order until it finds the variable.",
    "question_en": "What is variable scope and the LEGB rule?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Variable scope is the area where a variable can be accessed in a program. Python follows the LEGB rule to find a variable. It searches in this order: Local, Enclosing, Global, and Built-in. If the variable is not found in one scope, Python checks the next one.**\r\n\r\n**LEGB stands for:**\r\n\r\n* **L – Local:** Variables inside the current function.\r\n* **E – Enclosing:** Variables in the outer function (nested functions).\r\n* **G – Global:** Variables defined outside all functions.\r\n* **B – Built-in:** Python's built-in names and functions, like `len()` and `print()`.\r\n\r\n**Example:**\r\n\r\n```python\r\nx = \"Global\"\r\n\r\ndef show():\r\n    x = \"Local\"\r\n    print(x)\r\n\r\nshow()      # Local\r\nprint(x)    # Global\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Variable scope defines where a variable can be accessed. Python follows the LEGB rule to search for variables: Local, Enclosing, Global, and Built-in.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**LEGB = Local → Enclosing → Global → Built-in**\r\n\r\nPython always searches in this order until it finds the variable.",
    "source": "doc",
    "topic": "python",
    "num": "175"
  },
  {
    "category": "Functions",
    "question_hi": "What does the return statement do?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The `return` statement is used to end a function and send a value back to the caller. Once a `return` statement is executed, the function stops running. If a function does not have a `return` statement, Python automatically returns `None`.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef add(a, b):\r\n    return a + b\r\n\r\nresult = add(5, 3)\r\nprint(result)\r\n# Output: 8\r\n```\r\n\r\n**Example without `return`:**\r\n\r\n```python\r\ndef greet():\r\n    print(\"Hello\")\r\n\r\nresult = greet()\r\n\r\nprint(result)\r\n# Output:\r\n# Hello\r\n# None\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `return` statement ends a function and sends a value back to the caller. If no `return` statement is used, Python returns `None` by default.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`print()` → Displays the output on the screen.**\r\n* **`return` → Sends the value back to the place where the function was called.**",
    "question_en": "What does the return statement do?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The `return` statement is used to end a function and send a value back to the caller. Once a `return` statement is executed, the function stops running. If a function does not have a `return` statement, Python automatically returns `None`.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef add(a, b):\r\n    return a + b\r\n\r\nresult = add(5, 3)\r\nprint(result)\r\n# Output: 8\r\n```\r\n\r\n**Example without `return`:**\r\n\r\n```python\r\ndef greet():\r\n    print(\"Hello\")\r\n\r\nresult = greet()\r\n\r\nprint(result)\r\n# Output:\r\n# Hello\r\n# None\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `return` statement ends a function and sends a value back to the caller. If no `return` statement is used, Python returns `None` by default.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`print()` → Displays the output on the screen.**\r\n* **`return` → Sends the value back to the place where the function was called.**",
    "source": "doc",
    "topic": "python",
    "num": "176"
  },
  {
    "category": "Functions",
    "question_hi": "What are keyword-only arguments?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Keyword-only arguments are parameters that must be passed using their parameter name. They cannot be passed by position. In Python, they are defined by placing `*` before the keyword-only parameters in the function definition.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef greet(name, *, age):\r\n    print(name, age)\r\n\r\ngreet(\"Vikram\", age=22)   # ✅ Correct\r\n# greet(\"Vikram\", 22)     # ❌ Error\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Keyword-only arguments are parameters that must be passed by their name, not by position. They are created by placing `*` before the parameters in the function definition.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Positional argument:** `greet(\"Vikram\", 22)` ✅\r\n* **Keyword-only argument:** `greet(\"Vikram\", age=22)` ✅\r\n\r\nThe second parameter **must** be written as `age=22`; otherwise, Python raises an error.",
    "question_en": "What are keyword-only arguments?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Keyword-only arguments are parameters that must be passed using their parameter name. They cannot be passed by position. In Python, they are defined by placing `*` before the keyword-only parameters in the function definition.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef greet(name, *, age):\r\n    print(name, age)\r\n\r\ngreet(\"Vikram\", age=22)   # ✅ Correct\r\n# greet(\"Vikram\", 22)     # ❌ Error\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Keyword-only arguments are parameters that must be passed by their name, not by position. They are created by placing `*` before the parameters in the function definition.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Positional argument:** `greet(\"Vikram\", 22)` ✅\r\n* **Keyword-only argument:** `greet(\"Vikram\", age=22)` ✅\r\n\r\nThe second parameter **must** be written as `age=22`; otherwise, Python raises an error.",
    "source": "doc",
    "topic": "python",
    "num": "177"
  },
  {
    "category": "Functions",
    "question_hi": "Does Python support function overloading?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **No, Python does not support traditional function overloading like Java or C++. If we define multiple functions with the same name, the latest definition replaces the previous one. Similar behavior can be achieved using default arguments, `*args`, or `**kwargs`.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef show():\r\n    print(\"First\")\r\n\r\ndef show():\r\n    print(\"Second\")\r\n\r\nshow()\r\n# Output: Second\r\n```\r\n\r\nThe first `show()` function is overwritten by the second one.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **No, Python does not support traditional function overloading. If multiple functions have the same name, the last one overwrites the previous ones. We can achieve similar behavior using default arguments or `*args`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Java/C++ → Function overloading ✅**\r\n* **Python → Last function definition wins ❌**\r\n* **Alternative → Use default arguments, `*args`, or `**kwargs`**",
    "question_en": "Does Python support function overloading?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **No, Python does not support traditional function overloading like Java or C++. If we define multiple functions with the same name, the latest definition replaces the previous one. Similar behavior can be achieved using default arguments, `*args`, or `**kwargs`.**\r\n\r\n**Example:**\r\n\r\n```python\r\ndef show():\r\n    print(\"First\")\r\n\r\ndef show():\r\n    print(\"Second\")\r\n\r\nshow()\r\n# Output: Second\r\n```\r\n\r\nThe first `show()` function is overwritten by the second one.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **No, Python does not support traditional function overloading. If multiple functions have the same name, the last one overwrites the previous ones. We can achieve similar behavior using default arguments or `*args`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Java/C++ → Function overloading ✅**\r\n* **Python → Last function definition wins ❌**\r\n* **Alternative → Use default arguments, `*args`, or `**kwargs`**",
    "source": "doc",
    "topic": "python",
    "num": "178"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "What is the difference between a list and a tuple?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A list and a tuple are both used to store multiple items. The main difference is that a list is mutable, which means its elements can be changed after creation, while a tuple is immutable, so its elements cannot be changed. Lists are created using square brackets `[]`, and tuples are created using parentheses `()`.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# List (Mutable)\r\nmy_list = [1, 2, 3]\r\nmy_list[0] = 10\r\n\r\nprint(my_list)\r\n# Output: [10, 2, 3]\r\n```\r\n\r\n```python\r\n# Tuple (Immutable)\r\nmy_tuple = (1, 2, 3)\r\n\r\n# my_tuple[0] = 10   # ❌ Error\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The main difference is that lists are mutable, while tuples are immutable. Lists use `[]`, and tuples use `()`. Tuples are often used for fixed data because they cannot be modified.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **List → Mutable → `[]` → Can change ✅**\r\n* **Tuple → Immutable → `()` → Cannot change ❌**",
    "question_en": "What is the difference between a list and a tuple?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A list and a tuple are both used to store multiple items. The main difference is that a list is mutable, which means its elements can be changed after creation, while a tuple is immutable, so its elements cannot be changed. Lists are created using square brackets `[]`, and tuples are created using parentheses `()`.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# List (Mutable)\r\nmy_list = [1, 2, 3]\r\nmy_list[0] = 10\r\n\r\nprint(my_list)\r\n# Output: [10, 2, 3]\r\n```\r\n\r\n```python\r\n# Tuple (Immutable)\r\nmy_tuple = (1, 2, 3)\r\n\r\n# my_tuple[0] = 10   # ❌ Error\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The main difference is that lists are mutable, while tuples are immutable. Lists use `[]`, and tuples use `()`. Tuples are often used for fixed data because they cannot be modified.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **List → Mutable → `[]` → Can change ✅**\r\n* **Tuple → Immutable → `()` → Cannot change ❌**",
    "source": "doc",
    "topic": "python",
    "num": "179"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "How do you add or remove elements from a list?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **We can add elements to a list using methods like `append()` and `insert()`. To remove elements, we use `remove()` or `pop()`. `append()` adds an item at the end of the list, `insert()` adds an item at a specific position, `remove()` deletes a specific value, and `pop()` removes an item by its index and returns it.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [1, 2, 3]\r\n\r\nnumbers.append(4)      # Add at the end\r\nnumbers.insert(1, 10)  # Add at index 1\r\n\r\nnumbers.remove(2)      # Remove value 2\r\nnumbers.pop()          # Remove last item\r\n\r\nprint(numbers)\r\n# Output: [1, 10, 3]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **To add elements, we use `append()` or `insert()`. To remove elements, we use `remove()` or `pop()`. `append()` adds at the end, `insert()` adds at a specific index, `remove()` deletes a value, and `pop()` removes an item by index or the last item by default.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`append()` → Add at the end**\r\n* **`insert()` → Add at a specific index**\r\n* **`remove()` → Remove by value**\r\n* **`pop()` → Remove by index (or last item by default) and return it**",
    "question_en": "How do you add or remove elements from a list?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **We can add elements to a list using methods like `append()` and `insert()`. To remove elements, we use `remove()` or `pop()`. `append()` adds an item at the end of the list, `insert()` adds an item at a specific position, `remove()` deletes a specific value, and `pop()` removes an item by its index and returns it.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [1, 2, 3]\r\n\r\nnumbers.append(4)      # Add at the end\r\nnumbers.insert(1, 10)  # Add at index 1\r\n\r\nnumbers.remove(2)      # Remove value 2\r\nnumbers.pop()          # Remove last item\r\n\r\nprint(numbers)\r\n# Output: [1, 10, 3]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **To add elements, we use `append()` or `insert()`. To remove elements, we use `remove()` or `pop()`. `append()` adds at the end, `insert()` adds at a specific index, `remove()` deletes a value, and `pop()` removes an item by index or the last item by default.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`append()` → Add at the end**\r\n* **`insert()` → Add at a specific index**\r\n* **`remove()` → Remove by value**\r\n* **`pop()` → Remove by index (or last item by default) and return it**",
    "source": "doc",
    "topic": "python",
    "num": "180"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "What is list comprehension?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **List comprehension is a short and simple way to create a new list in a single line. It is often more readable and faster than using a `for` loop with `append()`.**\r\n\r\n**Syntax:**\r\n\r\n```python\r\n[expression for item in iterable]\r\n```\r\n\r\n**Example:**\r\n\r\n```python id=\"bzkcda\"\r\nsquares = [x ** 2 for x in range(5)]\r\n\r\nprint(squares)\r\n# Output: [0, 1, 4, 9, 16]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **List comprehension is a concise way to create a list in one line. It is commonly used because it makes the code shorter, cleaner, and often faster than a normal `for` loop.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal way:**\r\n\r\n```python\r\nsquares = []\r\n\r\nfor x in range(5):\r\n    squares.append(x ** 2)\r\n```\r\n\r\n* **List comprehension:**\r\n\r\n```python\r\nsquares = [x ** 2 for x in range(5)]\r\n```\r\n\r\n👉 **Same result, but list comprehension is shorter and cleaner.**",
    "question_en": "What is list comprehension?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **List comprehension is a short and simple way to create a new list in a single line. It is often more readable and faster than using a `for` loop with `append()`.**\r\n\r\n**Syntax:**\r\n\r\n```python\r\n[expression for item in iterable]\r\n```\r\n\r\n**Example:**\r\n\r\n```python id=\"bzkcda\"\r\nsquares = [x ** 2 for x in range(5)]\r\n\r\nprint(squares)\r\n# Output: [0, 1, 4, 9, 16]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **List comprehension is a concise way to create a list in one line. It is commonly used because it makes the code shorter, cleaner, and often faster than a normal `for` loop.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal way:**\r\n\r\n```python\r\nsquares = []\r\n\r\nfor x in range(5):\r\n    squares.append(x ** 2)\r\n```\r\n\r\n* **List comprehension:**\r\n\r\n```python\r\nsquares = [x ** 2 for x in range(5)]\r\n```\r\n\r\n👉 **Same result, but list comprehension is shorter and cleaner.**",
    "source": "doc",
    "topic": "python",
    "num": "181"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "How do you sort a list?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, we can sort a list using `sort()` or `sorted()`. The `sort()` method sorts the original list in place, while the `sorted()` function returns a new sorted list without changing the original list. Both support the `reverse` and `key` parameters.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [4, 2, 5, 1]\r\n\r\nnumbers.sort()\r\nprint(numbers)\r\n# Output: [1, 2, 4, 5]\r\n```\r\n\r\n```python\r\nnumbers = [4, 2, 5, 1]\r\n\r\nnew_list = sorted(numbers)\r\n\r\nprint(new_list)  # [1, 2, 4, 5]\r\nprint(numbers)   # [4, 2, 5, 1]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`sort()` sorts the original list, while `sorted()` returns a new sorted list without modifying the original list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`sort()` → Changes the original list.**\r\n* **`sorted()` → Creates and returns a new sorted list.**",
    "question_en": "How do you sort a list?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, we can sort a list using `sort()` or `sorted()`. The `sort()` method sorts the original list in place, while the `sorted()` function returns a new sorted list without changing the original list. Both support the `reverse` and `key` parameters.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [4, 2, 5, 1]\r\n\r\nnumbers.sort()\r\nprint(numbers)\r\n# Output: [1, 2, 4, 5]\r\n```\r\n\r\n```python\r\nnumbers = [4, 2, 5, 1]\r\n\r\nnew_list = sorted(numbers)\r\n\r\nprint(new_list)  # [1, 2, 4, 5]\r\nprint(numbers)   # [4, 2, 5, 1]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`sort()` sorts the original list, while `sorted()` returns a new sorted list without modifying the original list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`sort()` → Changes the original list.**\r\n* **`sorted()` → Creates and returns a new sorted list.**",
    "source": "doc",
    "topic": "python",
    "num": "182"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "What is the difference between append() and extend()?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`append()` and `extend()` are both used to add elements to a list. The difference is that `append()` adds the entire object as a single element, while `extend()` adds each element of an iterable (such as a list or tuple) individually to the existing list.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# append()\r\nnumbers = [1, 2]\r\n\r\nnumbers.append([3, 4])\r\n\r\nprint(numbers)\r\n# Output: [1, 2, [3, 4]]\r\n```\r\n\r\n```python\r\n# extend()\r\nnumbers = [1, 2]\r\n\r\nnumbers.extend([3, 4])\r\n\r\nprint(numbers)\r\n# Output: [1, 2, 3, 4]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`append()` adds a single element to the end of the list, while `extend()` adds all elements from another iterable to the list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`append()` → Adds one item (even if it's a list).**\r\n* **`extend()` → Adds each item from another iterable individually.**",
    "question_en": "What is the difference between append() and extend()?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`append()` and `extend()` are both used to add elements to a list. The difference is that `append()` adds the entire object as a single element, while `extend()` adds each element of an iterable (such as a list or tuple) individually to the existing list.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# append()\r\nnumbers = [1, 2]\r\n\r\nnumbers.append([3, 4])\r\n\r\nprint(numbers)\r\n# Output: [1, 2, [3, 4]]\r\n```\r\n\r\n```python\r\n# extend()\r\nnumbers = [1, 2]\r\n\r\nnumbers.extend([3, 4])\r\n\r\nprint(numbers)\r\n# Output: [1, 2, 3, 4]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`append()` adds a single element to the end of the list, while `extend()` adds all elements from another iterable to the list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`append()` → Adds one item (even if it's a list).**\r\n* **`extend()` → Adds each item from another iterable individually.**",
    "source": "doc",
    "topic": "python",
    "num": "183"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "How do you remove duplicates from a list?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **There are two common ways to remove duplicates from a list. We can convert the list to a `set` and then back to a list, but this may change the order of the elements. If we want to keep the original order, we can use `dict.fromkeys()`.**\r\n\r\n**Example 1 (Using `set()`):**\r\n\r\n```python\r\nnumbers = [1, 2, 2, 3, 1]\r\n\r\nunique = list(set(numbers))\r\n\r\nprint(unique)\r\n# Output: [1, 2, 3]   # Order may vary\r\n```\r\n\r\n**Example 2 (Preserving Order):**\r\n\r\n```python\r\nnumbers = [1, 2, 2, 3, 1]\r\n\r\nunique = list(dict.fromkeys(numbers))\r\n\r\nprint(unique)\r\n# Output: [1, 2, 3]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can remove duplicates by converting the list to a `set`. If we need to preserve the original order, we can use `dict.fromkeys()`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`set()` → Removes duplicates, but order is not guaranteed.**\r\n* **`dict.fromkeys()` → Removes duplicates and preserves the original order.**",
    "question_en": "How do you remove duplicates from a list?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **There are two common ways to remove duplicates from a list. We can convert the list to a `set` and then back to a list, but this may change the order of the elements. If we want to keep the original order, we can use `dict.fromkeys()`.**\r\n\r\n**Example 1 (Using `set()`):**\r\n\r\n```python\r\nnumbers = [1, 2, 2, 3, 1]\r\n\r\nunique = list(set(numbers))\r\n\r\nprint(unique)\r\n# Output: [1, 2, 3]   # Order may vary\r\n```\r\n\r\n**Example 2 (Preserving Order):**\r\n\r\n```python\r\nnumbers = [1, 2, 2, 3, 1]\r\n\r\nunique = list(dict.fromkeys(numbers))\r\n\r\nprint(unique)\r\n# Output: [1, 2, 3]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can remove duplicates by converting the list to a `set`. If we need to preserve the original order, we can use `dict.fromkeys()`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`set()` → Removes duplicates, but order is not guaranteed.**\r\n* **`dict.fromkeys()` → Removes duplicates and preserves the original order.**",
    "source": "doc",
    "topic": "python",
    "num": "184"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "What is list slicing?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **List slicing is the process of extracting a part of a list using the syntax `[start:stop:step]`. It returns a new list containing the selected elements without changing the original list.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [10, 20, 30, 40, 50]\r\n\r\nprint(numbers[1:4])   # [20, 30, 40]\r\nprint(numbers[:3])    # [10, 20, 30]\r\nprint(numbers[::2])   # [10, 30, 50]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **List slicing is used to extract a portion of a list using the syntax `[start:stop:step]`. It returns a new list without modifying the original list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`start`** → Starting index (included)\r\n* **`stop`** → Ending index (not included)\r\n* **`step`** → Number of positions to move each time\r\n\r\n**Example:**\r\n\r\n* `numbers[1:4]` → Elements from index **1** to **3**\r\n* `numbers[::-1]` → Reverse the list",
    "question_en": "What is list slicing?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **List slicing is the process of extracting a part of a list using the syntax `[start:stop:step]`. It returns a new list containing the selected elements without changing the original list.**\r\n\r\n**Example:**\r\n\r\n```python\r\nnumbers = [10, 20, 30, 40, 50]\r\n\r\nprint(numbers[1:4])   # [20, 30, 40]\r\nprint(numbers[:3])    # [10, 20, 30]\r\nprint(numbers[::2])   # [10, 30, 50]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **List slicing is used to extract a portion of a list using the syntax `[start:stop:step]`. It returns a new list without modifying the original list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`start`** → Starting index (included)\r\n* **`stop`** → Ending index (not included)\r\n* **`step`** → Number of positions to move each time\r\n\r\n**Example:**\r\n\r\n* `numbers[1:4]` → Elements from index **1** to **3**\r\n* `numbers[::-1]` → Reverse the list",
    "source": "doc",
    "topic": "python",
    "num": "185"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "Why are tuples generally faster than lists?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Tuples are generally faster than lists because they are immutable, which means they cannot be changed after they are created. Since their size and contents are fixed, Python can optimize them better, making them slightly faster and more memory-efficient than lists.**\r\n\r\n**Example:**\r\n\r\n```python\r\nmy_list = [1, 2, 3]\r\nmy_tuple = (1, 2, 3)\r\n```\r\n\r\n* `my_list` → Can be modified.\r\n* `my_tuple` → Cannot be modified.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Tuples are generally faster than lists because they are immutable. Python can optimize immutable objects better, making tuples slightly faster and more memory-efficient.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **List → Mutable → More flexible, slightly slower.**\r\n* **Tuple → Immutable → Faster and uses less memory.**",
    "question_en": "Why are tuples generally faster than lists?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Tuples are generally faster than lists because they are immutable, which means they cannot be changed after they are created. Since their size and contents are fixed, Python can optimize them better, making them slightly faster and more memory-efficient than lists.**\r\n\r\n**Example:**\r\n\r\n```python\r\nmy_list = [1, 2, 3]\r\nmy_tuple = (1, 2, 3)\r\n```\r\n\r\n* `my_list` → Can be modified.\r\n* `my_tuple` → Cannot be modified.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Tuples are generally faster than lists because they are immutable. Python can optimize immutable objects better, making tuples slightly faster and more memory-efficient.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **List → Mutable → More flexible, slightly slower.**\r\n* **Tuple → Immutable → Faster and uses less memory.**",
    "source": "doc",
    "topic": "python",
    "num": "186"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "How do you unpack a tuple?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Tuple unpacking is the process of assigning the elements of a tuple to multiple variables in a single statement. The number of variables should match the number of tuple elements. We can also use `*` to collect the remaining elements into a list.**\r\n\r\n**Example 1 (Basic Unpacking):**\r\n\r\n```python\r\nperson = (\"Vikram\", 22)\r\n\r\nname, age = person\r\n\r\nprint(name)  # Vikram\r\nprint(age)   # 22\r\n```\r\n\r\n**Example 2 (Using `*`):**\r\n\r\n```python\r\nnumbers = (1, 2, 3, 4, 5)\r\n\r\na, *rest = numbers\r\n\r\nprint(a)     # 1\r\nprint(rest)  # [2, 3, 4, 5]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Tuple unpacking means assigning tuple elements to multiple variables in one statement. We can also use `*` to collect the remaining elements into a list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal unpacking:** `a, b = (10, 20)`\r\n* **Star unpacking:** `a, *rest = (1, 2, 3, 4)` → `rest = [2, 3, 4]`",
    "question_en": "How do you unpack a tuple?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Tuple unpacking is the process of assigning the elements of a tuple to multiple variables in a single statement. The number of variables should match the number of tuple elements. We can also use `*` to collect the remaining elements into a list.**\r\n\r\n**Example 1 (Basic Unpacking):**\r\n\r\n```python\r\nperson = (\"Vikram\", 22)\r\n\r\nname, age = person\r\n\r\nprint(name)  # Vikram\r\nprint(age)   # 22\r\n```\r\n\r\n**Example 2 (Using `*`):**\r\n\r\n```python\r\nnumbers = (1, 2, 3, 4, 5)\r\n\r\na, *rest = numbers\r\n\r\nprint(a)     # 1\r\nprint(rest)  # [2, 3, 4, 5]\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Tuple unpacking means assigning tuple elements to multiple variables in one statement. We can also use `*` to collect the remaining elements into a list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal unpacking:** `a, b = (10, 20)`\r\n* **Star unpacking:** `a, *rest = (1, 2, 3, 4)` → `rest = [2, 3, 4]`",
    "source": "doc",
    "topic": "python",
    "num": "187"
  },
  {
    "category": "Lists & Tuples",
    "question_hi": "What is a nested list?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A nested list is a list that contains one or more lists as its elements. It is commonly used to represent two-dimensional data, such as a matrix, table, or grid. We can access elements using multiple indexes.**\r\n\r\n**Example:**\r\n\r\n```python\r\nmatrix = [\r\n    [1, 2],\r\n    [3, 4]\r\n]\r\n\r\nprint(matrix[0][1])   # Output: 2\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A nested list is a list that contains other lists as elements. It is commonly used to store two-dimensional data, and its elements are accessed using multiple indexes.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal List:** `[1, 2, 3]`\r\n* **Nested List:** `[[1, 2], [3, 4]]`\r\n* **Access element:** `matrix[row][column]`",
    "question_en": "What is a nested list?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A nested list is a list that contains one or more lists as its elements. It is commonly used to represent two-dimensional data, such as a matrix, table, or grid. We can access elements using multiple indexes.**\r\n\r\n**Example:**\r\n\r\n```python\r\nmatrix = [\r\n    [1, 2],\r\n    [3, 4]\r\n]\r\n\r\nprint(matrix[0][1])   # Output: 2\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A nested list is a list that contains other lists as elements. It is commonly used to store two-dimensional data, and its elements are accessed using multiple indexes.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Normal List:** `[1, 2, 3]`\r\n* **Nested List:** `[[1, 2], [3, 4]]`\r\n* **Access element:** `matrix[row][column]`",
    "source": "doc",
    "topic": "python",
    "num": "188"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "What is a dictionary in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A dictionary is a built-in data type in Python that stores data as key-value pairs. It is created using curly braces `{}`. Each key must be unique, and we can quickly access values using their keys. From Python 3.7 onwards, dictionaries preserve the insertion order of elements.**\r\n\r\n**Example:**\r\n\r\n```python\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\nprint(student[\"name\"])\r\n# Output: Vikram\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A dictionary is a collection of key-value pairs. It uses unique keys to store and access values. Dictionaries are created using `{}` and preserve insertion order in Python 3.7 and later.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Dictionary = Key : Value**\r\n* **Uses `{}`**\r\n* **Keys are unique**\r\n* **Access values using keys:** `student[\"name\"]`\r\n\r\n\r\nQ.How is a dictionary implemented internally?\r\n\r\nA. **Interview Answer (Simple English):**\r\n\r\n> **A Python dictionary is implemented internally using a hash table. When we store a key-value pair, Python calculates a hash value for the key and uses it to quickly find where the value is stored. Because of this, dictionary operations like lookup, insertion, and deletion are very fast, with an average time complexity of O(1).**\r\n\r\n**Example:**\r\n\r\n```python\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\nprint(student[\"name\"])\r\n# Output: Vikram\r\n```\r\n\r\nHere, Python uses the hash of `\"name\"` to quickly find its value.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A dictionary is implemented using a hash table. Python uses the hash of a key to store and retrieve values quickly, making lookup, insertion, and deletion very fast, with an average time complexity of O(1).**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Dictionary = Hash Table**\r\n* **Key → Hash → Value**\r\n* **Fast operations → Average `O(1)` for search, insert, and delete**",
    "question_en": "What is a dictionary in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A dictionary is a built-in data type in Python that stores data as key-value pairs. It is created using curly braces `{}`. Each key must be unique, and we can quickly access values using their keys. From Python 3.7 onwards, dictionaries preserve the insertion order of elements.**\r\n\r\n**Example:**\r\n\r\n```python\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\nprint(student[\"name\"])\r\n# Output: Vikram\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A dictionary is a collection of key-value pairs. It uses unique keys to store and access values. Dictionaries are created using `{}` and preserve insertion order in Python 3.7 and later.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Dictionary = Key : Value**\r\n* **Uses `{}`**\r\n* **Keys are unique**\r\n* **Access values using keys:** `student[\"name\"]`\r\n\r\n\r\nQ.How is a dictionary implemented internally?\r\n\r\nA. **Interview Answer (Simple English):**\r\n\r\n> **A Python dictionary is implemented internally using a hash table. When we store a key-value pair, Python calculates a hash value for the key and uses it to quickly find where the value is stored. Because of this, dictionary operations like lookup, insertion, and deletion are very fast, with an average time complexity of O(1).**\r\n\r\n**Example:**\r\n\r\n```python\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\nprint(student[\"name\"])\r\n# Output: Vikram\r\n```\r\n\r\nHere, Python uses the hash of `\"name\"` to quickly find its value.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A dictionary is implemented using a hash table. Python uses the hash of a key to store and retrieve values quickly, making lookup, insertion, and deletion very fast, with an average time complexity of O(1).**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Dictionary = Hash Table**\r\n* **Key → Hash → Value**\r\n* **Fast operations → Average `O(1)` for search, insert, and delete**",
    "source": "doc",
    "topic": "python",
    "num": "189"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "How is a dictionary implemented internally?",
    "answer_hi": "> **As a hash table — keys are hashed to determine their storage location, giving average O(1) time complexity for lookups, insertions, and deletions.**",
    "question_en": "How is a dictionary implemented internally?",
    "answer_en": "> **As a hash table — keys are hashed to determine their storage location, giving average O(1) time complexity for lookups, insertions, and deletions.**",
    "source": "written",
    "topic": "python",
    "num": "190"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "What is the difference between a dictionary and a set?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A dictionary and a set are both built-in Python data types, but they store data differently. A dictionary stores data as key-value pairs, while a set stores only unique values. Dictionaries use keys to access values, whereas sets are mainly used to remove duplicates and perform set operations like union and intersection.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# Dictionary\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\nprint(student[\"name\"])\r\n# Output: Vikram\r\n```\r\n\r\n```python\r\n# Set\r\nnumbers = {1, 2, 2, 3, 3}\r\n\r\nprint(numbers)\r\n# Output: {1, 2, 3}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A dictionary stores data as key-value pairs, while a set stores only unique values. Dictionaries are used for mapping keys to values, and sets are used to store unique elements and remove duplicates.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Dictionary → `key : value` pairs → `{\"name\": \"Vikram\"}`**\r\n* **Set → Only unique values → `{1, 2, 3}`**\r\n* **Dictionary uses `{key: value}`**\r\n* **Set uses `{value1, value2, value3}`**",
    "question_en": "What is the difference between a dictionary and a set?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A dictionary and a set are both built-in Python data types, but they store data differently. A dictionary stores data as key-value pairs, while a set stores only unique values. Dictionaries use keys to access values, whereas sets are mainly used to remove duplicates and perform set operations like union and intersection.**\r\n\r\n**Example:**\r\n\r\n```python\r\n# Dictionary\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\nprint(student[\"name\"])\r\n# Output: Vikram\r\n```\r\n\r\n```python\r\n# Set\r\nnumbers = {1, 2, 2, 3, 3}\r\n\r\nprint(numbers)\r\n# Output: {1, 2, 3}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A dictionary stores data as key-value pairs, while a set stores only unique values. Dictionaries are used for mapping keys to values, and sets are used to store unique elements and remove duplicates.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Dictionary → `key : value` pairs → `{\"name\": \"Vikram\"}`**\r\n* **Set → Only unique values → `{1, 2, 3}`**\r\n* **Dictionary uses `{key: value}`**\r\n* **Set uses `{value1, value2, value3}`**",
    "source": "doc",
    "topic": "python",
    "num": "191"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "How do you iterate over a dictionary's keys and values?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **We can iterate over a dictionary using `keys()`, `values()`, and `items()` methods. `keys()` is used to get only keys, `values()` is used to get only values, and `items()` is used to get both keys and values together.**\r\n\r\n**Example:**\r\n\r\n```python id=\"o3u4vj\"\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\n# Iterate keys\r\nfor key in student.keys():\r\n    print(key)\r\n\r\n# Iterate values\r\nfor value in student.values():\r\n    print(value)\r\n\r\n# Iterate key-value pairs\r\nfor key, value in student.items():\r\n    print(key, value)\r\n```\r\n\r\n**Output:**\r\n\r\n```\r\nname\r\nage\r\nVikram\r\n22\r\nname Vikram\r\nage 22\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can iterate over a dictionary using `keys()`, `values()`, and `items()`. `keys()` gives keys, `values()` gives values, and `items()` gives both key-value pairs.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`dict.keys()` → Only keys**\r\n* **`dict.values()` → Only values**\r\n* **`dict.items()` → Key + Value together**",
    "question_en": "How do you iterate over a dictionary's keys and values?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **We can iterate over a dictionary using `keys()`, `values()`, and `items()` methods. `keys()` is used to get only keys, `values()` is used to get only values, and `items()` is used to get both keys and values together.**\r\n\r\n**Example:**\r\n\r\n```python id=\"o3u4vj\"\r\nstudent = {\r\n    \"name\": \"Vikram\",\r\n    \"age\": 22\r\n}\r\n\r\n# Iterate keys\r\nfor key in student.keys():\r\n    print(key)\r\n\r\n# Iterate values\r\nfor value in student.values():\r\n    print(value)\r\n\r\n# Iterate key-value pairs\r\nfor key, value in student.items():\r\n    print(key, value)\r\n```\r\n\r\n**Output:**\r\n\r\n```\r\nname\r\nage\r\nVikram\r\n22\r\nname Vikram\r\nage 22\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can iterate over a dictionary using `keys()`, `values()`, and `items()`. `keys()` gives keys, `values()` gives values, and `items()` gives both key-value pairs.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`dict.keys()` → Only keys**\r\n* **`dict.values()` → Only values**\r\n* **`dict.items()` → Key + Value together**",
    "source": "doc",
    "topic": "python",
    "num": "192"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "What is a dictionary comprehension?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Dictionary comprehension is a short and simple way to create a dictionary in a single line. It allows us to generate key-value pairs using an expression and a loop, similar to list comprehension.**\r\n\r\n**Syntax:**\r\n\r\n```python\r\n{key: value for item in iterable}\r\n```\r\n\r\n**Example:**\r\n\r\n```python id=\"t5q0sk\"\r\nsquares = {x: x**2 for x in range(5)}\r\n\r\nprint(squares)\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\n{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dictionary comprehension is a one-line way to create a dictionary using a loop and an expression. It creates key-value pairs and makes code shorter and cleaner.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**List comprehension:**\r\n\r\n```python\r\n[x*2 for x in range(5)]\r\n```\r\n\r\n**Dictionary comprehension:**\r\n\r\n```python\r\n{x: x*2 for x in range(5)}\r\n```\r\n\r\n👉 **Difference: List gives values, Dictionary gives key-value pairs.**",
    "question_en": "What is a dictionary comprehension?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Dictionary comprehension is a short and simple way to create a dictionary in a single line. It allows us to generate key-value pairs using an expression and a loop, similar to list comprehension.**\r\n\r\n**Syntax:**\r\n\r\n```python\r\n{key: value for item in iterable}\r\n```\r\n\r\n**Example:**\r\n\r\n```python id=\"t5q0sk\"\r\nsquares = {x: x**2 for x in range(5)}\r\n\r\nprint(squares)\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\n{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dictionary comprehension is a one-line way to create a dictionary using a loop and an expression. It creates key-value pairs and makes code shorter and cleaner.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**List comprehension:**\r\n\r\n```python\r\n[x*2 for x in range(5)]\r\n```\r\n\r\n**Dictionary comprehension:**\r\n\r\n```python\r\n{x: x*2 for x in range(5)}\r\n```\r\n\r\n👉 **Difference: List gives values, Dictionary gives key-value pairs.**",
    "source": "doc",
    "topic": "python",
    "num": "193"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "What is the difference between dict.get() and dict[key]?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Both `dict.get()` and `dict[key]` are used to access values from a dictionary. The difference is that `dict[key]` raises a `KeyError` if the key does not exist, while `dict.get()` returns `None` or a default value instead of giving an error.**\r\n\r\n**Example:**\r\n\r\n```python id=\"0zql8v\"\r\nstudent = {\r\n    \"name\": \"Vikram\"\r\n}\r\n\r\n# Using dict[key]\r\nprint(student[\"age\"])\r\n# Error: KeyError\r\n```\r\n\r\n```python id=\"l8k4pw\"\r\nstudent = {\r\n    \"name\": \"Vikram\"\r\n}\r\n\r\n# Using dict.get()\r\nprint(student.get(\"age\"))\r\n# Output: None\r\n\r\nprint(student.get(\"age\", 0))\r\n# Output: 0\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`dict[key]` directly accesses a value but gives a `KeyError` if the key is missing. `dict.get()` safely accesses the value and returns `None` or a default value if the key does not exist.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`dict[key]` → Strict access → Error if key missing ❌**\r\n* **`dict.get()` → Safe access → Returns default value ✅**",
    "question_en": "What is the difference between dict.get() and dict[key]?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Both `dict.get()` and `dict[key]` are used to access values from a dictionary. The difference is that `dict[key]` raises a `KeyError` if the key does not exist, while `dict.get()` returns `None` or a default value instead of giving an error.**\r\n\r\n**Example:**\r\n\r\n```python id=\"0zql8v\"\r\nstudent = {\r\n    \"name\": \"Vikram\"\r\n}\r\n\r\n# Using dict[key]\r\nprint(student[\"age\"])\r\n# Error: KeyError\r\n```\r\n\r\n```python id=\"l8k4pw\"\r\nstudent = {\r\n    \"name\": \"Vikram\"\r\n}\r\n\r\n# Using dict.get()\r\nprint(student.get(\"age\"))\r\n# Output: None\r\n\r\nprint(student.get(\"age\", 0))\r\n# Output: 0\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`dict[key]` directly accesses a value but gives a `KeyError` if the key is missing. `dict.get()` safely accesses the value and returns `None` or a default value if the key does not exist.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`dict[key]` → Strict access → Error if key missing ❌**\r\n* **`dict.get()` → Safe access → Returns default value ✅**",
    "source": "doc",
    "topic": "python",
    "num": "194"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "What is a frozenset?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A `frozenset` is an immutable version of a set. It works like a normal set, but once it is created, we cannot add or remove elements. Since it cannot be changed, it is hashable and can be used as a dictionary key.**\r\n\r\n**Example:**\r\n\r\n```python id=\"m6i6qt\"\r\nnumbers = frozenset([1, 2, 3])\r\n\r\nprint(numbers)\r\n# Output: frozenset({1, 2, 3})\r\n```\r\n\r\n```python id=\"7qg7y8\"\r\n# Cannot modify\r\nnumbers.add(4)\r\n# Error: AttributeError\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A `frozenset` is an immutable set. It cannot be modified after creation, which makes it hashable and allows it to be used as a dictionary key.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Set → Mutable → Can add/remove elements**\r\n* **Frozenset → Immutable → Cannot change elements**\r\n* **Both store unique values**",
    "question_en": "What is a frozenset?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A `frozenset` is an immutable version of a set. It works like a normal set, but once it is created, we cannot add or remove elements. Since it cannot be changed, it is hashable and can be used as a dictionary key.**\r\n\r\n**Example:**\r\n\r\n```python id=\"m6i6qt\"\r\nnumbers = frozenset([1, 2, 3])\r\n\r\nprint(numbers)\r\n# Output: frozenset({1, 2, 3})\r\n```\r\n\r\n```python id=\"7qg7y8\"\r\n# Cannot modify\r\nnumbers.add(4)\r\n# Error: AttributeError\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A `frozenset` is an immutable set. It cannot be modified after creation, which makes it hashable and allows it to be used as a dictionary key.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Set → Mutable → Can add/remove elements**\r\n* **Frozenset → Immutable → Cannot change elements**\r\n* **Both store unique values**",
    "source": "doc",
    "topic": "python",
    "num": "195"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "How do you merge two dictionaries?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **We can merge two dictionaries in Python using the `update()` method, dictionary unpacking (`**`), or the merge operator `|` introduced in Python 3.9. If both dictionaries have the same key, the value from the second dictionary overwrites the first one.**\r\n\r\n**Example 1: Using `update()`**\r\n\r\n```python id=\"1b1z0w\"\r\ndict1 = {\"a\": 1, \"b\": 2}\r\ndict2 = {\"b\": 3, \"c\": 4}\r\n\r\ndict1.update(dict2)\r\n\r\nprint(dict1)\r\n# Output: {'a': 1, 'b': 3, 'c': 4}\r\n```\r\n\r\n**Example 2: Using `|` operator**\r\n\r\n```python id=\"4c8z8z\"\r\ndict3 = dict1 | dict2\r\n\r\nprint(dict3)\r\n```\r\n\r\n**Example 3: Using unpacking**\r\n\r\n```python id=\"q89z0f\"\r\ndict3 = {**dict1, **dict2}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can merge dictionaries using `update()`, `{**dict1, **dict2}`, or the `|` operator in Python 3.9+. If the same key exists in both dictionaries, the second dictionary's value replaces the first one.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`update()` → Modifies existing dictionary**\r\n* **`{**d1, **d2}` → Creates a new dictionary**\r\n* **`d1 | d2` → Modern merge operator**\r\n* **Duplicate key → Second dictionary wins** ✅",
    "question_en": "How do you merge two dictionaries?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **We can merge two dictionaries in Python using the `update()` method, dictionary unpacking (`**`), or the merge operator `|` introduced in Python 3.9. If both dictionaries have the same key, the value from the second dictionary overwrites the first one.**\r\n\r\n**Example 1: Using `update()`**\r\n\r\n```python id=\"1b1z0w\"\r\ndict1 = {\"a\": 1, \"b\": 2}\r\ndict2 = {\"b\": 3, \"c\": 4}\r\n\r\ndict1.update(dict2)\r\n\r\nprint(dict1)\r\n# Output: {'a': 1, 'b': 3, 'c': 4}\r\n```\r\n\r\n**Example 2: Using `|` operator**\r\n\r\n```python id=\"4c8z8z\"\r\ndict3 = dict1 | dict2\r\n\r\nprint(dict3)\r\n```\r\n\r\n**Example 3: Using unpacking**\r\n\r\n```python id=\"q89z0f\"\r\ndict3 = {**dict1, **dict2}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can merge dictionaries using `update()`, `{**dict1, **dict2}`, or the `|` operator in Python 3.9+. If the same key exists in both dictionaries, the second dictionary's value replaces the first one.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`update()` → Modifies existing dictionary**\r\n* **`{**d1, **d2}` → Creates a new dictionary**\r\n* **`d1 | d2` → Modern merge operator**\r\n* **Duplicate key → Second dictionary wins** ✅",
    "source": "doc",
    "topic": "python",
    "num": "196"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "What operations can you perform on sets?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Sets support different operations like union, intersection, difference, and symmetric difference. These operations are used to compare and combine sets.**\r\n\r\n**Examples:**\r\n\r\n```python id=\"7m7q9g\"\r\nA = {1, 2, 3}\r\nB = {3, 4, 5}\r\n```\r\n\r\n**1. Union (`|`) → Combines all unique elements**\r\n\r\n```python\r\nA | B\r\n# Output: {1, 2, 3, 4, 5}\r\n```\r\n\r\n**2. Intersection (`&`) → Finds common elements**\r\n\r\n```python\r\nA & B\r\n# Output: {3}\r\n```\r\n\r\n**3. Difference (`-`) → Finds elements present in first set but not second**\r\n\r\n```python\r\nA - B\r\n# Output: {1, 2}\r\n```\r\n\r\n**4. Symmetric Difference (`^`) → Finds elements present in either set but not both**\r\n\r\n```python\r\nA ^ B\r\n# Output: {1, 2, 4, 5}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Set operations include union, intersection, difference, and symmetric difference. Union combines elements, intersection finds common elements, difference finds elements unique to one set, and symmetric difference finds elements that are different in both sets.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`|` → All elements (Union)**\r\n* **`&` → Common elements (Intersection)**\r\n* **`-` → Remove common elements (Difference)**\r\n* **`^` → Only different elements (Symmetric Difference)**",
    "question_en": "What operations can you perform on sets?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Sets support different operations like union, intersection, difference, and symmetric difference. These operations are used to compare and combine sets.**\r\n\r\n**Examples:**\r\n\r\n```python id=\"7m7q9g\"\r\nA = {1, 2, 3}\r\nB = {3, 4, 5}\r\n```\r\n\r\n**1. Union (`|`) → Combines all unique elements**\r\n\r\n```python\r\nA | B\r\n# Output: {1, 2, 3, 4, 5}\r\n```\r\n\r\n**2. Intersection (`&`) → Finds common elements**\r\n\r\n```python\r\nA & B\r\n# Output: {3}\r\n```\r\n\r\n**3. Difference (`-`) → Finds elements present in first set but not second**\r\n\r\n```python\r\nA - B\r\n# Output: {1, 2}\r\n```\r\n\r\n**4. Symmetric Difference (`^`) → Finds elements present in either set but not both**\r\n\r\n```python\r\nA ^ B\r\n# Output: {1, 2, 4, 5}\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Set operations include union, intersection, difference, and symmetric difference. Union combines elements, intersection finds common elements, difference finds elements unique to one set, and symmetric difference finds elements that are different in both sets.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`|` → All elements (Union)**\r\n* **`&` → Common elements (Intersection)**\r\n* **`-` → Remove common elements (Difference)**\r\n* **`^` → Only different elements (Symmetric Difference)**",
    "source": "doc",
    "topic": "python",
    "num": "197"
  },
  {
    "category": "Dicts & Sets",
    "question_hi": "Can dictionary keys be any data type?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Dictionary keys can be any data type that is hashable and immutable. Common examples are strings, numbers, and tuples. Mutable data types like lists, sets, and dictionaries cannot be used as dictionary keys because their values can change.**\r\n\r\n**Example:**\r\n\r\n```python id=\"7y6w7u\"\r\n# Valid dictionary keys\r\ndata = {\r\n    \"name\": \"Vikram\",\r\n    1: \"one\",\r\n    (1, 2): \"tuple key\"\r\n}\r\n\r\nprint(data)\r\n```\r\n\r\n```python id=\"n9c4au\"\r\n# Invalid dictionary key\r\ndata = {\r\n    [1, 2]: \"list key\"\r\n}\r\n\r\n# Error: TypeError (unhashable type: 'list')\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dictionary keys must be immutable and hashable. Strings, numbers, and tuples can be used as keys, but lists, sets, and dictionaries cannot be used as keys because they are mutable.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* ✅ **Allowed:** `str`, `int`, `float`, `tuple`\r\n* ❌ **Not allowed:** `list`, `set`, `dict`\r\n* **Rule: Key should not change after creation**",
    "question_en": "Can dictionary keys be any data type?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Dictionary keys can be any data type that is hashable and immutable. Common examples are strings, numbers, and tuples. Mutable data types like lists, sets, and dictionaries cannot be used as dictionary keys because their values can change.**\r\n\r\n**Example:**\r\n\r\n```python id=\"7y6w7u\"\r\n# Valid dictionary keys\r\ndata = {\r\n    \"name\": \"Vikram\",\r\n    1: \"one\",\r\n    (1, 2): \"tuple key\"\r\n}\r\n\r\nprint(data)\r\n```\r\n\r\n```python id=\"n9c4au\"\r\n# Invalid dictionary key\r\ndata = {\r\n    [1, 2]: \"list key\"\r\n}\r\n\r\n# Error: TypeError (unhashable type: 'list')\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dictionary keys must be immutable and hashable. Strings, numbers, and tuples can be used as keys, but lists, sets, and dictionaries cannot be used as keys because they are mutable.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* ✅ **Allowed:** `str`, `int`, `float`, `tuple`\r\n* ❌ **Not allowed:** `list`, `set`, `dict`\r\n* **Rule: Key should not change after creation**",
    "source": "doc",
    "topic": "python",
    "num": "198"
  },
  {
    "category": "OOP",
    "question_hi": "What are the four pillars of OOP?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The four main pillars of Object-Oriented Programming (OOP) are Encapsulation, Inheritance, Polymorphism, and Abstraction. These concepts help us organize code using classes and objects, making it reusable, secure, and easier to maintain.**\r\n\r\n### **1. Encapsulation**\r\n\r\n> **Encapsulation means wrapping data and methods together inside a class and controlling access to the data.**\r\n\r\nExample:\r\n\r\n```python id=\"p2z7n8\"\r\nclass Bank:\r\n    def __init__(self, balance):\r\n        self.__balance = balance\r\n```\r\n\r\n---\r\n\r\n### **2. Inheritance**\r\n\r\n> **Inheritance allows one class to use the properties and methods of another class. It helps in code reuse.**\r\n\r\nExample:\r\n\r\n```python id=\"5v9xq1\"\r\nclass Animal:\r\n    def sound(self):\r\n        print(\"Sound\")\r\n\r\nclass Dog(Animal):\r\n    pass\r\n```\r\n\r\n---\r\n\r\n### **3. Polymorphism**\r\n\r\n> **Polymorphism means the same method or operation can behave differently depending on the object.**\r\n\r\nExample:\r\n\r\n```python id=\"6kq2rm\"\r\nclass Dog:\r\n    def sound(self):\r\n        print(\"Bark\")\r\n\r\nclass Cat:\r\n    def sound(self):\r\n        print(\"Meow\")\r\n```\r\n\r\n---\r\n\r\n### **4. Abstraction**\r\n\r\n> **Abstraction means hiding internal implementation details and showing only the necessary information to the user.**\r\n\r\nExample:\r\n\r\n* Driving a car → You use the steering and pedals without knowing the internal engine working.\r\n\r\n---\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. Encapsulation protects data, Inheritance provides code reuse, Polymorphism allows different behaviors using the same interface, and Abstraction hides unnecessary details.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **E → Encapsulation → Data hiding**\r\n* **I → Inheritance → Code reuse**\r\n* **P → Polymorphism → Many forms**\r\n* **A → Abstraction → Hide complexity**",
    "question_en": "What are the four pillars of OOP?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The four main pillars of Object-Oriented Programming (OOP) are Encapsulation, Inheritance, Polymorphism, and Abstraction. These concepts help us organize code using classes and objects, making it reusable, secure, and easier to maintain.**\r\n\r\n### **1. Encapsulation**\r\n\r\n> **Encapsulation means wrapping data and methods together inside a class and controlling access to the data.**\r\n\r\nExample:\r\n\r\n```python id=\"p2z7n8\"\r\nclass Bank:\r\n    def __init__(self, balance):\r\n        self.__balance = balance\r\n```\r\n\r\n---\r\n\r\n### **2. Inheritance**\r\n\r\n> **Inheritance allows one class to use the properties and methods of another class. It helps in code reuse.**\r\n\r\nExample:\r\n\r\n```python id=\"5v9xq1\"\r\nclass Animal:\r\n    def sound(self):\r\n        print(\"Sound\")\r\n\r\nclass Dog(Animal):\r\n    pass\r\n```\r\n\r\n---\r\n\r\n### **3. Polymorphism**\r\n\r\n> **Polymorphism means the same method or operation can behave differently depending on the object.**\r\n\r\nExample:\r\n\r\n```python id=\"6kq2rm\"\r\nclass Dog:\r\n    def sound(self):\r\n        print(\"Bark\")\r\n\r\nclass Cat:\r\n    def sound(self):\r\n        print(\"Meow\")\r\n```\r\n\r\n---\r\n\r\n### **4. Abstraction**\r\n\r\n> **Abstraction means hiding internal implementation details and showing only the necessary information to the user.**\r\n\r\nExample:\r\n\r\n* Driving a car → You use the steering and pedals without knowing the internal engine working.\r\n\r\n---\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. Encapsulation protects data, Inheritance provides code reuse, Polymorphism allows different behaviors using the same interface, and Abstraction hides unnecessary details.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **E → Encapsulation → Data hiding**\r\n* **I → Inheritance → Code reuse**\r\n* **P → Polymorphism → Many forms**\r\n* **A → Abstraction → Hide complexity**",
    "source": "doc",
    "topic": "python",
    "num": "199"
  },
  {
    "category": "OOP",
    "question_hi": "What is a class and an object?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A class is a blueprint or template used to create objects. It defines the properties (attributes) and behaviors (methods) that objects will have. An object is an instance of a class that contains its own data and can use the methods defined in the class.**\r\n\r\n**Example:**\r\n\r\n```python id=\"u4j9hz\"\r\nclass Student:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def display(self):\r\n        print(self.name)\r\n\r\n# Object creation\r\nstudent1 = Student(\"Vikram\")\r\n\r\nstudent1.display()\r\n# Output: Vikram\r\n```\r\n\r\nHere:\r\n\r\n* **Class → Student (Blueprint)**\r\n* **Object → student1 (Real instance of Student class)**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A class is a blueprint that defines attributes and methods, while an object is an instance of that class. Objects use the properties and behaviors defined by the class.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Class = Blueprint (like a house design)**\r\n* **Object = Actual thing created from blueprint (actual house)**",
    "question_en": "What is a class and an object?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A class is a blueprint or template used to create objects. It defines the properties (attributes) and behaviors (methods) that objects will have. An object is an instance of a class that contains its own data and can use the methods defined in the class.**\r\n\r\n**Example:**\r\n\r\n```python id=\"u4j9hz\"\r\nclass Student:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def display(self):\r\n        print(self.name)\r\n\r\n# Object creation\r\nstudent1 = Student(\"Vikram\")\r\n\r\nstudent1.display()\r\n# Output: Vikram\r\n```\r\n\r\nHere:\r\n\r\n* **Class → Student (Blueprint)**\r\n* **Object → student1 (Real instance of Student class)**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A class is a blueprint that defines attributes and methods, while an object is an instance of that class. Objects use the properties and behaviors defined by the class.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Class = Blueprint (like a house design)**\r\n* **Object = Actual thing created from blueprint (actual house)**",
    "source": "doc",
    "topic": "python",
    "num": "200"
  },
  {
    "category": "OOP",
    "question_hi": "What is __init__ used for?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`__init__` is a constructor method in Python. It is automatically called when a new object is created. It is mainly used to initialize the object's attributes and set their initial values.**\r\n\r\n**Example:**\r\n\r\n```python id=\"l0g3fs\"\r\nclass Student:\r\n    def __init__(self, name, age):\r\n        self.name = name\r\n        self.age = age\r\n\r\nstudent1 = Student(\"Vikram\", 22)\r\n\r\nprint(student1.name)\r\n# Output: Vikram\r\n```\r\n\r\nHere, `__init__` sets the initial values of `name` and `age` when the object is created.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`__init__` is a constructor method that runs automatically when an object is created. It is used to initialize object attributes with initial values.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Object created → `__init__` runs automatically**\r\n* **Purpose → Initialize object data**\r\n* **`self` → Refers to the current object**",
    "question_en": "What is __init__ used for?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`__init__` is a constructor method in Python. It is automatically called when a new object is created. It is mainly used to initialize the object's attributes and set their initial values.**\r\n\r\n**Example:**\r\n\r\n```python id=\"l0g3fs\"\r\nclass Student:\r\n    def __init__(self, name, age):\r\n        self.name = name\r\n        self.age = age\r\n\r\nstudent1 = Student(\"Vikram\", 22)\r\n\r\nprint(student1.name)\r\n# Output: Vikram\r\n```\r\n\r\nHere, `__init__` sets the initial values of `name` and `age` when the object is created.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`__init__` is a constructor method that runs automatically when an object is created. It is used to initialize object attributes with initial values.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Object created → `__init__` runs automatically**\r\n* **Purpose → Initialize object data**\r\n* **`self` → Refers to the current object**",
    "source": "doc",
    "topic": "python",
    "num": "201"
  },
  {
    "category": "OOP",
    "question_hi": "What is the difference between __init__ and __new__?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`__new__` and `__init__` both are special methods used during object creation. `__new__` is responsible for creating and returning a new object, and it runs first. After the object is created, `__init__` is called to initialize the object's attributes.**\r\n\r\n**Example:**\r\n\r\n```python id=\"w2z0qn\"\r\nclass Student:\r\n    def __new__(cls):\r\n        print(\"Creating object\")\r\n        return super().__new__(cls)\r\n\r\n    def __init__(self):\r\n        print(\"Initializing object\")\r\n\r\nstudent1 = Student()\r\n```\r\n\r\n**Output:**\r\n\r\n```\r\nCreating object\r\nInitializing object\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`__new__` creates the object and runs first, while `__init__` initializes the object's data and runs after `__new__`. In most cases, we use `__init__`, and `__new__` is used for special cases like customizing object creation.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`__new__` → Creates object 🏗️**\r\n* **`__init__` → Initializes object data ⚙️**\r\n* **Order:** `__new__` → `__init__` ✅",
    "question_en": "What is the difference between __init__ and __new__?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`__new__` and `__init__` both are special methods used during object creation. `__new__` is responsible for creating and returning a new object, and it runs first. After the object is created, `__init__` is called to initialize the object's attributes.**\r\n\r\n**Example:**\r\n\r\n```python id=\"w2z0qn\"\r\nclass Student:\r\n    def __new__(cls):\r\n        print(\"Creating object\")\r\n        return super().__new__(cls)\r\n\r\n    def __init__(self):\r\n        print(\"Initializing object\")\r\n\r\nstudent1 = Student()\r\n```\r\n\r\n**Output:**\r\n\r\n```\r\nCreating object\r\nInitializing object\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`__new__` creates the object and runs first, while `__init__` initializes the object's data and runs after `__new__`. In most cases, we use `__init__`, and `__new__` is used for special cases like customizing object creation.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`__new__` → Creates object 🏗️**\r\n* **`__init__` → Initializes object data ⚙️**\r\n* **Order:** `__new__` → `__init__` ✅",
    "source": "doc",
    "topic": "python",
    "num": "202"
  },
  {
    "category": "OOP",
    "question_hi": "What is inheritance? Give an example.",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Inheritance is an OOP feature that allows a child class to use the properties and methods of a parent class. It helps in code reuse and reduces code duplication.**\r\n\r\n**Example:**\r\n\r\n```python id=\"0q3v7m\"\r\nclass Animal:\r\n    def sound(self):\r\n        print(\"Animal makes a sound\")\r\n\r\nclass Dog(Animal):\r\n    pass\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nAnimal makes a sound\r\n```\r\n\r\nHere:\r\n\r\n* **Animal → Parent class**\r\n* **Dog → Child class**\r\n* **Dog inherits the `sound()` method from Animal**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Inheritance allows one class to inherit the attributes and methods of another class. The existing class is called the parent class, and the new class is called the child class. It is mainly used for code reusability.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Parent class → Gives features**\r\n* **Child class → Uses inherited features**\r\n* **Benefit → Code reuse** ✅",
    "question_en": "What is inheritance? Give an example.",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Inheritance is an OOP feature that allows a child class to use the properties and methods of a parent class. It helps in code reuse and reduces code duplication.**\r\n\r\n**Example:**\r\n\r\n```python id=\"0q3v7m\"\r\nclass Animal:\r\n    def sound(self):\r\n        print(\"Animal makes a sound\")\r\n\r\nclass Dog(Animal):\r\n    pass\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nAnimal makes a sound\r\n```\r\n\r\nHere:\r\n\r\n* **Animal → Parent class**\r\n* **Dog → Child class**\r\n* **Dog inherits the `sound()` method from Animal**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Inheritance allows one class to inherit the attributes and methods of another class. The existing class is called the parent class, and the new class is called the child class. It is mainly used for code reusability.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Parent class → Gives features**\r\n* **Child class → Uses inherited features**\r\n* **Benefit → Code reuse** ✅",
    "source": "doc",
    "topic": "python",
    "num": "203"
  },
  {
    "category": "OOP",
    "question_hi": "What is multiple inheritance and MRO?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Multiple inheritance is a feature in Python where a child class can inherit properties and methods from more than one parent class. MRO (Method Resolution Order) defines the order in which Python searches for methods when a class has multiple parent classes. Python uses the C3 linearization algorithm to decide this order.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8j2n9f\"\r\nclass A:\r\n    def show(self):\r\n        print(\"Class A\")\r\n\r\nclass B:\r\n    def show(self):\r\n        print(\"Class B\")\r\n\r\nclass C(A, B):\r\n    pass\r\n\r\nobj = C()\r\nobj.show()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"h8lq2z\"\r\nClass A\r\n```\r\n\r\nHere Python checks:\r\n\r\n1. Class C\r\n2. Class A\r\n3. Class B\r\n\r\nThis order is called **MRO**.\r\n\r\nYou can check MRO using:\r\n\r\n```python id=\"g7p3s0\"\r\nprint(C.mro())\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Multiple inheritance means a class can inherit from multiple parent classes. MRO decides the order in which Python searches for methods and attributes in the inheritance hierarchy.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Multiple inheritance → One child, multiple parents**\r\n* **MRO → Search order of classes**\r\n* **Method found first → Python uses that method** ✅",
    "question_en": "What is multiple inheritance and MRO?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Multiple inheritance is a feature in Python where a child class can inherit properties and methods from more than one parent class. MRO (Method Resolution Order) defines the order in which Python searches for methods when a class has multiple parent classes. Python uses the C3 linearization algorithm to decide this order.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8j2n9f\"\r\nclass A:\r\n    def show(self):\r\n        print(\"Class A\")\r\n\r\nclass B:\r\n    def show(self):\r\n        print(\"Class B\")\r\n\r\nclass C(A, B):\r\n    pass\r\n\r\nobj = C()\r\nobj.show()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"h8lq2z\"\r\nClass A\r\n```\r\n\r\nHere Python checks:\r\n\r\n1. Class C\r\n2. Class A\r\n3. Class B\r\n\r\nThis order is called **MRO**.\r\n\r\nYou can check MRO using:\r\n\r\n```python id=\"g7p3s0\"\r\nprint(C.mro())\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Multiple inheritance means a class can inherit from multiple parent classes. MRO decides the order in which Python searches for methods and attributes in the inheritance hierarchy.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Multiple inheritance → One child, multiple parents**\r\n* **MRO → Search order of classes**\r\n* **Method found first → Python uses that method** ✅",
    "source": "doc",
    "topic": "python",
    "num": "204"
  },
  {
    "category": "OOP",
    "question_hi": "What is method overriding?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Method overriding is a feature of OOP where a child class provides its own implementation of a method that is already defined in the parent class. When we call that method using the child class object, the child class method is executed instead of the parent class method.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k3n2ps\"\r\nclass Animal:\r\n    def sound(self):\r\n        print(\"Animal makes a sound\")\r\n\r\nclass Dog(Animal):\r\n    def sound(self):\r\n        print(\"Dog barks\")\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nDog barks\r\n```\r\n\r\nHere:\r\n\r\n* `Animal` → Parent class\r\n* `Dog` → Child class\r\n* `sound()` method is overridden in `Dog`\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Method overriding happens when a child class defines a method with the same name as the parent class method. The child class method replaces the parent method when called using the child object.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Same method name**\r\n* **Parent → Old implementation**\r\n* **Child → New implementation**\r\n* **Child method gets priority** ✅",
    "question_en": "What is method overriding?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Method overriding is a feature of OOP where a child class provides its own implementation of a method that is already defined in the parent class. When we call that method using the child class object, the child class method is executed instead of the parent class method.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k3n2ps\"\r\nclass Animal:\r\n    def sound(self):\r\n        print(\"Animal makes a sound\")\r\n\r\nclass Dog(Animal):\r\n    def sound(self):\r\n        print(\"Dog barks\")\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nDog barks\r\n```\r\n\r\nHere:\r\n\r\n* `Animal` → Parent class\r\n* `Dog` → Child class\r\n* `sound()` method is overridden in `Dog`\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Method overriding happens when a child class defines a method with the same name as the parent class method. The child class method replaces the parent method when called using the child object.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Same method name**\r\n* **Parent → Old implementation**\r\n* **Child → New implementation**\r\n* **Child method gets priority** ✅",
    "source": "doc",
    "topic": "python",
    "num": "205"
  },
  {
    "category": "OOP",
    "question_hi": "What is encapsulation, and how is it achieved in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Encapsulation is an OOP concept that means wrapping data (attributes) and methods together inside a class and controlling access to the data. It helps protect the internal details of an object and prevents unwanted changes. In Python, encapsulation is achieved using naming conventions like `_single underscore` and `__double underscore`.**\r\n\r\n**Example:**\r\n\r\n```python id=\"r5h7x2\"\r\nclass BankAccount:\r\n    def __init__(self, balance):\r\n        self.__balance = balance   # Private attribute\r\n\r\n    def get_balance(self):\r\n        return self.__balance\r\n\r\naccount = BankAccount(5000)\r\n\r\nprint(account.get_balance())\r\n# Output: 5000\r\n```\r\n\r\nHere:\r\n\r\n* `_balance` → Protected (by convention)\r\n* `__balance` → Private (name mangling)\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Encapsulation means hiding internal data and controlling access to it. In Python, it is achieved using `_` for protected attributes and `__` for private attributes. It helps keep data safe and maintainable.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Encapsulation = Data hiding + Controlled access**\r\n* **`_name` → Protected**\r\n* **`__name` → Private-like** ✅",
    "question_en": "What is encapsulation, and how is it achieved in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Encapsulation is an OOP concept that means wrapping data (attributes) and methods together inside a class and controlling access to the data. It helps protect the internal details of an object and prevents unwanted changes. In Python, encapsulation is achieved using naming conventions like `_single underscore` and `__double underscore`.**\r\n\r\n**Example:**\r\n\r\n```python id=\"r5h7x2\"\r\nclass BankAccount:\r\n    def __init__(self, balance):\r\n        self.__balance = balance   # Private attribute\r\n\r\n    def get_balance(self):\r\n        return self.__balance\r\n\r\naccount = BankAccount(5000)\r\n\r\nprint(account.get_balance())\r\n# Output: 5000\r\n```\r\n\r\nHere:\r\n\r\n* `_balance` → Protected (by convention)\r\n* `__balance` → Private (name mangling)\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Encapsulation means hiding internal data and controlling access to it. In Python, it is achieved using `_` for protected attributes and `__` for private attributes. It helps keep data safe and maintainable.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Encapsulation = Data hiding + Controlled access**\r\n* **`_name` → Protected**\r\n* **`__name` → Private-like** ✅",
    "source": "doc",
    "topic": "python",
    "num": "206"
  },
  {
    "category": "OOP",
    "question_hi": "What is polymorphism?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Polymorphism is an OOP concept where the same method or operation can behave differently depending on the object. It allows different classes to use the same method name with different implementations.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8jv4qa\"\r\nclass Dog:\r\n    def sound(self):\r\n        print(\"Bark\")\r\n\r\nclass Cat:\r\n    def sound(self):\r\n        print(\"Meow\")\r\n\r\ndog = Dog()\r\ncat = Cat()\r\n\r\ndog.sound()\r\ncat.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"q7d5m3\"\r\nBark\r\nMeow\r\n```\r\n\r\nHere, the same method `sound()` behaves differently for different objects.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Polymorphism means \"many forms\". It allows the same method or function to perform different actions depending on the object that calls it.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Poly → Many**\r\n* **Morph → Forms**\r\n* **Same method name → Different behavior** ✅\r\n\r\n**Real-life example:**\r\n\r\n* `len(\"Python\")` → counts characters\r\n* `len([1,2,3])` → counts list items\r\n  Same function, different behavior.",
    "question_en": "What is polymorphism?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Polymorphism is an OOP concept where the same method or operation can behave differently depending on the object. It allows different classes to use the same method name with different implementations.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8jv4qa\"\r\nclass Dog:\r\n    def sound(self):\r\n        print(\"Bark\")\r\n\r\nclass Cat:\r\n    def sound(self):\r\n        print(\"Meow\")\r\n\r\ndog = Dog()\r\ncat = Cat()\r\n\r\ndog.sound()\r\ncat.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"q7d5m3\"\r\nBark\r\nMeow\r\n```\r\n\r\nHere, the same method `sound()` behaves differently for different objects.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Polymorphism means \"many forms\". It allows the same method or function to perform different actions depending on the object that calls it.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Poly → Many**\r\n* **Morph → Forms**\r\n* **Same method name → Different behavior** ✅\r\n\r\n**Real-life example:**\r\n\r\n* `len(\"Python\")` → counts characters\r\n* `len([1,2,3])` → counts list items\r\n  Same function, different behavior.",
    "source": "doc",
    "topic": "python",
    "num": "207"
  },
  {
    "category": "OOP",
    "question_hi": "What is abstraction, and how do abstract classes work?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Abstraction is an OOP concept that hides the internal implementation details and shows only the necessary information to the user. It helps reduce complexity and focuses on what an object does instead of how it does it. In Python, abstraction is achieved using abstract classes and the `abc` module.**\r\n\r\n**Example:**\r\n\r\n```python id=\"9w3x1k\"\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass Animal(ABC):\r\n\r\n    @abstractmethod\r\n    def sound(self):\r\n        pass\r\n\r\nclass Dog(Animal):\r\n\r\n    def sound(self):\r\n        print(\"Bark\")\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\nHere:\r\n\r\n* `Animal` → Abstract class\r\n* `sound()` → Abstract method\r\n* `Dog` → Must implement the `sound()` method\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Abstraction means hiding the implementation details and showing only the important features. In Python, abstract classes are created using the `abc` module, and child classes must implement the abstract methods.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Abstraction = Hide complexity**\r\n* **Abstract class = Blueprint**\r\n* **Abstract method = Must be implemented by child class** ✅\r\n\r\n**Real-life example:**\r\n\r\n* When we drive a car, we use steering and pedals but don't need to know the internal engine working. This is abstraction.",
    "question_en": "What is abstraction, and how do abstract classes work?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Abstraction is an OOP concept that hides the internal implementation details and shows only the necessary information to the user. It helps reduce complexity and focuses on what an object does instead of how it does it. In Python, abstraction is achieved using abstract classes and the `abc` module.**\r\n\r\n**Example:**\r\n\r\n```python id=\"9w3x1k\"\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass Animal(ABC):\r\n\r\n    @abstractmethod\r\n    def sound(self):\r\n        pass\r\n\r\nclass Dog(Animal):\r\n\r\n    def sound(self):\r\n        print(\"Bark\")\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\nHere:\r\n\r\n* `Animal` → Abstract class\r\n* `sound()` → Abstract method\r\n* `Dog` → Must implement the `sound()` method\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Abstraction means hiding the implementation details and showing only the important features. In Python, abstract classes are created using the `abc` module, and child classes must implement the abstract methods.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Abstraction = Hide complexity**\r\n* **Abstract class = Blueprint**\r\n* **Abstract method = Must be implemented by child class** ✅\r\n\r\n**Real-life example:**\r\n\r\n* When we drive a car, we use steering and pedals but don't need to know the internal engine working. This is abstraction.",
    "source": "doc",
    "topic": "python",
    "num": "208"
  },
  {
    "category": "OOP",
    "question_hi": "What is the difference between class methods, static methods, and instance methods?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Python has three types of methods: instance methods, class methods, and static methods. The main difference is what they access and what parameters they take.**\r\n\r\n### **1. Instance Method**\r\n\r\n> **An instance method works with object-specific data. It takes `self` as the first parameter and can access instance variables.**\r\n\r\nExample:\r\n\r\n```python id=\"x8m2kp\"\r\nclass Student:\r\n    def show(self):\r\n        print(\"Instance method\")\r\n\r\nstudent = Student()\r\nstudent.show()\r\n```\r\n\r\n---\r\n\r\n### **2. Class Method**\r\n\r\n> **A class method works with class-level data. It takes `cls` as the first parameter and is created using the `@classmethod` decorator.**\r\n\r\nExample:\r\n\r\n```python id=\"p4y7cz\"\r\nclass Student:\r\n    school = \"ABC School\"\r\n\r\n    @classmethod\r\n    def show_school(cls):\r\n        print(cls.school)\r\n```\r\n\r\n---\r\n\r\n### **3. Static Method**\r\n\r\n> **A static method does not use object or class data. It behaves like a normal function but is kept inside a class for better organization. It uses the `@staticmethod` decorator.**\r\n\r\nExample:\r\n\r\n```python id=\"h2x9mq\"\r\nclass Calculator:\r\n\r\n    @staticmethod\r\n    def add(a, b):\r\n        return a + b\r\n```\r\n\r\n---\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **Instance methods use `self` and work with object data. Class methods use `cls` and work with class-level data. Static methods do not use `self` or `cls` and work like normal functions inside a class.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n| Method Type     | First Parameter | Used For          |\r\n| --------------- | --------------- | ----------------- |\r\n| Instance Method | `self`          | Object data       |\r\n| Class Method    | `cls`           | Class data        |\r\n| Static Method   | Nothing         | Utility functions |\r\n\r\n**Shortcut:**\r\n\r\n* **self → Object**\r\n* **cls → Class**\r\n* **staticmethod → Independent function** ✅",
    "question_en": "What is the difference between class methods, static methods, and instance methods?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Python has three types of methods: instance methods, class methods, and static methods. The main difference is what they access and what parameters they take.**\r\n\r\n### **1. Instance Method**\r\n\r\n> **An instance method works with object-specific data. It takes `self` as the first parameter and can access instance variables.**\r\n\r\nExample:\r\n\r\n```python id=\"x8m2kp\"\r\nclass Student:\r\n    def show(self):\r\n        print(\"Instance method\")\r\n\r\nstudent = Student()\r\nstudent.show()\r\n```\r\n\r\n---\r\n\r\n### **2. Class Method**\r\n\r\n> **A class method works with class-level data. It takes `cls` as the first parameter and is created using the `@classmethod` decorator.**\r\n\r\nExample:\r\n\r\n```python id=\"p4y7cz\"\r\nclass Student:\r\n    school = \"ABC School\"\r\n\r\n    @classmethod\r\n    def show_school(cls):\r\n        print(cls.school)\r\n```\r\n\r\n---\r\n\r\n### **3. Static Method**\r\n\r\n> **A static method does not use object or class data. It behaves like a normal function but is kept inside a class for better organization. It uses the `@staticmethod` decorator.**\r\n\r\nExample:\r\n\r\n```python id=\"h2x9mq\"\r\nclass Calculator:\r\n\r\n    @staticmethod\r\n    def add(a, b):\r\n        return a + b\r\n```\r\n\r\n---\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **Instance methods use `self` and work with object data. Class methods use `cls` and work with class-level data. Static methods do not use `self` or `cls` and work like normal functions inside a class.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n| Method Type     | First Parameter | Used For          |\r\n| --------------- | --------------- | ----------------- |\r\n| Instance Method | `self`          | Object data       |\r\n| Class Method    | `cls`           | Class data        |\r\n| Static Method   | Nothing         | Utility functions |\r\n\r\n**Shortcut:**\r\n\r\n* **self → Object**\r\n* **cls → Class**\r\n* **staticmethod → Independent function** ✅",
    "source": "doc",
    "topic": "python",
    "num": "209"
  },
  {
    "category": "OOP",
    "question_hi": "What are dunder (magic) methods?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Dunder methods (double underscore methods), also called magic methods, are special methods in Python that start and end with double underscores. They allow objects to define their behavior with Python's built-in functions and operations.**\r\n\r\n**Examples:**\r\n\r\n* `__init__` → Initializes an object when it is created.\r\n* `__str__` → Defines how an object is displayed as a string.\r\n* `__len__` → Defines the behavior of `len()` function.\r\n\r\n**Example:**\r\n\r\n```python id=\"h9z8q1\"\r\nclass Student:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def __str__(self):\r\n        return self.name\r\n\r\nstudent = Student(\"Vikram\")\r\n\r\nprint(student)\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"r2v5kf\"\r\nVikram\r\n```\r\n\r\nHere, `__str__` controls what happens when we print the object.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dunder methods are special Python methods with double underscores at the beginning and end. They allow us to customize how objects behave with built-in operations like printing, length checking, and object creation.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`__init__` → Object initialization**\r\n* **`__str__` → Object representation**\r\n* **`__len__` → Length behavior**\r\n* **Double underscore → Magic methods** ✅",
    "question_en": "What are dunder (magic) methods?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Dunder methods (double underscore methods), also called magic methods, are special methods in Python that start and end with double underscores. They allow objects to define their behavior with Python's built-in functions and operations.**\r\n\r\n**Examples:**\r\n\r\n* `__init__` → Initializes an object when it is created.\r\n* `__str__` → Defines how an object is displayed as a string.\r\n* `__len__` → Defines the behavior of `len()` function.\r\n\r\n**Example:**\r\n\r\n```python id=\"h9z8q1\"\r\nclass Student:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def __str__(self):\r\n        return self.name\r\n\r\nstudent = Student(\"Vikram\")\r\n\r\nprint(student)\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"r2v5kf\"\r\nVikram\r\n```\r\n\r\nHere, `__str__` controls what happens when we print the object.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Dunder methods are special Python methods with double underscores at the beginning and end. They allow us to customize how objects behave with built-in operations like printing, length checking, and object creation.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **`__init__` → Object initialization**\r\n* **`__str__` → Object representation**\r\n* **`__len__` → Length behavior**\r\n* **Double underscore → Magic methods** ✅",
    "source": "doc",
    "topic": "python",
    "num": "210"
  },
  {
    "category": "OOP",
    "question_hi": "What is self in a class?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`self` is a reference to the current object (instance) of a class. It is automatically passed as the first argument to instance methods and is used to access or modify the object's attributes and methods.**\r\n\r\n**Example:**\r\n\r\n```python id=\"2q8x4v\"\r\nclass Student:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def show(self):\r\n        print(self.name)\r\n\r\nstudent1 = Student(\"Vikram\")\r\n\r\nstudent1.show()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"9z4p6s\"\r\nVikram\r\n```\r\n\r\nHere:\r\n\r\n* `self.name` refers to the `name` attribute of the current object.\r\n* `student1` is the object calling the `show()` method, so `self` refers to `student1`.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`self` refers to the current object of a class. It is used inside instance methods to access and modify the object's attributes and methods. Python automatically passes it when we call a method through an object.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **self = current object**\r\n* **self.attribute → Access object data**\r\n* **self.method() → Call object method** ✅",
    "question_en": "What is self in a class?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`self` is a reference to the current object (instance) of a class. It is automatically passed as the first argument to instance methods and is used to access or modify the object's attributes and methods.**\r\n\r\n**Example:**\r\n\r\n```python id=\"2q8x4v\"\r\nclass Student:\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\n    def show(self):\r\n        print(self.name)\r\n\r\nstudent1 = Student(\"Vikram\")\r\n\r\nstudent1.show()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"9z4p6s\"\r\nVikram\r\n```\r\n\r\nHere:\r\n\r\n* `self.name` refers to the `name` attribute of the current object.\r\n* `student1` is the object calling the `show()` method, so `self` refers to `student1`.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`self` refers to the current object of a class. It is used inside instance methods to access and modify the object's attributes and methods. Python automatically passes it when we call a method through an object.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **self = current object**\r\n* **self.attribute → Access object data**\r\n* **self.method() → Call object method** ✅",
    "source": "doc",
    "topic": "python",
    "num": "211"
  },
  {
    "category": "OOP",
    "question_hi": "What is the difference between a superclass and a subclass?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A superclass is the parent class from which another class inherits properties and methods. A subclass is the child class that inherits those properties and methods from the superclass.**\r\n\r\n**Example:**\r\n\r\n```python id=\"q7p8mz\"\r\nclass Animal:        # Superclass\r\n    def sound(self):\r\n        print(\"Animal sound\")\r\n\r\nclass Dog(Animal):   # Subclass\r\n    pass\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"3m6y0s\"\r\nAnimal sound\r\n```\r\n\r\nHere:\r\n\r\n* **Animal → Superclass (Parent/Base class)**\r\n* **Dog → Subclass (Child/Derived class)**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A superclass is the class that provides properties and methods for inheritance, while a subclass is the class that receives and uses those properties and methods.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Super class = Gives features**\r\n* **Sub class = Gets features**\r\n* **Parent → Child relationship** ✅",
    "question_en": "What is the difference between a superclass and a subclass?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A superclass is the parent class from which another class inherits properties and methods. A subclass is the child class that inherits those properties and methods from the superclass.**\r\n\r\n**Example:**\r\n\r\n```python id=\"q7p8mz\"\r\nclass Animal:        # Superclass\r\n    def sound(self):\r\n        print(\"Animal sound\")\r\n\r\nclass Dog(Animal):   # Subclass\r\n    pass\r\n\r\ndog = Dog()\r\ndog.sound()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"3m6y0s\"\r\nAnimal sound\r\n```\r\n\r\nHere:\r\n\r\n* **Animal → Superclass (Parent/Base class)**\r\n* **Dog → Subclass (Child/Derived class)**\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A superclass is the class that provides properties and methods for inheritance, while a subclass is the class that receives and uses those properties and methods.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Super class = Gives features**\r\n* **Sub class = Gets features**\r\n* **Parent → Child relationship** ✅",
    "source": "doc",
    "topic": "python",
    "num": "212"
  },
  {
    "category": "Exceptions",
    "question_hi": "What is exception handling?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Exception handling is a way to handle runtime errors in a program without stopping its execution. Python uses `try`, `except`, `else`, and `finally` blocks to catch and manage errors gracefully.**\r\n\r\n**Example:**\r\n\r\n```python id=\"2n6p9v\"\r\ntry:\r\n    a = 10\r\n    b = 0\r\n    print(a / b)\r\n\r\nexcept ZeroDivisionError:\r\n    print(\"Cannot divide by zero\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"6v5w8k\"\r\nCannot divide by zero\r\n```\r\n\r\n### **Blocks:**\r\n\r\n* **try** → Contains code that may cause an error.\r\n* **except** → Handles the error.\r\n* **else** → Runs if no error occurs.\r\n* **finally** → Always runs, whether an error occurs or not.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Exception handling is used to handle errors during program execution and prevent the program from crashing. In Python, we use `try` and `except` blocks to catch and handle exceptions.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **try → Try risky code**\r\n* **except → Handle error**\r\n* **else → If successful**\r\n* **finally → Always execute** ✅",
    "question_en": "What is exception handling?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Exception handling is a way to handle runtime errors in a program without stopping its execution. Python uses `try`, `except`, `else`, and `finally` blocks to catch and manage errors gracefully.**\r\n\r\n**Example:**\r\n\r\n```python id=\"2n6p9v\"\r\ntry:\r\n    a = 10\r\n    b = 0\r\n    print(a / b)\r\n\r\nexcept ZeroDivisionError:\r\n    print(\"Cannot divide by zero\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"6v5w8k\"\r\nCannot divide by zero\r\n```\r\n\r\n### **Blocks:**\r\n\r\n* **try** → Contains code that may cause an error.\r\n* **except** → Handles the error.\r\n* **else** → Runs if no error occurs.\r\n* **finally** → Always runs, whether an error occurs or not.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Exception handling is used to handle errors during program execution and prevent the program from crashing. In Python, we use `try` and `except` blocks to catch and handle exceptions.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **try → Try risky code**\r\n* **except → Handle error**\r\n* **else → If successful**\r\n* **finally → Always execute** ✅",
    "source": "doc",
    "topic": "python",
    "num": "213"
  },
  {
    "category": "Exceptions",
    "question_hi": "What is the difference between Exception and BaseException?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`BaseException` is the root class of all exceptions in Python. It includes system-level exceptions like `KeyboardInterrupt` and `SystemExit`. `Exception` is a subclass of `BaseException` and is the base class for most common errors that we handle in programs.**\r\n\r\n**Example:**\r\n\r\n```python id=\"m4q7tz\"\r\ntry:\r\n    x = 10 / 0\r\n\r\nexcept Exception:\r\n    print(\"An error occurred\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"9kq1hf\"\r\nAn error occurred\r\n```\r\n\r\n### **Difference:**\r\n\r\n| BaseException                   | Exception                                                     |\r\n| ------------------------------- | ------------------------------------------------------------- |\r\n| Root class of all exceptions    | Base class for normal errors                                  |\r\n| Includes system exit exceptions | Includes errors like ValueError, TypeError, ZeroDivisionError |\r\n| Usually not caught directly     | Commonly used in try-except blocks                            |\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`BaseException` is the top-level parent class of all exceptions in Python. `Exception` is derived from it and is used for handling normal runtime errors. In most cases, we catch `Exception`, not `BaseException`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **BaseException → Everything**\r\n* **Exception → Normal program errors** ✅",
    "question_en": "What is the difference between Exception and BaseException?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`BaseException` is the root class of all exceptions in Python. It includes system-level exceptions like `KeyboardInterrupt` and `SystemExit`. `Exception` is a subclass of `BaseException` and is the base class for most common errors that we handle in programs.**\r\n\r\n**Example:**\r\n\r\n```python id=\"m4q7tz\"\r\ntry:\r\n    x = 10 / 0\r\n\r\nexcept Exception:\r\n    print(\"An error occurred\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"9kq1hf\"\r\nAn error occurred\r\n```\r\n\r\n### **Difference:**\r\n\r\n| BaseException                   | Exception                                                     |\r\n| ------------------------------- | ------------------------------------------------------------- |\r\n| Root class of all exceptions    | Base class for normal errors                                  |\r\n| Includes system exit exceptions | Includes errors like ValueError, TypeError, ZeroDivisionError |\r\n| Usually not caught directly     | Commonly used in try-except blocks                            |\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`BaseException` is the top-level parent class of all exceptions in Python. `Exception` is derived from it and is used for handling normal runtime errors. In most cases, we catch `Exception`, not `BaseException`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **BaseException → Everything**\r\n* **Exception → Normal program errors** ✅",
    "source": "doc",
    "topic": "python",
    "num": "214"
  },
  {
    "category": "Exceptions",
    "question_hi": "What is the purpose of the finally block?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The `finally` block is used to execute code that should always run, whether an exception occurs or not. It is mainly used for cleanup tasks like closing files, closing database connections, or releasing resources.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8m4xq1\"\r\ntry:\r\n    file = open(\"data.txt\", \"r\")\r\n    print(file.read())\r\n\r\nexcept FileNotFoundError:\r\n    print(\"File not found\")\r\n\r\nfinally:\r\n    print(\"Closing resources\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"2j6k9p\"\r\nClosing resources\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `finally` block always executes after `try` and `except`. It is used for cleanup operations that must be performed regardless of whether an error occurs or not.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **try → Run risky code**\r\n* **except → Handle error**\r\n* **finally → Always execute cleanup code** ✅",
    "question_en": "What is the purpose of the finally block?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The `finally` block is used to execute code that should always run, whether an exception occurs or not. It is mainly used for cleanup tasks like closing files, closing database connections, or releasing resources.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8m4xq1\"\r\ntry:\r\n    file = open(\"data.txt\", \"r\")\r\n    print(file.read())\r\n\r\nexcept FileNotFoundError:\r\n    print(\"File not found\")\r\n\r\nfinally:\r\n    print(\"Closing resources\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"2j6k9p\"\r\nClosing resources\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `finally` block always executes after `try` and `except`. It is used for cleanup operations that must be performed regardless of whether an error occurs or not.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **try → Run risky code**\r\n* **except → Handle error**\r\n* **finally → Always execute cleanup code** ✅",
    "source": "doc",
    "topic": "python",
    "num": "215"
  },
  {
    "category": "Exceptions",
    "question_hi": "How do you raise a custom exception?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **We can create a custom exception by creating a new class that inherits from the built-in `Exception` class. Then, we can use the `raise` keyword to manually trigger that exception when a specific condition occurs.**\r\n\r\n**Example:**\r\n\r\n```python id=\"f7v2mx\"\r\nclass InvalidAgeError(Exception):\r\n    pass\r\n\r\nage = -5\r\n\r\nif age < 0:\r\n    raise InvalidAgeError(\"Age cannot be negative\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nInvalidAgeError: Age cannot be negative\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **To create a custom exception, we define a class that inherits from `Exception`. Then we use the `raise` keyword to throw that exception when needed.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n1. **Create exception class**\r\n\r\n```python\r\nclass MyError(Exception):\r\n    pass\r\n```\r\n\r\n2. **Raise it**\r\n\r\n```python\r\nraise MyError(\"Error message\")\r\n```\r\n\r\n✅ **Used when we want to create our own meaningful errors in an application.**",
    "question_en": "How do you raise a custom exception?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **We can create a custom exception by creating a new class that inherits from the built-in `Exception` class. Then, we can use the `raise` keyword to manually trigger that exception when a specific condition occurs.**\r\n\r\n**Example:**\r\n\r\n```python id=\"f7v2mx\"\r\nclass InvalidAgeError(Exception):\r\n    pass\r\n\r\nage = -5\r\n\r\nif age < 0:\r\n    raise InvalidAgeError(\"Age cannot be negative\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nInvalidAgeError: Age cannot be negative\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **To create a custom exception, we define a class that inherits from `Exception`. Then we use the `raise` keyword to throw that exception when needed.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n1. **Create exception class**\r\n\r\n```python\r\nclass MyError(Exception):\r\n    pass\r\n```\r\n\r\n2. **Raise it**\r\n\r\n```python\r\nraise MyError(\"Error message\")\r\n```\r\n\r\n✅ **Used when we want to create our own meaningful errors in an application.**",
    "source": "doc",
    "topic": "python",
    "num": "216"
  },
  {
    "category": "Exceptions",
    "question_hi": "What is the difference between try-except and try-except-else?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The difference between `try-except` and `try-except-else` is that the `else` block runs only when the `try` block executes successfully without any exception. It is used to write code that should run only after successful execution.**\r\n\r\n**Example:**\r\n\r\n### Using `try-except`\r\n\r\n```python id=\"z7m1qa\"\r\ntry:\r\n    num = 10 / 2\r\n    print(num)\r\n\r\nexcept ZeroDivisionError:\r\n    print(\"Cannot divide by zero\")\r\n```\r\n\r\n---\r\n\r\n### Using `try-except-else`\r\n\r\n```python id=\"v8k2pd\"\r\ntry:\r\n    num = 10 / 2\r\n\r\nexcept ZeroDivisionError:\r\n    print(\"Cannot divide by zero\")\r\n\r\nelse:\r\n    print(\"Division successful\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"4s8p1n\"\r\nDivision successful\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **In `try-except`, the `except` block handles errors. In `try-except-else`, the `else` block runs only if no exception occurs in the `try` block.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **try → Risky code**\r\n* **except → Error handling**\r\n* **else → Success case**\r\n* **finally → Always runs** ✅",
    "question_en": "What is the difference between try-except and try-except-else?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The difference between `try-except` and `try-except-else` is that the `else` block runs only when the `try` block executes successfully without any exception. It is used to write code that should run only after successful execution.**\r\n\r\n**Example:**\r\n\r\n### Using `try-except`\r\n\r\n```python id=\"z7m1qa\"\r\ntry:\r\n    num = 10 / 2\r\n    print(num)\r\n\r\nexcept ZeroDivisionError:\r\n    print(\"Cannot divide by zero\")\r\n```\r\n\r\n---\r\n\r\n### Using `try-except-else`\r\n\r\n```python id=\"v8k2pd\"\r\ntry:\r\n    num = 10 / 2\r\n\r\nexcept ZeroDivisionError:\r\n    print(\"Cannot divide by zero\")\r\n\r\nelse:\r\n    print(\"Division successful\")\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"4s8p1n\"\r\nDivision successful\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **In `try-except`, the `except` block handles errors. In `try-except-else`, the `else` block runs only if no exception occurs in the `try` block.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **try → Risky code**\r\n* **except → Error handling**\r\n* **else → Success case**\r\n* **finally → Always runs** ✅",
    "source": "doc",
    "topic": "python",
    "num": "217"
  },
  {
    "category": "Exceptions",
    "question_hi": "What is the difference between raise and assert?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`raise` and `assert` are both used to generate errors, but they are used for different purposes. `raise` is used to manually create and throw an exception, while `assert` is used to check whether a condition is true and raises an `AssertionError` if the condition is false.**\r\n\r\n**Example of `raise`:**\r\n\r\n```python id=\"8k3p1m\"\r\nage = -1\r\n\r\nif age < 0:\r\n    raise ValueError(\"Age cannot be negative\")\r\n```\r\n\r\nHere, we manually create an error.\r\n\r\n---\r\n\r\n**Example of `assert`:**\r\n\r\n```python id=\"9v4q2s\"\r\nage = 18\r\n\r\nassert age >= 18, \"Age must be 18 or above\"\r\n```\r\n\r\nIf the condition is false, Python raises `AssertionError`.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`raise` is used to manually trigger an exception when we want. `assert` is used to test a condition during debugging and automatically raises `AssertionError` if the condition is false.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **raise → \"I want to create an error\"**\r\n* **assert → \"I expect this condition to be true\"**\r\n\r\nExample:\r\n\r\n* `raise ValueError` → User input is wrong\r\n* `assert x > 0` → Developer checks code logic ✅",
    "question_en": "What is the difference between raise and assert?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`raise` and `assert` are both used to generate errors, but they are used for different purposes. `raise` is used to manually create and throw an exception, while `assert` is used to check whether a condition is true and raises an `AssertionError` if the condition is false.**\r\n\r\n**Example of `raise`:**\r\n\r\n```python id=\"8k3p1m\"\r\nage = -1\r\n\r\nif age < 0:\r\n    raise ValueError(\"Age cannot be negative\")\r\n```\r\n\r\nHere, we manually create an error.\r\n\r\n---\r\n\r\n**Example of `assert`:**\r\n\r\n```python id=\"9v4q2s\"\r\nage = 18\r\n\r\nassert age >= 18, \"Age must be 18 or above\"\r\n```\r\n\r\nIf the condition is false, Python raises `AssertionError`.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`raise` is used to manually trigger an exception when we want. `assert` is used to test a condition during debugging and automatically raises `AssertionError` if the condition is false.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **raise → \"I want to create an error\"**\r\n* **assert → \"I expect this condition to be true\"**\r\n\r\nExample:\r\n\r\n* `raise ValueError` → User input is wrong\r\n* `assert x > 0` → Developer checks code logic ✅",
    "source": "doc",
    "topic": "python",
    "num": "218"
  },
  {
    "category": "Exceptions",
    "question_hi": "What happens if an exception is not handled?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **If an exception is not handled, the program stops executing and Python displays an error message called a traceback. The traceback shows the type of error, the error message, and where the error occurred in the code.**\r\n\r\n**Example:**\r\n\r\n```python id=\"r6t8kp\"\r\nnumber = 10 / 0\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nZeroDivisionError: division by zero\r\n```\r\n\r\nHere, the program stops because the exception was not handled.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **If an exception is not handled using `try-except`, the program terminates and Python shows a traceback containing the error type, message, and the line where the error occurred.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Handled exception → Program continues ✅**\r\n* **Unhandled exception → Program crashes + traceback shown ❌**",
    "question_en": "What happens if an exception is not handled?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **If an exception is not handled, the program stops executing and Python displays an error message called a traceback. The traceback shows the type of error, the error message, and where the error occurred in the code.**\r\n\r\n**Example:**\r\n\r\n```python id=\"r6t8kp\"\r\nnumber = 10 / 0\r\n```\r\n\r\n**Output:**\r\n\r\n```text\r\nZeroDivisionError: division by zero\r\n```\r\n\r\nHere, the program stops because the exception was not handled.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **If an exception is not handled using `try-except`, the program terminates and Python shows a traceback containing the error type, message, and the line where the error occurred.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Handled exception → Program continues ✅**\r\n* **Unhandled exception → Program crashes + traceback shown ❌**",
    "source": "doc",
    "topic": "python",
    "num": "219"
  },
  {
    "category": "Exceptions",
    "question_hi": "Can you catch multiple exceptions in one except block?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Yes, we can catch multiple exceptions in a single `except` block by passing multiple exception types as a tuple. This is useful when we want to handle different errors in the same way.**\r\n\r\n**Example:**\r\n\r\n```python id=\"n5j8qa\"\r\ntry:\r\n    value = int(\"abc\")\r\n    result = 10 / 0\r\n\r\nexcept (ValueError, ZeroDivisionError):\r\n    print(\"An error occurred\")\r\n```\r\n\r\nHere, the same `except` block handles:\r\n\r\n* `ValueError` → Invalid conversion\r\n* `ZeroDivisionError` → Division by zero\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Yes, Python allows handling multiple exceptions in one `except` block by using a tuple of exception types. It helps avoid writing separate blocks for errors that need the same handling.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python\r\nexcept (Error1, Error2):\r\n    # handle both errors\r\n```\r\n\r\nExample:\r\n\r\n```python\r\nexcept (ValueError, TypeError):\r\n    print(\"Invalid input\")\r\n```\r\n\r\n✅ One block → Multiple errors handle.",
    "question_en": "Can you catch multiple exceptions in one except block?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Yes, we can catch multiple exceptions in a single `except` block by passing multiple exception types as a tuple. This is useful when we want to handle different errors in the same way.**\r\n\r\n**Example:**\r\n\r\n```python id=\"n5j8qa\"\r\ntry:\r\n    value = int(\"abc\")\r\n    result = 10 / 0\r\n\r\nexcept (ValueError, ZeroDivisionError):\r\n    print(\"An error occurred\")\r\n```\r\n\r\nHere, the same `except` block handles:\r\n\r\n* `ValueError` → Invalid conversion\r\n* `ZeroDivisionError` → Division by zero\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Yes, Python allows handling multiple exceptions in one `except` block by using a tuple of exception types. It helps avoid writing separate blocks for errors that need the same handling.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python\r\nexcept (Error1, Error2):\r\n    # handle both errors\r\n```\r\n\r\nExample:\r\n\r\n```python\r\nexcept (ValueError, TypeError):\r\n    print(\"Invalid input\")\r\n```\r\n\r\n✅ One block → Multiple errors handle.",
    "source": "doc",
    "topic": "python",
    "num": "220"
  },
  {
    "category": "File Handling",
    "question_hi": "How do you open and read a file in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, we use the `open()` function to open a file and read its contents. The `with` statement is commonly used because it automatically closes the file after use. We can use methods like `read()`, `readline()`, or `readlines()` to read data from the file.**\r\n\r\n**Example:**\r\n\r\n```python id=\"v9x3kp\"\r\nwith open(\"file.txt\", \"r\") as f:\r\n    data = f.read()\r\n\r\nprint(data)\r\n```\r\n\r\nHere:\r\n\r\n* `open()` → Opens the file\r\n* `\"r\"` → Opens the file in read mode\r\n* `read()` → Reads the complete file content\r\n* `with` → Automatically closes the file\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can open and read a file using `open()` with the `read` mode. Using the `with` statement automatically closes the file after reading, which is the recommended way in Python.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as file:\r\n    content = file.read()\r\n```\r\n\r\n* **r → Read**\r\n* **w → Write**\r\n* **a → Append**\r\n* **with → Automatically close file** ✅",
    "question_en": "How do you open and read a file in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, we use the `open()` function to open a file and read its contents. The `with` statement is commonly used because it automatically closes the file after use. We can use methods like `read()`, `readline()`, or `readlines()` to read data from the file.**\r\n\r\n**Example:**\r\n\r\n```python id=\"v9x3kp\"\r\nwith open(\"file.txt\", \"r\") as f:\r\n    data = f.read()\r\n\r\nprint(data)\r\n```\r\n\r\nHere:\r\n\r\n* `open()` → Opens the file\r\n* `\"r\"` → Opens the file in read mode\r\n* `read()` → Reads the complete file content\r\n* `with` → Automatically closes the file\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can open and read a file using `open()` with the `read` mode. Using the `with` statement automatically closes the file after reading, which is the recommended way in Python.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as file:\r\n    content = file.read()\r\n```\r\n\r\n* **r → Read**\r\n* **w → Write**\r\n* **a → Append**\r\n* **with → Automatically close file** ✅",
    "source": "doc",
    "topic": "python",
    "num": "221"
  },
  {
    "category": "File Handling",
    "question_hi": "What is the difference between 'r+', 'w+', and 'a+' file modes?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`r+`, `w+`, and `a+` modes allow both reading and writing in a file, but they handle existing data differently.**\r\n\r\n### **1. `r+` (Read + Write)**\r\n\r\n> **Opens an existing file for reading and writing. It does not delete existing content.**\r\n\r\n```python\r\nopen(\"file.txt\", \"r+\")\r\n```\r\n\r\n* File must already exist\r\n* Existing data remains\r\n\r\n---\r\n\r\n### **2. `w+` (Write + Read)**\r\n\r\n> **Opens a file for reading and writing, but it removes all existing content first. If the file does not exist, it creates a new file.**\r\n\r\n```python\r\nopen(\"file.txt\", \"w+\")\r\n```\r\n\r\n* Old data is deleted ❌\r\n* New content can be written\r\n\r\n---\r\n\r\n### **3. `a+` (Append + Read)**\r\n\r\n> **Opens a file for reading and writing, but new data is added at the end of the file without deleting existing content.**\r\n\r\n```python\r\nopen(\"file.txt\", \"a+\")\r\n```\r\n\r\n* Existing data remains ✅\r\n* New data is added at the end\r\n\r\n---\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **`r+` allows reading and writing without removing existing data. `w+` allows reading and writing but clears the file first. `a+` allows reading and writing while adding new data at the end of the file.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n| Mode | Read | Write | Old Data            |\r\n| ---- | ---- | ----- | ------------------- |\r\n| `r+` | ✅    | ✅     | Keeps               |\r\n| `w+` | ✅    | ✅     | Deletes             |\r\n| `a+` | ✅    | ✅     | Keeps + Adds at end |\r\n\r\n✅ **`+` means both read and write**\r\n\r\n\r\n\r\nQ.Why is the with statement used for file handling?\r\n\r\nA. **Interview Answer (Simple English):**\r\n\r\n> **The `with` statement is used in file handling because it automatically manages the file resource. It closes the file automatically after the block is completed, even if an error occurs. It helps prevent resource leaks and makes the code cleaner.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8c1z7m\"\r\nwith open(\"data.txt\", \"r\") as file:\r\n    content = file.read()\r\n\r\nprint(content)\r\n```\r\n\r\nHere:\r\n\r\n* File opens when entering the `with` block.\r\n* File automatically closes when leaving the block.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `with` statement is used to automatically open and close files. It ensures the file is properly closed even if an exception occurs, so it is the recommended way for file handling in Python.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\nWithout `with`:\r\n\r\n```python\r\nfile = open(\"data.txt\", \"r\")\r\nfile.close()\r\n```\r\n\r\nWith `with`:\r\n\r\n```python\r\nwith open(\"data.txt\", \"r\") as file:\r\n    # work with file\r\n```\r\n\r\n✅ **`with` = Automatic cleanup**",
    "question_en": "What is the difference between 'r+', 'w+', and 'a+' file modes?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`r+`, `w+`, and `a+` modes allow both reading and writing in a file, but they handle existing data differently.**\r\n\r\n### **1. `r+` (Read + Write)**\r\n\r\n> **Opens an existing file for reading and writing. It does not delete existing content.**\r\n\r\n```python\r\nopen(\"file.txt\", \"r+\")\r\n```\r\n\r\n* File must already exist\r\n* Existing data remains\r\n\r\n---\r\n\r\n### **2. `w+` (Write + Read)**\r\n\r\n> **Opens a file for reading and writing, but it removes all existing content first. If the file does not exist, it creates a new file.**\r\n\r\n```python\r\nopen(\"file.txt\", \"w+\")\r\n```\r\n\r\n* Old data is deleted ❌\r\n* New content can be written\r\n\r\n---\r\n\r\n### **3. `a+` (Append + Read)**\r\n\r\n> **Opens a file for reading and writing, but new data is added at the end of the file without deleting existing content.**\r\n\r\n```python\r\nopen(\"file.txt\", \"a+\")\r\n```\r\n\r\n* Existing data remains ✅\r\n* New data is added at the end\r\n\r\n---\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **`r+` allows reading and writing without removing existing data. `w+` allows reading and writing but clears the file first. `a+` allows reading and writing while adding new data at the end of the file.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n| Mode | Read | Write | Old Data            |\r\n| ---- | ---- | ----- | ------------------- |\r\n| `r+` | ✅    | ✅     | Keeps               |\r\n| `w+` | ✅    | ✅     | Deletes             |\r\n| `a+` | ✅    | ✅     | Keeps + Adds at end |\r\n\r\n✅ **`+` means both read and write**\r\n\r\n\r\n\r\nQ.Why is the with statement used for file handling?\r\n\r\nA. **Interview Answer (Simple English):**\r\n\r\n> **The `with` statement is used in file handling because it automatically manages the file resource. It closes the file automatically after the block is completed, even if an error occurs. It helps prevent resource leaks and makes the code cleaner.**\r\n\r\n**Example:**\r\n\r\n```python id=\"8c1z7m\"\r\nwith open(\"data.txt\", \"r\") as file:\r\n    content = file.read()\r\n\r\nprint(content)\r\n```\r\n\r\nHere:\r\n\r\n* File opens when entering the `with` block.\r\n* File automatically closes when leaving the block.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `with` statement is used to automatically open and close files. It ensures the file is properly closed even if an exception occurs, so it is the recommended way for file handling in Python.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\nWithout `with`:\r\n\r\n```python\r\nfile = open(\"data.txt\", \"r\")\r\nfile.close()\r\n```\r\n\r\nWith `with`:\r\n\r\n```python\r\nwith open(\"data.txt\", \"r\") as file:\r\n    # work with file\r\n```\r\n\r\n✅ **`with` = Automatic cleanup**",
    "source": "doc",
    "topic": "python",
    "num": "222"
  },
  {
    "category": "File Handling",
    "question_hi": "Why is the with statement used for file handling?",
    "answer_hi": "> **It's a context manager that guarantees the file is properly closed once the block exits, even if an exception is raised while working with the file.**",
    "question_en": "Why is the with statement used for file handling?",
    "answer_en": "> **It's a context manager that guarantees the file is properly closed once the block exits, even if an exception is raised while working with the file.**",
    "source": "written",
    "topic": "python",
    "num": "223"
  },
  {
    "category": "File Handling",
    "question_hi": "How do you read a file line by line?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **We can read a file line by line by using a `for` loop to iterate over the file object. This reads one line at a time and is memory efficient, especially for large files.**\r\n\r\n**Example:**\r\n\r\n```python id=\"p6k3vw\"\r\nwith open(\"data.txt\", \"r\") as file:\r\n    for line in file:\r\n        print(line)\r\n```\r\n\r\nHere:\r\n\r\n* The `for` loop reads each line one by one.\r\n* The file is automatically closed because of `with`.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can read a file line by line by looping through the file object using a `for` loop. It reads one line at a time, which saves memory for large files.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python\r\nfor line in file:\r\n    print(line)\r\n```\r\n\r\n✅ **One loop → One line at a time**",
    "question_en": "How do you read a file line by line?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **We can read a file line by line by using a `for` loop to iterate over the file object. This reads one line at a time and is memory efficient, especially for large files.**\r\n\r\n**Example:**\r\n\r\n```python id=\"p6k3vw\"\r\nwith open(\"data.txt\", \"r\") as file:\r\n    for line in file:\r\n        print(line)\r\n```\r\n\r\nHere:\r\n\r\n* The `for` loop reads each line one by one.\r\n* The file is automatically closed because of `with`.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can read a file line by line by looping through the file object using a `for` loop. It reads one line at a time, which saves memory for large files.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python\r\nfor line in file:\r\n    print(line)\r\n```\r\n\r\n✅ **One loop → One line at a time**",
    "source": "doc",
    "topic": "python",
    "num": "224"
  },
  {
    "category": "File Handling",
    "question_hi": "How do you write to a file in Python?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, we can write data to a file by opening it in write mode (`w`) or append mode (`a`) and using the `write()` method. The `write()` method writes a string into the file.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k9p4vx\"\r\nwith open(\"data.txt\", \"w\") as file:\r\n    file.write(\"Hello Python\")\r\n```\r\n\r\nHere:\r\n\r\n* `\"w\"` → Opens the file for writing (old content is replaced).\r\n* `\"a\"` → Opens the file for appending (adds data at the end).\r\n* `write()` → Writes data into the file.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can write to a file by opening it using `w` or `a` mode and using the `write()` method. `w` replaces existing content, while `a` adds new content at the end.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python id=\"r7s2nf\"\r\n# Write mode\r\nwith open(\"file.txt\", \"w\") as f:\r\n    f.write(\"Hello\")\r\n\r\n# Append mode\r\nwith open(\"file.txt\", \"a\") as f:\r\n    f.write(\" Python\")\r\n```\r\n\r\n✅ **`w` = Write/Replace**\r\n✅ **`a` = Add at end**",
    "question_en": "How do you write to a file in Python?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **In Python, we can write data to a file by opening it in write mode (`w`) or append mode (`a`) and using the `write()` method. The `write()` method writes a string into the file.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k9p4vx\"\r\nwith open(\"data.txt\", \"w\") as file:\r\n    file.write(\"Hello Python\")\r\n```\r\n\r\nHere:\r\n\r\n* `\"w\"` → Opens the file for writing (old content is replaced).\r\n* `\"a\"` → Opens the file for appending (adds data at the end).\r\n* `write()` → Writes data into the file.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **We can write to a file by opening it using `w` or `a` mode and using the `write()` method. `w` replaces existing content, while `a` adds new content at the end.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n```python id=\"r7s2nf\"\r\n# Write mode\r\nwith open(\"file.txt\", \"w\") as f:\r\n    f.write(\"Hello\")\r\n\r\n# Append mode\r\nwith open(\"file.txt\", \"a\") as f:\r\n    f.write(\" Python\")\r\n```\r\n\r\n✅ **`w` = Write/Replace**\r\n✅ **`a` = Add at end**",
    "source": "doc",
    "topic": "python",
    "num": "225"
  },
  {
    "category": "File Handling",
    "question_hi": "What is the difference between read(), readline(), and readlines()?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`read()`, `readline()`, and `readlines()` are file reading methods in Python. The main difference is how much data they read and what they return.**\r\n\r\n### **1. `read()`**\r\n\r\n> **Reads the complete file content and returns it as a single string.**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as f:\r\n    data = f.read()\r\n```\r\n\r\n---\r\n\r\n### **2. `readline()`**\r\n\r\n> **Reads only one line from the file at a time and returns it as a string.**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as f:\r\n    line = f.readline()\r\n```\r\n\r\n---\r\n\r\n### **3. `readlines()`**\r\n\r\n> **Reads all lines from the file and returns them as a list of strings.**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as f:\r\n    lines = f.readlines()\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`read()` reads the whole file at once, `readline()` reads one line at a time, and `readlines()` reads all lines and stores them in a list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **read() → All data**\r\n* **readline() → One line**\r\n* **readlines() → All lines in list** ✅",
    "question_en": "What is the difference between read(), readline(), and readlines()?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`read()`, `readline()`, and `readlines()` are file reading methods in Python. The main difference is how much data they read and what they return.**\r\n\r\n### **1. `read()`**\r\n\r\n> **Reads the complete file content and returns it as a single string.**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as f:\r\n    data = f.read()\r\n```\r\n\r\n---\r\n\r\n### **2. `readline()`**\r\n\r\n> **Reads only one line from the file at a time and returns it as a string.**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as f:\r\n    line = f.readline()\r\n```\r\n\r\n---\r\n\r\n### **3. `readlines()`**\r\n\r\n> **Reads all lines from the file and returns them as a list of strings.**\r\n\r\n```python\r\nwith open(\"file.txt\", \"r\") as f:\r\n    lines = f.readlines()\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`read()` reads the whole file at once, `readline()` reads one line at a time, and `readlines()` reads all lines and stores them in a list.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **read() → All data**\r\n* **readline() → One line**\r\n* **readlines() → All lines in list** ✅",
    "source": "doc",
    "topic": "python",
    "num": "226"
  },
  {
    "category": "Modules",
    "question_hi": "What is the difference between a module and a package?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A module is a single Python file that contains reusable code like functions, classes, or variables. A package is a collection of multiple modules organized inside a folder to manage larger projects.**\r\n\r\n**Example:**\r\n\r\n### **Module:**\r\n\r\n`math_utils.py`\r\n\r\n```python id=\"p8m3vd\"\r\ndef add(a, b):\r\n    return a + b\r\n```\r\n\r\nHere, `math_utils.py` is a module.\r\n\r\n---\r\n\r\n### **Package:**\r\n\r\n```\r\nmy_package/\r\n    __init__.py\r\n    math_utils.py\r\n    string_utils.py\r\n```\r\n\r\nHere, `my_package` is a package containing multiple modules.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A module is a single `.py` file containing reusable code, while a package is a folder containing multiple modules. Packages help organize large Python applications.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Module → One Python file (`.py`)**\r\n* **Package → Collection of modules (folder)** ✅",
    "question_en": "What is the difference between a module and a package?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A module is a single Python file that contains reusable code like functions, classes, or variables. A package is a collection of multiple modules organized inside a folder to manage larger projects.**\r\n\r\n**Example:**\r\n\r\n### **Module:**\r\n\r\n`math_utils.py`\r\n\r\n```python id=\"p8m3vd\"\r\ndef add(a, b):\r\n    return a + b\r\n```\r\n\r\nHere, `math_utils.py` is a module.\r\n\r\n---\r\n\r\n### **Package:**\r\n\r\n```\r\nmy_package/\r\n    __init__.py\r\n    math_utils.py\r\n    string_utils.py\r\n```\r\n\r\nHere, `my_package` is a package containing multiple modules.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A module is a single `.py` file containing reusable code, while a package is a folder containing multiple modules. Packages help organize large Python applications.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Module → One Python file (`.py`)**\r\n* **Package → Collection of modules (folder)** ✅",
    "source": "doc",
    "topic": "python",
    "num": "227"
  },
  {
    "category": "Modules",
    "question_hi": "What is pip?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Pip is Python's package manager used to install, update, and remove external libraries or packages. It helps developers add extra functionality to their Python projects from the Python Package Index (PyPI).**\r\n\r\n**Example:**\r\n\r\n```bash\r\npip install requests\r\n```\r\n\r\nThis command installs the `requests` library.\r\n\r\nOther commands:\r\n\r\n```bash\r\npip uninstall requests\r\n```\r\n\r\n→ Removes a package\r\n\r\n```bash\r\npip install --upgrade requests\r\n```\r\n\r\n→ Updates a package\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Pip is a tool used to manage Python packages. It allows us to install, update, and remove third-party libraries that are not included in Python by default.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **pip = Package Installer for Python**\r\n* **Install → Update → Remove packages** ✅\r\n\r\nExample:\r\n\r\n* `pip install numpy`\r\n* `pip install pandas`\r\n* `pip install requests`",
    "question_en": "What is pip?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Pip is Python's package manager used to install, update, and remove external libraries or packages. It helps developers add extra functionality to their Python projects from the Python Package Index (PyPI).**\r\n\r\n**Example:**\r\n\r\n```bash\r\npip install requests\r\n```\r\n\r\nThis command installs the `requests` library.\r\n\r\nOther commands:\r\n\r\n```bash\r\npip uninstall requests\r\n```\r\n\r\n→ Removes a package\r\n\r\n```bash\r\npip install --upgrade requests\r\n```\r\n\r\n→ Updates a package\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Pip is a tool used to manage Python packages. It allows us to install, update, and remove third-party libraries that are not included in Python by default.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **pip = Package Installer for Python**\r\n* **Install → Update → Remove packages** ✅\r\n\r\nExample:\r\n\r\n* `pip install numpy`\r\n* `pip install pandas`\r\n* `pip install requests`",
    "source": "doc",
    "topic": "python",
    "num": "228"
  },
  {
    "category": "Modules",
    "question_hi": "What does the import statement do?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **The `import` statement is used to bring code from one module into another Python file. It allows us to use functions, classes, and variables that are already defined in that module.**\r\n\r\n**Example:**\r\n\r\n```python id=\"z3n8ks\"\r\nimport math\r\n\r\nprint(math.sqrt(25))\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"x7m2pq\"\r\n5.0\r\n```\r\n\r\nHere:\r\n\r\n* `import math` → Loads the math module.\r\n* `math.sqrt()` → Uses the `sqrt()` function from that module.\r\n\r\nWe can also import specific items:\r\n\r\n```python id=\"c4x9mv\"\r\nfrom math import sqrt\r\n\r\nprint(sqrt(25))\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `import` statement is used to load a module so we can use its functions, classes, and variables in our program. It helps reuse existing code instead of writing it again.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **import module → Bring complete module**\r\n* **from module import name → Bring specific item** ✅",
    "question_en": "What does the import statement do?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **The `import` statement is used to bring code from one module into another Python file. It allows us to use functions, classes, and variables that are already defined in that module.**\r\n\r\n**Example:**\r\n\r\n```python id=\"z3n8ks\"\r\nimport math\r\n\r\nprint(math.sqrt(25))\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"x7m2pq\"\r\n5.0\r\n```\r\n\r\nHere:\r\n\r\n* `import math` → Loads the math module.\r\n* `math.sqrt()` → Uses the `sqrt()` function from that module.\r\n\r\nWe can also import specific items:\r\n\r\n```python id=\"c4x9mv\"\r\nfrom math import sqrt\r\n\r\nprint(sqrt(25))\r\n```\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The `import` statement is used to load a module so we can use its functions, classes, and variables in our program. It helps reuse existing code instead of writing it again.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **import module → Bring complete module**\r\n* **from module import name → Bring specific item** ✅",
    "source": "doc",
    "topic": "python",
    "num": "229"
  },
  {
    "category": "Modules",
    "question_hi": "What is the __name__ == \"__main__\" idiom?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **`if __name__ == \"__main__\":` is used to check whether a Python file is being run directly or imported as a module. Code inside this block runs only when the file is executed directly, not when it is imported.**\r\n\r\n**Example:**\r\n\r\n```python id=\"q7m2vx\"\r\ndef greet():\r\n    print(\"Hello Python\")\r\n\r\nif __name__ == \"__main__\":\r\n    greet()\r\n```\r\n\r\nHere:\r\n\r\n* If we run this file directly → `greet()` will execute.\r\n* If we import this file into another program → `greet()` will not execute automatically.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`__name__ == \"__main__\"` is used to control the execution of a Python file. It ensures that some code runs only when the file is executed directly and not when it is imported.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Run file directly → `__name__` becomes `\"__main__\"` ✅**\r\n* **Import file → Code inside block does not run automatically**\r\n\r\nExample use:\r\n\r\n* Testing functions\r\n* Creating script entry points\r\n* Avoiding unwanted execution during imports ✅",
    "question_en": "What is the __name__ == \"__main__\" idiom?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **`if __name__ == \"__main__\":` is used to check whether a Python file is being run directly or imported as a module. Code inside this block runs only when the file is executed directly, not when it is imported.**\r\n\r\n**Example:**\r\n\r\n```python id=\"q7m2vx\"\r\ndef greet():\r\n    print(\"Hello Python\")\r\n\r\nif __name__ == \"__main__\":\r\n    greet()\r\n```\r\n\r\nHere:\r\n\r\n* If we run this file directly → `greet()` will execute.\r\n* If we import this file into another program → `greet()` will not execute automatically.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **`__name__ == \"__main__\"` is used to control the execution of a Python file. It ensures that some code runs only when the file is executed directly and not when it is imported.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Run file directly → `__name__` becomes `\"__main__\"` ✅**\r\n* **Import file → Code inside block does not run automatically**\r\n\r\nExample use:\r\n\r\n* Testing functions\r\n* Creating script entry points\r\n* Avoiding unwanted execution during imports ✅",
    "source": "doc",
    "topic": "python",
    "num": "230"
  },
  {
    "category": "Advanced",
    "question_hi": "What is a generator, and how does it differ from a normal function?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A generator is a special type of function that produces values one at a time using the `yield` keyword instead of returning all values at once. It saves memory because it generates values only when needed.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k5x8qm\"\r\ndef count():\r\n    yield 1\r\n    yield 2\r\n    yield 3\r\n\r\nfor num in count():\r\n    print(num)\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"b8n2pz\"\r\n1\r\n2\r\n3\r\n```\r\n\r\n### **Difference between Normal Function and Generator:**\r\n\r\n| Normal Function                 | Generator                    |\r\n| ------------------------------- | ---------------------------- |\r\n| Uses `return`                   | Uses `yield`                 |\r\n| Returns complete result at once | Produces one value at a time |\r\n| Uses more memory for large data | Saves memory                 |\r\n| Function ends after return      | Pauses and resumes execution |\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A generator is a function that uses `yield` to return values one by one instead of returning the complete result at once. It is memory efficient because it generates values only when required.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **return → Give result and finish**\r\n* **yield → Give value, pause, and continue later** ✅\r\n\r\n**Real-life example:**\r\n\r\n* Normal function → Download entire movie before watching 🎬\r\n* Generator → Stream movie scene by scene 📺",
    "question_en": "What is a generator, and how does it differ from a normal function?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A generator is a special type of function that produces values one at a time using the `yield` keyword instead of returning all values at once. It saves memory because it generates values only when needed.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k5x8qm\"\r\ndef count():\r\n    yield 1\r\n    yield 2\r\n    yield 3\r\n\r\nfor num in count():\r\n    print(num)\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"b8n2pz\"\r\n1\r\n2\r\n3\r\n```\r\n\r\n### **Difference between Normal Function and Generator:**\r\n\r\n| Normal Function                 | Generator                    |\r\n| ------------------------------- | ---------------------------- |\r\n| Uses `return`                   | Uses `yield`                 |\r\n| Returns complete result at once | Produces one value at a time |\r\n| Uses more memory for large data | Saves memory                 |\r\n| Function ends after return      | Pauses and resumes execution |\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A generator is a function that uses `yield` to return values one by one instead of returning the complete result at once. It is memory efficient because it generates values only when required.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **return → Give result and finish**\r\n* **yield → Give value, pause, and continue later** ✅\r\n\r\n**Real-life example:**\r\n\r\n* Normal function → Download entire movie before watching 🎬\r\n* Generator → Stream movie scene by scene 📺",
    "source": "doc",
    "topic": "python",
    "num": "231"
  },
  {
    "category": "Advanced",
    "question_hi": "What is the difference between an iterator and an iterable?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **An iterable is an object that can be looped over, meaning it can return an iterator using the `__iter__()` method. An iterator is the object that actually produces values one by one using the `__next__()` method.**\r\n\r\n### **Example:**\r\n\r\n```python id=\"8m3qvx\"\r\nnumbers = [1, 2, 3]   # Iterable\r\n\r\niterator = iter(numbers)  # Creates iterator\r\n\r\nprint(next(iterator))\r\nprint(next(iterator))\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"4n7kq2\"\r\n1\r\n2\r\n```\r\n\r\nHere:\r\n\r\n* **List (`numbers`)** → Iterable because it can be looped over.\r\n* **`iter(numbers)`** → Creates an iterator.\r\n* **`next(iterator)`** → Gets the next value.\r\n\r\n### **Difference:**\r\n\r\n| Iterable                       | Iterator                            |\r\n| ------------------------------ | ----------------------------------- |\r\n| Object that can be looped over | Object that gives values one by one |\r\n| Has `__iter__()` method        | Has `__next__()` method             |\r\n| Creates an iterator            | Produces actual values              |\r\n| Example: list, tuple, string   | Example: `iter(list)` result        |\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **An iterable is an object that can be converted into an iterator and used in a loop. An iterator is an object that keeps track of its current state and returns the next value using `__next__()`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Iterable → \"Can I loop over it?\"**\r\n* **Iterator → \"Give me the next item\"**\r\n\r\nExample:\r\n\r\n```python\r\nlist → Iterable\r\niter(list) → Iterator\r\nnext(iterator) → Next value\r\n```\r\n\r\n✅ **Iterable creates Iterator, Iterator gives values.**",
    "question_en": "What is the difference between an iterator and an iterable?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **An iterable is an object that can be looped over, meaning it can return an iterator using the `__iter__()` method. An iterator is the object that actually produces values one by one using the `__next__()` method.**\r\n\r\n### **Example:**\r\n\r\n```python id=\"8m3qvx\"\r\nnumbers = [1, 2, 3]   # Iterable\r\n\r\niterator = iter(numbers)  # Creates iterator\r\n\r\nprint(next(iterator))\r\nprint(next(iterator))\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"4n7kq2\"\r\n1\r\n2\r\n```\r\n\r\nHere:\r\n\r\n* **List (`numbers`)** → Iterable because it can be looped over.\r\n* **`iter(numbers)`** → Creates an iterator.\r\n* **`next(iterator)`** → Gets the next value.\r\n\r\n### **Difference:**\r\n\r\n| Iterable                       | Iterator                            |\r\n| ------------------------------ | ----------------------------------- |\r\n| Object that can be looped over | Object that gives values one by one |\r\n| Has `__iter__()` method        | Has `__next__()` method             |\r\n| Creates an iterator            | Produces actual values              |\r\n| Example: list, tuple, string   | Example: `iter(list)` result        |\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **An iterable is an object that can be converted into an iterator and used in a loop. An iterator is an object that keeps track of its current state and returns the next value using `__next__()`.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Iterable → \"Can I loop over it?\"**\r\n* **Iterator → \"Give me the next item\"**\r\n\r\nExample:\r\n\r\n```python\r\nlist → Iterable\r\niter(list) → Iterator\r\nnext(iterator) → Next value\r\n```\r\n\r\n✅ **Iterable creates Iterator, Iterator gives values.**",
    "source": "doc",
    "topic": "python",
    "num": "232"
  },
  {
    "category": "Advanced",
    "question_hi": "What is a decorator?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **A decorator is a function that takes another function as input and extends or modifies its behavior without changing the original function's code. Decorators are commonly used with the `@decorator` syntax.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k7m2vx\"\r\ndef my_decorator(func):\r\n    def wrapper():\r\n        print(\"Before function\")\r\n        func()\r\n        print(\"After function\")\r\n    return wrapper\r\n\r\n@my_decorator\r\ndef hello():\r\n    print(\"Hello Python\")\r\n\r\nhello()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"9x4qpm\"\r\nBefore function\r\nHello Python\r\nAfter function\r\n```\r\n\r\nHere:\r\n\r\n* `my_decorator` wraps the `hello()` function.\r\n* It adds extra behavior before and after the function runs.\r\n* The original `hello()` code is not changed.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A decorator is a function that modifies or extends another function's behavior without changing its source code. It is used by placing `@decorator_name` above a function.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**Decorator = Wrapper around a function 🎁**\r\n\r\nExample:\r\n\r\n```python\r\n@log\r\ndef login():\r\n    pass\r\n```\r\n\r\nPython internally does:\r\n\r\n```python\r\nlogin = log(login)\r\n```\r\n\r\n✅ **Used for:**\r\n\r\n* Logging\r\n* Authentication\r\n* Performance timing\r\n* Access control\r\n* Caching",
    "question_en": "What is a decorator?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **A decorator is a function that takes another function as input and extends or modifies its behavior without changing the original function's code. Decorators are commonly used with the `@decorator` syntax.**\r\n\r\n**Example:**\r\n\r\n```python id=\"k7m2vx\"\r\ndef my_decorator(func):\r\n    def wrapper():\r\n        print(\"Before function\")\r\n        func()\r\n        print(\"After function\")\r\n    return wrapper\r\n\r\n@my_decorator\r\ndef hello():\r\n    print(\"Hello Python\")\r\n\r\nhello()\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"9x4qpm\"\r\nBefore function\r\nHello Python\r\nAfter function\r\n```\r\n\r\nHere:\r\n\r\n* `my_decorator` wraps the `hello()` function.\r\n* It adds extra behavior before and after the function runs.\r\n* The original `hello()` code is not changed.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **A decorator is a function that modifies or extends another function's behavior without changing its source code. It is used by placing `@decorator_name` above a function.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**Decorator = Wrapper around a function 🎁**\r\n\r\nExample:\r\n\r\n```python\r\n@log\r\ndef login():\r\n    pass\r\n```\r\n\r\nPython internally does:\r\n\r\n```python\r\nlogin = log(login)\r\n```\r\n\r\n✅ **Used for:**\r\n\r\n* Logging\r\n* Authentication\r\n* Performance timing\r\n* Access control\r\n* Caching",
    "source": "doc",
    "topic": "python",
    "num": "233"
  },
  {
    "category": "Advanced",
    "question_hi": "What is the Global Interpreter Lock (GIL)?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **GIL (Global Interpreter Lock) is a lock in CPython that allows only one thread to execute Python bytecode at a time. It prevents multiple threads from modifying Python objects simultaneously, but it limits true parallel execution for CPU-intensive tasks.**\r\n\r\n### **Why does Python use GIL?**\r\n\r\n> **The GIL helps manage memory safely because Python's memory management system is not completely thread-safe. It prevents multiple threads from accessing Python objects at the same time and causing data corruption.**\r\n\r\n### **Example:**\r\n\r\n```python id=\"k8m2vz\"\r\nimport threading\r\n\r\ndef task():\r\n    for i in range(1000000):\r\n        pass\r\n\r\nt1 = threading.Thread(target=task)\r\nt2 = threading.Thread(target=task)\r\n\r\nt1.start()\r\nt2.start()\r\n```\r\n\r\nEven though two threads are created, in CPython only one thread executes Python code at a time because of the GIL.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The Global Interpreter Lock is a mechanism in CPython that allows only one thread to execute Python bytecode at a time. It improves memory safety but prevents full parallelism for CPU-bound multithreading tasks.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **GIL = One Python thread runs at a time**\r\n* **CPU-bound tasks → GIL can slow down threading**\r\n* **I/O-bound tasks → Threading still works well**\r\n\r\nExample:\r\n\r\n* Downloading files 🌐 → Threading helps ✅\r\n* Heavy calculations 🧮 → Use multiprocessing instead ✅",
    "question_en": "What is the Global Interpreter Lock (GIL)?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **GIL (Global Interpreter Lock) is a lock in CPython that allows only one thread to execute Python bytecode at a time. It prevents multiple threads from modifying Python objects simultaneously, but it limits true parallel execution for CPU-intensive tasks.**\r\n\r\n### **Why does Python use GIL?**\r\n\r\n> **The GIL helps manage memory safely because Python's memory management system is not completely thread-safe. It prevents multiple threads from accessing Python objects at the same time and causing data corruption.**\r\n\r\n### **Example:**\r\n\r\n```python id=\"k8m2vz\"\r\nimport threading\r\n\r\ndef task():\r\n    for i in range(1000000):\r\n        pass\r\n\r\nt1 = threading.Thread(target=task)\r\nt2 = threading.Thread(target=task)\r\n\r\nt1.start()\r\nt2.start()\r\n```\r\n\r\nEven though two threads are created, in CPython only one thread executes Python code at a time because of the GIL.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **The Global Interpreter Lock is a mechanism in CPython that allows only one thread to execute Python bytecode at a time. It improves memory safety but prevents full parallelism for CPU-bound multithreading tasks.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **GIL = One Python thread runs at a time**\r\n* **CPU-bound tasks → GIL can slow down threading**\r\n* **I/O-bound tasks → Threading still works well**\r\n\r\nExample:\r\n\r\n* Downloading files 🌐 → Threading helps ✅\r\n* Heavy calculations 🧮 → Use multiprocessing instead ✅",
    "source": "doc",
    "topic": "python",
    "num": "234"
  },
  {
    "category": "Advanced",
    "question_hi": "What is the difference between multithreading and multiprocessing?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Multithreading and multiprocessing are ways to run multiple tasks at the same time, but they work differently. Multithreading uses multiple threads inside a single process and shares the same memory, while multiprocessing uses multiple independent processes with separate memory spaces.**\r\n\r\n### **Multithreading:**\r\n\r\n> **Multiple threads run inside one process and share resources. It is useful for I/O-bound tasks like file operations, network requests, or waiting tasks.**\r\n\r\nExample:\r\n\r\n```python id=\"p8x3vn\"\r\nimport threading\r\n\r\ndef download():\r\n    print(\"Downloading...\")\r\n\r\nt1 = threading.Thread(target=download)\r\nt1.start()\r\n```\r\n\r\n---\r\n\r\n### **Multiprocessing:**\r\n\r\n> **Multiple processes run independently, each with its own memory. It is useful for CPU-intensive tasks because it can use multiple CPU cores.**\r\n\r\nExample:\r\n\r\n```python id=\"q4m7za\"\r\nfrom multiprocessing import Process\r\n\r\ndef calculate():\r\n    print(\"Calculating...\")\r\n\r\np1 = Process(target=calculate)\r\np1.start()\r\n```\r\n\r\n---\r\n\r\n### **Difference:**\r\n\r\n| Multithreading                   | Multiprocessing                |\r\n| -------------------------------- | ------------------------------ |\r\n| Multiple threads in one process  | Multiple independent processes |\r\n| Shares memory                    | Separate memory                |\r\n| Lightweight and faster to create | Uses more resources            |\r\n| Limited by GIL in CPython        | Bypasses GIL                   |\r\n| Best for I/O-bound tasks         | Best for CPU-bound tasks       |\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **Multithreading runs multiple threads within a single process and is mainly used for I/O-bound tasks. Multiprocessing creates multiple processes with separate memory, allowing true parallel execution and is better for CPU-bound tasks.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Threads → Same house, shared resources 🏠**\r\n* **Processes → Different houses, independent resources 🏘️**\r\n\r\nExamples:\r\n\r\n* API calls, downloading files → **Multithreading** ✅\r\n* Machine learning training, heavy calculations → **Multiprocessing** ✅",
    "question_en": "What is the difference between multithreading and multiprocessing?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Multithreading and multiprocessing are ways to run multiple tasks at the same time, but they work differently. Multithreading uses multiple threads inside a single process and shares the same memory, while multiprocessing uses multiple independent processes with separate memory spaces.**\r\n\r\n### **Multithreading:**\r\n\r\n> **Multiple threads run inside one process and share resources. It is useful for I/O-bound tasks like file operations, network requests, or waiting tasks.**\r\n\r\nExample:\r\n\r\n```python id=\"p8x3vn\"\r\nimport threading\r\n\r\ndef download():\r\n    print(\"Downloading...\")\r\n\r\nt1 = threading.Thread(target=download)\r\nt1.start()\r\n```\r\n\r\n---\r\n\r\n### **Multiprocessing:**\r\n\r\n> **Multiple processes run independently, each with its own memory. It is useful for CPU-intensive tasks because it can use multiple CPU cores.**\r\n\r\nExample:\r\n\r\n```python id=\"q4m7za\"\r\nfrom multiprocessing import Process\r\n\r\ndef calculate():\r\n    print(\"Calculating...\")\r\n\r\np1 = Process(target=calculate)\r\np1.start()\r\n```\r\n\r\n---\r\n\r\n### **Difference:**\r\n\r\n| Multithreading                   | Multiprocessing                |\r\n| -------------------------------- | ------------------------------ |\r\n| Multiple threads in one process  | Multiple independent processes |\r\n| Shares memory                    | Separate memory                |\r\n| Lightweight and faster to create | Uses more resources            |\r\n| Limited by GIL in CPython        | Bypasses GIL                   |\r\n| Best for I/O-bound tasks         | Best for CPU-bound tasks       |\r\n\r\n### **Short Version (30 seconds):**\r\n\r\n> **Multithreading runs multiple threads within a single process and is mainly used for I/O-bound tasks. Multiprocessing creates multiple processes with separate memory, allowing true parallel execution and is better for CPU-bound tasks.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n* **Threads → Same house, shared resources 🏠**\r\n* **Processes → Different houses, independent resources 🏘️**\r\n\r\nExamples:\r\n\r\n* API calls, downloading files → **Multithreading** ✅\r\n* Machine learning training, heavy calculations → **Multiprocessing** ✅",
    "source": "doc",
    "topic": "python",
    "num": "235"
  },
  {
    "category": "Advanced",
    "question_hi": "What is monkey patching?",
    "answer_hi": "**Interview Answer (Simple English):**\r\n\r\n> **Monkey patching is the process of changing or adding behavior to a class, object, or module at runtime without modifying its original source code. It is commonly used in testing to replace real functions or objects with mock versions.**\r\n\r\n### **Example:**\r\n\r\n```python id=\"n7x2mq\"\r\nclass Dog:\r\n    def sound(self):\r\n        return \"Bark\"\r\n\r\ndef new_sound(self):\r\n    return \"New Bark\"\r\n\r\nDog.sound = new_sound   # Monkey patching\r\n\r\ndog = Dog()\r\n\r\nprint(dog.sound())\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"8p4mcz\"\r\nNew Bark\r\n```\r\n\r\nHere:\r\n\r\n* Original `sound()` method was replaced at runtime.\r\n* The class source code was not changed.\r\n\r\n### **Common Use Case:**\r\n\r\n**Testing:**\r\n\r\n```python id=\"q6v9sa\"\r\n# Replace real API call with fake response during testing\r\napi.get_data = mock_get_data\r\n```\r\n\r\nThis allows testing without calling the actual API.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Monkey patching means modifying a class or module's behavior dynamically at runtime without changing its original code. It is often used in testing to replace dependencies with mock implementations.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**Monkey patch = Change behavior after creation 🐒**\r\n\r\n* Runtime modification ✅\r\n* No source code change ✅\r\n* Common in testing/mocking ✅",
    "question_en": "What is monkey patching?",
    "answer_en": "**Interview Answer (Simple English):**\r\n\r\n> **Monkey patching is the process of changing or adding behavior to a class, object, or module at runtime without modifying its original source code. It is commonly used in testing to replace real functions or objects with mock versions.**\r\n\r\n### **Example:**\r\n\r\n```python id=\"n7x2mq\"\r\nclass Dog:\r\n    def sound(self):\r\n        return \"Bark\"\r\n\r\ndef new_sound(self):\r\n    return \"New Bark\"\r\n\r\nDog.sound = new_sound   # Monkey patching\r\n\r\ndog = Dog()\r\n\r\nprint(dog.sound())\r\n```\r\n\r\n**Output:**\r\n\r\n```text id=\"8p4mcz\"\r\nNew Bark\r\n```\r\n\r\nHere:\r\n\r\n* Original `sound()` method was replaced at runtime.\r\n* The class source code was not changed.\r\n\r\n### **Common Use Case:**\r\n\r\n**Testing:**\r\n\r\n```python id=\"q6v9sa\"\r\n# Replace real API call with fake response during testing\r\napi.get_data = mock_get_data\r\n```\r\n\r\nThis allows testing without calling the actual API.\r\n\r\n### **Short Version (20 seconds):**\r\n\r\n> **Monkey patching means modifying a class or module's behavior dynamically at runtime without changing its original code. It is often used in testing to replace dependencies with mock implementations.**\r\n\r\n💡 **Easy way to remember:**\r\n\r\n**Monkey patch = Change behavior after creation 🐒**\r\n\r\n* Runtime modification ✅\r\n* No source code change ✅\r\n* Common in testing/mocking ✅",
    "source": "doc",
    "topic": "python",
    "num": "236"
  }
];