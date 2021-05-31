import classes from './Profile.module.css'

const Profile = () => {
	return (
		<main className={classes.profile}>
			<div>
				Ava +description
			</div>
			<div>My wall
				<div>my post</div>
				<div>my post2</div>
			</div>
		</main>
	);
};

export default Profile;