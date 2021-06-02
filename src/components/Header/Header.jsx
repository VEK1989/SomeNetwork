import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<img src="./catbook-logo.svg" alt="logo" width="50px" height="50px" />
		</header>
	);
};

export default Header;