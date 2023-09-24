import React from "react";
// import moduleName from './Assets/';
import logo from "../Assets/realytlogo.png";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
	return (
		<nav>
			<div className="logo">
				<img src={logo} alt="" width={"60px"} />
				<h2>Youtube</h2>
			</div>
			<div className="search">
				<input type="text" placeholder="search" />
				<div>
					<BsSearch />
				</div>
			</div>
			<FaUserCircle size={30} />
		</nav>
	);
};

export default Header;
