import React from 'react'
import PropTypes from 'prop-types'

const Search = ({submit}) => {
  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <input placeholder="type by username" name='query' required />
      <button>search</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const query = event.target.query.value
    if (submit && query) {
      submit(query)
    }
  }
}

Search.propTypes = {
  submit: PropTypes.func,
}

export default Search
