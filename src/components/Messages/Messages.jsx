import React from 'react';
import Chat from './Chat/Chat';
import Dialogs from './Dialogs/Dialogs';
import classes from './Messages.module.css';
import { sendNewMessageActionCreator, modeMessageTextActionCreator } from '../../redux/state'

const Messages = (props) => {
	let chatElement = props.state.chatData.map(c => <Chat name={c.name} id={c.id} />)
	let messageElement = props.state.messageData.map(m => <Dialogs message={m.message} />)
	let myMessage = React.createRef()

	let sendMessage = () => {
		props.dispatch(sendNewMessageActionCreator())
	}

	let inputMessage = () => {
		let text = myMessage.current.value
		let action = modeMessageTextActionCreator(text)
		props.dispatch(action)
	}

	return (
		<div className={classes.messages}>
			<div className={classes.chats}>
				{chatElement}
			</div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItem}>
					{messageElement}
				</div>
				<div className={classes.sendMessage}>
					<textarea onChange={inputMessage} value={props.state.messageText} ref={myMessage} className={classes.textMessage} cols="30" rows="5" />
					<button className={classes.sendBtn} onClick={sendMessage}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Messages;