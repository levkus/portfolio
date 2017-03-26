import React, { Component, PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'
import css from './Navbar.styl'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  renderLinks = () => (
    this.props.navigationLinks.map(link => (
      <NavLink
        key={link.id}
        to={link.path}
        className={css.link}
        activeClassName={css.activeLink}
        onClick={this.toggleMenu}>
        {link.text}
      </NavLink>
    ))
  )

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false })
    } else {
      this.setState({ menuOpen: true })
    }
  }

  render () {
    console.log(css)
    const { menuOpen } = this.state
    const navbarClass = menuOpen ? css.navbar + ' ' + css.open : css.navbar
    return (
      <div className={css.container}>
        <div className={css.burger} onClick={this.toggleMenu}>
          <FontAwesome name='bars' />
        </div>
        {menuOpen ? <div className={css.closeArea} onClick={this.toggleMenu} /> : <noscript />}
        <div className={navbarClass}
          ref={navbar => { this.navbar = navbar }}>
          <nav className={css.navigation}>
            {this.renderLinks()}
          </nav>
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  navigationLinks: PropTypes.array
}

export default Navbar
