import React from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { renderRoutes } from "./renderRoutes"
import { routes } from "./routes"
import { ThemeProvider } from "./context"

const App = () => (
  <div className="App">
    <ThemeProvider>
      <BrowserRouter basename={"/"}>
        <Switch>{renderRoutes(routes)}</Switch>
      </BrowserRouter>
    </ThemeProvider>
  </div>
)

export default App
