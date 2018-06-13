import React from 'react'
import {Link} from 'react-router-dom'
import List from '../list/list.component.jsx'

const users = [
  'darlanmendonca',
  'claralucia',
  'tuliomarcos',
]

const usernames = users.map((username, index) =>
  <li key={index}><Link to={`/${username}`}>{username}</Link></li>
)

const SearchPage = () =>
  <section>
    <form>
      <input placeholder="type by username" />
      <button>search</button>
    </form>

    <List>
      {usernames}
    </List>
  </section>

export default SearchPage
