import React, { PropTypes } from 'react'
import css from './MockupMobile.css'

const MockupMobile = ({ image }) => (
  <div className={css.container}>
    <div className={css.topBar} />
    <div className={css.scrollWrapper}>
      <img className={css.image} src={image} />
    </div>
    <div className={css.bottomBar} />
  </div>
)

MockupMobile.propTypes = {
  image: PropTypes.string
}

export default MockupMobile
