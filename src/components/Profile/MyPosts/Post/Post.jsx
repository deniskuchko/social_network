import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://teleprogramma.pro/wp-content/uploads/2016/01/25b2916b5c49db617f52fa5ea48efee7-423.jpg" />

      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
