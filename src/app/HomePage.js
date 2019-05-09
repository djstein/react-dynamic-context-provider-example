import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "./../base/contextFactory"
import { Login } from "./Login"

export const HomePage = () => {
  const { globalState, dispatch } = useContext(AppContext)
  const user = Object.values(globalState.User.data)[0]
  const theme = globalState.Theme.theme

  return (
    <center>
      <div style={{ backgroundColor: theme === "LIGHT" ? "white" : "black" }}>
        <h1 style={{ color: theme === "LIGHT" ? "black" : "white" }}>
          Home Page: {user.username}
        </h1>
        <Login />
        <button
          onClick={() =>
            dispatch(
              theme === "LIGHT"
                ? { name: "Theme", type: "DARK" }
                : { name: "Theme", type: "LIGHT" }
            )
          }
        >
          Theme Switcher
        </button>
        <br />
        <Link to="/posts">Posts Page</Link>
      </div>
    </center>
  )
}
