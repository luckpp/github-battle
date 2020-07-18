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
