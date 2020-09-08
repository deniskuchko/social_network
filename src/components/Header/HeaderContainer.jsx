import React from "react";
import s from "./Header.module.css";
import Header from "./Header";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToprops = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToprops, { logOut })(HeaderContainer);
