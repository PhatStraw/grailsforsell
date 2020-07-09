import React from 'react'
import Vintage from './components/vintage.js'
import Streetwear from './components/streetwear.js'
import Hype from './components/hype.js'
import Nav from './components/Nav.js'
import Item from './components/itemCover.js'
import ItemPage from './components/ItemPage.js'
import Home from './components/Home.js'
import SignUp from './components/signup.js'
import Checkout from './components/checkout.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp} />
          <Route path="/vintage" component={Vintage} />
          <Route path="/streetwear" component={Streetwear} />
          <Route path="/hype" component={Hype} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/item/:id" component={ItemPage} />
        </Switch>
      </div>
  </Router>
  )
}

export default App
