import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reduser";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => {
        console.log(response.data);
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
export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
