import classes from './Profile.module.css'
import MyWallContainer from './MyWall/MyWallContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
	if (!props.isLogin) return <Redirect to='/login' />

	return (
		<main className={classes.profile}>
			<ProfileInfo profile={props.profile} />
			<MyWallContainer />
		</main>
	);
};

export default Profile;