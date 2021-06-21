import { NavLink } from 'react-router-dom';
import classes from './Chat.module.css';
import userPhoto from '../../../assets/img/userPhoto.png'

const Chat = (props) => {
	let path = '/messages/' + props.id

	return <span className={classes.chat}>
		<img className={classes.photo} src={userPhoto} alt="" height="40px" width="40px" />
		<NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
	</span>
}

export default Chat;