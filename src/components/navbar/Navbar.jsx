import React from "react";
import "./navbar.css";
import logo from "./../../assets/logo.svg";

function Navbar() {
	return (
		<nav>
			<img src={logo} alt="VulnScan AI logo " className="logo" />
			<ul>
				<li>
					<a href="/">Features</a>
				</li>
				
				<li>
					<a href="/">Contact</a>
				</li>
				<li>
					<a href="/history">Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
