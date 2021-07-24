import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileUserInfo } from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authoriseUserId
			if (!this.props.authoriseUserId) {
				this.props.history.push('/login')
			}
		}
		this.props.getProfileUserInfo(userId)
	}

	render() {
		return (
			<Profile {...this.props} />
		);
	}
};

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isLogin: state.auth.isLogin,
		authoriseUserId: state.auth.userId
	}
}

const withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfileUserInfo })(withUrlProfileContainer);