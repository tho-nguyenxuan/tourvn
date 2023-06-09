import { useContext } from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AccountContext, LanguageContext } from "../App";
import { dictionary } from "../utils";

function User() {
	const navigate = useNavigate();
	const { account } = useContext(AccountContext);
	const { language } = useContext(LanguageContext);
	return (
		<Button
			variant="light"
			type="submit"
			onClick={(e) => {
				e.preventDefault();
				if (!account) navigate("/login");
				else navigate("/user");
			}}
			className="px-3 py-0 border rounded-pill m-2"
		>
			<Stack direction="horizontal" gap={1}>
				<Image
					src={process.env.PUBLIC_URL + "/Icons/user-icon.svg"}
					height={36}
				/>
				{account ? (
					<p className="m-0 fs-4">{`${dictionary[language].account}`}</p>
				) : (
					<p className="m-0 fs-4">{`${dictionary[language].login} / ${dictionary[language].signup}`}</p>
				)}
			</Stack>
		</Button>
	);
}

export default User;
