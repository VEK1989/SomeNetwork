import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUser } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUser()
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

export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);