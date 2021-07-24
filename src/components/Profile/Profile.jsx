import classes from './Profile.module.css';
import MyWallContainer from './MyWall/MyWallContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<main className={classes.profile}>
			<ProfileInfo profile={props.profile} />
			<MyWallContainer />
		</main>
	);
};

export default Profile;