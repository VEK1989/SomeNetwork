import React from 'react';
import classes from './Users.Module.css';
import userPhoto from '../../assets/img/userPhoto.png';
import Paginator from '../Commons/Paginator';
import preloader from '../../assets/img/puff.svg'

const Users = (props) => {
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
							{
								props.isFetching ? preloader
									: <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={classes.userPhoto} alt='UserPhoto' />
							}
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
}


export default Users;