import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => (
	<div>
		<header className="header">
			<h1> Expensify </h1>
			<Link to="/login">
				{" "}
				<p className="logout"> Logout </p>
			</Link>
		</header>
	</div>
);

export default Header;
