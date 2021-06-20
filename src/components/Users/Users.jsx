import classes from './Users.Module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/userPhoto.png'

const Users = (props) => {
	if (props.users.length === 0) {
		axios.get('http://localhost:3030/users')
			.then(response => {
				props.setUsers(response.data.items)
			})
	}
	return (
		<div className={classes.users}>
			{
				props.users.map(u => {
					return <div key={u.id} className={classes.users_item}>
						<div>
							<img src={u.photos.small != null ? u.photo.small : userPhoto} className={classes.userPhoto} />
							<span className={classes.userName}>{u.name}</span>
							<div>
								{u.followStatus ? <button className={classes.Btn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
									: <button className={classes.Btn} onClick={() => { props.follow(u.id) }}>Follow</button>}
							</div>
						</div>
						<div>
							<span>{'u.userStatus'}</span>
						</div>
						<div>
							<div>{'u.userCountry'}</div>
							<div>{'u.userCity'}</div>
						</div>
					</div>
				})
			}
		</div>
	);
};

export default Users;