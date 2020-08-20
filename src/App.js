import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

/* import Technologies from "./Technologis.js";
import Footer from "./Footer";
import Header from "./Headers"; */

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route
          exact
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/news" render={() => <DialogsContainer />} />
        <Route path="/music" render={() => <DialogsContainer />} />
        <Route path="/settings" render={() => <DialogsContainer />} />
      </div>
    </div>
  );
};

export default App;
