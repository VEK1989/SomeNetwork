import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUser } from '../../redux/auth-reduser';
import * as axios from 'axios';
import { getAuthMe } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		getAuthMe().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
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