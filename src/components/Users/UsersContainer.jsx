import React from "react";
import { connect } from "react-redux";
import { getUnAcceptFollow, getAllNeedUsers, getNewPageUsers, getAcceptFollow } from "../../redux/users_reduser";
import Users from "./Users";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getAllNeedUsers(this.props.currentPage, this.props.currentSize)
	}

	onPageChenched = (pageNumber) => {
		this.props.getNewPageUsers(pageNumber, this.props.currentSize)
	}
	render() {
		return (
			<Users users={this.props.users}
				totalUsers={this.props.totalUsers}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChenched={this.onPageChenched}
				getAcceptFollow={this.props.getAcceptFollow}
				getUnAcceptFollow={this.props.getUnAcceptFollow}
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
	getAllNeedUsers,
	getNewPageUsers,
	getAcceptFollow,
	getUnAcceptFollow
})(UsersContainer)

