import { HomePage } from "./HomePage"
import { PostPage } from "./PostPage"
export const routes = [
  {
    path: "/",
    exact: true,
    Component: HomePage
  },
  {
    path: "/posts",
    exact: true,
    Component: PostPage
  }
]
