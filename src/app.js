import React from 'react'
import Vintage from './components/vintage.js'
import Streetwear from './components/streetwear.js'
import Hype from './components/hype.js'
import Nav from './components/Nav.js'
import Item from './components/Item.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Nav />
    <Switch>
      <Route exact path="/vintage" component={Vintage} />
      <Route path="/streetwear" component={Streetwear} />
      <Route path="/hype" component={Hype} />
      <Route path="/item/:id" component={Item} />
    </Switch>
  </Router>
  )
}

export default App
