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