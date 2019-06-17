import * as React from 'react'
import { Router } from 'preact-router'

import { Home, About, Users } from './components'

export const App = (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <Users path="/users" />
  </Router>
)
