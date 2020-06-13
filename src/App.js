import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'assets/styles/global.css'

import Layout from 'pages/Layout'
import Home from 'pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
