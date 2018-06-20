import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Header from '../header/header.component.jsx'
import Bubble from '../bubble/bubble.component.jsx'
import Chevron from '../chevron/chevron.component.jsx'
import Markdown from 'react-markdown'
import './repo.style.scss'

class RepoPage extends React.Component {
  constructor(props) {
    super(props)
    this.username = props.match.params.username
    this.repo = props.match.params.repo
    this.state = {repo: {}, readme: null}
    this.load()
  }

  load() {
    const repo = `https://api.github.com/repos/${this.username}/${this.repo}`

    fetch(repo)
      .then(response => response.json())
      .then((response) => {
        const repo = {
          name: response.name,
          description: response.description,
          stars: response.stargazers_count,
          language: response.language,
          url: response.html_url,
        }
        this.setState({repo})
      })

    const readme = `https://api.github.com/repos/${this.username}/${this.repo}/readme`

    fetch(readme)
      .then(response => response.json())
      .then((response) => {
        const readme = atob(response.content)
        this.setState({readme})
      })
  }

  render() {
    const {repo, readme} = this.state
    return (
      <section className='repo'>
        <Header>
          <Link to='/'>
            <Chevron type='left' /> search
          </Link>
          <Link to={`/${this.username}`}>{this.username}</Link>
          <a>{repo.name}</a>
        </Header>
        <article>
          <h3>{repo.name}
            <Bubble title='stars'>{repo.stars}</Bubble>
            <Bubble title='linguagem principal'>{repo.language}</Bubble>
          </h3>
          <p>{repo.description}</p>
          <a href={repo.url} target='_blank' rel='noopener noreferrer'>vizualizar repositório no github</a>
          <Markdown source={readme} escapeHtml={false} />
          </article>
      </section>
    )
  }
}

RepoPage.propTypes = {
  match: PropTypes.object,
}

export default RepoPage
