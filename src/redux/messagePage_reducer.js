const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const MODE_MESSAGE_TEXT = 'MODE-MESSAGE-TEXT'

let initialState = {
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
}

const messagePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_NEW_MESSAGE:
			let newMessage = {
				id: state.messageData.length + 1,
				message: state.messageText,
			}
			state.messageData.push(newMessage)
			state.messageText = ''
			return state
		case MODE_MESSAGE_TEXT:
			state.messageText = action.newTextMessage
			return state
		default:
			return state
	}
}

export const sendNewMessageActionCreator = () => ({ type: SEND_NEW_MESSAGE })
export const modeMessageTextActionCreator = (text) => ({ type: MODE_MESSAGE_TEXT, newTextMessage: text })

export default messagePageReducer;