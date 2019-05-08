import React from "react"
import { Route } from "react-router"

const renderProviders = (providersList, children) => {
  if (providersList && providersList.length) {
    const Provider = providersList.pop()
    return <Provider>{renderProviders(providersList, children)}</Provider>
  } else {
    return children
  }
}

export const renderRoutes = routes =>
  routes.map(({ Component, path, exact, Providers }) => (
    <Route
      key={path}
      path={path}
      exact={exact}
      render={props => renderProviders(Providers, <Component {...props} />)}
    />
  ))
