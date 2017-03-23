import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './components/App'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/story' />
    <Route path='/story' component={Home} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/contacts' component={Contacts} />
  </Route>
)
