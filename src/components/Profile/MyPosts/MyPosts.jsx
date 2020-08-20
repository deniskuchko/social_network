import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reduser";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newAddPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
    //props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newAddPost.current.value;
    props.updateNewPostText(text);
    //props.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newAddPost}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
