import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import '../styles/global.css'

import Modal from './Modal/Modal'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contacts from './Contacts/Contacts'
import NotFound from './NotFound/NotFound'

const navigationLinks = [
  { id: 0, path: '/story', text: 'История' },
  { id: 1, path: '/portfolio', text: 'Портфолио' },
  { id: 2, path: '/contacts', text: 'Связь' }
]

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='root-container' id='root'>
          <Navbar navigationLinks={navigationLinks} />
          <div className='content'>
            <div className='content-wrapper'>
              <Switch>
                <Route exact path='/'>
                  <Redirect to='/story' />
                </Route>
                <Route path='/story' component={Home} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contacts' component={Contacts} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
            <div className='fade-top' />
            <div className='fade-bottom' />
          </div>
          {this.props.modalVisible ? <Modal /> : false}
        </div>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  modalVisible: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    modalVisible: state.modal.isVisible
  }
}

export default connect(mapStateToProps)(App)
