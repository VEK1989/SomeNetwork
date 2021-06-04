import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const Chat = (props) => {
	let path = '/messages/' + props.id

	return <span className={classes.chat}>
		<NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
	</span>
}

const Dialogs = (props) => {
	return <span className={classes.dialog}>{props.message}</span>
}

const Messages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.chats}>
				<Chat name='Andrey' id='1' />
				<Chat name='Olga' id='2' />
				<Chat name='Igor' id='3' />
				<Chat name='Katya' id='4' />
				<Chat name='Sergey' id='5' />
				<Chat name='Viktor' id='6' />
			</div>
			<div className={classes.dialogs}>
				<Dialogs message='Hi! How are you' />
				<Dialogs message='Hello' />
				<Dialogs message='You made a cool project' />
				<Dialogs message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus obcaecati sint doloremque, molestiae placeat commodi ducimus ut rem vitae officiis repudiandae libero tempora illum eos totam quaerat! Alias, voluptas assumenda.' />
			</div>
		</div>
	);
};

export default Messages;