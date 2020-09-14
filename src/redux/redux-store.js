import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reduser";
import dialogseReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogseReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
window._store_ = store;
export default store;
