import React from 'react';
import Messages from './Messages';
import { sendNewMessageActionCreator, modeMessageTextActionCreator } from '../../redux/messagePage_reducer'

const MessagesContainer = (props) => {
	let state = props.store.getState()

	let sendMyMessage = () => {
		props.store.dispatch(sendNewMessageActionCreator())
	}

	let modeMessages = (text) => {
		let action = modeMessageTextActionCreator(text)
		props.store.dispatch(action)
	}

	return (
		<Messages modeMessages={modeMessages} sendMyMessage={sendMyMessage} chat={state.messagePage.chatData} message={state.messagePage.messageData} messageText={state.messagePage.messageText} />
	);
};

export default MessagesContainer;