import React from 'react'
import PropTypes from 'prop-types'
import './search.page.style.scss'
import Input from '../input/input.component.jsx'

const Search = ({submit}) => {
  return (
    <form className='search' noValidate autoComplete='off' onSubmit={handleSubmit}>
      <Input label='Search username' name='query' />
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
