import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { APIContext, LanguageContext } from "../../App";
import { Form, Button } from "react-bootstrap";
import { dictionary } from "../../utils";
import { Link } from "react-router-dom";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const api = useContext(APIContext);
	const { language } = useContext(LanguageContext);
	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(username, password);
		axios
			.post(api + "/user/login", { username, password })
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div style={{ height: "600px" }} className="position-relative">
			<Form
				className="w-50 position-absolute top-50 start-50 translate-middle border border-black rounded-5 fs-3 p-5"
				onSubmit={submitHandler}
			>
				<Form.Group className="mb-5">
					<Form.Label>{dictionary[language].username}</Form.Label>
					<Form.Control
						type="text"
						placeholder={`${dictionary[language].username}`}
						className="fs-4"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-5">
					<Form.Label>{dictionary[language].password}</Form.Label>
					<Form.Control
						type="password"
						placeholder={`${dictionary[language].password}`}
						className="fs-4"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Link to="/register">
					{dictionary[language].changeToRegister}
				</Link>

				<Button
					variant="primary"
					type="submit"
					className="float-end fs-3"
				>
					{dictionary[language].login}
				</Button>
			</Form>
		</div>
	);
}

export default LoginForm;
