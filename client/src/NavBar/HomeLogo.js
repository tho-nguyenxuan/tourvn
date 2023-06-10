import { NavbarBrand, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomeLogo() {
	const navigate = useNavigate();
	return (
		<NavbarBrand
			onClick={() => navigate("/")}
			style={{ cursor: "pointer" }}
		>
			<Image
				className=""
				src={process.env.PUBLIC_URL + "/Icons/tour-logo.svg"}
				height={48}
			/>
			<Image
				className=""
				src={process.env.PUBLIC_URL + "/Icons/brand.svg"}
				height={64}
			/>
		</NavbarBrand>
	);
}

export default HomeLogo;
