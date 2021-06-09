import { NavLink } from 'react-router-dom';
import classes from './Chat.module.css';

const Chat = (props) => {
	let path = '/messages/' + props.id

	return <span className={classes.chat}>
		<img className={classes.photo} src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="" height="40px" width="40px" />
		<NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
	</span>
}

export default Chat;