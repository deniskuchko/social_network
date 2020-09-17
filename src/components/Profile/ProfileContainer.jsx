import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reduser";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let usersId = this.props.match.params.usersId;
    if (!usersId) {
      usersId = this.props.authorisedUserId;
      if (!usersId) {
        return this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(usersId);
    this.props.getStatus(usersId);
  }
  render() {
    /* if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    } */
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,

  withAuthRedirect
)(ProfileContainer);
