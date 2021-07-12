import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow } from "../../redux/users_reduser";
import Users from "./Users";
import * as axios from 'axios';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.currentSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsers(response.data.totalCount)
			});
	}

	onPageChenched = (pageNumber) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.currentSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			});
	}
	render() {
		return (
			<Users users={this.props.users}
				totalUsers={this.props.totalUsers}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChenched={this.onPageChenched}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				isFetching={this.props.isFetching} />)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsers: state.usersPage.totalUsers,
		currentPage: state.usersPage.currentPage,
		currentSize: state.usersPage.currentSize,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsers,
	toggleIsFetching
})(UsersContainer)

