import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
