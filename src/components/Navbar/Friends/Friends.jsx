import React from "react";
import s from "./Friends.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.friend}>
      <NavLink className={" " + s.active} to={path}>
        <div className={s.friendsPhoto}>
          <img src={props.photo} alt="" />
        </div>
        <div className={s.friendsName}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default Friends;
