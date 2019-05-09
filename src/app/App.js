import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { renderRoutes } from "../base/renderRoutes"
import { routes } from "./routes"
import { AppProvider } from "./../base/contextFactory"
import { UserProvider } from "./UserProvider"
import { User, Post, Theme } from "./models"
import "./index.css"

const models = { User, Post, Theme }

const App = () => (
  <div className="App">
    <AppProvider models={models}>
      <UserProvider>
        <BrowserRouter basename={"/"}>
          <Switch>{renderRoutes(routes)}</Switch>
        </BrowserRouter>
      </UserProvider>
    </AppProvider>
  </div>
)

export default App
