import React from 'react'
import Vintage from './pages/vintage.js'
import Streetwear from './pages/streetwear.js'
import Hype from './pages/hype.js'
import Nav from './components/Nav.js'
import ItemPage from './pages/ItemPage.js'
import Home from './pages/Home.js'
import SignUp from './pages/signup.js'
import SignIn from './pages/signin.js'
import Checkout from './pages/checkout.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(`${process.env.STRIPE_KEY}`)

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 1500,
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <div className="app">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route path="/vintage" component={Vintage} />
              <Route path="/streetwear" component={Streetwear} />
              <Route path="/hype" component={Hype} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/item/:id" component={ItemPage} />
            </Switch>
          </div>
        </Router>
      </AlertProvider>
    </Elements>
  )
}

export default App
