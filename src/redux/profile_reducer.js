import { getProfile } from "../api/api"

const ADD_NEW_POST = 'ADD-NEW-POST'
const MODE_POST_TEXT = 'MODE-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
	postData: [
		{
			id: 1,
			message: "Hello my friend",
			likeCount: 3
		},
		{
			id: 2,
			message: "How are you",
			likeCount: 43
		},
		{
			id: 3,
			message: "It's me!",
			likeCount: 12
		}
	],
	newPostText: '',
	profile: null
}

const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			return {
				...state,
				postData: [...state.postData,
				{
					id: state.postData.length + 1,
					message: state.newPostText,
					likeCount: 0,
				}
				],
				newPostText: '',
			}
		case MODE_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}
		case SET_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state
	}
}

export const addNewPost = () => ({ type: ADD_NEW_POST })
export const modeMyPost = (text) => ({ type: MODE_POST_TEXT, newText: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export const getProfileUserInfo = (userId) => {
	return (dispatch) => {
		getProfile(userId).then(data => {
			dispatch(setProfile(data))
		});
	}
}

export default profilePageReducer;