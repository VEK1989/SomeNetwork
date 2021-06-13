import React from 'react';
import Chat from './Chat/Chat';
import Dialogs from './Dialogs/Dialogs';
import classes from './Messages.module.css';

const Messages = (props) => {
	let chatElement = props.chat.map(c => <Chat name={c.name} key={c.id} id={c.id} />)
	let messageElement = props.message.map(m => <Dialogs message={m.message} key={m.id} />)
	let myMessage = React.createRef()

	let sendMessage = () => {
		props.sendMyMessage()
	}

	let inputMessage = () => {
		let text = myMessage.current.value
		props.modeMessages(text)
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
					<textarea onChange={inputMessage} value={props.messageText} ref={myMessage} className={classes.textMessage} cols="30" rows="5" />
					<button className={classes.sendBtn} onClick={sendMessage}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Messages;