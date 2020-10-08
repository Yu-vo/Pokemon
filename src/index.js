import ReactDOM from 'react-dom'
import React from 'react'
import {App} from '@components/App'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './scss/main.scss'

const history = createBrowserHistory()
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
