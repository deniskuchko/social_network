import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reduser";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  const refreshProfile = () => {
    let usersId = props.match.params.usersId;
    if (!usersId) {
      usersId = props.authorisedUserId;
      if (!usersId) {
        return props.history.push("/login");
      }
    }
    props.getUserProfile(usersId);
    props.getStatus(usersId);
  };

  React.useEffect(() => refreshProfile(), [props.match.params.usersId]);

  return (
    <Profile
      {...props}
      isOwner={!props.match.params.usersId}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}
      isPhotoSetup={props.isPhotoSetup}
      saveProfile={props.saveProfile}
      isDisabledSave={props.isDisabledSave}
    />
  );
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isPhotoSetup: state.profilePage.isPhotoSetup,
  isDisabledSave: state.profilePage.isDisabledSave,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,

  withAuthRedirect
)(ProfileContainer);
