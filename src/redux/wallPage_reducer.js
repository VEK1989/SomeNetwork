const ADD_NEW_POST = 'ADD-NEW-POST'
const MODE_POST_TEXT = 'MODE-POST-TEXT'

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
	newPostText: ""
}

const wallPageReducer = (state = initialState, action) => {
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
		default:
			return state
	}
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })
export const modePostTextActionCreator = (text) => ({ type: MODE_POST_TEXT, newText: text })

export default wallPageReducer;