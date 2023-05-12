import React from "react";

import "./NavBar.css";
import Places from "./Places";
import { useNavigate } from "react-router-dom";

function Functions() {
	// let places = ["Miền Bắc", "Miền Trung", "Miền Nam"];
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<button
				className="navbar__element navbar__element--large"
				onClick={() => {
					navigate("/");
				}}
			>
				Home page
			</button>

			<Places />
			<button
				className="navbar__element navbar__element--large"
				onClick={() => {
					navigate("/contact");
				}}
			>
				Contact
			</button>
		</div>
	);
}

export default Functions;
