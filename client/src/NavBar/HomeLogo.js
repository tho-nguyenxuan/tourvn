import React from "react";

function HomeLogo() {
	return (
		<button class="navbar__element navbar__element--large">
			<img
				class=""
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
