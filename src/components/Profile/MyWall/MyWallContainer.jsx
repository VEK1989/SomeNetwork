import { connect } from 'react-redux';
import { addNewPost, modeMyPost } from '../../../redux/profile_reducer'
import MyWall from './MyWall';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
	}
}

const MyWallContainer = connect(mapStateToProps, {
	addNewPost,
	modeMyPost,
})(MyWall)

export default MyWallContainer;