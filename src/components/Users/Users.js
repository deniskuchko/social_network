import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }
  return (
    <div>
      <div>
        {page.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.selectedPage : ""}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    usersAPI.deleteFollowUsers(u.id, props.unfollow());
                  }}
                >
                  unfollowed
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.postFollowUsers(u.id, props.follow());
                  }}
                >
                  followed
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
