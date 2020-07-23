# github-battle

Steps for creating a React app are the following:
- create a ES6 class that extends `React.Component`
- use the `render()` method in order to describe the UI for the component using JSX
  - JSX is always going to get compiled to `React.createElement(...)` invocations (typically) via Babel.
- use `ReactDOM.render()` in order to specify the element that we want to render and where that element should be rendered
- set-up **webpack** and **babel**
  - create and update the `webpack.config.js`
  - NOTE: modue.rules.use [] array will execute the loaders in reverse order
  - the loaders act similar to pre-processors
  - the plugins section run after the code has been transformed by the loaders and packed
- update the `package.json` in order to tell **babel** what transformations to make and we do that with the presets array
```JSON
"babel": {
  "presets": [
    "@babel/preset-env", // makes sure that the JavaScript we write is compatible with the browser we care
    "@babel/preset-react" // will make sure to transform React code that the browser isn't be able to understand to normal JavaScript code
  ]
}
```
- update the `package.json` scripts section:
```JSON
"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server"
}
```


# Notes

## Validating the Recat component properties

The validation of the props passe into a component can be done using the `prop-types` package.

## The component lifecycle

### 1. When the component gets added to the DOM (mounting)
- set the component initial state
  - use the `constructor()`
- render a DOM node
  - use the `render()` method
- make an AJAX request
  - inside the `componentDidMount()` method
  - it is invoked only once when the component is mounted to the DOM
- set up listeners (i.e. via Websockets or Firebase)

### 2. When the component updates its state or receives new data via props (updating)
- re-render the UI with the updated state and props
  - occurs in `render()` and `setState()`
- re-fetching data
  - can occur in `componentDidUpdate()`
- re-setting a listener
  - can occur in `componentDidUpdate()`

### 3. When the component gets removed from the DOM (unmounting)

- set up a listener in `componentDidMount()` in order cleanup, remove listeners, ...

## Controlled vs Uncontrolled Components

- in controlled components the React components are in charge of the state (prefere this approach)
- in uncntrolled components the state is stored and handled by the DOM and is grabed whenever is needed, for exaple when pressing the **submit** button on a form

NOTE: The ideea of React is that you have a set of components that each manage their own state.

## Children in React

Instead of passing data into components using attributes you can pass data using opening and closing tags:

```html
<Header>You can have text between tags.</Header>

<Container>
  <h1>You can also have</h1>
  <p>elements between tags</p>
</Container>
```

```jsx
function Header ({ children }) {
  return (
    <h1 className='header'>
      {children}
    </h1>
  )
}

function Container ({ children }) {
  return (
    <div>
      <Logo />
      {children}
    </div>
  )
}
```

NOTE: **Whatever is between the opening and closing tag of an element, children will be accessible inside of the component via `props.children`.**

## Default parameters

### Class components

```jsx
class StarRating extends React.Component {
  ...
}

StarRating.defaultProps = {
  color: '#ECB244'
}
```

### Function components

```jsx
function StarRating ({ color = '#ECB244' }) {
  ...
}
```

## Higher-Order Component

- is a component
- takes in a component as an argument
- returns a new component
- the component it returns can render the original component that was passed in

```jsx
function higherOrderComponent (Component) {
  return class extends React.Component {
    render() {
      return <Component />
    }
  }
}
```

The example below is for a HOC that adds hoover capability to a component:

```jsx
function withHover(Component, propName = 'hovering') {
  return class WithHover extends React.Component {
    state = { hovering: false }
    mouseOver = () => this.setState({ hovering: true })
    mouseOut = () => this.setState({ hovering: false })
    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props,
      }
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  }
}
```