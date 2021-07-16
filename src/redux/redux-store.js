import messagePageReducer from "./messagePage_reducer";
import sideBarReducer from "./sideBar_reducer";
import profilePageReducer from "./profile_reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./users_reduser";
import authUserReducer from "./auth-reduser";
import thunk from 'redux-thunk';

let redusers = combineReducers({
	profilePage: profilePageReducer,
	messagePage: messagePageReducer,
	sideBar: sideBarReducer,
	usersPage: usersReducer,
	auth: authUserReducer
})

let store = createStore(redusers, applyMiddleware(thunk))

export default store