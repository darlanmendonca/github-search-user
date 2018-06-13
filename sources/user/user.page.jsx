import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const UserPage = ({match}) =>
  <section>
    <h2>User: {match.params.username}</h2>
    <Link to='/'>back</Link>
  </section>

UserPage.propTypes = {
  match: PropTypes.object,
}

export default UserPage
