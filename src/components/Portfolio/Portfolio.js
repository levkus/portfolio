import React, { Component } from 'react'
import PortfolioListItem from '../PortfolioListItem/PortfolioListItem'
import items from './portfolio-items'
import css from './Portfolio.styl'

class Portfolio extends Component {
  renderItems = () => {
    return items.map(item => {
      return <div className={css.container} key={item.id}>
        <PortfolioListItem item={item} />
        <hr className={css.line} />
      </div>
    })
  }

  render () {
    return (
      <div className={css.portfolio}>
        <h1>Портфолио</h1>
        {this.renderItems()}
      </div>
    )
  }
}

export default Portfolio
