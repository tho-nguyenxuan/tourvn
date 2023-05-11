import React from "react";

import "./NavBar.css";
import Places from "./Places";

function Functions() {
	// let places = ["Miền Bắc", "Miền Trung", "Miền Nam"];

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<button class="navbar__element">Home page</button>

			<Places />
			<button class="navbar__element">Contact</button>
		</div>
	);
}

export default Functions;
