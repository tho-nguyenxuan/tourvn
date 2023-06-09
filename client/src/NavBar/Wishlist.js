import { useContext } from "react";
import { Stack, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../App";
import { dictionary } from "../utils";

function Wishlist() {
	const navigate = useNavigate();
	const { language } = useContext(LanguageContext);
	return (
		<Button
			variant="light"
			type="submit"
			onClick={(e) => {
				e.preventDefault();
				navigate("/wishlist");
			}}
			className="px-3 py-0 border rounded-pill m-2"
		>
			<Stack direction="horizontal" gap={1}>
				<Image
					src={process.env.PUBLIC_URL + "/Icons/heart-icon.svg"}
					height={36}
				/>
				<p className="m-0 fs-4">{dictionary[language].wishlist}</p>
			</Stack>
		</Button>
	);
}

export default Wishlist;
