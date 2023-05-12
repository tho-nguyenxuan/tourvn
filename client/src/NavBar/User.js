import React from "react";
function User() {
	return (
		<button class="navbar__element">
			<img
				class=""
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
