import messagePageReducer from "./messagePage_reducer";
import sideBarReducer from "./sideBar_reducer";
import wallPageReducer from "./wallPage_reducer";
import { combineReducers, createStore } from "redux";

let redusers = combineReducers({
	wallPage: wallPageReducer,
	messagePage: messagePageReducer,
	sideBar: sideBarReducer,
})

let store = createStore(redusers)

export default store