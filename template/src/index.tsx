import { h, render } from 'preact'
import './assets/css/style.css'

const App = (
  <>
    <h1 className="title">Hello, Preact!</h1>
    <div className="tip">Edit src/index.tsx and save to reload.</div>
  </>
)

const app = document.getElementById('app')
if (app) {
  render(App, app)
}
