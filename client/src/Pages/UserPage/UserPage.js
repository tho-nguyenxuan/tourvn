import { useContext, useState } from "react";
import "./UserPage.css";

import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import { Button, Stack } from "react-bootstrap";
import { dictionary } from "../../utils";
import { LanguageContext } from "../../App";

function UserPage() {
	const [hover, setHover] = useState(false);
	const navigate = useNavigate();
	const { language } = useContext(LanguageContext);

	return (
		<Stack className="align-items-center px-5">
			<UserInfo />
			<Button
				as="div"
				className={`w-100 fs-2 py-5 ps-5 bg-white text-black d-flex border-info ${
					hover ? "border-1" : "border-0"
				}`}
				onClick={() => {
					navigate("/wishlist");
				}}
				onMouseEnter={() => {
					setHover(true);
				}}
				onMouseLeave={() => {
					setHover(false);
				}}
			>
				{dictionary[language].wishlist}
			</Button>
		</Stack>
	);
}

export default UserPage;
