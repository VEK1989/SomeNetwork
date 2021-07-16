import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileUserInfo } from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 18300
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
		profile: state.profilePage.profile
	}
}

const withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfileUserInfo })(withUrlProfileContainer);