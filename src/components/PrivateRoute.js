import React from 'react'
import { Route, Redirect } from 'react-router'
import { isLogged } from '../services/auth'

const PrivateRoute = (props) =>
  isLogged() ? <Route {...props} /> : <Redirect to="/" />

export default PrivateRoute
