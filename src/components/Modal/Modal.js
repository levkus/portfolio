import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import css from './Modal.css'
import { hideModal } from '../../store/actions'

class Modal extends Component {
  componentDidMount = () => {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = css.modal
    this.modalTarget.style.opacity = 1
    this.modalTarget.onclick = () => {
      this.props.close()
    }
    document.body.appendChild(this.modalTarget)
    document.body.style.overflow = 'hidden'
    this._render()
  }

  componentWillUpdate = () => {
    this._render()
  }

  componentWillUnmount = () => {
    this.modalTarget.style.opacity = 0
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(this.modalTarget)
      document.body.removeChild(this.modalTarget)
      document.body.style.overflow = 'visible'
    }, 200)
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

Modal.propTypes = {
  close: PropTypes.func,
  content: PropTypes.object
}

const mapStateToProps = state => ({
  content: state.modal.content
})

const mapDispatchToProps = (dispatch) => ({
  close () {
    dispatch(hideModal)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
