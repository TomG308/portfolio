import React from 'react'

import { Switch, Route, withRouter } from "react-router-dom";

import style from './style.css'

import NavBar  from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/Projects' component={ Projects } />
        <Route path='/ContactMe' component={ ContactMe } />
      </Switch>
    </div>
  )
}

export default withRouter (App)