import { render } from 'react-dom'
import { App } from './App'
import 'normalize.css'
import './assets/css/style.css'

if (module.hot) {
  require('preact/debug')
}

const app = document.getElementById('app')
if (app) {
  render(App, app)
}
