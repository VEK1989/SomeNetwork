import React from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from "react-redux";
import { setProfile } from '../../redux/profile_reducer';
import { withRouter } from "react-router-dom";
import { getProfile } from "../../api/api";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 18300
		getProfile(userId).then(data => {
			this.props.setProfile(data)
		});
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

export default connect(mapStateToProps, { setProfile })(withUrlProfileContainer);