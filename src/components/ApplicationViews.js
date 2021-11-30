import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./post/PostProvider"
import { PostList } from "./post/PostList"
import { PostDetail } from "./post/PostDetail"
import { EditPostForm } from "./post/EditPostForm"
import { CreatePostForm } from "./post/CreatePostForm"


export const ApplicationViews = () => {
  return (
  <>
    <PostProvider>
      <Route exact path="/">
        <PostList />
      </Route>

      <Route exact path="/posts/detail/:myPostId">
        <PostDetail />
      </Route>

      <Route path="/posts/edit/:myPostId">
        <EditPostForm />
      </Route>

      <Route path="/movies/add/:movieId">
        <CreatePostForm />
      </Route>
    </PostProvider>
  </>
  )}
