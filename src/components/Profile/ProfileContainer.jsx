import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reduser";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    !usersId && (usersId = 11155);

    this.props.getUserProfile(usersId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,

  withAuthRedirect
)(ProfileContainer);
