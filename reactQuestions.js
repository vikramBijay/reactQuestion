const REACT_DATA = [
  {
    "num": "1",
    "category": "1. React Basics (1–15)",
    "question_hi": "What is React?",
    "answer_hi": "React is a JavaScript library developed by Facebook (Meta) for creating user interfaces, particularly single-page applications. It allows us for building reusable components that manage their own state. Key advantages: component-driven architecture, optimized updates through the virtual DOM, declarative approach for better readability.\n\n```jsx\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n```",
    "question_en": "What is React?",
    "answer_en": "React is a JavaScript library developed by Facebook (Meta) for creating user interfaces, particularly single-page applications. It allows us for building reusable components that manage their own state. Key advantages: component-driven architecture, optimized updates through the virtual DOM, declarative approach for better readability.\n\n```jsx\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n```",
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
    "answer_hi": "The JSX stand for JavaScript XML. JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. JSX then gets converted into JavaScript function call by Babel. It makes building React components easier.\n\n```jsx\n// JSX\nconst element = <h1 className=\"title\">Hello, world!</h1>;\n\n// Babel isse convert karta hai:\nconst element2 = React.createElement(\n  'h1',\n  { className: 'title' },\n  'Hello, world!'\n);\n```",
    "question_en": "What is JSX?",
    "answer_en": "The JSX stand for JavaScript XML. JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. JSX then gets converted into JavaScript function call by Babel. It makes building React components easier.\n\n```jsx\n// JSX\nconst element = <h1 className=\"title\">Hello, world!</h1>;\n\n// Babel isse convert karta hai:\nconst element2 = React.createElement(\n  'h1',\n  { className: 'title' },\n  'Hello, world!'\n);\n```",
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
    "answer_hi": "ReactDOM ek package hai jo DOM-specific methods (jaise `ReactDOM.createRoot()` / `render()`) provide karta hai, jinka use React components ko actual browser DOM mein render karne ke liye hota hai. React component/virtual DOM logic handle karta hai, jabki ReactDOM us logic ko real DOM se connect karta hai.\n\n```jsx\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);\n```",
    "question_en": "What is ReactDOM?",
    "answer_en": "ReactDOM is a package that provides DOM-specific methods (like ReactDOM.createRoot() / render()), which are used to render React components into the actual browser DOM. React handles the component/virtual DOM logic, while ReactDOM connects that logic to the real DOM.\n\n```jsx\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "8",
    "category": "1. React Basics (1–15)",
    "question_hi": "Virtual DOM kya hai?",
    "answer_hi": "The virtual DOM is an in-memory representation or light weight copy of the real DOM. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
    "question_en": "What is the Virtual DOM?",
    "answer_en": "The virtual DOM is an in-memory representation or light weight copy of the real DOM. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation.",
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
    "answer_hi": "- React Node refers to any unit that can be displayed on screen, such as an element, string, number, boolean, null, or array.\n- React Element is an immutable object that describes what should be displayed on the screen. It is usually created using JSX or React.createElement.\n- React Component refers to a function or class that returns React Elements. Components help in building reusable UI pieces.\n- In short: Node → Anything that can be rendered. Element → What should be rendered. Component → What creates elements.\n\n```jsx\n// Element - ek plain object (immutable)\nconst element = <h1>Hello</h1>;\n\n// Component - function jo element return karta hai\nfunction Greeting() {\n  return <h1>Hello</h1>;\n}\n```",
    "question_en": "React Element vs React Component",
    "answer_en": "- React Node refers to any unit that can be displayed on screen, such as an element, string, number, boolean, null, or array.\n- React Element is an immutable object that describes what should be displayed on the screen. It is usually created using JSX or React.createElement.\n- React Component refers to a function or class that returns React Elements. Components help in building reusable UI pieces.\n- In short: Node → Anything that can be rendered. Element → What should be rendered. Component → What creates elements.\n\n```jsx\n// Element - ek plain object (immutable)\nconst element = <h1>Hello</h1>;\n\n// Component - function jo element return karta hai\nfunction Greeting() {\n  return <h1>Hello</h1>;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "14",
    "category": "1. React Basics (1–15)",
    "question_hi": "Functional Component vs Class Component",
    "answer_hi": "Class components are ES6 classes that extend React.Component. They can hold state, lifecycle methods, and other features. Functional components are simple JavaScript functions that take props and return JSX. With the introduction of hooks, functional components can also handle state and lifecycle methods.\n\n```jsx\n// Functional Component\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Class Component\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n```",
    "question_en": "Functional Component vs Class Component",
    "answer_en": "Class components are ES6 classes that extend React.Component. They can hold state, lifecycle methods, and other features. Functional components are simple JavaScript functions that take props and return JSX. With the introduction of hooks, functional components can also handle state and lifecycle methods.\n\n```jsx\n// Functional Component\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Class Component\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "15",
    "category": "1. React Basics (1–15)",
    "question_hi": "React Fragment kya hai?",
    "answer_hi": "The Fragments allow us to group multiple elements together without adding extra nodes to the DOM. It is useful when a component needs to return more than one element, but we don't want to wrap them inside an unnecessary container like a div.\n\n```jsx\nfunction List() {\n  return (\n    <>\n      <li>Item 1</li>\n      <li>Item 2</li>\n    </>\n  );\n}\n```",
    "question_en": "What is a React Fragment?",
    "answer_en": "The Fragments allow us to group multiple elements together without adding extra nodes to the DOM. It is useful when a component needs to return more than one element, but we don't want to wrap them inside an unnecessary container like a div.\n\n```jsx\nfunction List() {\n  return (\n    <>\n      <li>Item 1</li>\n      <li>Item 2</li>\n    </>\n  );\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "16",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Props kya hote hain?",
    "answer_hi": "The Props are the properties. Props are input data of the components that passes data from a parent component to a child component. Props are immutable, meaning a children component cannot modify the props it receives.\n\n```jsx\nfunction Greeting(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Usage\n<Greeting name=\"Aditi\" />\n```",
    "question_en": "What are props?",
    "answer_en": "The Props are the properties. Props are input data of the components that passes data from a parent component to a child component. Props are immutable, meaning a children component cannot modify the props it receives.\n\n```jsx\nfunction Greeting(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Usage\n<Greeting name=\"Aditi\" />\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "17",
    "category": "2. Components & Props (16–25)",
    "question_hi": "State kya hoti hai?",
    "answer_hi": "State are internal data of a component and can change over time, usually in response to user interactions or events. When state changes, the component re-renders automatically. State is used to handle user interactions, form inputs, and API data.\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```",
    "question_en": "What is state?",
    "answer_en": "State are internal data of a component and can change over time, usually in response to user interactions or events. When state changes, the component re-renders automatically. State is used to handle user interactions, form inputs, and API data.\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```",
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
    "answer_hi": "Parent component apne child component ko data props ke through pass karta hai. Parent apne JSX mein child component call karte time attribute jaisa data deta hai (e.g. `<Child name=\"John\" />`), aur child us data ko `props.name` ke through access karta hai.\n\n```jsx\nfunction Parent() {\n  return <Child name=\"John\" />;\n}\n\nfunction Child(props) {\n  return <p>Hello, {props.name}</p>;\n}\n```",
    "question_en": "Parent to Child communication",
    "answer_en": "A parent component passes data to its child component through props. In JSX, the parent passes data like an attribute when calling the child component (e.g. `<Child name=\"John\" />`), and the child accesses that data through `props.name`.\n\n```jsx\nfunction Parent() {\n  return <Child name=\"John\" />;\n}\n\nfunction Child(props) {\n  return <p>Hello, {props.name}</p>;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "21",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Child to Parent communication",
    "answer_hi": "Child se parent ko data bhejne ke liye, parent apne child ko ek function prop ke roop mein pass karta hai (callback function). Child component us function ko call karta hai aur data ko argument ke roop mein pass karta hai, jisse parent ka state update ho jaata hai.\n\n```jsx\nfunction Parent() {\n  const handleData = (data) => console.log('Received from child:', data);\n  return <Child onSend={handleData} />;\n}\n\nfunction Child({ onSend }) {\n  return <button onClick={() => onSend('Hello Parent!')}>Send</button>;\n}\n```",
    "question_en": "Child to Parent communication",
    "answer_en": "To send data from child to parent, the parent passes a function to the child as a prop (a callback function). The child calls that function and passes data as an argument, which updates the parent's state.\n\n```jsx\nfunction Parent() {\n  const handleData = (data) => console.log('Received from child:', data);\n  return <Child onSend={handleData} />;\n}\n\nfunction Child({ onSend }) {\n  return <button onClick={() => onSend('Hello Parent!')}>Send</button>;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "22",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Prop Drilling kya hai?",
    "answer_hi": "Prop drilling is a situation where data (props) has to be passed from parent component to deep child component, through multiple nested components in between, and these multiple middle componets has to access the data even if they don't need that data. \"\n\n```jsx\n// Prop drilling (bad) — data har level se guzarti hai\n<A user={user}>\n  <B user={user}>\n    <C user={user} />\n  </B>\n</A>\n\n// Context API se avoid karte hain\nconst UserContext = React.createContext();\n<UserContext.Provider value={user}>\n  <A />\n</UserContext.Provider>\n// C ke andar: const user = useContext(UserContext);\n```",
    "question_en": "What is prop drilling?",
    "answer_en": "Prop drilling is a situation where data (props) has to be passed from parent component to deep child component, through multiple nested components in between, and these multiple middle componets has to access the data even if they don't need that data. \"\n\n```jsx\n// Prop drilling (bad) — data har level se guzarti hai\n<A user={user}>\n  <B user={user}>\n    <C user={user} />\n  </B>\n</A>\n\n// Context API se avoid karte hain\nconst UserContext = React.createContext();\n<UserContext.Provider value={user}>\n  <A />\n</UserContext.Provider>\n// C ke andar: const user = useContext(UserContext);\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "22.1",
    "category": "2. Components & Props (16–25)",
    "question_hi": "How would you lift the state up in a React application, and why is it necessary?",
    "answer_hi": "• Lifting state up means moving the state from child components to their nearest common ancestor.-   •	This is used when multiple components need to share the same state, even if they don’t have a direct parent-child relationship. By lifting state up, you can avoid prop drilling and make state management simple and clean.",
    "question_en": "How would you lift the state up in a React application, and why is it necessary?",
    "answer_en": "• Lifting state up means moving the state from child components to their nearest common ancestor.-   •	This is used when multiple components need to share the same state, even if they don’t have a direct parent-child relationship. By lifting state up, you can avoid prop drilling and make state management simple and clean.",
   
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "23",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Default Props",
    "answer_hi": "Default props ek default value define karte hain kisi prop ke liye, jo tab use hoti hai jab parent component us prop ko pass hi nahi karta. Example: `Component.defaultProps = { name: \"Guest\" }` ya function parameter mein default value dena `function Component({ name = \"Guest\" })`.\n\n```jsx\nfunction Button({ label = 'Click me' }) {\n  return <button>{label}</button>;\n}\n\n// Ya\nButton.defaultProps = { label: 'Click me' };\n```",
    "question_en": "Default Props",
    "answer_en": "Default props define a default value for a prop, which is used when the parent component doesn't pass that prop at all. Example: `Component.defaultProps = { name: \"Guest\" }` or giving a default value in the function parameter: `function Component({ name = \"Guest\" })`.\n\n```jsx\nfunction Button({ label = 'Click me' }) {\n  return <button>{label}</button>;\n}\n\n// Ya\nButton.defaultProps = { label: 'Click me' };\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "24",
    "category": "2. Components & Props (16–25)",
    "question_hi": "PropTypes",
    "answer_hi": "PropTypes is a runtime type checking library, which is used to check the type of props passed to the components. They ensure that the correct type of data is provided and warn developers during development if there is any issues. PropTypes helps catch errors early and improves overall code quality. Key points: checks props at runtime (not compile time), helps catch bugs during development, shows warnings in the console (not errors).\n\n```jsx\nimport PropTypes from 'prop-types';\n\nfunction User({ name, age }) {\n  return <p>{name} is {age} years old</p>;\n}\n\nUser.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n};\n```",
    "question_en": "PropTypes",
    "answer_en": "PropTypes is a runtime type checking library , which is are used to check the type of props passed to the components. They ensure that the correct type of data is provided and warn developers during development if there is any issues. PropTypes helps catch errors early and improves overall code quality. Key points: checks props at runtime (not compile time), helps catch bugs during development, shows warnings in the console (not errors).\n\n```jsx\nimport PropTypes from 'prop-types';\n\nfunction User({ name, age }) {\n  return <p>{name} is {age} years old</p>;\n}\n\nUser.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n};\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "25",
    "category": "2. Components & Props (16–25)",
    "question_hi": "Children Prop",
    "answer_hi": "`children` ek special prop hai jo kisi component ke opening aur closing tags ke beech likhe gaye content ko refer karta hai. Example: `<Card><h1>Hello</h1></Card>` mein `<h1>Hello</h1>`, Card component ke andar `props.children` ke through accessible hota hai. Ye reusable wrapper/layout components banane mein kaafi useful hai.\n\n```jsx\nfunction Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\n// Usage\n<Card>\n  <h1>Hello</h1>\n</Card>\n```",
    "question_en": "Children Prop",
    "answer_en": "`children` is a special prop that refers to the content written between a component's opening and closing tags. Example: in `<Card><h1>Hello</h1></Card>`, the `<h1>Hello</h1>` is accessible inside the Card component through `props.children`. This is very useful for building reusable wrapper/layout components.\n\n```jsx\nfunction Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\n// Usage\n<Card>\n  <h1>Hello</h1>\n</Card>\n```",
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
    "answer_hi": "The key prop is used to uniquely identify elements in a list. It helps in reordering, and managing items efficiently. Without unique keys, React may re-render elements unnecessarily, causing performance issues and UI bugs.\n\n```jsx\n{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}\n```",
    "question_en": "Why is the key prop used?",
    "answer_en": "The key prop is used to uniquely identify elements in a list. It helps in reordering, and managing items efficiently. Without unique keys, React may re-render elements unnecessarily, causing performance issues and UI bugs.\n\n```jsx\n{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "29",
    "category": "3. Rendering (26–35)",
    "question_hi": "Array index key use karna sahi hai?",
    "answer_hi": "Using the array index as a key prop can cause performance issues and unexpected behavior, especially when items are reordered or removed. React relies on key prop to uniquely identify elements. When index are used in place of unique keys, React can update the wrong components, leading to unnecessary re-renders or incorrect data being displayed.\n\n```jsx\n// Bachna hai isse jab list reorder/filter ho:\n{items.map((item, index) => (\n  <li key={index}>{item.name}</li> // ❌ risky\n))}\n\n// Behtar — unique, stable id use karo:\n{items.map((item) => (\n  <li key={item.id}>{item.name}</li> // ✅\n))}\n```",
    "question_en": "Is it okay to use the array index as a key?",
    "answer_en": "Using the array index as a key prop can cause performance issues and unexpected behavior, especially when items are reordered or removed. React relies on key prop to uniquely identify elements. When index are used in place of unique keys, React can update the wrong components, leading to unnecessary re-renders or incorrect data being displayed.\n\n```jsx\n// Bachna hai isse jab list reorder/filter ho:\n{items.map((item, index) => (\n  <li key={index}>{item.name}</li> // ❌ risky\n))}\n\n// Behtar — unique, stable id use karo:\n{items.map((item) => (\n  <li key={item.id}>{item.name}</li> // ✅\n))}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "30",
    "category": "3. Rendering (26–35)",
    "question_hi": "Conditional Rendering",
    "answer_hi": "Conditional rendering ka matlab hai kisi condition ke basis par different UI dikhana. React mein ye normal JavaScript conditions (if-else, ternary operator `condition ? A : B`, ya logical `&&` operator) ke through JSX ke andar kiya jaata hai.\n\n```jsx\nfunction Status({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}\n      {isLoggedIn && <button>Logout</button>}\n    </div>\n  );\n}\n```",
    "question_en": "Conditional Rendering",
    "answer_en": "Conditional rendering means showing different UI based on some condition. In React, this is done using normal JavaScript conditions inside JSX — if-else, the ternary operator (`condition ? A : B`), or the logical `&&` operator.\n\n```jsx\nfunction Status({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}\n      {isLoggedIn && <button>Logout</button>}\n    </div>\n  );\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "31",
    "category": "3. Rendering (26–35)",
    "question_hi": "Lists Rendering",
    "answer_hi": "Lists render karne ke liye JavaScript ka `.map()` method use hota hai, jisse array ke har item ke liye ek JSX element return hota hai. Har item ko ek unique `key` prop dena zaroori hota hai taaki React efficiently update kar sake.\n\n```jsx\nconst items = ['Apple', 'Banana', 'Mango'];\n\nfunction List() {\n  return (\n    <ul>\n      {items.map((item, i) => (\n        <li key={i}>{item}</li>\n      ))}\n    </ul>\n  );\n}\n```",
    "question_en": "Lists Rendering",
    "answer_en": "Lists are rendered using JavaScript's `.map()` method, which returns a JSX element for each item in the array. Each item needs a unique `key` prop so React can update efficiently.\n\n```jsx\nconst items = ['Apple', 'Banana', 'Mango'];\n\nfunction List() {\n  return (\n    <ul>\n      {items.map((item, i) => (\n        <li key={i}>{item}</li>\n      ))}\n    </ul>\n  );\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "32",
    "category": "3. Rendering (26–35)",
    "question_hi": "React.memo",
    "answer_hi": "it is used to opimize peformance by memoizing expensive calculation so that they dont run on evey render. \n\n```jsx\nconst Child = React.memo(function Child({ value }) {\n  console.log('Child rendered');\n  return <p>{value}</p>;\n});\n```",
    "question_en": "React.memo",
    "answer_en": "it is used to opimize peformance by memoizing expensive calculation so that they dont run on evey render. \n\n```jsx\nconst Child = React.memo(function Child({ value }) {\n  console.log('Child rendered');\n  return <p>{value}</p>;\n});\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "33",
    "category": "3. Rendering (26–35)",
    "question_hi": "Pure Component",
    "answer_hi": "Pure Components in React are components that re-render only when their props or state change. They use shallow comparison to detect changes, which helps prevent unnecessary re-renders and improves performance. Class components can extend React.PureComponent to become pure. Functional components can use React.memo to achieve the same behavior.\n\n```jsx\n// Class component\nclass Greeting extends React.PureComponent {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\n// Functional component (same behavior)\nconst Greeting = React.memo(function Greeting({ name }) {\n  return <h1>Hello, {name}</h1>;\n});\n```",
    "question_en": "Pure Component",
    "answer_en": "Pure Components in React are components that re-render only when their props or state change. They use shallow comparison to detect changes, which helps prevent unnecessary re-renders and improves performance. Class components can extend React.PureComponent to become pure. Functional components can use React.memo to achieve the same behavior.\n\n```jsx\n// Class component\nclass Greeting extends React.PureComponent {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\n// Functional component (same behavior)\nconst Greeting = React.memo(function Greeting({ name }) {\n  return <h1>Hello, {name}</h1>;\n});\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "34",
    "category": "3. Rendering (26–35)",
    "question_hi": "Lazy Loading",
    "answer_hi": "It means loading components only when they are needed instead of loading everything at once. This makes the app load faster because only the important parts load first, and other components load later when the user opens them. Lazy loading is usually done using React.lazy() and Suspense.\n\n```jsx\nimport { lazy, Suspense } from 'react';\n\nconst Profile = lazy(() => import('./Profile'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<p>Loading...</p>}>\n      <Profile />\n    </Suspense>\n  );\n}\n```",
    "question_en": "Lazy Loading",
    "answer_en": "It means loading components only when they are needed instead of loading everything at once. This makes the app load faster because only the important parts load first, and other components load later when the user opens them. Lazy loading is usually done using React.lazy() and Suspense.\n\n```jsx\nimport { lazy, Suspense } from 'react';\n\nconst Profile = lazy(() => import('./Profile'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<p>Loading...</p>}>\n      <Profile />\n    </Suspense>\n  );\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "35",
    "category": "3. Rendering (26–35)",
    "question_hi": "Suspense",
    "answer_hi": "React Suspense is a feature that allows a component to wait while the data is loading and shows a fallback UI like a loader instead of a blank screen. Once the data is loaded it shows the actual content, and this improving user experience.\n\n```jsx\nimport { Suspense } from 'react';\n\n<Suspense fallback={<Loader />}>\n  <SlowComponent />\n</Suspense>\n```",
    "question_en": "Suspense",
    "answer_en": "React Suspense is a feature that allows a component to wait while the data is loading and shows a fallback UI like a loader instead of a blank screen. Once the data is loaded it shows the actual content, and this improving user experience.\n\n```jsx\nimport { Suspense } from 'react';\n\n<Suspense fallback={<Loader />}>\n  <SlowComponent />\n</Suspense>\n```",
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
    "answer_hi": "useState functional components mein state add karne ke liye use hota hai. Ye ek array return karta hai — current state value aur ek function jisse state update hoti hai. Example: `const [count, setCount] = useState(0);`\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n```",
    "question_en": "useState",
    "answer_en": "useState adds state to functional components. It returns an array — the current state value and a function to update that state. Example: `const [count, setCount] = useState(0);`\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "39",
    "category": "4. Hooks (36–55)",
    "question_hi": "Functional update",
    "answer_hi": "Jab naya state pichle state par depend karta hai, tab updater ko direct value ke bajaye ek function pass karte hain jo previous state receive karta hai — isse functional update kehte hain. Example: `setCount(prevCount => prevCount + 1);` Ye batching ke time stale state issues se bachata hai.\n\n```jsx\n// Agar next state pichle state par depend karta hai:\nsetCount((prevCount) => prevCount + 1);\n\n// Multiple rapid updates safely honge:\nsetCount((c) => c + 1);\nsetCount((c) => c + 1); // count sahi se +2 hoga\n```",
    "question_en": "Functional update",
    "answer_en": "When the new state depends on the previous state, we pass a function to the updater instead of a direct value — that function receives the previous state. This is called a functional update. Example: `setCount(prevCount => prevCount + 1);` It avoids stale state issues during batching.\n\n```jsx\n// Agar next state pichle state par depend karta hai:\nsetCount((prevCount) => prevCount + 1);\n\n// Multiple rapid updates safely honge:\nsetCount((c) => c + 1);\nsetCount((c) => c + 1); // count sahi se +2 hoga\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "40",
    "category": "4. Hooks (36–55)",
    "question_hi": "useEffect",
    "answer_hi": "useEffect side effects handle karne ke liye use hota hai. Ye DOM render hone ke baad asynchronously chalta hai, isliye data fetching, API calls aur subscriptions jaise kaam bina UI block kiye kar sakta hai.\n\n```jsx\nimport { useEffect, useState } from 'react';\n\nfunction Profile({ userId }) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then((res) => res.json())\n      .then((json) => setData(json));\n  }, [userId]);\n\n  return <p>{data?.name}</p>;\n}\n```",
    "question_en": "useEffect",
    "answer_en": "useEffect is used to handle side effects. It runs asynchronously after the DOM has rendered, so it can do tasks like data fetching, API calls, and subscriptions without blocking the UI.\n\n```jsx\nimport { useEffect, useState } from 'react';\n\nfunction Profile({ userId }) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then((res) => res.json())\n      .then((json) => setData(json));\n  }, [userId]);\n\n  return <p>{data?.name}</p>;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "41",
    "category": "4. Hooks (36–55)",
    "question_hi": "Dependency Array",
    "answer_hi": "useEffect ka dependency array decide karta hai ki effect kab dobara chale:\n- Empty array → effect sirf initial render ke baad ek baar chalta hai.\n- Variables hain → effect tab dobara chalta hai jab unmein se koi change ho.\n- Omitted → effect har render ke baad chalta hai.\n\n```jsx\nuseEffect(() => {\n  console.log('Runs once');\n}, []); // empty array → sirf mount par\n\nuseEffect(() => {\n  console.log('Runs when count changes');\n}, [count]); // sirf jab count change ho\n\nuseEffect(() => {\n  console.log('Runs after every render');\n}); // no array → har render ke baad\n```",
    "question_en": "Dependency Array",
    "answer_en": "The dependency array of useEffect controls when the effect re-runs:\n- If it's empty, the effect runs only once after the initial render.\n- If it contains variables, the effect re-runs whenever any of those variables change.\n- If omitted, the effect runs after every render.\n\n```jsx\nuseEffect(() => {\n  console.log('Runs once');\n}, []); // empty array → sirf mount par\n\nuseEffect(() => {\n  console.log('Runs when count changes');\n}, [count]); // sirf jab count change ho\n\nuseEffect(() => {\n  console.log('Runs after every render');\n}); // no array → har render ke baad\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "42",
    "category": "4. Hooks (36–55)",
    "question_hi": "Cleanup Function",
    "answer_hi": "Cleanup function useEffect ke andar return kiya jaane wala function hota hai, jo component unmount hone se pehle ya agle effect run hone se pehle chalta hai. Isse hum subscriptions, timers aur event listeners jaise resources clean karte hain, taaki memory leaks na ho. Example: `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);`\n\n```jsx\nuseEffect(() => {\n  const id = setInterval(() => console.log('tick'), 1000);\n\n  return () => clearInterval(id); // cleanup\n}, []);\n```",
    "question_en": "Cleanup Function",
    "answer_en": "A cleanup function is a function returned inside useEffect, which runs before the component unmounts or before the effect runs again. It's used to clean up resources like subscriptions, timers, and event listeners, to prevent memory leaks. Example: `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);`\n\n```jsx\nuseEffect(() => {\n  const id = setInterval(() => console.log('tick'), 1000);\n\n  return () => clearInterval(id); // cleanup\n}, []);\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "43",
    "category": "4. Hooks (36–55)",
    "question_hi": "useRef",
    "answer_hi": "useRef mutable data store karta hai jo renders ke beech same rehta hai, aur value change hone par component re-render nahi hota. Isse DOM elements directly access kiye jaate hain aur counters ya timers jaise mutable values component lifecycle ke dauran persist rehte hain.\n\n```jsx\nimport { useRef } from 'react';\n\nfunction TextInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => inputRef.current.focus();\n\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={focusInput}>Focus</button>\n    </>\n  );\n}\n```",
    "question_en": "useRef",
    "answer_en": "useRef stores mutable data that stays the same across renders without causing the component to re-render when the value changes. It is commonly used to access DOM elements directly and to keep mutable values, such as counters or timers, that need to persist during the lifecycle of a component.\n\n```jsx\nimport { useRef } from 'react';\n\nfunction TextInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => inputRef.current.focus();\n\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={focusInput}>Focus</button>\n    </>\n  );\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "44",
    "category": "4. Hooks (36–55)",
    "question_hi": "useMemo",
    "answer_hi": "useMemo ek calculation ka result store karta hai aur use sirf tab dobara calculate karta hai jab dependencies change hon. Isse unnecessary calculations avoid hote hain aur performance improve hoti hai jab calculation expensive ho.\n\n```jsx\nimport { useMemo } from 'react';\n\nfunction List({ items }) {\n  const sortedItems = useMemo(() => {\n    return [...items].sort();\n  }, [items]);\n\n  return <ul>{sortedItems.map((i) => <li key={i}>{i}</li>)}</ul>;\n}\n```",
    "question_en": "useMemo",
    "answer_en": "useMemo stores the result of a calculation and recalculates it only when its dependencies change. This helps avoid unnecessary calculations and improves performance when the calculation is expensive.\n\n```jsx\nimport { useMemo } from 'react';\n\nfunction List({ items }) {\n  const sortedItems = useMemo(() => {\n    return [...items].sort();\n  }, [items]);\n\n  return <ul>{sortedItems.map((i) => <li key={i}>{i}</li>)}</ul>;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "45",
    "category": "4. Hooks (36–55)",
    "question_hi": "useCallback",
    "answer_hi": "useCallback ek function ko renders ke beech yaad rakhta hai aur naya sirf tab banata hai jab dependencies change hon. Ye functions ko child components ko pass karte time useful hai, taaki unnecessary re-renders avoid hon.\n\n```jsx\nimport { useCallback } from 'react';\n\nfunction Parent() {\n  const handleClick = useCallback(() => {\n    console.log('Clicked');\n  }, []);\n\n  return <Child onClick={handleClick} />;\n}\n```",
    "question_en": "useCallback",
    "answer_en": "The useCallback hook saves a function so it doesn't re-create on every render. It only changes when its dependencies change, helping improve performance.\n\n```jsx\nimport { useCallback } from 'react';\n\nfunction Parent() {\n  const handleClick = useCallback(() => {\n    console.log('Clicked');\n  }, []);\n\n  return <Child onClick={handleClick} />;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "46",
    "category": "4. Hooks (36–55)",
    "question_hi": "useContext",
    "answer_hi": "useContext humein shared data directly access karne deta hai, bina har component mein props pass kiye. Ye prop drilling ka problem solve karta hai. Example: hum isse theme ya user information components ke beech share kar sakte hain. `const value = useContext(MyContext);`\n\nContext performance do tarike se improve kar sakte hain: (1) large context ko chhote contexts mein split karo, taaki ek value change hone par sab components re-render na hon; (2) context value ko useMemo se memoize karo, taaki React har render par naya object na banaye.\n\n```jsx\nconst ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}\n```",
    "question_en": "useContext",
    "answer_en": "useContext lets us access shared data directly without passing props through every component. This solves the problem of prop drilling. For example, we can use it to share theme or user information across components. `const value = useContext(MyContext);`\n\nWe can improve Context performance in two ways: (1) split a large Context into smaller ones, so a change in one value doesn't re-render all components; (2) memoize the context value with useMemo, so React doesn't create a new object on every render.\n\n```jsx\nconst ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "47",
    "category": "4. Hooks (36–55)",
    "question_hi": "useReducer",
    "answer_hi": "useReducer state ko ek reducer function aur actions ke through manage karta hai. Ye current state aur ek `dispatch` function return karta hai. Hum `dispatch` se action bhejte hain, aur reducer decide karta hai ki state kaise change hogi. Ye useful hai jab state logic mein multiple actions ya conditions hon.\n\n```jsx\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  return (\n    <button onClick={() => dispatch({ type: 'increment' })}>\n      {state.count}\n    </button>\n  );\n}\n```",
    "question_en": "useReducer",
    "answer_en": "The useReducer hook manages complex state logic in functional components, serving as an alternative to useState. And it's ideal when state has multiple fields, or when the next state relies on the previous one. The useReducer hook accepts a reducer function + an initial state.\n\n```jsx\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  return (\n    <button onClick={() => dispatch({ type: 'increment' })}>\n      {state.count}\n    </button>\n  );\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "48",
    "category": "4. Hooks (36–55)",
    "question_hi": "Custom Hooks",
    "answer_hi": "Custom hooks wo functions hain jo hum common logic ko multiple components mein reuse karne ke liye banate hain. Inka naam hamesha `use` se start hota hai, jaise `useFetch` ya `useLocalStorage`. Ye built-in hooks jaise `useState` aur `useEffect` bhi use kar sakte hain.\n\n```jsx\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url).then((res) => res.json()).then(setData);\n  }, [url]);\n\n  return data;\n}\n\n// Usage\nconst data = useFetch('/api/users');\n```",
    "question_en": "Custom Hooks",
    "answer_en": "Custom hooks are functions we create to reuse common logic across multiple components. Their names always start with `use`, such as `useFetch` or `useLocalStorage`. They can also use built-in hooks like `useState` and `useEffect`.\n\n```jsx\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url).then((res) => res.json()).then(setData);\n  }, [url]);\n\n  return data;\n}\n\n// Usage\nconst data = useFetch('/api/users');\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "49",
    "category": "4. Hooks (36–55)",
    "question_hi": "useLayoutEffect",
    "answer_hi": "useLayoutEffect React ke DOM update karne ke baad, lekin browser ke screen paint karne se pehle chalta hai. Ye element ka size ya position measure karne ke liye useful hai, user ko updated screen dikhne se pehle. `useEffect` ke unlike, ye browser ko paint karne se block kar sakta hai.\n\n```jsx\nuseLayoutEffect(() => {\n  const { height } = ref.current.getBoundingClientRect();\n  console.log('Measured before paint:', height);\n}, []);\n```",
    "question_en": "useLayoutEffect",
    "answer_en": "useLayoutEffect runs after React updates the DOM but before the browser paints the screen. It is useful for measuring an element's size or position before the user sees the updated screen. Unlike `useEffect`, it can block the browser from painting.\n\n```jsx\nuseLayoutEffect(() => {\n  const { height } = ref.current.getBoundingClientRect();\n  console.log('Measured before paint:', height);\n}, []);\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "50",
    "category": "4. Hooks (36–55)",
    "question_hi": "useImperativeHandle",
    "answer_hi": "useImperativeHandle control karta hai ki parent component child ke ref ke through kya access kar sakta hai. Example: hum parent ko `focus()` ya `reset()` jaise specific functions call karne de sakte hain, bina child ka poora internal logic expose kiye.\n\n```jsx\nconst CustomInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    focus: () => inputRef.current.focus(),\n  }));\n\n  return <input ref={inputRef} {...props} />;\n});\n```",
    "question_en": "useImperativeHandle",
    "answer_en": "useImperativeHandle controls what a parent component can access through a child's ref. For example, we can allow the parent to call specific functions like `focus()` or `reset()` without exposing the child's entire internal logic.\n\n```jsx\nconst CustomInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    focus: () => inputRef.current.focus(),\n  }));\n\n  return <input ref={inputRef} {...props} />;\n});\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "51",
    "category": "4. Hooks (36–55)",
    "question_hi": "forwardRef",
    "answer_hi": "forwardRef parent component ko child component tak ref pass karne deta hai. Isse parent DOM element ya child ke exposed value ko access kar sakta hai. React 19 mein hum `ref` ko prop ki tarah pass kar sakte hain, isliye new React 19 components mein `forwardRef` ki zaroorat nahi hai.\n\n```jsx\nconst CustomInput = forwardRef((props, ref) => {\n  return <input ref={ref} {...props} />;\n});\n\n// Parent\nconst inputRef = useRef();\n<CustomInput ref={inputRef} />;\n```",
    "question_en": "forwardRef",
    "answer_en": "forwardRef allows a parent component to pass a ref to a child component. This lets the parent access a DOM element or a value exposed by the child. In React 19, we can pass `ref` as a prop, so `forwardRef` is no longer necessary in new React 19 components.\n\n```jsx\nconst CustomInput = forwardRef((props, ref) => {\n  return <input ref={ref} {...props} />;\n});\n\n// Parent\nconst inputRef = useRef();\n<CustomInput ref={inputRef} />;\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "52",
    "category": "4. Hooks (36–55)",
    "question_hi": "useId",
    "answer_hi": "useId unique IDs generate karta hai jo labels ko form inputs ke saath `htmlFor` aur `id` se jodne mein help karte hain. Ye IDs server-side aur client-side rendering ke beech consistent bhi rehti hain, jo accessibility ke liye useful hai.\n\n```jsx\nfunction Field() {\n  const id = useId();\n  return (\n    <>\n      <label htmlFor={id}>Name</label>\n      <input id={id} />\n    </>\n  );\n}\n```",
    "question_en": "useId",
    "answer_en": "useId generates unique IDs that help connect labels with form inputs using `htmlFor` and `id`. It also keeps IDs consistent between server-side and client-side rendering, which is useful for accessibility.\n\n```jsx\nfunction Field() {\n  const id = useId();\n  return (\n    <>\n      <label htmlFor={id}>Name</label>\n      <input id={id} />\n    </>\n  );\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "53",
    "category": "4. Hooks (36–55)",
    "question_hi": "useTransition",
    "answer_hi": "useTransition humein kuch state updates ko non-urgent mark karne deta hai, taaki typing jaise urgent tasks responsive rahein. Ye `startTransition` deta hai update mark karne ke liye aur `isPending` ye check karne ke liye ki transition abhi chal raha hai ya nahi.\n\n```jsx\nconst [isPending, startTransition] = useTransition();\n\nfunction handleChange(value) {\n  startTransition(() => {\n    setSearchQuery(value); // low priority update\n  });\n}\n```",
    "question_en": "useTransition",
    "answer_en": "useTransition lets us mark certain state updates as non-urgent, so urgent tasks like typing can stay responsive. It provides `startTransition` to mark an update and `isPending` to check whether the transition is still in progress.\n\n```jsx\nconst [isPending, startTransition] = useTransition();\n\nfunction handleChange(value) {\n  startTransition(() => {\n    setSearchQuery(value); // low priority update\n  });\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "54",
    "category": "4. Hooks (36–55)",
    "question_hi": "useDeferredValue",
    "answer_hi": "useDeferredValue UI ke less urgent part ko baad mein update hone deta hai jab application busy ho. Example: search box mein input turant update hota hai jabki search results baad mein update ho sakte hain, jisse interface responsive rehta hai.\n\n```jsx\nconst [text, setText] = useState('');\nconst deferredText = useDeferredValue(text);\n\n// UI heavy list deferredText use karti hai, input smooth rehta hai\n<input value={text} onChange={(e) => setText(e.target.value)} />\n<ExpensiveList query={deferredText} />\n```",
    "question_en": "useDeferredValue",
    "answer_en": "useDeferredValue lets a less urgent part of the UI update later when the application is busy. For example, in a search box, the input updates immediately while the search results can update later, helping keep the interface responsive.\n\n```jsx\nconst [text, setText] = useState('');\nconst deferredText = useDeferredValue(text);\n\n// UI heavy list deferredText use karti hai, input smooth rehta hai\n<input value={text} onChange={(e) => setText(e.target.value)} />\n<ExpensiveList query={deferredText} />\n```",
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
    "answer_hi": "Controlled components in React are the components whose state and behaviors are managed by React components using states, while the uncontrolled components manage their own state and control their behaviors with the help of DOM.\n\n```jsx\n// Controlled component\nfunction Controlled() {\n  const [value, setValue] = useState('');\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\n\n// Uncontrolled component\nfunction Uncontrolled() {\n  const inputRef = useRef();\n  const handleSubmit = () => console.log(inputRef.current.value);\n  return <input ref={inputRef} defaultValue=\"\" />;\n}\n```",
    "question_en": "Controlled vs Uncontrolled Components",
    "answer_en": "Controlled components in React are the components whose state and behaviors are managed by React components using states, while the uncontrolled components manage their own state and control their behaviors with the help of DOM.\n\n```jsx\n// Controlled component\nfunction Controlled() {\n  const [value, setValue] = useState('');\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\n\n// Uncontrolled component\nfunction Uncontrolled() {\n  const inputRef = useRef();\n  const handleSubmit = () => console.log(inputRef.current.value);\n  return <input ref={inputRef} defaultValue=\"\" />;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "59",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "createElement vs cloneElement",
    "answer_hi": "- **createElement**: used to create a new element. It takes the type, props, and children, and returns a new element. It is mostly used internally by JSX.\n- **cloneElement**: used to clone an existing React element and optionally modify the props. It keeps the original children and state while allowing us to pass new props. This is useful when you want to manipulate an element without recreating it.\n\n```jsx\n// createElement\nconst el = React.createElement('h1', { className: 'title' }, 'Hello');\n\n// cloneElement\nconst clonedEl = React.cloneElement(el, { className: 'title-updated' });\n```",
    "question_en": "createElement vs cloneElement",
    "answer_en": "- **createElement**: used to create a new element. It takes the type, props, and children, and returns a new element. It is mostly used internally by JSX.\n- **cloneElement**: used to clone an existing React element and optionally modify the props. It keeps the original children and state while allowing us to pass new props. This is useful when you want to manipulate an element without recreating it.\n\n```jsx\n// createElement\nconst el = React.createElement('h1', { className: 'title' }, 'Hello');\n\n// cloneElement\nconst clonedEl = React.cloneElement(el, { className: 'title-updated' });\n```",
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
    "answer_hi": "There are two ways for type checking in React — TypeScript and PropTypes.\nTypeScript is a superset of JavaScript (includes everything JS has + extra features like type checking). It checks props, state, and functions during development (compile time), helping catch errors early before the code runs. This improves code safety and reduces bugs.\nPropTypes is a runtime type-checking library used to check whether a component receives the correct props. Key points: checks props at runtime not compile time, helps catch bugs during development, shows warnings in the console not errors.\n\n```jsx\nimport PropTypes from 'prop-types';\n\nfunction User({ name, age }) {\n  return <p>{name}, {age}</p>;\n}\n\nUser.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n};\n```",
    "question_en": "TypeScript vs PropTypes",
    "answer_en": "There are two ways for type checking in React — TypeScript and PropTypes.\nTypeScript is a superset of JavaScript (includes everything JS has + extra features like type checking). It checks props, state, and functions during development (compile time), helping catch errors early before the code runs. This improves code safety and reduces bugs.\nPropTypes is a runtime type-checking library used to check whether a component receives the correct props. Key points: checks props at runtime not compile time, helps catch bugs during development, shows warnings in the console not errors.\n\n```jsx\nimport PropTypes from 'prop-types';\n\nfunction User({ name, age }) {\n  return <p>{name}, {age}</p>;\n}\n\nUser.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n};\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "62",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Error Boundaries",
    "answer_hi": "Error Boundaries is a process which catches JavaScript errors in their child components, log them, and display a fallback UI instead of crashing the application.\n\n```jsx\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) return <h1>Something went wrong.</h1>;\n    return this.props.children;\n  }\n}\n```",
    "question_en": "Error Boundaries",
    "answer_en": "Error Boundaries is a process which catches JavaScript errors in their child components, log them, and display a fallback UI instead of crashing the application.\n\n```jsx\nclass ErrorBoundary extends React.Component {\n  state = { hasError: false };\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) return <h1>Something went wrong.</h1>;\n    return this.props.children;\n  }\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "63",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "Lifecycle Methods",
    "answer_hi": "In React, the lifecycle methods describe the different stages of a component's life, which are Mounting, Updating, and Unmounting.\n- The mounting phase occurs when a component is created and displayed on the screen for the first time, and it is mainly used for tasks like fetching data or making API calls.\n- The updating phase occurs when a component's state or props change, causing it to re-render, and it is used to update the UI based on new data or perform side effects.\n- The unmounting phase occurs when a component is removed from the DOM, when user navigates to a different page, and it is important for cleaning up resources like event listeners, subscriptions, or timers to prevent memory leaks.\n\n```jsx\nclass Profile extends React.Component {\n  componentDidMount() {\n    // Mounting phase — API calls yahan\n  }\n  componentDidUpdate(prevProps) {\n    // Updating phase\n  }\n  componentWillUnmount() {\n    // Unmounting phase — cleanup yahan\n  }\n  render() {\n    return <p>Profile</p>;\n  }\n}\n```",
    "question_en": "Lifecycle Methods",
    "answer_en": "In React, the lifecycle methods describe the different stages of a component's life, which are Mounting, Updating, and Unmounting.\n- The mounting phase occurs when a component is created and displayed on the screen for the first time, and it is mainly used for tasks like fetching data or making API calls.\n- The updating phase occurs when a component's state or props change, causing it to re-render, and it is used to update the UI based on new data or perform side effects.\n- The unmounting phase occurs when a component is removed from the DOM, when user navigates to a different page, and it is important for cleaning up resources like event listeners, subscriptions, or timers to prevent memory leaks.\n\n```jsx\nclass Profile extends React.Component {\n  componentDidMount() {\n    // Mounting phase — API calls yahan\n  }\n  componentDidUpdate(prevProps) {\n    // Updating phase\n  }\n  componentWillUnmount() {\n    // Unmounting phase — cleanup yahan\n  }\n  render() {\n    return <p>Profile</p>;\n  }\n}\n```",
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
    "answer_hi": "Presentational components only focus on the UI — they display data using HTML and CSS and usually don't manage state. Container components are used to manage the logic and state, like fetching data, managing state, and passing information to presentational components.\n\n```jsx\n// Presentational — sirf UI\nfunction UserCard({ name, email }) {\n  return <div>{name} - {email}</div>;\n}\n\n// Container — logic/state\nfunction UserCardContainer() {\n  const [user, setUser] = useState(null);\n  useEffect(() => { fetchUser().then(setUser); }, []);\n  return user ? <UserCard {...user} /> : <p>Loading...</p>;\n}\n```",
    "question_en": "Presentational vs Container Components",
    "answer_en": "Presentational components only focus on the UI — they display data using HTML and CSS and usually don't manage state. Container components are used to manage the logic and state, like fetching data, managing state, and passing information to presentational components.\n\n```jsx\n// Presentational — sirf UI\nfunction UserCard({ name, email }) {\n  return <div>{name} - {email}</div>;\n}\n\n// Container — logic/state\nfunction UserCardContainer() {\n  const [user, setUser] = useState(null);\n  useEffect(() => { fetchUser().then(setUser); }, []);\n  return user ? <UserCard {...user} /> : <p>Loading...</p>;\n}\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "68",
    "category": "Bonus: Extra Topics From Your Doc",
    "question_hi": "React Router",
    "answer_hi": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.\n\n```jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n```",
    "question_en": "React Router",
    "answer_en": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.\n\n```jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n```",
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
    "answer_hi": "Form handling ka matlab hai form ke input fields ki values ko manage karna, unhe state mein store karna, submit event ko handle karna, aur validation apply karna. React mein generally controlled components ke through hota hai — har input ka `value` state se aata hai aur `onChange` se state update hoti hai, phir `onSubmit` par data process kiya jaata hai.\n\n```jsx\nfunction LoginForm() {\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(email);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={email} onChange={(e) => setEmail(e.target.value)} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```",
    "question_en": "Form Handling",
    "answer_en": "Form handling means managing the values of form input fields, storing them in state, handling the submit event, and applying validation. In React, this is generally done using controlled components — each input's value comes from state and is updated via onChange, and the data is processed on submit.\n\n```jsx\nfunction LoginForm() {\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(email);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={email} onChange={(e) => setEmail(e.target.value)} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "59",
    "category": "5. Forms (56–63)",
    "question_hi": "Validation",
    "answer_hi": "Validation ka matlab hai form submit karne se pehle check karna ki user ne sahi/complete data diya hai ya nahi (jaise required fields, email format, password length). Ye manually (if-conditions) ya libraries (Formik + Yup, React Hook Form) ke through kiya ja sakta hai, aur errors ko state mein store karke user ko dikhaya jaata hai.\n\n```jsx\nfunction validate(email) {\n  if (!email) return 'Email is required';\n  if (!/\\S+@\\S+\\.\\S+/.test(email)) return 'Invalid email';\n  return '';\n}\n\nconst [error, setError] = useState('');\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  const err = validate(email);\n  if (err) setError(err);\n};\n```",
    "question_en": "Validation",
    "answer_en": "Validation means checking, before the form is submitted, whether the user has provided correct/complete data (like required fields, email format, password length). This can be done manually (if-conditions) or with libraries (Formik + Yup, React Hook Form), storing errors in state and showing them to the user.\n\n```jsx\nfunction validate(email) {\n  if (!email) return 'Email is required';\n  if (!/\\S+@\\S+\\.\\S+/.test(email)) return 'Invalid email';\n  return '';\n}\n\nconst [error, setError] = useState('');\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  const err = validate(email);\n  if (err) setError(err);\n};\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "60",
    "category": "5. Forms (56–63)",
    "question_hi": "Prevent Default",
    "answer_hi": "`event.preventDefault()` ek method hai jo kisi event ka default browser behavior rokta hai. Forms mein isse form submit hone par page reload hone se roka jaata hai: `const handleSubmit = (e) => { e.preventDefault(); ... }`.\n\n```jsx\nfunction Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault(); // page reload nahi hoga\n    console.log('submitted');\n  };\n  return <form onSubmit={handleSubmit}>...</form>;\n}\n```",
    "question_en": "Prevent Default",
    "answer_en": "event.preventDefault() is a method that stops the default browser behavior for an event. In forms, it's used to stop the page from reloading when the form is submitted: `const handleSubmit = (e) => { e.preventDefault(); ... }`.\n\n```jsx\nfunction Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault(); // page reload nahi hoga\n    console.log('submitted');\n  };\n  return <form onSubmit={handleSubmit}>...</form>;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "61",
    "category": "5. Forms (56–63)",
    "question_hi": "Multiple Inputs",
    "answer_hi": "Multiple inputs ko ek hi state object mein handle karne ke liye, har input ka `name` attribute set karke ek common `onChange` handler use karte hain, jo dynamically state ke us key ko update karta hai: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`.\n\n```jsx\nfunction Form() {\n  const [formData, setFormData] = useState({ name: '', email: '' });\n\n  const handleChange = (e) => {\n    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));\n  };\n\n  return (\n    <>\n      <input name=\"name\" value={formData.name} onChange={handleChange} />\n      <input name=\"email\" value={formData.email} onChange={handleChange} />\n    </>\n  );\n}\n```",
    "question_en": "Multiple Inputs",
    "answer_en": "To handle multiple inputs with a single state object, give each input a `name` attribute and use one common onChange handler that dynamically updates that key in state: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`.\n\n```jsx\nfunction Form() {\n  const [formData, setFormData] = useState({ name: '', email: '' });\n\n  const handleChange = (e) => {\n    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));\n  };\n\n  return (\n    <>\n      <input name=\"name\" value={formData.name} onChange={handleChange} />\n      <input name=\"email\" value={formData.email} onChange={handleChange} />\n    </>\n  );\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "62",
    "category": "5. Forms (56–63)",
    "question_hi": "File Upload",
    "answer_hi": "File upload ke liye `<input type=\"file\" onChange={handleFile} />` use hota hai. `e.target.files[0]` se selected file milti hai, jise state mein store karke ya FormData object banaakar API ko (multipart/form-data ke through) bheja jaata hai.\n\n```jsx\nfunction FileUpload() {\n  const [file, setFile] = useState(null);\n\n  const handleFile = (e) => setFile(e.target.files[0]);\n\n  const handleUpload = () => {\n    const formData = new FormData();\n    formData.append('file', file);\n    fetch('/upload', { method: 'POST', body: formData });\n  };\n\n  return <input type=\"file\" onChange={handleFile} />;\n}\n```",
    "question_en": "File Upload",
    "answer_en": "For file uploads, use `<input type=\"file\" onChange={handleFile} />`. `e.target.files[0]` gives you the selected file, which can be stored in state or added to a FormData object and sent to the API (via multipart/form-data).\n\n```jsx\nfunction FileUpload() {\n  const [file, setFile] = useState(null);\n\n  const handleFile = (e) => setFile(e.target.files[0]);\n\n  const handleUpload = () => {\n    const formData = new FormData();\n    formData.append('file', file);\n    fetch('/upload', { method: 'POST', body: formData });\n  };\n\n  return <input type=\"file\" onChange={handleFile} />;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "63",
    "category": "5. Forms (56–63)",
    "question_hi": "Form Libraries",
    "answer_hi": "Form libraries forms ko manage karna aasan banati hain — state, validation, aur errors ko handle karti hain taaki boilerplate code kam likhna pade. Popular libraries: **Formik**, **React Hook Form** (performance-friendly, less re-renders), aur validation ke liye **Yup** / **Zod** inke saath commonly use hoti hain.\n\n```jsx\nimport { useForm } from 'react-hook-form';\n\nfunction Form() {\n  const { register, handleSubmit } = useForm();\n  const onSubmit = (data) => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('email', { required: true })} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```",
    "question_en": "Form Libraries",
    "answer_en": "Form libraries make it easier to manage forms — they handle state, validation, and errors so you write less boilerplate code. Popular libraries: Formik, React Hook Form (performance-friendly, fewer re-renders), and Yup / Zod are commonly used alongside them for validation.\n\n```jsx\nimport { useForm } from 'react-hook-form';\n\nfunction Form() {\n  const { register, handleSubmit } = useForm();\n  const onSubmit = (data) => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('email', { required: true })} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```",
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
    "answer_hi": "- **React.memo**: pura component memoize karta hai — agar props change nahi hue, to component re-render nahi hota.\n- **useMemo**: ek computed value memoize karta hai — expensive calculation sirf dependencies change hone par dobara chalti hai.\n- **useCallback**: ek function reference memoize karta hai — taaki wo function har render par naya na bane (child components ko unnecessary re-render se bachata hai).\n\n```jsx\nconst Memoized = React.memo(Child);              // component memoize\nconst total = useMemo(() => compute(a, b), [a, b]); // value memoize\nconst onClick = useCallback(() => doThing(), []);   // function memoize\n```",
    "question_en": "React.memo vs useMemo vs useCallback",
    "answer_en": "- React.memo: memoizes an entire component — if the props haven't changed, the component doesn't re-render.\n- useMemo: memoizes a computed value — an expensive calculation only re-runs when its dependencies change.\n- useCallback: memoizes a function reference — so the function isn't recreated on every render (prevents unnecessary re-renders of child components).\n\n```jsx\nconst Memoized = React.memo(Child);              // component memoize\nconst total = useMemo(() => compute(a, b), [a, b]); // value memoize\nconst onClick = useCallback(() => doThing(), []);   // function memoize\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "73",
    "category": "7. Performance (70–78)",
    "question_hi": "Code Splitting",
    "answer_hi": "Code splitting ka matlab hai poore app ka JavaScript bundle ek saath load karne ke bajaye, use chhote-chhote parts (chunks) mein todna aur unhe zarurat padne par load karna. Isse initial load time kam hota hai. React mein ye `React.lazy()` + `Suspense`, ya dynamic `import()` ke through hota hai.\n\n```jsx\nimport { lazy, Suspense } from 'react';\n\nconst Settings = lazy(() => import('./Settings'));\n\n<Suspense fallback={<Loader />}>\n  <Settings />\n</Suspense>\n```",
    "question_en": "Code Splitting",
    "answer_en": "Code splitting means breaking the app's JavaScript bundle into smaller chunks instead of loading it all at once, and loading them only when needed. This reduces the initial load time. In React, it's done via React.lazy() + Suspense, or dynamic import().\n\n```jsx\nimport { lazy, Suspense } from 'react';\n\nconst Settings = lazy(() => import('./Settings'));\n\n<Suspense fallback={<Loader />}>\n  <Settings />\n</Suspense>\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "74",
    "category": "7. Performance (70–78)",
    "question_hi": "Debouncing",
    "answer_hi": "Debouncing ek technique hai jisme kisi function ko tabhi run hone diya jaata hai jab user ne action karna band kar diya ho ek fixed time ke liye (jaise typing rukne ke 300ms baad search API call karna). Isse unnecessary/frequent function calls avoid hoti hain.\n\n```jsx\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst debouncedSearch = debounce((q) => searchAPI(q), 300);\n```",
    "question_en": "Debouncing",
    "answer_en": "Debouncing is a technique where a function is only allowed to run after the user has stopped performing an action for a fixed amount of time (e.g. calling a search API 300ms after the user stops typing). This avoids unnecessary/frequent function calls.\n\n```jsx\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst debouncedSearch = debounce((q) => searchAPI(q), 300);\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "75",
    "category": "7. Performance (70–78)",
    "question_hi": "Throttling",
    "answer_hi": "Throttling ek technique hai jisme kisi function ko ek fixed time interval mein sirf ek baar run hone diya jaata hai, chahe event kitni baar bhi trigger ho (jaise scroll ya resize event ko har 200ms mein sirf ek baar handle karna). Isse performance improve hoti hai continuous events par.\n\n```jsx\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => (inThrottle = false), limit);\n    }\n  };\n}\n\nwindow.addEventListener('scroll', throttle(handleScroll, 200));\n```",
    "question_en": "Throttling",
    "answer_en": "Throttling is a technique where a function is only allowed to run once in a fixed time interval, no matter how many times the event is triggered (e.g. handling a scroll or resize event only once every 200ms). This improves performance for continuous events.\n\n```jsx\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => (inThrottle = false), limit);\n    }\n  };\n}\n\nwindow.addEventListener('scroll', throttle(handleScroll, 200));\n```",
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
    "answer_hi": "`<React.StrictMode>` ek development-only tool hai jo potential problems ko detect karne mein madad karta hai — jaise unsafe lifecycle methods, deprecated APIs, ya side effects. Ye components ko intentionally double-render karta hai (dev mein hi) taaki impure/unsafe code identify ho sake. Production build par iska koi effect nahi hota.\n\n```jsx\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    "question_en": "Strict Mode",
    "answer_en": "`<React.StrictMode>` is a development-only tool that helps detect potential problems — like unsafe lifecycle methods, deprecated APIs, or side effects. It intentionally double-renders components (only in dev) so impure/unsafe code can be identified. It has no effect on the production build.\n\n```jsx\n<React.StrictMode>\n  <App />\n</React.StrictMode>\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "79",
    "category": "8. State Management (79–86)",
    "question_hi": "Context API",
    "answer_hi": "Context API React ka built-in feature hai jo data ko component tree ke through manually har level par props pass kiye bina share karne deta hai (prop drilling avoid karta hai). `createContext()` se context banta hai, `<Context.Provider value={...}>` se value provide hoti hai, aur `useContext(Context)` se access hoti hai.\n\n```jsx\nconst ThemeContext = React.createContext();\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const { theme } = useContext(ThemeContext);\n  return <p>{theme}</p>;\n}\n```",
    "question_en": "Context API",
    "answer_en": "The Context API is a built-in React feature that lets you share data across the component tree without manually passing props through every level (it avoids prop drilling). `createContext()` creates a context, `<Context.Provider value={...}>` provides the value, and `useContext(Context)` accesses it.\n\n```jsx\nconst ThemeContext = React.createContext();\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const { theme } = useContext(ThemeContext);\n  return <p>{theme}</p>;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "80",
    "category": "8. State Management (79–86)",
    "question_hi": "Context vs Redux",
    "answer_hi": "Context API mainly data ko components ke beech share karne ke liye use hoti hai, bina props manually pass kiye. Redux application state ko store, actions aur reducers ke through manage karne ka zyada structured tarika deta hai. Redux useful hai jab state management complex ho jaaye.",
    "question_en": "Context vs Redux",
    "answer_en": "Context API is mainly used to share data between components without passing props manually. Redux provides a more structured way to manage application state using a store, actions and reducers. Redux is useful when state management becomes more complex.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "81",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux Basics",
    "answer_hi": "Redux ek state management library hai jo application data ko ek central place par store aur manage karti hai. Hum ise use karte hain jab multiple components ko same data chahiye hota hai. Ye data share karna aur state changes manage karna aasan banata hai.",
    "question_en": "Redux Basics",
    "answer_en": "Redux is a state management library used to store and manage application data in one central place. We use it when multiple components need the same data. It makes sharing data and managing state changes easier.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "82",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux Toolkit",
    "answer_hi": "Redux Toolkit Redux code likhne ka recommended tarika hai. Ye humein likhne wala code kam karta hai aur `configureStore` aur `createSlice` jaise useful functions deta hai, jisse Redux use karna aasan ho jaata hai.",
    "question_en": "Redux Toolkit",
    "answer_en": "Redux Toolkit is the recommended way to write Redux code. It reduces the amount of code we need to write and provides useful functions like `configureStore` and `createSlice`, making Redux easier to use.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "83",
    "category": "8. State Management (79–86)",
    "question_hi": "Store",
    "answer_hi": "Store wo central place hai jahan application ka Redux state store hota hai. Components store se data read kar sakte hain aur usse update karne ke liye actions dispatch kar sakte hain.",
    "question_en": "Store",
    "answer_en": "The store is the central place where the application's Redux state is stored. Components can read data from the store and dispatch actions to update it.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "84",
    "category": "8. State Management (79–86)",
    "question_hi": "Reducer",
    "answer_hi": "Reducer ek function hota hai jo current state aur ek action leta hai, aur decide karta hai ki state kaise change honi chahiye. Ye action ke basis par updated state return karta hai.",
    "question_en": "Reducer",
    "answer_en": "A reducer is a function that takes the current state and an action, then decides how the state should change. It returns the updated state based on the action.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "85",
    "category": "8. State Management (79–86)",
    "question_hi": "Action",
    "answer_hi": "Action ek object hota hai jo describe karta hai ki application mein kya hua. Isme usually ek `type` hota hai aur data bhi ho sakta hai. Example: ek action increment ya decrement operation describe kar sakta hai.",
    "question_en": "Action",
    "answer_en": "An action is an object that describes what happened in the application. It usually contains a `type` and may also contain data. For example, an action can describe an increment or decrement operation.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "86",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux Thunk",
    "answer_hi": "Redux Thunk ek middleware hai jo Redux mein async logic (jaise API calls) handle karne deta hai. Normally actions plain objects hote hain, lekin thunk ki wajah se hum ek function bhi dispatch kar sakte hain, jiske andar async code likh kar response aane par actual action dispatch kiya ja sakta hai.\n\n```jsx\nfunction fetchUser(id) {\n  return async (dispatch) => {\n    dispatch({ type: 'FETCH_START' });\n    const res = await fetch(`/api/users/${id}`);\n    const data = await res.json();\n    dispatch({ type: 'FETCH_SUCCESS', payload: data });\n  };\n}\n\n// Usage\ndispatch(fetchUser(1));\n```",
    "question_en": "Redux Thunk",
    "answer_en": "Redux Thunk is a middleware that lets you handle async logic (like API calls) in Redux. Normally actions are plain objects, but with thunk you can dispatch a function instead — inside which you write async code (like fetch), and dispatch the actual action once the response arrives.\n\n```jsx\nfunction fetchUser(id) {\n  return async (dispatch) => {\n    dispatch({ type: 'FETCH_START' });\n    const res = await fetch(`/api/users/${id}`);\n    const data = await res.json();\n    dispatch({ type: 'FETCH_SUCCESS', payload: data });\n  };\n}\n\n// Usage\ndispatch(fetchUser(1));\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "87",
    "category": "8. State Management (79–86)",
    "question_hi": "Dispatch",
    "answer_hi": "Dispatch ka use action ko Redux store tak bhejne ke liye hota hai. Reducer us action ko process karta hai aur updated state decide karta hai. Example: hum counter badhane ke liye ek action dispatch kar sakte hain.",
    "question_en": "Dispatch",
    "answer_en": "Dispatch is used to send an action to the Redux store. The reducer processes that action and determines the updated state. For example, we can dispatch an action to increase a counter.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "88",
    "category": "8. State Management (79–86)",
    "question_hi": "createSlice",
    "answer_hi": "`createSlice` Redux Toolkit ka function hai jo state ka ek slice banata hai. Hum iske andar uska name, initial state aur reducer functions define karte hain. Ye related action creators bhi automatically generate karta hai.",
    "question_en": "createSlice",
    "answer_en": "`createSlice` is a Redux Toolkit function that creates a slice of state. We define its name, initial state and reducer functions inside it. It also automatically generates the related action creators.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "89",
    "category": "8. State Management (79–86)",
    "question_hi": "useSelector",
    "answer_hi": "`useSelector` React component ke andar Redux store se data read karne ke liye use hota hai. Hum sirf wahi data select kar sakte hain jo humein chahiye, aur selected data change hone par component re-render ho sakta hai.",
    "question_en": "useSelector",
    "answer_en": "`useSelector` is used to read data from the Redux store inside a React component. We can select only the data that we need, and the component can re-render when that selected data changes.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "90",
    "category": "8. State Management (79–86)",
    "question_hi": "useDispatch",
    "answer_hi": "`useDispatch` humein React component ke andar dispatch function ka access deta hai. Hum isse Redux store ko actions bhejte hain, jaise counter badhana ya user information update karna.",
    "question_en": "useDispatch",
    "answer_en": "`useDispatch` gives us access to the dispatch function inside a React component. We use it to send actions to the Redux store, such as incrementing a counter or updating user information.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "91",
    "category": "8. State Management (79–86)",
    "question_hi": "Redux data flow",
    "answer_hi": "Pehle component ek action dispatch karta hai. Fir reducer us action ko process karke next state calculate karta hai. Store updated state save karta hai, aur changed data use karne wale components apni UI update kar lete hain.",
    "question_en": "Redux data flow",
    "answer_en": "First, a component dispatches an action. Then, the reducer processes that action and calculates the next state. The store saves the updated state, and components using the changed data update their UI accordingly.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "92",
    "category": "8. State Management (79–86)",
    "question_hi": "5 Redux words to remember",
    "answer_hi": "Bro, ye 5 words yaad rakho: Store, Action, Reducer, Dispatch, Selector.\n\n- Store: Where state is kept.\n- Action: What happened.\n- Reducer: How state changes.\n- Dispatch: Sends an action.\n- Selector: Reads data from the store.\n\nAgar ye paanch cheezein clearly samajh aa gayi, to baaki Redux kaafi aasan ho jaata hai.",
    "question_en": "5 Redux words to remember",
    "answer_en": "Bro, remember these 5 words: Store, Action, Reducer, Dispatch, Selector.\n\n- Store: Where state is kept.\n- Action: What happened.\n- Reducer: How state changes.\n- Dispatch: Sends an action.\n- Selector: Reads data from the store.\n\nIf you understand these five clearly, the rest of Redux becomes much easier.",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "87",
    "category": "9. Routing (87–92)",
    "question_hi": "React Router",
    "answer_hi": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.\n\n```jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n<BrowserRouter>\n  <Routes>\n    <Route path=\"/\" element={<Home />} />\n    <Route path=\"/about\" element={<About />} />\n  </Routes>\n</BrowserRouter>\n```",
    "question_en": "React Router",
    "answer_en": "It is a library used to navigate between different pages without reloading the website. It allows us to create multiple pages in a single application and switch between them using URLs. This makes the app feel fast and smooth like a real application.\n\n```jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n<BrowserRouter>\n  <Routes>\n    <Route path=\"/\" element={<Home />} />\n    <Route path=\"/about\" element={<About />} />\n  </Routes>\n</BrowserRouter>\n```",
    "source": "doc",
    "topic": "react"
  },
  {
    "num": "88",
    "category": "9. Routing (87–92)",
    "question_hi": "BrowserRouter",
    "answer_hi": "`BrowserRouter` React Router ka ek component hai jo app ko HTML5 History API use karke routing capability deta hai — clean URLs (bina `#` ke) allow karta hai. Poore app ko `<BrowserRouter>` se wrap kiya jaata hai taaki routing kaam kare.\n\n```jsx\nimport { BrowserRouter } from 'react-router-dom';\n\n<BrowserRouter>\n  <App />\n</BrowserRouter>\n```",
    "question_en": "BrowserRouter",
    "answer_en": "BrowserRouter is a React Router component that gives the app routing capability using the HTML5 History API — it allows clean URLs (without #). The whole app is wrapped with `<BrowserRouter>` for routing to work.\n\n```jsx\nimport { BrowserRouter } from 'react-router-dom';\n\n<BrowserRouter>\n  <App />\n</BrowserRouter>\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "89",
    "category": "9. Routing (87–92)",
    "question_hi": "Routes",
    "answer_hi": "`<Routes>` ek container/wrapper component hai jiske andar saare `<Route>` elements define kiye jaate hain. Ye current URL ke match hone wale sabse best-matching `<Route>` ko render karta hai.\n\n```jsx\n<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/about\" element={<About />} />\n</Routes>\n```",
    "question_en": "Routes",
    "answer_en": "`<Routes>` is a container/wrapper component inside which all the `<Route>` elements are defined. It renders the best-matching `<Route>` for the current URL.\n\n```jsx\n<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/about\" element={<About />} />\n</Routes>\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "90",
    "category": "9. Routing (87–92)",
    "question_hi": "Route",
    "answer_hi": "`<Route>` ek single path aur uske corresponding component ka mapping define karta hai: `<Route path=\"/about\" element={<About />} />`. Jab URL us path se match karta hai, to specified component render hota hai.\n\n```jsx\n<Route path=\"/about\" element={<About />} />\n```",
    "question_en": "Route",
    "answer_en": "`<Route>` defines a mapping between a single path and its corresponding component: `<Route path=\"/about\" element={<About />} />`. When the URL matches that path, the specified component is rendered.\n\n```jsx\n<Route path=\"/about\" element={<About />} />\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "91",
    "category": "9. Routing (87–92)",
    "question_hi": "Link vs NavLink",
    "answer_hi": "- **Link**: page reload kiye bina navigation ke liye use hota hai — normal `<a>` tag ki jagah: `<Link to=\"/about\">About</Link>`.\n- **NavLink**: `Link` jaisa hi hai, lekin ye automatically active route ko style karne ki ability deta hai (jaise `isActive` class), jo mostly navigation menus mein current page highlight karne ke liye use hota hai.\n\n```jsx\nimport { Link, NavLink } from 'react-router-dom';\n\n<Link to=\"/about\">About</Link>\n\n<NavLink to=\"/about\" className={({ isActive }) => isActive ? 'active' : ''}>\n  About\n</NavLink>\n```",
    "question_en": "Link vs NavLink",
    "answer_en": "- Link: used for navigation without a page reload — instead of a normal `<a>` tag: `<Link to=\"/about\">About</Link>`.\n- NavLink: same as Link, but it automatically gives you the ability to style the active route (like an `isActive` class), mostly used to highlight the current page in navigation menus.\n\n```jsx\nimport { Link, NavLink } from 'react-router-dom';\n\n<Link to=\"/about\">About</Link>\n\n<NavLink to=\"/about\" className={({ isActive }) => isActive ? 'active' : ''}>\n  About\n</NavLink>\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "92",
    "category": "9. Routing (87–92)",
    "question_hi": "useNavigate",
    "answer_hi": "`useNavigate` ek hook hai jo programmatically navigate karne ke liye use hota hai (jaise button click ya form submit ke baad redirect karna): `const navigate = useNavigate(); navigate(\"/dashboard\");`\n\n```jsx\nimport { useNavigate } from 'react-router-dom';\n\nfunction LoginButton() {\n  const navigate = useNavigate();\n  const handleLogin = () => navigate('/dashboard');\n  return <button onClick={handleLogin}>Login</button>;\n}\n```",
    "question_en": "useNavigate",
    "answer_en": "useNavigate is a hook used to navigate programmatically (e.g. redirecting after a button click or form submit): `const navigate = useNavigate(); navigate(\"/dashboard\");`\n\n```jsx\nimport { useNavigate } from 'react-router-dom';\n\nfunction LoginButton() {\n  const navigate = useNavigate();\n  const handleLogin = () => navigate('/dashboard');\n  return <button onClick={handleLogin}>Login</button>;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "93",
    "category": "10. APIs (93–96)",
    "question_hi": "Fetch API",
    "answer_hi": "`fetch()` ek built-in browser API hai jo HTTP requests bhejne ke liye use hota hai. Ye ek Promise return karta hai: `fetch(url).then(res => res.json()).then(data => ...)`. Errors ko `.catch()` se handle kiya jaata hai, aur note — fetch sirf network error par reject hota hai, HTTP error status (404, 500) par nahi.\n\n```jsx\nfetch('/api/users')\n  .then((res) => res.json())\n  .then((data) => console.log(data))\n  .catch((err) => console.error(err));\n```",
    "question_en": "Fetch API",
    "answer_en": "`fetch()` is a built-in browser API used to send HTTP requests. It returns a Promise: `fetch(url).then(res => res.json()).then(data => ...)`. Errors are handled with `.catch()` — note that fetch only rejects on a network error, not on an HTTP error status (404, 500).\n\n```jsx\nfetch('/api/users')\n  .then((res) => res.json())\n  .then((data) => console.log(data))\n  .catch((err) => console.error(err));\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "94",
    "category": "10. APIs (93–96)",
    "question_hi": "Axios",
    "answer_hi": "Axios ek popular third-party library hai jo HTTP requests karne ke liye use hoti hai. Fetch ke comparison mein isme automatic JSON parsing, better error handling (HTTP error status par bhi reject hoti hai), request/response interceptors, aur timeout support built-in milta hai — isliye ye developers mein zyada popular hai.\n\n```jsx\nimport axios from 'axios';\n\naxios.get('/api/users')\n  .then((res) => console.log(res.data))\n  .catch((err) => console.error(err));\n```",
    "question_en": "Axios",
    "answer_en": "Axios is a popular third-party library used to make HTTP requests. Compared to fetch, it comes with automatic JSON parsing, better error handling (it rejects on HTTP error status too), request/response interceptors, and built-in timeout support — which is why it's more popular among developers.\n\n```jsx\nimport axios from 'axios';\n\naxios.get('/api/users')\n  .then((res) => console.log(res.data))\n  .catch((err) => console.error(err));\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "95",
    "category": "10. APIs (93–96)",
    "question_hi": "API Error Handling",
    "answer_hi": "API calls ke errors handle karne ke liye try-catch (async/await ke saath) ya `.catch()` (promises ke saath) use kiya jaata hai. Achi practice hai: network errors, HTTP status errors (4xx/5xx), aur unexpected errors ko alag-alag handle karna, aur user ko meaningful error message dikhana (loading/error state ke through).\n\n```jsx\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/users');\n    if (!res.ok) throw new Error('HTTP error: ' + res.status);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error('Failed to fetch:', err.message);\n  }\n}\n```",
    "question_en": "API Error Handling",
    "answer_en": "API call errors are handled using try-catch (with async/await) or .catch() (with promises). Good practice is to handle network errors, HTTP status errors (4xx/5xx), and unexpected errors separately, and show the user a meaningful error message (via loading/error state).\n\n```jsx\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/users');\n    if (!res.ok) throw new Error('HTTP error: ' + res.status);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error('Failed to fetch:', err.message);\n  }\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "96",
    "category": "10. APIs (93–96)",
    "question_hi": "Loading & Error State",
    "answer_hi": "API calls ke dauran UI ko teen states mein manage karna common practice hai: `loading` (data fetch ho raha hai — spinner dikhana), `error` (request fail hui — error message dikhana), aur `data` (success — actual content dikhana). Ye generally `useState` (ya React Query jaisi library) se manage kiya jaata hai.\n\n```jsx\nfunction Users() {\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/users')\n      .then((res) => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, []);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error!</p>;\n  return <p>{JSON.stringify(data)}</p>;\n}\n```",
    "question_en": "Loading & Error State",
    "answer_en": "It's common practice to manage the UI in three states during API calls: loading (data is being fetched — show a spinner), error (the request failed — show an error message), and data (success — show the actual content). This is usually managed with useState (or a library like React Query).\n\n```jsx\nfunction Users() {\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/users')\n      .then((res) => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, []);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error!</p>;\n  return <p>{JSON.stringify(data)}</p>;\n}\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "97",
    "category": "11. Advanced (97–100)",
    "question_hi": "HOC (Higher Order Component)",
    "answer_hi": "HOC ek function hota hai jo ek component leta hai aur ek naya, enhanced component return karta hai: `const EnhancedComponent = withSomething(OriginalComponent)`. Isse common logic (jaise authentication check, data fetching) ko multiple components mein reuse kiya ja sakta hai bina code duplicate kiye.\n\n```jsx\nfunction withLoading(Component) {\n  return function Wrapped(props) {\n    if (props.isLoading) return <p>Loading...</p>;\n    return <Component {...props} />;\n  };\n}\n\nconst UserListWithLoading = withLoading(UserList);\n```",
    "question_en": "HOC (Higher Order Component)",
    "answer_en": "An HOC is a function that takes a component and returns a new, enhanced component: `const EnhancedComponent = withSomething(OriginalComponent)`. This lets you reuse common logic (like an authentication check or data fetching) across multiple components without duplicating code.\n\n```jsx\nfunction withLoading(Component) {\n  return function Wrapped(props) {\n    if (props.isLoading) return <p>Loading...</p>;\n    return <Component {...props} />;\n  };\n}\n\nconst UserListWithLoading = withLoading(UserList);\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "98",
    "category": "11. Advanced (97–100)",
    "question_hi": "Render Props",
    "answer_hi": "Render Props ek pattern hai jisme ek component ek prop leta hai jiski value ek function hoti hai, aur wo function batata hai ki kya render karna hai. Isse logic ko components ke beech share kiya ja sakta hai: `<DataProvider render={data => <Display data={data} />} />`. (Aaj-kal iski jagah zyadatar custom hooks use hote hain.)\n\n```jsx\nfunction DataProvider({ render }) {\n  const [data] = useState([1, 2, 3]);\n  return render(data);\n}\n\n<DataProvider render={(data) => <List items={data} />} />\n```",
    "question_en": "Render Props",
    "answer_en": "Render Props is a pattern where a component takes a prop whose value is a function, and that function decides what to render. This lets you share logic between components: `<DataProvider render={data => <Display data={data} />} />`. (These days, custom hooks are mostly used instead.)\n\n```jsx\nfunction DataProvider({ render }) {\n  const [data] = useState([1, 2, 3]);\n  return render(data);\n}\n\n<DataProvider render={(data) => <List items={data} />} />\n```",
    "source": "written",
    "topic": "react"
  },
  {
    "num": "99",
    "category": "11. Advanced (97–100)",
    "question_hi": "Portals",
    "answer_hi": "Portals (`ReactDOM.createPortal`) ek feature hai jisse hum kisi child component ko uske parent DOM hierarchy se bahar, kisi doosre DOM node mein render kar sakte hain — jabki React tree mein wo logically andar hi rehta hai. Ye modals, tooltips, aur dropdowns banane mein useful hota hai (taaki CSS overflow/z-index issues na aayein).\n\n```jsx\nimport { createPortal } from 'react-dom';\n\nfunction Modal({ children }) {\n  return createPortal(\n    <div className=\"modal\">{children}</div>,\n    document.getElementById('modal-root')\n  );\n}\n```",
    "question_en": "Portals",
    "answer_en": "Portals (ReactDOM.createPortal) let you render a child component outside its parent's DOM hierarchy, into a different DOM node — while it logically stays inside the React tree. This is useful for building modals, tooltips, and dropdowns (to avoid CSS overflow/z-index issues).\n\n```jsx\nimport { createPortal } from 'react-dom';\n\nfunction Modal({ children }) {\n  return createPortal(\n    <div className=\"modal\">{children}</div>,\n    document.getElementById('modal-root')\n  );\n}\n```",
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
    "question_hi": "Event Bubbling & Capturing",
    "answer_hi": "- **Bubbling**: event pehle sabse andar wale (target) element par trigger hota hai, phir upar ki taraf parent elements tak \"bubble\" karta hai.\n- **Capturing**: event ka opposite flow — sabse upar (root) se shuru hokar neeche target element tak jaata hai. Default JS mein bubbling use hoti hai; capturing enable karne ke liye `addEventListener(event, fn, true)` use hota hai.\n\n```jsx\n// Bubbling (default)\nchild.addEventListener('click', handler);\n\n// Capturing\nparent.addEventListener('click', handler, true);\n```",
    "question_en": "Event Bubbling & Capturing",
    "answer_en": "- Bubbling: the event first triggers on the innermost (target) element, then \"bubbles\" up through its parent elements.\n- Capturing: the opposite flow — it starts at the root and goes down to the target element. By default, JS uses bubbling; to enable capturing, use `addEventListener(event, fn, true)`.\n\n```jsx\n// Bubbling (default)\nchild.addEventListener('click', handler);\n\n// Capturing\nparent.addEventListener('click', handler, true);\n```",
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
    "question_hi": "REST API",
    "answer_hi": "REST (Representational State Transfer) is a way of designing APIs where resources are accessed through URLs (endpoints) using standard HTTP methods such as GET, POST, PUT/PATCH, and DELETE.",
    "question_en": "REST API",
    "answer_en": "REST (Representational State Transfer) is a way of designing APIs where resources are accessed through URLs (endpoints) using standard HTTP methods such as GET, POST, PUT/PATCH, and DELETE.",
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
    "answer_hi": "JWT (JSON Web Token) ek compact, self-contained token hota hai jo user ki identity/claims ko securely represent karta hai. Login ke baad server ek JWT generate karke client ko deta hai, aur client har request ke saath (usually `Authorization` header mein) ye token bhejta hai, jisse server verify karke user ko authenticate karta hai — bina session store kiye (stateless).\n\n```jsx\n// Client side har request mein token bhejta hai\nfetch('/api/data', {\n  headers: { Authorization: `Bearer ${token}` },\n});\n```",
    "question_en": "JWT Authentication",
    "answer_en": "JWT (JSON Web Token) is a compact, self-contained token that securely represents a user's identity/claims. After login, the server generates a JWT and gives it to the client, and the client sends this token with every request (usually in the Authorization header), which the server verifies to authenticate the user — without storing a session (stateless).\n\n```jsx\n// Client side har request mein token bhejta hai\nfetch('/api/data', {\n  headers: { Authorization: `Bearer ${token}` },\n});\n```",
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
    "answer_hi": "Tailwind ek utility-first CSS framework hai, jisme pre-defined utility classes directly HTML/JSX mein use karke styling ki jaati hai (jaise `class=\"bg-blue-500 text-white p-4 rounded-lg\"`), custom CSS likhne ke bajaye. Isse development fast hota hai, consistent design milta hai, aur unused CSS build ke time automatically remove ho jaata hai (purge/JIT mode).\n\n```jsx\n<button className=\"bg-blue-500 text-white p-4 rounded-lg\">\n  Click me\n</button>\n```",
    "question_en": "Tailwind CSS Basics",
    "answer_en": "Tailwind is a utility-first CSS framework, where you style directly in HTML/JSX using pre-defined utility classes (like `class=\"bg-blue-500 text-white p-4 rounded-lg\"`), instead of writing custom CSS. This makes development faster, gives a consistent design, and unused CSS is automatically removed at build time (purge/JIT mode).\n\n```jsx\n<button className=\"bg-blue-500 text-white p-4 rounded-lg\">\n  Click me\n</button>\n```",
    "source": "written",
    "topic": "react"
  }
];