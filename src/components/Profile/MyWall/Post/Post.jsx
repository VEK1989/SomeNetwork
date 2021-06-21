import classes from './Post.module.css'
import userPhoto from '../../../../assets/img/userPhoto.png'

const Post = (props) => {
	return (
		<div className={classes.post}>
			<img className={classes.avatar} src={userPhoto} alt="avatar" />
			<span>{props.message}</span>
			<div>{props.likeCount} like</div>
		</div>
	);
};

export default Post;