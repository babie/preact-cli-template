import { render } from 'react-dom'
import { App } from './App'

if (module.hot) {
  require('preact/debug')
}

const app = document.getElementById('app')
if (app) {
  render(App, app)
}
