import React, { useContext } from "react"
import { AppContext } from "./context"

export const PostPage = () => {
  const { globalState, dispatch } = useContext(AppContext)
  if (!Object.keys(globalState.Post.data).length) {
    dispatch({ name: "Post", type: "GET" })
  }
  return (
    <>
      <h1>Posts</h1>
      {globalState.Post.data.length ? (
        globalState.Post.data.map((post, id) => (
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
