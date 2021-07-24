import { getAuthUser } from "./auth-reduser"

const INITIALISED_SUCSESS = 'INITIALISED_SUCSESS'

let initialState = {
	initialised: false
}

const appReduser = (state = initialState, action) => {
	switch (action.type) {
		case INITIALISED_SUCSESS:
			return {
				...state,
				initialised: true
			}

		default:
			return state
	}
}

export const initialisedSucsess = () => ({ type: INITIALISED_SUCSESS })

export const initialiseApp = () => {
	return (dispatch) => {
		let promise = dispatch(getAuthUser())

		Promise.all([promise])
			.then(() => {
				dispatch(initialisedSucsess())
			})
	}
}

export default appReduser