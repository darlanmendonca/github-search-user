import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchPage from './search/search.page.jsx'
import UserPage from './user/user.page.jsx'

const router =
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SearchPage}/>
      <Route exact path='/:username' component={UserPage}/>
    </Switch>
  </BrowserRouter>

render(router, window.app)
