import React from "react";
import { connect } from "react-redux";

import {
  unfollow,
  follow,
  toogleFollowingProgress,
  getUsers,
} from "../../redux/users-reduser";

import Users from "./Users";
import s from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          usersAPI={usersAPI}
          followingInPrigress={this.props.followingInPrigress}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInPrigress: state.usersPage.followingInPrigress,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    unfollow,
    follow,
    toogleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
