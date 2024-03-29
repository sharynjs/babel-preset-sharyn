module.exports = () => ({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-optional-catch-binding',
    ['babel-plugin-module-resolver', { root: ['./src'] }]
  ],
  env: {
    development: {
      plugins: ['babel-plugin-flow-react-proptypes', 'react-hot-loader/babel'],
    },
  },
})
