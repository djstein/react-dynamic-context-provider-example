import { HomePage } from "./HomePage"
import { NoContextPage } from "./NoContextPage"
import { PostPage } from "./PostPage"
export const routes = [
  {
    path: "/",
    exact: true,
    Component: HomePage
  },
  {
    path: "/no-context",
    exact: true,
    Component: NoContextPage
  },
  {
    path: "/posts",
    exact: true,
    Component: PostPage
  }
]
