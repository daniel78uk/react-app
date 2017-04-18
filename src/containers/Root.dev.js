import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './DevTools'
import { BrowserRouter as Router } from 'react-router-dom'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
