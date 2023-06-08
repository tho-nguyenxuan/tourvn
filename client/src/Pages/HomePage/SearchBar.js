import { useState } from "react";
import { Form, Button, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBar() {
	var minDate = new Date().toISOString().substring(0, 10);
	const [searchStr, setSearchStr] = useState("");
	const [date, setDate] = useState("");
	const navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		if (searchStr != "") {
			setDate("");
			setSearchStr("");
			date != ""
				? navigate(`/tours/${searchStr}/${date}`)
				: navigate(`/tours/${searchStr}`);
		}
	};
	return (
		<Form className="d-flex w-100 justify-content-center">
			<Stack
				direction="horizontal"
				gap={3}
				className="border rounded-4 p-3 mx-4"
			>
				<Image
					className=""
					src={process.env.PUBLIC_URL + "/Icons/location-icon.svg"}
					height={36}
				/>

				<Form.Control
					required
					type="search"
					placeholder="Destination"
					size="lg"
					style={{ width: "480px" }}
					className="border border-0 fs-3"
					value={searchStr}
					onChange={(e) => {
						setSearchStr(e.target.value);
					}}
				/>
				<div className="vr" />
				<Form.Control
					type="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
					min={minDate}
					size="lg"
					className="border border-0 fs-3"
					style={{ width: "180px" }}
				/>
			</Stack>

			<Button
				variant="light"
				type="submit"
				className="d-flex border rounded-4  align-items-center fs-3 mx-4"
				onClick={submitHandler}
			>
				<Image
					className=""
					src={process.env.PUBLIC_URL + "/Icons/search-icon.svg"}
					height={36}
				/>
				<p className="m-0 fs-4">Search</p>
			</Button>
		</Form>
	);
}

export default SearchBar;
