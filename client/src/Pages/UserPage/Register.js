import { useContext, useState } from "react";
import axios from "axios";
import { APIContext, AccountContext, LanguageContext } from "../../App";
import { Form, Button } from "react-bootstrap";
import { dictionary } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [pno, setPno] = useState("");
	const [dob, setDob] = useState();
	const api = useContext(APIContext);
	const { language } = useContext(LanguageContext);
	const { account, setAccount } = useContext(AccountContext);
	const navigate = useNavigate();

	if (account) navigate("/");

	const submitHandler = (e) => {
		e.preventDefault();
		if (confirmPassword == password)
			axios
				.post(api + "/user/register", {
					username,
					password,
					name,
					email,
					dob,
					phone: pno,
				})
				.then((res) => {
					// console.log(res);
					setAccount(res.data.user);
				})
				.catch((err) => {
					console.log(err);
				});
		else console.log("Password kia");
	};
	return (
		<div style={{ height: "600px" }} className="position-relative">
			<Form
				className="w-50 position-absolute top-50 start-50 translate-middle border border-black rounded-5 fs-3 py-3 px-5"
				onSubmit={submitHandler}
			>
				<Form.Group className="mb-2">
					<Form.Label>{dictionary[language].name} (*)</Form.Label>
					<Form.Control
						type="text"
						placeholder={`${dictionary[language].name}`}
						className="fs-4"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-2">
					<Form.Label>{dictionary[language].username} (*)</Form.Label>
					<Form.Control
						type="text"
						placeholder={`${dictionary[language].username}`}
						className="fs-4"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-2">
					<Form.Label>{dictionary[language].password} (*)</Form.Label>
					<Form.Control
						type="password"
						placeholder={`${dictionary[language].password}`}
						className="fs-4"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-2">
					<Form.Label>
						{dictionary[language].confirmPassword} (*)
					</Form.Label>
					<Form.Control
						type="password"
						placeholder={`${dictionary[language].confirmPassword}`}
						className="fs-4"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-2">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder={`Email`}
						className="fs-4"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-2">
					<Form.Label>{dictionary[language].pno}</Form.Label>
					<Form.Control
						type="text"
						placeholder={dictionary[language].pno}
						className="fs-4"
						value={pno}
						onChange={(e) => setPno(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-2">
					<Form.Label>{dictionary[language].dob}</Form.Label>
					<Form.Control
						type="date"
						placeholder={`${dictionary[language].dob}`}
						className="fs-4"
						value={dob}
						onChange={(e) => setDob(e.target.value)}
						max={new Date().toISOString().substring(0, 10)}
					/>
				</Form.Group>

				<Link to="/login">{dictionary[language].changeToLogin}</Link>

				<Button
					variant="primary"
					type="submit"
					className="float-end fs-3"
				>
					{dictionary[language].signup}
				</Button>
			</Form>
		</div>
	);
}

export default RegisterForm;
