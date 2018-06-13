import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../search/search.component.jsx'
import List from '../list/list.component.jsx'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  render() {
    const usernames = this.state.users.map((username, index) =>
      <li key={index}>
        <Link to={`/${username}`}>{username}</Link>
      </li>
    )

    return (
      <section>
        <Search submit={(username) => this.search(username)}/>
        <List>{usernames}</List>
      </section>
    )
  }

  search(username) {
    const users = `https://api.github.com/search/users?q=${username}`
    fetch(users)
      .then(response => response.json())
      .then((response) => {
        const users = response.items.map(user => user.login)
        this.setState({users})
      })
  }
}

export default SearchPage
