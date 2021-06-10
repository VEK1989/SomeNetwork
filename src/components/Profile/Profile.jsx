import classes from './Profile.module.css'
import MyWall from './MyWall/MyWall'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<main className={classes.profile}>
			<ProfileInfo />
			<MyWall posts={props.wallPage.postData} newPostText={props.wallPage.newPostText} dispatch={props.dispatch} />
		</main>
	);
};

export default Profile;