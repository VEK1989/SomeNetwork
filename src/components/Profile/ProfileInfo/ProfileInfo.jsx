import classes from './ProfileInfo.module.css';
import altPhoto from '../../../assets/img/userPhoto.png';
import preloader from '../../../assets/img/puff.svg';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <img src={preloader} alt="#" />
	}
	return (
		<div className={classes.profile}>
			<img src={props.profile.photos.large != null ? props.profile.photos.large : altPhoto} alt="avatar" className={classes.avatarPhoto} />
			<div className={classes.profileInfo}>
				<h1>{props.profile.fullName}</h1>
				<span className={classes.aboutMe}>{props.profile.aboutMe}</span>
				<div>
					<h3>Contacts:</h3>
					<div className={classes.contacts}>
						{
							props.profile.contacts.facebook != null
								? <div>facebook: <a href={`http://${props.profile.contacts.facebook}`}>{props.profile.contacts.facebook}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.website != null
								? <div>website:  <a href={`http://${props.profile.contacts.website}`}>{props.profile.contacts.website}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.vk != null
								? <div>vk: <a href={`http://${props.profile.contacts.vk}`}>{props.profile.contacts.vk}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.twitter != null
								? <div>twitter: <a href={`http://${props.profile.contacts.twitter}`}>{props.profile.contacts.twitter}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.instagram != null
								? <div>instagram: <a href={`http://${props.profile.contacts.instagram}`}>{props.profile.contacts.instagram}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.youtube != null
								? <div>youtube: <a href={`http://${props.profile.contacts.youtube}`}>{props.profile.contacts.youtube}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.github != null
								? <div>github: <a href={`http://${props.profile.contacts.github}`}>{props.profile.contacts.github}</a></div>
								: <span></span>
						}
						{
							props.profile.contacts.mainLink != null
								? <div>mainLink: <a href={`http://${props.profile.contacts.mainLink}`}>{props.profile.contacts.mainLink}</a></div>
								: <span></span>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;