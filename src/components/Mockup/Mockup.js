import React, { PropTypes } from 'react'
import css from './Mockup.styl'

const Mockup = ({ image }) => (
  <div className={css.container}>
    <div className={css.topBar}>
      <div className={css.button} />
      <div className={css.button} />
      <div className={css.button} />
    </div>
    <div className={css.scrollWrapper}>
      <img className={css.image} src={image} />
    </div>
    <div className={css.bottomBar} />
  </div>
)

Mockup.propTypes = {
  image: PropTypes.string
}

export default Mockup
