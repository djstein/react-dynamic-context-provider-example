import React, { useContext } from "react"
import { DataContext } from "./context"
export const PostPage = () => {
  const { state, dispatch } = useContext(DataContext)
  if (!state.hasOwnProperty("POST")) {
    dispatch({ modelName: "POST", type: "GET" })
  }
  return (
    <>
      <h1>Posts</h1>
      {state && state.POST && state.POST.data ? (
        state.POST.data.map((post, id) => (
          <div key={id}>
            {post.id} - {post.date.toString()} - {post.value}
          </div>
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </>
  )
}
