import React from 'react'
import PropTypes from 'prop-types'
import './input.style.scss'

const Input = (props) => {
  const {label, ...inputProps} = props

  return (
    <label className='input has-value'>
      <span className='label'>{label}</span>
      <input {...inputProps} />
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
