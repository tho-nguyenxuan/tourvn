import { NavbarBrand, Image } from "react-bootstrap";

function HomeLogo() {
	return (
		<NavbarBrand href="/">
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
