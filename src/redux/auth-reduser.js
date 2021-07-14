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

export default authUserReducer