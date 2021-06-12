const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const MODE_MESSAGE_TEXT = 'MODE-MESSAGE-TEXT'

const messagePageReducer = (state, action) => {
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

export default messagePageReducer