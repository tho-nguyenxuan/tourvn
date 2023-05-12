import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../App";
function User({}) {
	const { account } = useContext(AccountContext);
	return (
		<button className="navbar__element">
			<Link to="/user">
				{account ? (
					<img
						src={
							process.env.PUBLIC_URL +
							"/4092564-about-mobile-ui-profile-ui-user-website_114033.png"
						}
						style={{ height: "100%" }}
					/>
				) : (
					<img
						src={
							process.env.PUBLIC_URL +
							"/login-square-arrow-button-outline_icon-icons.com_73220.png"
						}
						style={{ height: "100%" }}
					/>
				)}
			</Link>
		</button>
	);
}

export default User;
