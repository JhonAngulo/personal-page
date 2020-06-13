import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'assets/styles/global.css'
import 'assets/styles/animation.css'

import Layout from 'pages/Layout'
import Home from 'pages/Home.jsx'
import Conoceme from 'pages/Conoceme.jsx'
import Curriculum from 'pages/Curriculum.jsx'
import Portafolio from 'pages/Portafolio.jsx'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/conoceme' component={Conoceme} />
          <Route exact path='/curriculum' component={Curriculum} />
          <Route exact path='/portafolio' component={Portafolio} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
