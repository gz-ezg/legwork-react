import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'
function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function NotFound() {
  return <h2>Users</h2>
}

export default () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/app/dashboard/index" push />}
      />
      <Route path="/index" component={Index} />
      <Route path="/404" component={About} />
      <Route path="/login" component={Users} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
