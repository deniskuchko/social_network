import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      <span></span>
      {props.message}
    </div>
  );
};

export default Message;
