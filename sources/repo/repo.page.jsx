import React from 'react'
import PropTypes from 'prop-types'

class RepoPage extends React.Component {
  constructor(props) {
    super(props)
    this.username = props.match.params.username
    this.repo = props.match.params.repo
    this.state = {repo: {}}
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
  }

  render() {
    const {repo} = this.state
    return (
      <section>
        <h2>Repo page</h2>

        <h3>{repo.name} - {repo.stars}</h3>
        <h4>{repo.language}</h4>
        <a href={repo.url} target='_blank' rel='noopener noreferrer'>ver mais</a>

        <p>Description: {repo.description}</p>

      </section>
    )
  }
}

RepoPage.propTypes = {
  match: PropTypes.object,
}

export default RepoPage
