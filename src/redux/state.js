const ADD_NEW_POST = 'ADD-NEW-POST'
const MODE_POST_TEXT = 'MODE-POST-TEXT'
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const MODE_MESSAGE_TEXT = 'MODE-MESSAGE-TEXT'

let store = {
	_renderEntireTree() { },
	_state: {
		wallPage: {
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
		},
		messagePage: {
			chatData: [
				{
					id: 1,
					name: "Andrey",
				},
				{
					id: 2,
					name: "Olga",
				},
				{
					id: 3,
					name: "Igor",
				},
				{
					id: 4,
					name: "Katya",
				},
				{
					id: 5,
					name: "Sergey",
				},
				{
					id: 6,
					name: "Viktor",
				},
			],
			messageData: [
				{
					id: 1,
					message: "Hi! How are you",
				},
				{
					id: 2,
					message: "Hello",
				},
				{
					id: 3,
					message: "You made a cool project",
				},
				{
					id: 4,
					message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati sint doloremque, molestiae placeat commodi ducimus ut rem vitae officiis repudiandae libero tempora illum eos totam quaerat! Alias, voluptas assumenda.",
				},
			],
			messageText: ""
		},
		sideBar: {
			friends: [
				{
					id: 1,
					name: "Andrey",
				},
				{
					id: 2,
					name: "Olga",
				},
				{
					id: 3,
					name: "Igor",
				},
			],
		}
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._renderEntireTree = observer
	},
	dispatch(action) {
		if (action.type === ADD_NEW_POST) {
			let newPost = {
				id: this._state.wallPage.postData.length + 1,
				message: this._state.wallPage.newPostText,
				likeCount: 0,
			}
			this._state.wallPage.postData.push(newPost)
			this._state.wallPage.newPostText = ''
			this._renderEntireTree(this._state)
		} else if (action.type === MODE_POST_TEXT) {
			this._state.wallPage.newPostText = action.newText
			this._renderEntireTree(this._state)
		} else if (action.type === SEND_NEW_MESSAGE) {
			let newMessage = {
				id: this._state.messagePage.messageData.length + 1,
				message: this._state.messagePage.messageText,
			}
			this._state.messagePage.messageData.push(newMessage)
			this._state.messagePage.messageText = ''
			this._renderEntireTree(this._state)
		} else if (action.type === MODE_MESSAGE_TEXT) {
			this._state.messagePage.messageText = action.newTextMessage
			this._renderEntireTree(this._state)
		}
	}
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })

export const modePostTextActionCreator = (text) => ({ type: MODE_POST_TEXT, newText: text })

export const sendNewMessageActionCreator = () => ({ type: SEND_NEW_MESSAGE })

export const modeMessageTextActionCreator = (text) => ({ type: MODE_MESSAGE_TEXT, newTextMessage: text })

export default store;