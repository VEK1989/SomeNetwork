import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow } from "../../redux/users_reduser";
import Users from "./Users";
import { getUsers } from '../../api/api'

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		getUsers(this.props.currentPage, this.props.currentSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsers(data.totalCount)
		});
	}

	onPageChenched = (pageNumber) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber)
		getUsers(pageNumber, this.props.currentSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
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

