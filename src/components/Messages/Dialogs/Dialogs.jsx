import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div>
			<span className={classes.dialog}>{props.message}</span>
		</div>
	)
}

export default Dialogs;