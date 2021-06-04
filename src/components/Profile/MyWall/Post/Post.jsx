import classes from './Post.module.css'

const Post = (props) => {
	return (
		<div className={classes.post}>
			<img className={classes.avatar} src="https://im.indiatimes.in/content/itimes/photo/2016/Aug/26/1472233327-25-pictures-that-will-instantly-make-you-happy_card.jpg" alt="avatar" />
			<span>{props.message}</span>
			<div>{props.likeCount} like</div>
		</div>
	);
};

export default Post;