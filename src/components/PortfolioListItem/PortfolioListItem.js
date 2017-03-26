import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import FontAwesome from 'react-fontawesome'
import _ from 'lodash'

import css from './PortfolioListItem.styl'
import { showModal, setModalContent } from '../../store/actions'
import Mockup from '../Mockup/Mockup'
import MockupMobile from '../MockupMobile/MockupMobile'

import IconDesktop from '../IconDesktop/IconDesktop'
import IconMobile from '../IconMobile/IconMobile'

const PortfolioListItem = ({ item, openCard, setContent }) => {
  const { title, desc, techs, thumbnail, mobile, year, image, link } = item
  const desktop = { backgroundImage: `url(${thumbnail})` }

  const openDesktopMockup = () => {
    openCard()
    setContent(<Mockup image={image} />)
  }

  const openMobileMockup = () => {
    openCard()
    setContent(<MockupMobile image={mobile} />)
  }

  return (
    <div className={css.container}>
      <div className={css.thumbnail} style={desktop}>
        <div className={css.overlay}>
          <IconDesktop handleClick={openDesktopMockup} />
          {mobile ? <IconMobile handleClick={openMobileMockup} /> : false}
        </div>
      </div>
      <div className={css.text}>
        <h2>{title}</h2>
        {link ? <a href={link} className='link' target='_blank'>Ссылка</a> : false}
        <p className={css.year}>Год: {year}</p>
        <p>{desc}</p>
        <div className={css.techs}>
          {techs.map(tech => {
            return <div className={css.tech} key={_.uniqueId('tech_')}>{tech}</div>
          })}
        </div>
      </div>
    </div>
  )
}

PortfolioListItem.propTypes = {
  item: PropTypes.object,
  openCard: PropTypes.func,
  setContent: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  openCard () {
    dispatch(showModal)
  },
  setContent (content) {
    dispatch(setModalContent(content))
  }
})

export default connect(null, mapDispatchToProps)(PortfolioListItem)
