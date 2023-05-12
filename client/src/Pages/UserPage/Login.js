import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const submitHandler = () => {
		// console.log(username, password);
		axios
			.post("http://localhost:5000/login", { username, password })
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<form className="loginregister__form">
			<div>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<input type="button" value="Login" onClick={submitHandler} />
		</form>
	);
}

export default LoginForm;