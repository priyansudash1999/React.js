# Summary of the notes

- Components of react.js
- JSX
- Expression in jsx
- Lists

# Explanation

## Components

- React component is a function which first letter should be uppercase.
- If the first letter is lower case then you should consider it as js function.

  ```javascript
  const App = () => {
    return <div>App</div>;
  };

  export default App;
  ```

- Using export keyword to use in another file after doing import.
- In the above code case we will use the App component in main.jsx which is the main component of react.
- When we have more than one component to render we use curly braces "{}"

  ```javascript
  const Header = () => {
    return <div> Header </div>;
  };

  const Footer = () => {
    return <div> Footer </div>;
  };

  export { Header, Footer };
  ```

## JSX :-

- JSX is combination of Javascript + XML
- Where we can write html in js.
- JSX allows us to write html in react.
- But if we think about the behind the scene that is not html that is just sugar coating of html above js code.

- **We can always return one parent element from a component**
- We use class in js but we use className in react
- We use htmlFor instead of for in form.

## Expression in jsx:-

- With jsx we can write expressions to handle curly braces.
- The expression can be a react variable, property or any ortehr valid js expression
- JSX will execute the expression and return the result.
  ```javascript
  const App = () => {
    return <div> {2+2} </div>   <!-- This answer is 4 -->
  }
  ```

## Lists :-

- In react, we will render lists with some type of loop.
- The js map() array method is generally preferred method.

  ```javascript
  const App = () => {
    const nums = [1, 2, 3, 4];
    return (
      <main>
        {nums.map((num) => (
          <ul key={Math.random()}>
            <li>{num}</li>
          </ul>
        ))}
      </main>
    );
  };
  ```

  > **Some points to remmber**

  - If we use curly braces after the arrow key we need return keyword and if we use parenthesis we do not use return keyword. **Same in map method also**

- In case of list we need unique key, so here we use random function.
