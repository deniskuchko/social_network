import React from "react";
import { connect } from "react-redux";

import {
  unfollow,
  follow,
  toogleFollowingProgress,
  requestUsers,
} from "../../redux/users-reduser";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFolowingInProgress,
} from "../../redux/users-selectors/users-seletors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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

/* let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInPrigress: state.usersPage.followingInPrigress,
  };
}; */
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInPrigress: getFolowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    unfollow,
    follow,
    toogleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
