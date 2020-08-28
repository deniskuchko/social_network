import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reduser";
import dialogseReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogseReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(redusers);
window.store = store;
export default store;
