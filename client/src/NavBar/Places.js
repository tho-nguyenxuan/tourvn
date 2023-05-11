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
			className="navbar__element"
			style={{ display: "flex" }}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			Tour
			{isShown &&
				Object.keys(places).map((region) => {
					return (
						<div
							style={{ display: "flex", flexDirection: "column" }}
						>
							{region}

							{places[region].map((place) => {
								return <button>{place}</button>;
							})}
						</div>
					);
				})}
		</div>
	);
}

export default Places;
