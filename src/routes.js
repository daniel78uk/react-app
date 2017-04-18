import React from 'react'
import { Redirect, Route} from 'react-router-dom'
import App from './containers/App'

export default (
  <Route component={App}>
    <Route path="all" />
    <Route path="active" />
    <Route path="completed" />
    <Redirect from="/" to="all" />
  </Route>
)
