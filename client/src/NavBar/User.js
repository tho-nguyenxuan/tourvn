import { Button, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function User() {
	const navigate = useNavigate();
	return (
		<Button
			variant="light"
			type="submit"
			onClick={(e) => {
				e.preventDefault();
				navigate("/user");
			}}
			className="px-3 py-0 border rounded-pill m-2"
		>
			<Stack direction="horizontal" gap={1}>
				<Image
					src={process.env.PUBLIC_URL + "/Icons/user-icon.svg"}
					height={36}
				/>
				<p className="m-0 fs-4">Login / Signup</p>
			</Stack>
		</Button>
	);
}

export default User;
