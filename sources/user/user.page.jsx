import React from 'react'
import {Link} from 'react-router-dom'
import List from '../list/list.component.jsx'
import Chevron from '../chevron/chevron.component.jsx'
import PropTypes from 'prop-types'
import './user.style.scss'

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

  render() {
    const {user} = this.state
    const repos = this.state.repos.map((repo, index) =>
      <li key={index}>
        <Link to={`/${this.username}/${repo.name}`}>{repo.name} - {repo.stars}</Link>
      </li>
    )

    return (
      <section>
        <header>
          <Link to='/'>
            <Chevron type='left' /> search
          </Link>
          <a>{user.login}</a>
        </header>

        <main>
          <aside>
            <div className="sticky">
              <div><img src={user.avatar_url} /></div>
              <div className="info">
                <h2>{user.name}</h2>
                <h3>{user.login}</h3>
                <p>{user.bio}</p>
                <ul>
                  <li>Seguidores: <span className='bubble'>{user.followers}</span></li>
                  <li>Seguindo: <span className='bubble'>{user.following}</span></li>
                </ul>
              </div>
            </div>
          </aside>

          <List>{repos}</List>
        </main>
      </section>
    )
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
}

UserPage.propTypes = {
  match: PropTypes.object,
}

export default UserPage
