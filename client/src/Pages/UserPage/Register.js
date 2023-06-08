import { useContext, useState } from "react";
import axios from "axios";
import { APIContext } from "../../App";

function RegisterForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDob] = useState();
	const api = useContext(APIContext);

	const submitHandler = () => {
		console.log(username, password, name, email, dob);
		axios
			.post(api + "/user/register", {
				username,
				password,
				name,
				email,
				dob,
			})
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
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="dob">Date of Birth</label>
				<input
					id="dob"
					type="date"
					value={dob}
					max={new Date().toISOString().slice(0, 10)}
					onChange={(e) => {
						setDob(e.target.value);
					}}
				/>
			</div>

			<input type="button" value="Register" onClick={submitHandler} />
		</form>
	);
}

export default RegisterForm;
