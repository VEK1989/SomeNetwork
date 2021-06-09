import Friend from './Friend/Friend'
import classes from './Friends.module.css'


const Friends = (props) => {
	let friendList = props.friends.map(f => <Friend name={f.name} />)

	return (
		<div className={classes.friends}>
			<h3>My friends:</h3>
			{ friendList}
		</div>
	);
};

export default Friends;