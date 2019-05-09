import { createModel } from "../base/modelFactory"

export const Post = createModel("Post")

export const User = createModel("User")

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
