import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { get } from '@U/localstorage'
import Login from './pages/login'
import Home from './pages/home'
import legwork from './pages/legwork'
import NotFound from './pages/404'

export default () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={props => {
          return !!get('user') ? <Home {...props} /> : <Login {...props} />
        }}
      />
      <Route path="/login" component={Login} />
      <Route path="/legwork" component={legwork} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
