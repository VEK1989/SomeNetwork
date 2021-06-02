import classes from './MyWall.module.css'
import Post from './Post/Post'

const MyWall = () => {
	return (
		<div className={classes.wall}><h3>My Wall</h3>
			<textarea name="" id="" cols="30" rows="2"></textarea>
			<button>Add post</button>
			<Post message="Hello my friend" likeCount="3" />
			<Post message="How are you" likeCount="7" />
			<Post message="It's me!" likeCount="23" />
		</div>
	);
};

export default MyWall;