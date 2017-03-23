import React from 'react'
import { noch212 as item } from '../portfolio-items'
import css from './items.css'

const Noch212 = () => {
  return (
    <div className={css.container}>
      {/* <h1>{item.title}</h1> */}
      <div className={css.content}>
        <div className={css.preview}>
          <div className={css.mockup}>
            <div className={css.button} />
            <div className={css.button} />
            <div className={css.button} />
          </div>
          <div className={css.screenshotContainer}>
            <img className={css.screenshot} src={item.thumbnail} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Noch212
