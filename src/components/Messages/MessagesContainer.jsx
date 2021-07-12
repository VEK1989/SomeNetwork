import Messages from './Messages';
import { sendMyMessage, modeMessages } from '../../redux/messagePage_reducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		chat: state.messagePage.chatData,
		message: state.messagePage.messageData,
		messageText: state.messagePage.messageText,
	}
}

const MessagesContainer = connect(mapStateToProps, {
	sendMyMessage,
	modeMessages
})(Messages)

export default MessagesContainer;