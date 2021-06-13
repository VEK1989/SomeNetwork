import React from 'react'
import classes from './MyWall.module.css'
import Post from './Post/Post'

const MyWall = (props) => {
	let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)
	let myNewPost = React.createRef()

	let addMyPost = () => {
		props.addNewPost()
	}

	let onPostChange = () => {
		let text = myNewPost.current.value
		props.modeMyPost(text)
	}

	return (
		<div className={classes.wall}><h3>My Wall</h3>
			<textarea onChange={onPostChange} className={classes.writePost} ref={myNewPost} value={props.newPostText} cols="30" rows="2" />
			<button className={classes.sendBtn} onClick={addMyPost}>Add post</button>
			<div className={classes.posts}>
				{postElement}
			</div>
		</div>
	);
};

export default MyWall;