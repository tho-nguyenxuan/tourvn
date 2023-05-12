import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AccountContext } from "../../App";

import LoginForm from "./Login";
import RegisterForm from "./Register";

function LoginRegister({}) {
	const { account } = useContext(AccountContext);
	const [isLogin, setIsLogin] = useState(true);
	if (account) return <Navigate replace to="/user" />;
	else
		return (
			<form className="loginregister">
				<div className="loginregister__type">
					<input
						className={
							isLogin
								? "loginregister__type--on"
								: "loginregister__type--off"
						}
						type="button"
						value="log in"
						onClick={() => setIsLogin(true)}
						style={{ width: "50%" }}
					/>
					<input
						className={
							isLogin
								? "loginregister__type--off"
								: "loginregister__type--on"
						}
						type="button"
						value="register"
						onClick={() => setIsLogin(false)}
						style={{ width: "50%" }}
					/>
				</div>
				{/* <div style={{ height: "100%" }}> */}
				{isLogin ? <LoginForm /> : <RegisterForm />}
				{/* </div> */}
			</form>
		);
}

export default LoginRegister;
