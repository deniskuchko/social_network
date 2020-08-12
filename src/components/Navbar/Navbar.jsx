import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  let friends = props.sidebar.map((f) => (
    <Friends id={f.id} name={f.name} photo={f.photo} />
  ));
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink activeClassName={s.activeLink} to="/profile">
          Profile
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/settings">
          Settings
        </NavLink>
      </div>
      <div className={s.sidebarFriends}>
        <h3>Friends</h3>
        <div className={s.friends}>{friends}</div>
      </div>
    </nav>
  );
};

export default Navbar;
