import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContsiner from "./components/Users/UsersContainer";

/* import Technologies from "./Technologis.js";
import Footer from "./Footer";
import Header from "./Headers"; */

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route
          path="/users"
          render={() => (
            <div>
              <UsersContsiner />
            </div>
          )}
        />

        <Route path="/news" render={() => <DialogsContainer />} />
        <Route path="/music" render={() => <DialogsContainer />} />
        <Route path="/settings" render={() => <DialogsContainer />} />
      </div>
    </div>
  );
};

export default App;
