import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInSide from '../page/SignInSide'
import Home from '../page/Home'
import SignUp from '../page/SignUp'
import ChangePassword from '../page/ChangePassword'
import ForgotPassword from '../page/ForgotPassword'
import AllIdea from '../page/AllIdea'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/ChangePassword" component={ChangePassword} exact />
        <Route path="/ForgotPassword" component={ForgotPassword} exact />

        <Route path="/AllIdea" component={AllIdea} exact />


      </Switch>
    </Router>
  )
}

export default Routes
