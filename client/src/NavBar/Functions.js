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
			<button className="navbar__element navbar__element--large">
				Home page
			</button>

			<Places />
			<button className="navbar__element navbar__element--large">
				Contact
			</button>
		</div>
	);
}

export default Functions;
