const FAKE_DATA = {
  Post: { 1: { id: 1, date: new Date(), value: "A great post!" } },
  User: {
    1: { id: 1, username: "djstein", firstName: "Dylan", lastName: "Stein" }
  }
}

const ModelReducer = (state, action) => {
  const { name, type } = action
  switch (`${name}_${type}`) {
    case `${name}_CREATE`:
      // Fake post
      return { ...state }
    case `${name}_GET`:
      // Fake fetch
      const data = FAKE_DATA[name]
      // await setTimeout(2000)
      return {
        ...state,
        data,
        meta: { ...state.meta, status: "SUCCESS" }
      }
    case `${name}_UPDATE`:
      // Fake post
      return { ...state }
    case `${name}_DELETE`:
      // Fake delete
      return { ...state }
    case `${name}_ERROR`:
      // Fake error
      return {
        ...state,
        error: action.error,
        meta: { ...state.meta, status: "ERROR" }
      }
    default: {
      throw new Error(`Unrecognized action: ${action.type}`)
    }
  }
}

export const createModel = name => ({
  initialState: {
    data: {},
    allIds: [],
    meta: {},
    errors: {}
  },
  reducer: (state, action) => {
    return ModelReducer(state[name], action)
  }
})
