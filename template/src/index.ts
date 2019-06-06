import { render } from 'preact'
import { App } from './App'
import './assets/css/style.css'

if (module.hot) {
  require('preact/debug')
}

const app = document.getElementById('app')
if (app) {
  render(App, app)
}
