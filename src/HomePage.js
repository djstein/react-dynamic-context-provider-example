import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext, ThemeContext } from "./context"
export const HomePage = () => {
  const { username } = useContext(UserContext)
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme ? "white" : "black" }}>
      <h1 style={{ color: theme ? "black" : "white" }}>
        Home Page: {username}
      </h1>
      <button onClick={() => setTheme(!theme)}>Theme Switcher</button>
      <br />
      <Link to="/no-context">No Context</Link>
      <br />
      <Link to="/posts">Posts Page</Link>
    </div>
  )
}
