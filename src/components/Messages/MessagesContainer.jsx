import Messages from './Messages';
import { sendNewMessageActionCreator, modeMessageTextActionCreator } from '../../redux/messagePage_reducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		chat: state.messagePage.chatData,
		message: state.messagePage.messageData,
		messageText: state.messagePage.messageText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendMyMessage: () => dispatch(sendNewMessageActionCreator()),
		modeMessages: (text) => dispatch(modeMessageTextActionCreator(text))
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;