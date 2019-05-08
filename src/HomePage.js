import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "./context"

export const HomePage = () => {
  const { globalState, dispatch } = useContext(AppContext)
  const user = globalState.User
  if (!user.hasOwnProperty("username")) {
    dispatch({ name: "User" })
  }

  const theme = globalState.Theme.theme

  return (
    <div style={{ backgroundColor: theme === "LIGHT" ? "white" : "black" }}>
      <h1 style={{ color: theme === "LIGHT" ? "black" : "white" }}>
        Home Page: {user.username}
      </h1>
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
      <Link to="/no-context">No Context</Link>
      <br />
      <Link to="/posts">Posts Page</Link>
    </div>
  )
}
