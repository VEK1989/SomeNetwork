import messagePageReducer from "./messagePage_reducer";
import sideBarReducer from "./sideBar_reducer";
import profilePageReducer from "./profile_reducer";
import { combineReducers, createStore } from "redux";
import usersReducer from "./users_reduser";
import authUserReducer from "./auth-reduser";

let redusers = combineReducers({
	profilePage: profilePageReducer,
	messagePage: messagePageReducer,
	sideBar: sideBarReducer,
	usersPage: usersReducer,
	auth: authUserReducer
})

let store = createStore(redusers)

export default store