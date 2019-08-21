import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../../components'
import MyTask from './myTask'
import TaskStart from './taskStart'
import TaskEnd from './taskEnd'

export default props => (
  <div>
    <Header>外勤打卡</Header>
    <Switch>
      <Route exact path="/legwork" component={MyTask} />
      <Route exact path="/legwork/start" component={TaskStart} />
      <Route exact path="/legwork/end" component={TaskEnd} />
    </Switch>
  </div>
)
