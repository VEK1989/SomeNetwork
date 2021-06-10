import React from 'react'
import classes from './MyWall.module.css'
import Post from './Post/Post'
import { addNewPostActionCreator, modePostTextActionCreator } from '../../../redux/state'

const MyWall = (props) => {

	let postElement = props.posts.map(p => <Post message={p.massage} likeCount={p.likeCount} />)
	let myNewPost = React.createRef()

	let addMyPost = () => {
		props.dispatch(addNewPostActionCreator())
	}

	let onPostChange = () => {
		let text = myNewPost.current.value
		let action = modePostTextActionCreator(text)

		props.dispatch(action)
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