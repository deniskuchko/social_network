import React from "react";
import s from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const { id, name, photo } = props;
  let path = `/dialogs/${id}`;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink className={s.dialog + " " + s.active} to={path}>
        <img className={s.personPhoto} src={photo} />
        <div className={s.personeName}>{name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
