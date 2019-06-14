module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "module-resolver", {
        "alias": {
          "react": "./node_modules/preact/compat",
          "react-dom": "./node_modules/preact/compat"
        }
      }
    ]
  ]
}
