import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'normalizecss/normalize.css'
import Root from './components/Root'
import { makeStarfield } from './starfield.js'

window.onload = function () {
  const starfield = document.getElementById('starfield')
  makeStarfield(starfield)
}

const DOMRoot = document.getElementById('app')

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>
  , DOMRoot)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    console.log('module-hot test')
    const NewRoot = require('./components/Root').default
    ReactDOM.render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      DOMRoot
    )
  })
}
