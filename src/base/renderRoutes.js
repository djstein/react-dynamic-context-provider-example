import React from "react"
import { Route } from "react-router"

export const renderRoutes = routes =>
  routes.map(({ Component, path, exact, Providers }) => (
    <Route
      key={path}
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  ))
