import React from 'react';
import classes from './Users.Module.css';
import userPhoto from '../../assets/img/userPhoto.png';
import Paginator from '../Commons/Paginator';
import preloader from '../../assets/img/puff.svg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
	const followToUser = (userId) => {
		props.getAcceptFollow(userId)
	}

	const unFollowToUser = (userId) => {
		props.getUnAcceptFollow(userId)
	}

	return (
		<div className={classes.users}>
			<div>
				<Paginator totalUsers={props.totalUsers}
					pageSize={props.pageSize}
					currentPage={props.currentPage}
					onPageChenched={props.onPageChenched}
				/>
			</div>
			{
				props.users.map(u => {
					return <div key={u.id} className={classes.users_item}>
						<div>
							<NavLink to={`/profile/${u.id}`}>
								{
									props.isFetching ? <img src={preloader} alt="#" height='100px' />
										: <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={classes.userPhoto} alt='UserPhoto' />
								}
							</NavLink>
							<span className={classes.userName}>{u.name}</span>
							<div>
								{u.followStatus ? <button className={classes.Btn} onClick={() => { unFollowToUser(u.id) }}>Unfollow</button>
									: <button className={classes.Btn} onClick={() => { followToUser(u.id) }}>Follow</button>}
							</div>
						</div>
						<div>
							<span>{u.status != null && u.status}</span>
						</div>
					</div>
				})
			}
		</div>
	);
}


export default Users;