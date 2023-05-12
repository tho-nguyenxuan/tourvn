import React from "react";
import HomeLogo from "./HomeLogo";
import Functions from "./Functions";
import MiniSearch from "./MiniSearch";
import User from "./User";
import { Outlet } from "react-router-dom";

function NavBar() {
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
