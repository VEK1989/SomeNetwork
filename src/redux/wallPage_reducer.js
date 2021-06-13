const ADD_NEW_POST = 'ADD-NEW-POST'
const MODE_POST_TEXT = 'MODE-POST-TEXT'

let initialState = {
	postData: [
		{
			id: 1,
			massage: "Hello my friend",
			likeCount: 3
		},
		{
			id: 2,
			massage: "How are you",
			likeCount: 43
		},
		{
			id: 3,
			massage: "It's me!",
			likeCount: 12
		}
	],
	newPostText: ""
}

const wallPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			let newPost = {
				id: state.postData.length + 1,
				message: state.newPostText,
				likeCount: 0,
			}
			state.postData.push(newPost)
			state.newPostText = ''
			return state
		case MODE_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })
export const modePostTextActionCreator = (text) => ({ type: MODE_POST_TEXT, newText: text })

export default wallPageReducer;