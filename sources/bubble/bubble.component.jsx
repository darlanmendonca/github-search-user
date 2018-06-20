import React from 'react'
import PropTypes from 'prop-types'
import './bubble.style.scss'

const Bubble = ({children, title}) =>
  <span className='bubble' title={title}>{children}</span>

Bubble.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
}

Bubble.defaultProps = {
  title: '',
}

export default Bubble
