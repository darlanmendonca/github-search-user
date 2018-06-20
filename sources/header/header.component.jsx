import React from 'react'
import PropTypes from 'prop-types'
import './header.style.scss'

const Header = ({children}) =>
  <header className='header'>{children}</header>

Header.propTypes = {
  children: PropTypes.any,
}

export default Header
