import React from 'react'
import PropTypes from 'prop-types'
import './chevron.style.scss'

const Chevron = ({type}) =>
  <span className={`chevron ${type}`} />

Chevron.propTypes = {
  type: PropTypes.string,
}

export default Chevron
