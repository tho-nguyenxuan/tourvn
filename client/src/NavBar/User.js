import React from "react";
function User() {
	return (
		<button className="navbar__element">
			<img
				src={
					process.env.PUBLIC_URL +
					"/4092564-about-mobile-ui-profile-ui-user-website_114033.png"
				}
				style={{ height: "100%" }}
			/>
		</button>
	);
}

export default User;
