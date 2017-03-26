import React from 'react'
import ReactDOM from 'react-dom'
import 'normalizecss/normalize.css'

import { AppContainer } from 'react-hot-loader'

import Root from './components/Root'
import { makeStarfield } from './starfield.js'

window.onload = function () {
  const starfield = document.getElementById('starfield')
  makeStarfield(starfield)
}

const DOMRoot = document.getElementById('app')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    DOMRoot
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root)
  })
}
