# Summary of the notes

- What is state ?
- Why we need state ?
- What is hooks ?
- Types of hooks

# Explanation

## What is state ?

- State is a way to store and manage data that can change over time and affects how the compinent renders
- We define state using the useState hook, which allows us to set an initial value and provides a way to update that value.

## Why we need state ?

- To change a value of a variable usin function
- We use useState hook to change any variable alue using function.

## What is hook ?

- Hooks let us use state and othe react features witout writing a class.

## Types of hook -

### 1. useState() :-

- useState hook allows us to track state in a functional components.
- State generally refers to data ir properties that need to be tracking in an application.
- Example:-
  `const [data, setData] = useState("")`

  - We set the first value of the data as empty string.

- Question :- What will be the output of the following question ?

  ```javascript
  import { useState } from "react";

  const App = () => {
    const counter = useState(0);
    console.log(counter);
    return <></>;
  };
  export default App;
  ```

  - The output should be [0, f] where 0 is the initial value of counter and f stands for a function which allows to change the value of the counter.

- Question 2 :- What will be the output of the following code

  ```javascript
  import { useState } from "react";

  const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => (count += 1);
    const decrement = () => (count -= 1);

    return (
      <div>
        <h1> {count} </h1>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    );
  };

  export default App;
  ```

  - In browser we can see two button and above the buttons a 0 value will be shown when we click on any button but the value does not seem to change on browser screen but actually the value changes behind the scene. we can use a console.log to see the value change

  - But we here do not use setCount function so the browser does not re render to show the value.
  - setCount function changes and re-render so we are able to show the changing value in the browser screen.

#### **Sharing useState:-**

```javascript
import { useState } from "react";
import ComponentOne from "./ComponentOne.jsx"

const App = () => {
  const  [count, setCount] = useState(0)
  return (
    <>
      <ComponentOne count= {count} onClickHandler = {() => setCount(count+1)}>
    </>
  )
}

export default App
```

```javascript
const ComponentOne = ({count, onClickHandler} => {
  const handleClick = () => onClickHandle()
  return(
    <div>
      <p> {count} </p>
      <button onClick = {handleClick}> + </button>
    </div>
  )
})

export default ComponentOne
```

### 2. usePortal hook :-

#### portal :-

- Portal is a feature that allows us to render a child component into a DOM node that exirts ourside the hierarchy of the parent component.
- This can be useful for scenarios like modlas, tooltips or dropdowns, where we want to break out of the usual parent child structure and redner ina different part of the DOM.

- Syntax :- `ReactDOM.createPortal(child, container)`

- We can use another root level using createPortal method.

  ```html
  <body>
    <div id="root"></div>
    <div id="modal"></div>
  </body>
  ```

  ```javascript
  <!-- modal.jsx -->

  import React from "react"
  import {createPortal} from "react-dom"

  const Modal = ({children, onClose}) => {
    return createPortal(
      <div>
        {children}
        <button onClick = {onClose}> close </button>
      </div>,

      document.querySelector("#modal")
    )
  }
  ```

#### What is usePortal?

- usePortal is not a built-in React hook, but it's a common custom hook or utility used to render a component outside the normal DOM tree, typically to:

- Render modals

- Tooltips

- Popovers

- Notifications

### 3. useEffect :-

- It allows us to perform side effects in out component.
- Example :- fetching data, directly updating DOM.
- Syntax :- `useEffect(() => {...}, [])`
- The hook provides an arrow function and a dependency array.
- If we don't pass any array then the hooks run on every single render.

#### **Question 1:- Can we use useEffect inside any conditional statement ?**

- No, because when we put on useEffect hook inside any condtion, it may skip on some renders and not on others.
- Example :-

  ```javascript
  if (valuee > 0) {
    useEffect(() => {
      console.log("huluhuluhulu");
      documenet.title = `Increment ${valuee}`;
    }),
      [];
  }
  ```

  - The above code is wrong
  - It's correct way :-

  ```javascript
  useEffect(() => {
    if (valuee > 0) {
      console.log("huluhuluhulu");
      documenet.title = `Increment ${valuee}`;
    }
  }, [valuee]);
  ```

  - Example:-

  ```javascript
  import React, { useEffect, useState } from "react";

  const App = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
      setValue(value + 1);
    };

    useEffect(() => {
      console.log("Called useEffect hook");
      document.title = `Increment ${value}`;
    });
    return (
      <div>
        <h2>{value}</h2>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };

  export default App;
  ```

  - In this case we can see the value increase and the title of the project the value changes according to increment value but first page rendering value changes then after some fraction of second the title value changes.
    > **WHY ?** :-
  - Because the useEffect runs after the DOM updation

  ```javascript
  import React, { useEffect, useState } from "react";

  const App = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
      setValue(value + 1);
    };

    useEffect(() => {
      console.log("Called useEffect hook");
      document.title = `Increment ${value}`;
    }, []);
    return (
      <div>
        <h2>{value}</h2>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };

  export default App;
  ```

  - In this case first time the useEffect run then it stops due the empty array

  ```javascript
  import React, { useEffect, useState } from "react";

  const App = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
      setValue(value + 1);
    };

    useEffect(() => {
      console.log("Called useEffect hook");
      document.title = `Increment ${value}`;
    });
    return (
      <div>
        <h2>{value}</h2>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };

  export default App;
  ```

  - In this case both the rendering value and the title value changes when the value changed only.

  > When we pass value in dep array then the useEffect runs for first time and then when value changes then but if we do not pass any dep array whatever changes then the useEffect runs means on every single render.

  ```javascript
  import React, { useEffect, useState } from "react";

  const App = () => {
    let [value, setValue] = useState(0);

    const handleClick = () => {
      value += 1;
    };

    useEffect(() => {
      console.log("Called useEffect hook");
      document.title = `Increment ${value}`;
      console.log(value);
    }, [value]);
    return (
      <div>
        <h2>{value}</h2>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };

  export default App;
  ```

  - In this case the value neither change on rendering page nor the title.
  - Because without useState the react can not know that value is changed.

### 4. useContext and createContext :-

#### context API :-

- Context API is a feature that allows us to manage and share state across our components tree without passing props down mamually at every level.
- It is useful for that scenarios where we need to share data ir functions across many components, especially when the components are deeply nested.
- Example:-

```javascript
<!-- App.jsx -->
// src/App.jsx
import React from 'react'
import CompoA from './components/CompoA'
import Data from './DataContext'

const App = () => {
  const name = 'priyansu'

  return (
    <div>
      <Data.Provider value={name}>
        <CompoA />
      </Data.Provider>
    </div>
  )
}

export default App
```

```javascript
<!-- Datacontext.jsx -->
// src/DataContext.js
import { createContext } from 'react'

const Data = createContext()

export default Data
```

```javascript
<!-- CompoA.jsx -->
import React from 'react'
import CompoB from './CompoB'

const CompoA = () => {
return (
  <div>
    <CompoB />
  </div>
)
}

export default CompoA
```

```javascript
import React from "react";
import CompoC from "./CompoC";

const CompoB = () => {
  return (
    <div>
      <CompoC />
    </div>
  );
};

export default CompoB;
```

```javascript
import React, { useContext } from "react";
import Data from "../DataContext";

const CompoC = () => {
  const name = useContext(Data);
  return <div>My Name: - {name}</div>;
};

export default CompoC;
```

> **useContext hook allows us to access the context values provided by a context object directly within a functional component.
> Context provides a way to pass data through the component tree without having to pass props down manually at every level.**

### 5. useReducer :-
