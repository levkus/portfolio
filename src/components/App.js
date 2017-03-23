import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal/Modal'
import '../styles/global.css'

import Navbar from './Navbar/Navbar'

// Эти ссылки потом из стейта тянуть будем
const navigationLinks = [
  { id: 0, path: '/story', text: 'История' },
  { id: 1, path: '/portfolio', text: 'Портфолио' },
  { id: 2, path: '/contacts', text: 'Связь' }
]

class App extends Component {
  render () {
    return (
      <div className='root-container' id='root'>
        <Navbar navigationLinks={navigationLinks} />
        <div className='content'>
          <div className='content-wrapper'>
            {this.props.children}
          </div>
          <div className='fade-top' />
          <div className='fade-bottom' />
        </div>
        {this.props.modalVisible ? <Modal /> : false}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

const mapStateToProps = state => {
  return {
    modalVisible: state.modal.isVisible
  }
}

export default connect(mapStateToProps)(App)
