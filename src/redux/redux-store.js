import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reduser";
import dialogseReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogseReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(redusers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
