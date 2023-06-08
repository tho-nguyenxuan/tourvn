import { useContext } from "react";
import { AccountContext } from "../../App";
import { Stack, Image } from "react-bootstrap";
import ChangePass from "./ChangePass";

function UserInfo() {
	const { account } = useContext(AccountContext);
	return (
		<Stack direction="horizontal" className="w-100 align-items-start py-5">
			<Stack className="w-25 align-items-center">
				<Image
					src={process.env.PUBLIC_URL + "/Icons/user-icon.svg"}
					height={160}
					width={160}
					className="border border-black border-2 rounded-circle p-4 m-4"
				/>
				<ChangePass />
			</Stack>
			<Stack className="border-start border-black border-3 px-5 py-3 w-100">
				<p className="m-2 fs-2">Name {account.name}</p>
				<p className="m-2 fs-2">Username {account.username}</p>
				<p className="m-2 fs-2">Email {account.email}</p>
				<p className="m-2 fs-2">Date of Birth {account.dob}</p>
				<p className="m-2 fs-2">Phone number {account.phone}</p>
			</Stack>
		</Stack>
	);
}

export default UserInfo;
