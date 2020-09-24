import React, { Suspense } from "react";

import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContsiner from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { withSuspense } from "./hoc/withSuspense";
import { initialise } from "./redux/app-reducer";

import "./App.css";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  /* catchAllUnHandleErrors = (promiseRejectedEvent) => {
    alert("Some error occured");
  }; */
  componentDidMount() {
    this.props.initialise();
    // window.addEventListener("unhandledrejection", this.catchAllUnHandleErrors);
  }
  /*  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnHandleErrors
    );
  } */
  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            {/* <Redirect from="/" to="/profile" /> */}
            <Route
              path="/profile/:usersId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
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
            <Route path="*" render={() => <div> 404 NOT FOUND</div>} />
          </Switch>
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
