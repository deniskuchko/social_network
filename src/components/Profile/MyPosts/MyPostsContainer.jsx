import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      updateNewPostText={onPostChange}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
