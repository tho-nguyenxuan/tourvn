import React, { useState } from "react";

function Places() {
	const [isShown, setIsShown] = useState(false);
	let places = {
		"Miền Bắc": ["Hà Nội", "Hải Phòng", "Hạ Long", "Bắc Ninh", "Phú Thọ"],
		"Miền Trung": ["Huế", "Đà Lạt", "Nha Trang", "Hội An", "Phan Thiết"],
		"Miền Nam": ["Phú Quốc", "Côn Đảo", "Vũng Tàu", "Bến Tre", "Cà Mau"],
	};
	return (
		<div
			className="navbar__element navbar__element--large"
			style={{ display: "flex" }}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<span
				style={{
					width: "100%",
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
				}}
			>
				Tour
			</span>
			<div className="navbar__hidden">
				{isShown &&
					Object.keys(places).map((region) => {
						return (
							<div className="navbar__hidden__places navbar__element--large">
								<a>{region}</a>

								{places[region].map((place) => {
									return <a>{place}</a>;
								})}
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Places;
