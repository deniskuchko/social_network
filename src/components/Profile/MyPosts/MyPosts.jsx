import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { FormControl } from "../../common/FormsControls/FormsControls";
let Textarea = FormControl("textarea");
const maxLengthCreator10 = maxLengthCreator(10);
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddNewPostForm onSubmit={onAddPost} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxLengthCreator10]}
          placeholder="Enter post"
        ></Field>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
AddNewPostForm = reduxForm({
  form: "newAddPost",
})(AddNewPostForm);
export default MyPosts;
