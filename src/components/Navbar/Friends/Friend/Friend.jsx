import classes from './Friend.module.css'
import userPhoto from '../../../../assets/img/userPhoto.png'


const Friend = (props) => {

	return (
		<div className={classes.friend}>
			<img src={userPhoto} className={classes.photo} alt={props.name} width="40px" height="40px" />
			<span className={classes.name}>{props.name}</span>
		</div>
	);
};

export default Friend;