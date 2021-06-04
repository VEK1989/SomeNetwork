import classes from './Profile.module.css'
import MyWall from './MyWall/MyWall'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<main className={classes.profile}>
			<ProfileInfo />
			<MyWall />
		</main>
	);
};

export default Profile;