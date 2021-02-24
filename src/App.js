import './App.css'
import SignInSide from './page/SignInSide'
import Home from './page/Home'
import {  BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>

      
      {/* <div className="App">
      <SignInSide />
      </div> */}

       <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={SignInSide} exact/>
       </Switch>
    </Router>
  )
}

export default App
