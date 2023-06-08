import { Col, Container, Row, Image, Stack } from "react-bootstrap";

function Footer() {
	const icons = [
		"/facebook-icon.svg",
		"/twitter-icon.svg",
		"/instagram-icon.svg",
		"/pinterest-icon.svg",
		"/youtube-icon.svg",
	];
	return (
		<Container fluid className="p-5" style={{ backgroundColor: "#e6f8ff" }}>
			<Row className="fs-4 p-5">
				<Col>
					<Image
						className=""
						src={process.env.PUBLIC_URL + "/Icons/tour-logo.svg"}
						height={36}
					/>
					<Image
						className=""
						src={process.env.PUBLIC_URL + "/Icons/brand.svg"}
						height={48}
					/>
				</Col>
				<Col></Col>
				<Col>
					<Stack>
						<p className="fw-bold">Company</p>
						<hr className="border-black border-2" />
						<p>Company</p>
						<p>Company</p>
					</Stack>
				</Col>
				<Col></Col>
				<Col>
					<Stack>
						<p className="fw-bold">Support</p>
						<hr className="border-black border-2" />
						<p>Support</p>
						<p>Support</p>
					</Stack>
				</Col>
			</Row>
			<hr className="border-black border-1" />
			<Row className="p-0 pt-2 d-flex justify-content-center">
				<Stack
					direction="horizontal"
					className="justify-content-center"
				>
					{icons.map((icon) => {
						return (
							<Image
								className="mx-2"
								src={process.env.PUBLIC_URL + "/Icons" + icon}
								height={24}
							/>
						);
					})}
				</Stack>
			</Row>
		</Container>
	);
}

export default Footer;
