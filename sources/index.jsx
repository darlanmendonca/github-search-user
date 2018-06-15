import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchPage from './search/search.page.jsx'
import UserPage from './user/user.page.jsx'
import RepoPage from './repo/repo.page.jsx'
import './index.scss'

const router =
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SearchPage}/>
      <Route exact path='/:username' component={UserPage}/>
      <Route exact path='/:username/:repo' component={RepoPage}/>
    </Switch>
  </BrowserRouter>

render(router, window.app)
