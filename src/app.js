import React from "react";
import Home from './components/home.js'
import Bare1 from './components/bare1.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (<Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/link' component={Bare1}/>
            </Switch>
          </Router>
          );
};

export default App;
