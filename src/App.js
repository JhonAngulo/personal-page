import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'assets/styles/global.css'

import Home from 'pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Switch></Switch>
      <Route path='/'>
        <Home />
      </Route>
    </BrowserRouter>
  )
}

export default App
