import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUser } from '../../redux/auth-reduser';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data
					this.props.setAuthUser(id, email, login)
				}
			});
	}

	render() {
		return <Header {...this.props} />
	}
};

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isLogin: state.auth.isLogin
	}
}

export default connect(mapStateToProps, { setAuthUser })(HeaderContainer);