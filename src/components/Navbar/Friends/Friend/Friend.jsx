import classes from './Friend.module.css'


const Friend = (props) => {

	return (
		<div className={classes.friend}>
			<img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" className={classes.photo} alt={props.name} width="40px" height="40px" />
			<span className={classes.name}>{props.name}</span>
		</div>
	);
};

export default Friend;