import classes from './Header.module.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogoutMe } from '../../redux/auth-reduser';
import { getIsLogin, getLogin } from '../../redux/selectors';

const Header = () => {
	const isLogin = useSelector(getIsLogin)
	const login = useSelector(getLogin)

	const dispatch = useDispatch()

	const logOut = () => {
		dispatch(getLogoutMe())
	}

	return (
		<header className={classes.header}>
			<img className={classes.logo} src={logo} alt="logo" width="50px" height="50px" />
			<div>{
				isLogin ? <div><span className={classes.nickName}>{login}</span> <button onClick={logOut} className={classes.sendBtn}>Log out</button></div>
					: <NavLink to='/login' className={classes.link}>
						<span >Login</span>
					</NavLink>
			}
			</div>
		</header>
	);
};

export default Header;