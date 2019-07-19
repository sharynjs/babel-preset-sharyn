# 🌹 babel-preset-sharyn

## Usage

In `package.json`, use:

```json
  "babel": {
    "presets": ["sharyn"]
  }
```

## Presets

The presets used are:

```
@babel/preset-env
@babel/preset-react
@babel/preset-flow
```

## Plugins

The plugins used are:

```
@babel/plugin-proposal-nullish-coalescing-operator
@babel/plugin-proposal-optional-chaining
@babel/plugin-proposal-optional-catch-binding
babel-plugin-module-resolver
```

In development only:

```
babel-plugin-flow-react-proptypes
react-hot-loader/babel
```
