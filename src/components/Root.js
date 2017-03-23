import React from 'react'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store/store'
import routes from '../routes.js'

const Root = () => (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
)

export default Root
