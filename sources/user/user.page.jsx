import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './user.style.scss'
import Header from '../header/header.component.jsx'
import List from '../list/list.component.jsx'
import Chevron from '../chevron/chevron.component.jsx'
import Bubble from '../bubble/bubble.component.jsx'

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
        <Header>
          <Link to='/'>
            <Chevron type='left' /> search
          </Link>
          <a>{user.login}</a>
        </Header>

        <main>
          <aside>
            <div className='sticky'>
              <div><img src={user.avatar_url} /></div>
              <div className='info'>
                <h2>{user.name}</h2>
                <h3>{user.login}</h3>
                <p>{user.bio}</p>
                <ul>
                  <li><Bubble>Seguidores: {user.followers}</Bubble></li>
                  <li><Bubble>Seguindo: {user.following}</Bubble></li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="repositories">
            <h2>Repositórios</h2>
            <button onClick={() => this.toggleSort()}>Inverter ordenação</button>
            <List>{repos}</List>
          </div>
        </main>
      </section>
    )
  }

  load() {
    const user = `https://api.github.com/users/${this.username}`
    const repos = `https://api.github.com/users/${this.username}/repos?type=owner&sort=updated`

    fetch(user)
      .then(response => response.json())
      .then((response) => {
        const user = response
        this.setState({user})
      })

    const starsAscending = (a, b) => a.stargazers_count > b.stargazers_count
      ? -1
      : a.stargazers_count < b.stargazers_count
        ? 1
        : 0

    fetch(repos)
      .then(response => response.json())
      .then((response) => {
        const repos = response
          .sort(starsAscending)
          .map(repo => ({
            name: repo.name,
            stars: repo.stargazers_count,
          }))
        this.setState({repos})
      })
  }

  toggleSort() {
    const repos = this.state.repos.reverse()
    this.setState({repos})
  }
}

UserPage.propTypes = {
  match: PropTypes.object,
}

export default UserPage
