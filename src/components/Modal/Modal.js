import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import css from './Modal.css'
import { hideModal } from '../../store/actions'

class Modal extends Component {
  componentDidMount = () => {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = css.modal
    this.modalTarget.onclick = () => {
      this.props.closeCard()
    }
    document.body.appendChild(this.modalTarget)
    this._render()
  }

  componentWillUpdate = () => {
    this._render()
  }

  componentWillUnmount = () => {
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }

  _render = () => {
    ReactDOM.render(
      <div className={css.container}>
        {this.props.content}
      </div>,
      this.modalTarget
    )
  }

  render () {
    return <noscript />
  }
}

const mapStateToProps = state => ({
  content: state.modal.content
})

const mapDispatchToProps = (dispatch) => ({
  closeCard () {
    dispatch(hideModal)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
