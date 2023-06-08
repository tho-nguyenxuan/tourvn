import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Image, Stack } from "react-bootstrap";

function MiniSearch() {
	const [searchStr, setSearchStr] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		setSearchStr("");
		navigate("/tours/" + searchStr);
	};
	return (
		<Form className="m-2">
			<Stack
				direction="horizontal"
				className="border border-primary rounded"
			>
				<Form.Control
					type="search"
					placeholder="Search"
					value={searchStr}
					onChange={(e) => {
						setSearchStr(e.target.value);
					}}
					className="border border-0 fs-4 text-black"
					size="lg"
					style={{ width: "180px" }}
				/>
				<Button
					variant="light"
					type="submit"
					onClick={submitHandler}
					className="p-0 border border-0"
				>
					<Image
						src={process.env.PUBLIC_URL + "/Icons/search-icon.svg"}
						width={36}
						height={36}
					/>
				</Button>
			</Stack>
		</Form>
	);
}

export default MiniSearch;
