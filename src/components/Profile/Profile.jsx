import classes from './Profile.module.css'
import MyWallContainer from './MyWall/MyWallContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<main className={classes.profile}>
			<ProfileInfo />
			<MyWallContainer store={props.store} />
		</main>
	);
};

export default Profile;