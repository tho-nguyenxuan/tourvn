import React from "react";
import { useNavigate } from "react-router-dom";

function HomeLogo() {
	const navigate = useNavigate();
	return (
		<button
			className="navbar__element navbar__element--large"
			onClick={() => {
				navigate("/");
			}}
		>
			<img
				className=""
				src={
					process.env.PUBLIC_URL +
					"/vacation_bag_backpack_trip_outdoor_icon_228038.png"
				}
				style={{ height: "100%" }}
			/>
		</button>
	);
}

export default HomeLogo;
