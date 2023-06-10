import { useContext, useEffect } from "react";
import { AccountContext, LanguageContext } from "../../App";
import { Stack, Image, Button, Container, Row, Col } from "react-bootstrap";
import ChangePass from "./ChangePass";
import { useNavigate } from "react-router-dom";
import { dictionary } from "../../utils";

function UserInfo() {
	const { account, setAccount } = useContext(AccountContext);
	const { language } = useContext(LanguageContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!account) navigate("/");
	}, [account]);
	const temp = 3;

	return (
		account && (
			<Stack
				direction="horizontal"
				className="w-100 align-items-start py-5"
			>
				<Stack className="w-25 align-items-center">
					<Image
						src={process.env.PUBLIC_URL + "/Icons/user-icon.svg"}
						height={160}
						width={160}
						className="border border-black border-2 rounded-circle p-4 m-4"
					/>
					<ChangePass />
					<Button
						variant="light"
						className="border border-black fs-4"
						onClick={() => {
							setAccount();
						}}
					>
						{dictionary[language].logout}
					</Button>
				</Stack>
				<Container className="border-start border-black border-3 px-5 py-3 w-100">
					<Row>
						<Col lg={temp}>
							<p className="m-2 fs-2">
								{dictionary[language].name}
							</p>
						</Col>
						<Col>
							<p className="m-2 fs-2">{account.name}</p>
						</Col>
					</Row>
					<Row>
						<Col lg={temp}>
							<p className="m-2 fs-2">
								{dictionary[language].username}
							</p>
						</Col>
						<Col>
							<p className="m-2 fs-2">{account.username}</p>
						</Col>
					</Row>
					<Row>
						<Col lg={temp}>
							<p className="m-2 fs-2">Email</p>
						</Col>
						<Col>
							<p className="m-2 fs-2">{account.email}</p>
						</Col>
					</Row>
					<Row>
						<Col lg={temp}>
							<p className="m-2 fs-2">
								{dictionary[language].dob}
							</p>
						</Col>
						<Col>
							<p className="m-2 fs-2">{account.dob}</p>
						</Col>
					</Row>
					<Row>
						<Col lg={temp}>
							<p className="m-2 fs-2">
								{dictionary[language].pno}
							</p>
						</Col>
						<Col>
							<p className="m-2 fs-2">{account.phone}</p>
						</Col>
					</Row>
				</Container>
			</Stack>
		)
	);
}

export default UserInfo;
