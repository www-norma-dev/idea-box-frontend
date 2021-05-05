import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore , applyMiddleware }from 'redux'
import {Provider} from 'react-redux'
import mainReducer from './store/reducers/index'
import thunk from 'redux-thunk'

let store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
 	   <App />
	</Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
