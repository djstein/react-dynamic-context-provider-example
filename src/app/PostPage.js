import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "./../base/contextFactory"

export const PostPage = () => {
  const { globalState, dispatch } = useContext(AppContext)
  const [posts, setPosts] = useState(globalState.Post.data)

  useEffect(() => {
    if (globalState.Post.meta.status !== "SUCCESS") {
      dispatch({ name: "Post", type: "GET" })
    } else {
      setPosts(globalState.Post.data)
    }
  }, [globalState, dispatch])

  return (
    <>
      <h1>Posts</h1>
      {posts ? (
        Object.values(posts).map((post, id) => (
          <div key={id}>
            {post.id} - {post.date.toLocaleDateString()} - {post.value}
          </div>
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </>
  )
}
