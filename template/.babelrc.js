module.exports = {
  "presets": [
    "@babel/preset-react",
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
