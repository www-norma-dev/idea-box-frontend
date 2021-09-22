import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInSide from '../page/SignInSide'
import Home from '../page/Home'
import SignUp from '../page/SignUp'
import ChangePassword from '../page/ChangePassword'
import ForgotPassword from '../page/ForgotPassword'
import IdeaDetail from '../page/IdeaDetail'
import ModelDetail from '../page/ModelDetail'
import IdeasList from '../Components/IdeasList'
import ModelsList from '../Components/ModelsList'


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/login" component={SignInSide} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/list" component={IdeasList} exact />
        <Route path="/models" component={ModelsList} exact />
        <Route path="/ChangePassword" component={ChangePassword} exact />
        <Route path="/ForgotPassword" component={ForgotPassword} exact />
		    <Route path="/detail/:ideaNumber" render={(props) => <IdeaDetail {...props}/>}/>
		    <Route path="/model/:modelNumber" render={(props) => <ModelDetail {...props}/>}/>

      </Switch>
    </Router>
  )
}

export default Routes
