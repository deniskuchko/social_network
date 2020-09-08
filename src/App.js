import React from "react";

import "./App.css";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContsiner from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initialise } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

/* import Technologies from "./Technologis.js";
import Footer from "./Footer";
import Header from "./Headers"; */

class App extends React.Component {
  componentDidMount() {
    this.props.initialise();
  }
  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:usersId?"
            render={() => <ProfileContainer />}
          />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route
            path="/users"
            render={() => (
              <div>
                <UsersContsiner />
              </div>
            )}
          />
          <Route path="/login" render={() => <LoginPage />} />

          <Route path="/news" render={() => <DialogsContainer />} />
          <Route path="/music" render={() => <DialogsContainer />} />
          <Route path="/settings" render={() => <DialogsContainer />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialised: state.app.initialised,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initialise })
)(App);
