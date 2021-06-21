import React from 'react';
import classes from './Users.Module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/userPhoto.png'

class Users extends React.Component {
	constructor(props) {
		super(props);

		axios.get('http://localhost:3030/users')
			.then(response => {
				this.props.setUsers(response.data.items)
			});
	}

	render() {
		return (
			<div className={classes.users}>
				{
					this.props.users.map(u => {
						return <div key={u.id} className={classes.users_item}>
							<div>
								<img src={u.photos.small != null ? u.photo.small : userPhoto} className={classes.userPhoto} />
								<span className={classes.userName}>{u.name}</span>
								<div>
									{u.followStatus ? <button className={classes.Btn} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
										: <button className={classes.Btn} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
	}
}

export default Users;