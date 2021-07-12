import messagePageReducer from "./messagePage_reducer";
import sideBarReducer from "./sideBar_reducer";
import profilePageReducer from "./profile_reducer";
import { combineReducers, createStore } from "redux";
import usersReducer from "./users_reduser";

let redusers = combineReducers({
	profilePage: profilePageReducer,
	messagePage: messagePageReducer,
	sideBar: sideBarReducer,
	usersPage: usersReducer
})

let store = createStore(redusers)

export default store