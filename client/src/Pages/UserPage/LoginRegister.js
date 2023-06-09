import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AccountContext } from "../../App";
import { Form, Button } from "react-bootstrap";

import LoginForm from "./Login";
import RegisterForm from "./Register";

function LoginRegister() {
	const { account } = useContext(AccountContext);
	const [isLogin, setIsLogin] = useState(true);
	return <LoginForm />;
}

export default LoginRegister;
