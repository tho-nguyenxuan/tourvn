import React from "react";
import HomeLogo from "./HomeLogo";
import Functions from "./Functions";
import MiniSearch from "./MiniSearch";
import User from "./User";

function NavBar() {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				height: "80px",
				position: "absolute",
				background: "white",
				justifyContent: "space-between",
			}}
		>
			<HomeLogo />
			<Functions />
			<div style={{ display: "flex" }}>
				<MiniSearch />
				<User />
			</div>
		</div>
	);
}

export default NavBar;
