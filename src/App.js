import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

/* import Technologies from "./Technologis.js";
import Footer from "./Footer";
import Header from "./Headers"; */

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sidebar={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route
            exact
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route path="/news" render={() => <Dialogs />} />
          <Route path="/music" render={() => <Dialogs />} />
          <Route path="/settings" render={() => <Dialogs />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
