import classes from './Profile.module.css'
import MyWall from './MyWall/MyWall'

const Profile = () => {
	return (
		<main className={classes.profile}>
			<div>
				Ava +description
			</div>
			<MyWall />
		</main>
	);
};

export default Profile;