const posts = [{ id: 1, date: new Date(), value: "A great post!" }]

export const ModelReducer = (state, action) => {
  const { modelName, type } = action
  switch (`${modelName}_${type}`) {
    case `${modelName}_CREATE`:
      // Fake post
      return { ...state }
    case `${modelName}_GET`:
      // Fake fetch
      const data = posts
      return { ...state, data }
    case `${modelName}_UPDATE`:
      // Fake post
      return { ...state }
    case `${modelName}_DELETE`:
      // Fake delete
      return { ...state }
    case `${modelName}_ERROR`:
      // Fake error
      return { ...state, error: action.error }
    default: {
      throw new Error(`Unrecognized action: ${action.type}`)
    }
  }
}

const createModel = name => ({
  initialState: {
    data: {},
    allIds: [],
    metaData: {},
    errors: {}
  },
  reducer: (state, action) => ModelReducer(state[name], action)
})

export const Post = createModel("Post")
export const User = {
  initialState: {},
  reducer: (_state, _action) => ({ username: "djstein" })
}
export const Theme = {
  initialState: { theme: "LIGHT" },
  reducer: (_state, action) => {
    switch (action.type) {
      case "LIGHT":
        return { theme: "LIGHT" }
      case "DARK":
        return { theme: "DARK" }
      default: {
        throw new Error(`Unrecognized action: ${action.type}`)
      }
    }
  }
}
