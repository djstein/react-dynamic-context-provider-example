import React, { createContext, useReducer } from "react"

const createInitialState = models => {
  const initialState = {}
  Object.keys(models).map(
    model => (initialState[model] = models[model].initialState)
  )
  return initialState
}

const AppReducer = (state, action, models) => {
  return {
    ...state,
    [action.name]: models[action.name].reducer(state, action)
  }
}

export const AppContext = createContext({ globalState: {} })

export const AppProvider = ({ models, children }) => {
  const [globalState, dispatch] = useReducer(
    (state, action) => AppReducer(state, action, models),
    createInitialState(models)
  )
  return (
    <AppContext.Provider
      value={{ globalState, dispatch }}
      children={children}
    />
  )
}
