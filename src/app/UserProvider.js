import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "./../base/contextFactory"

export const UserProvider = ({ children }) => {
  const { globalState, dispatch } = useContext(AppContext)
  const [user, setUser] = useState(globalState.User)

  useEffect(() => {
    if (globalState.User.meta.status !== "SUCCESS") {
      dispatch({ name: "User", type: "GET" })
    } else {
      setUser(globalState.User)
    }
  }, [globalState.User, dispatch])

  if (user.meta.status === "SUCCESS") {
    return children
  } else if (user.meta.status === "ERROR") {
    return <h1>User unauhtorized</h1>
  } else {
    return <h1>Logging in..</h1>
  }
}
