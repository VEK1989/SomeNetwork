import { getAuthMe, login } from "../api/api"

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
				...action.data,
				isLogin: true
			}

		default:
			return state
	}
}

export const setAuthUser = (userId, email, login) => ({ type: SET_AUTH_USER, data: { userId, email, login } })

export const getAuthUser = () => {
	return (dispatch) => {
		getAuthMe().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
				dispatch(setAuthUser(id, email, login))
			}
		});
	}
}

export const getLoginMe = (values) => {
	return (dispatch) => {
		login(values).then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
				dispatch(setAuthUser(id, email, login))
			}
		});
	}
}

export default authUserReducer