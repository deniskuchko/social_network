import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reduser";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    !usersId && (usersId = 2);
    /* if (!usersId) {
      usersId = 2;
    } */
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + usersId)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WithDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUsersProfile })(
  WithDataContainerComponent
);
