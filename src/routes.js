import { HomePage } from "./HomePage"
import { NoContextPage } from "./NoContextPage"
import { PostPage } from "./PostPage"
import { UserProvider, DataProvider } from "./context"
export const routes = [
  {
    path: "/",
    exact: true,
    Component: HomePage,
    Providers: [UserProvider]
  },
  {
    path: "/no-context",
    exact: true,
    Component: NoContextPage
  },
  {
    path: "/posts",
    exact: true,
    Component: PostPage,
    Providers: [UserProvider, DataProvider]
  }
]
