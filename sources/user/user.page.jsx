import React from 'react'
import {Link} from 'react-router-dom'
import List from '../list/list.component.jsx'
import PropTypes from 'prop-types'

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.username = props.match.params.username
    this.state = {
      user: {},
      repos: [],
    }
    this.load()
  }

  load() {
    const user = `https://api.github.com/users/${this.username}`
    const repos = `https://api.github.com/users/${this.username}/repos`

    fetch(user)
      .then(response => response.json())
      .then((response) => {
        const user = response
        this.setState({user})
      })

    fetch(repos)
      .then(response => response.json())
      .then((response) => {
        const repos = response.map(repo => ({
          name: repo.name,
          stars: repo.stargazers_count,
        }))
        this.setState({repos})
      })
  }

  render() {
    const {user} = this.state
    const repos = this.state.repos.map((repo, index) =>
      <li key={index}>
        <Link to={`/${this.username}/${repo.name}`}>{repo.name} - {repo.stars}</Link>
      </li>
    )

    return (
      <section>
        <Link to='/'>back</Link>
        <h2>User: {this.username}</h2>
        <img src={user.avatar_url} />

        <div>
          Seguidores: {user.followers} - Seguindo: {user.following}
          <p>{user.bio}</p>
        </div>

        <List>{repos}</List>
      </section>
    )
  }
}

UserPage.propTypes = {
  match: PropTypes.object,
}

export default UserPage
