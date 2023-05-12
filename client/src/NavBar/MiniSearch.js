import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function MiniSearch() {
	const [searchStr, setSearchStr] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		setSearchStr("");
		navigate("/tours/" + searchStr);
	};

	return (
		<form onSubmit={submitHandler} style={{ display: "flex" }}>
			<input
				className="navbar__element"
				type="text"
				placeholder="Insert your choice here"
				value={searchStr}
				onChange={(e) => {
					setSearchStr(e.target.value);
				}}
				style={{
					height: "50px",
					alignSelf: "center",
					border: "1px solid black",
					borderRadius: "15px",
					padding: "5px 20px",
				}}
			/>
		</form>
	);
}

export default MiniSearch;
