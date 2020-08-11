import React from 'react'
import Vintage from './pages/vintage.js'
import Streetwear from './pages/streetwear.js'
import Hype from './pages/hype.js'
import Nav from './components/nav.js'
import ItemPage from './pages/itemPage.js'
import Home from './pages/home.js'
import SignUp from './pages/signup.js'
import SignIn from './pages/signin.js'
import ItemUpload from './pages/itemupload'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 1500,
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const App = () => {
  return (
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
              <Route path="/item/:id" component={ItemPage} />
              <Route path="/create" component={ItemUpload} />
            </Switch>
          </div>
        </Router>
      </AlertProvider>
  )
}

export default App
