import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInSide from '../page/SignInSide'
import Home from '../page/Home'
import SignUp from '../page/SignUp'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/SignUp" component={SignUp} exact />
      </Switch>
    </Router>
  )
}

export default Routes
