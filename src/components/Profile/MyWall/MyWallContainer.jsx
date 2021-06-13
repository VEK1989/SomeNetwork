import { connect } from 'react-redux';
import { addNewPostActionCreator, modePostTextActionCreator } from '../../../redux/wallPage_reducer'
import MyWall from './MyWall';

const mapStateToProps = (state) => {
	return {
		posts: state.wallPage.postData,
		newPostText: state.wallPage.newPostText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: () => dispatch(addNewPostActionCreator()),
		modeMyPost: (text) => dispatch(modePostTextActionCreator(text)),
	}
}

const MyWallContainer = connect(mapStateToProps, mapDispatchToProps)(MyWall)

export default MyWallContainer;