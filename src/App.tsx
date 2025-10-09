import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Conoceme from './pages/Conoceme'
import Curriculum from './pages/Curriculum'
import Portafolio from './pages/Portafolio'

import 'normalize.css'
import './assets/styles/global.css'
import './assets/styles/animation.css'

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
