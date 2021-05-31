import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={classes.sidebar}>
			<ul className={classes.list}>
				<li><a href="#" className={classes.link}>Profile</a></li>
				<li><a href="#" className={classes.link}>Messages</a></li>
				<li><a href="#" className={classes.link}>Music</a></li>
				<li><a href="#" className={classes.link}>Settings</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;