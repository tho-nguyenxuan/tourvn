import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HomeLogo from "./HomeLogo";
import Functions from "./Functions";
import MiniSearch from "./MiniSearch";
import User from "./User";

function NavBar({}) {
	return (
		<>
			<div className="navbar">
				<HomeLogo />
				<Functions />
				<div style={{ display: "flex" }}>
					<MiniSearch />
					<User />
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default NavBar;
