import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<Link to="/">IP Address Tracker</Link>
		</nav>
	);
};

export default NavBar;
