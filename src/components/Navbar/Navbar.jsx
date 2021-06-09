import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';


const Navbar = (props) => {
	return (
		<nav className={classes.sidebar}>
			<ul className={classes.list}>
				<li><NavLink to="/profile" activeClassName={classes.active} className={classes.link}>Profile</NavLink></li>
				<li><NavLink to="/messages" activeClassName={classes.active} className={classes.link}>Messages</NavLink></li>
				<li><NavLink to="/news" activeClassName={classes.active} className={classes.link}>News</NavLink></li>
				<li><NavLink to="/music" activeClassName={classes.active} className={classes.link}>Music</NavLink></li>
				<li><NavLink to="/settings" activeClassName={classes.active} className={classes.link}>Settings</NavLink></li>
			</ul>
			<div className={classes.friends}>
				<Friends friends={props.state.friends} />
			</div>
		</nav>
	);
};

export default Navbar;