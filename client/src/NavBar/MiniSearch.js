import React from "react";
function MiniSearch() {
	return (
		// <div
		// 	class="navbar__element"
		// 	style={{
		// 		display: "flex",
		// 		alignItems: "center",
		// 	}}
		// >
		<input
			className="navbar__element"
			type="text"
			placeholder="Insert your choice here"
			style={{
				height: "50px",
				alignSelf: "center",
				border: "1px solid black",
				borderRadius: "15px",
				padding: "5px 20px",
			}}
		/>
		// </div>
	);
}

export default MiniSearch;
