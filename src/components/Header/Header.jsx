import classes from './Header.module.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
	return (
		<header className={classes.header}>
			<img className={classes.logo} src={logo} alt="logo" width="50px" height="50px" />
		</header>
	);
};

export default Header;