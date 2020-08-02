import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrivateRoute from '../src/components/PrivateRoute'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" component={Home} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
