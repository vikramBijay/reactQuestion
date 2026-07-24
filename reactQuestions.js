const REACT_DATA = [
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
  }
];
