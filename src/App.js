import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { renderRoutes } from "./renderRoutes"
import { routes } from "./routes"
import { AppProvider } from "./context"
import { User, Post, Theme } from "./models"

const models = { User, Post, Theme }

const App = () => (
  <div className="App">
    <AppProvider models={models}>
      <BrowserRouter basename={"/"}>
        <Switch>{renderRoutes(routes)}</Switch>
      </BrowserRouter>
    </AppProvider>
  </div>
)

export default App
