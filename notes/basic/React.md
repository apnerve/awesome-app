# Just Enough React
React is a JavaScript library for rendering UI. These notes contain just enough information to be able to understand and build UI using React

Let's go 🚀
- React lets you combine atomic units (buttons, text, images etc.) into reusable and nestable units called components.
- A component has its own logic and appearance
- You describe the UI you want to see for different visual states of your component

[Thinking in React](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy) section helps you learn how to break an application into components.

## Components
Components are one of the core React concepts. 
In React, a component is just a plain JavaScript function that may receive some data as arguments and return JSX markup.

#### Create a component
```jsx
function UserCard() {
    return (
        <div>John</div> // This HTML-like looking syntax is JSX
    )
}
```
#### Render a component
```jsx
<UserCard />
```

### JSX
JSX is a JavaScript syntax extension that allows you to describe the UI. It looks like HTML but has a few rules:

1. Should return a single root element. eg.
```jsx
// Incorrect
function UserCard() {
    return (
        <div>John</div>
        <div>Alice</div>
    )
}

// Correct
function UserCard() {
    return (
        <div>
            <div>John</div>
            <div>Alice</div>
        </div>
    )
}

// A lot better
function UserCard() {
    return (
        <>
            <div>John</div>
            <div>Alice</div>
        </>
    )
}
```
2. All tags have to be explicitly closed
3. All attributes to be in camelCase eg. `className`

This empty `<>` tag is called a [Fragment](https://react.dev/reference/react/Fragment)

We can add a little JavaScript logic or reference a variable inside JSX using curly braces `{}`. eg.
```jsx
// Display an asterix if the user role is admin
function UserCard() {
    const name = "John"
    const isAdmin = true

    return (
        <div>
            {isAdmin ? <span>*</button> : null}
            <span>{name}</span>
        </div>
    )
}
```
**Protip**: Don't use any other JavaScript expression apart from ternary operator inside JSX

### Props
Components use `props` to communicate with each other. They look like regular HTML attributes but you can pass any JavaScript value through them like objects, arrays, functions (remember: components are also functions)

#### Passing props
```jsx
function UserCard() {
    const name = "John"
    const isAdmin = true

    return (
        <div>
            {isAdmin ? <span>*</button> : null}
            <span className="bold">{name}</span> // className is a prop passed to in-built `span` component
        </div>
    )
}
```
We could pass some props to the UserCard component like this
```jsx
<UserCard name="John" isAdmin={true} />
```
#### Receiving props
The props are just parameters passed to the component and hence can be [destructured](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) like this
```jsx
function UserCard({ name, isAdmin }) {
    return (
            <div>
                {isAdmin ? <span>*</button> : null}
                <span className="bold">{name}</span>
            </div>
        )
}
```

### State: A component's Memory
- The minimal set of changing data that your app needs to remember
- This data is retained between renders
- When this data is changed, React re-renders the component with the new data

**Problem**: Since local variables don't persist between renders, they can't be used as a state. If we use global variables, React still won't know that the value has changed and hence can't re-render the component with the new value.

**Solution**: React provides a way to declare and update a state variable via a `useState` hook

```jsx
const [ color, setColor ] = useState("red")

// You could also declare it as 
// const [x, y] = useState("red")
// but that won't make any sense when you read the code
```
`useState` expects a parameter for the initial state and returns an array (of length 2) that can be [destructured](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) into the state variable and state setter function.

- `color` is a state variable
- `setColor` is the state setter function

Whenever `setColor` is called, React triggers a re-render

**Protip**:
- Hooks like `useState` are just functions, but it’s helpful to think of them as unconditional declarations about your component’s needs.
- You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

## References and useful links
- [Thinking about the UI declaratiely](https://react.dev/learn/reacting-to-input-with-state#thinking-about-ui-declaratively)
- [Principles for structuring state](https://react.dev/learn/choosing-the-state-structure#principles-for-structuring-state)
- [State Machines in React](https://mastery.games/post/state-machines-in-react/) - Even if you don't use xstate library, this article digs deeper into how using state machines concepts help us structure our states better
- [Extracting state logic into a reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) - Don't jump into using Redux/mobX without reading this first

## Useful and well-maintained libraries
- [React Hook Form](https://react-hook-form.com/) - Performant form library that uses W3C standard form validations
- [TanStack Query](https://tanstack.com/query/v3) - A data fetching library that makes it easy to fetch data declaratively, cache, implement pagination etc.
- [Vite](https://vitejs.dev/guide/) - A better boilerplate than CRA that is used in production by most companies.