import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reduser";
import dialogseReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogseReducer,
  sidebar: sidebarReducer,
});
let store = createStore(redusers);
export default store;
