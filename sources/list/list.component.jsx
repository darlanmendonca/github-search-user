import React from 'react'
import PropTypes from 'prop-types'
import './list.style.scss'

const List = ({children}) =>
  <ul className='list'>
    {children}
  </ul>

List.propTypes = {
  children: PropTypes.any,
}

export default List
