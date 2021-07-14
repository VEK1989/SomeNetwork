import classes from './Header.module.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	debugger
	return (
		<header className={classes.header}>
			<img className={classes.logo} src={logo} alt="logo" width="50px" height="50px" />
			<div>{
				props.isLogin ? <span>{props.login}</span>
					: <NavLink to='/login' className={classes.link}>
						<span >Login</span>
					</NavLink>
			}
			</div>
		</header>
	);
};

export default Header;