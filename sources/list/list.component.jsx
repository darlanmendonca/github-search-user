import React from 'react'
import PropTypes from 'prop-types'

const style = {
  listStyle: 'none',
  padding: 0,
}

const List = ({children}) =>
  <ul style={style}>
    {children}
  </ul>

List.propTypes = {
  children: PropTypes.element,
}

export default List
