import { getAuthMe, login, logout } from "../api/api"

const SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isLogin: false
}

const authUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER:
			return {
				...state,
				...action.payload
			}

		default:
			return state
	}
}

export const setAuthUser = (userId, email, login, isLogin) => ({ type: SET_AUTH_USER, payload: { userId, email, login, isLogin } })

export const getAuthUser = () => {
	return (dispatch) => {
		getAuthMe().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
				dispatch(setAuthUser(id, email, login, true))
			}
		});
	}
}

export const getLoginMe = (email, password, rememberMe) => {
	return (dispatch) => {
		login(email, password, rememberMe).then(data => {
			if (data.resultCode === 0) {
				dispatch(getAuthUser())
			}
		});
	}
}

export const getLogoutMe = () => {
	return (dispatch) => {
		logout().then(data => {
			if (data.resultCode === 0) {
				dispatch(setAuthUser(null, null, null, false))
			}
		});
	}
}

export default authUserReducer