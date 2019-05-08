import React, { createContext, useState, useReducer } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => (
  <UserContext.Provider value={{ username: "djstein" }}>
    {children}
  </UserContext.Provider>
)

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const posts = [{ id: 1, date: new Date(), value: "A great post!" }]

export const ModelReducer = (state, action) => {
  const { modelName, type } = action
  switch (`${modelName}_${type}`) {
    case `${modelName}_CREATE`:
      return { ...state }
    case `${modelName}_GET`:
      // A simulated fetch
      const data = posts
      state[modelName] = {}
      state[modelName].data = data
      return { ...state }
    case `${modelName}_UPDATE`:
      return { ...state }
    case `${modelName}_DELETE`:
      return { ...state }
    case `${modelName}_ERROR`:
      return { ...state }
    default: {
      throw new Error(`Unrecognized action: ${action.type}`)
    }
  }
}

export const DataContext = createContext({ state: {} })
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => ModelReducer(state, action),
    {}
  )
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
