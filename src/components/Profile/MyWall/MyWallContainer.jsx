import React from 'react'
import { addNewPostActionCreator, modePostTextActionCreator } from '../../../redux/wallPage_reducer'
import MyWall from './MyWall';

const MyWallContainer = (props) => {
	let posts = props.store.getState()

	let addNewPost = () => {
		props.store.dispatch(addNewPostActionCreator())
	}

	let modeMyPost = (text) => {
		let action = modePostTextActionCreator(text)
		props.store.dispatch(action)
	}

	return (<MyWall addNewPost={addNewPost} modeMyPost={modeMyPost} posts={posts.wallPage.postData} newPostText={posts.wallPage.newPostText} />);
};

export default MyWallContainer;