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
	addNewPost() {
		let newPost = {
			id: this._state.wallPage.postData.length + 1,
			message: this._state.wallPage.newPostText,
			likeCount: 0,
		}

		this._state.wallPage.postData.push(newPost)
		this._state.wallPage.newPostText = ''
		this._renderEntireTree(this._state)
	},
	modePostText(newText) {
		this._state.wallPage.newPostText = newText
		this._renderEntireTree(this._state)
	},
	sendNewMessage() {
		let newMessage = {
			id: this._state.messagePage.messageData.length + 1,
			message: this._state.messagePage.messageText,
		}

		this._state.messagePage.messageData.push(newMessage)
		this._state.messagePage.messageText = ''
		this._renderEntireTree(this._state)
	},
	modeMessageText(newTextMessage) {
		this._state.messagePage.messageText = newTextMessage
		this._renderEntireTree(this._state)
	},
	subscribe(observer) {
		this._renderEntireTree = observer
	},
	getState() {
		return this._state
	}
}

export default store;