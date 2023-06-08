import { useState } from "react";
import { Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function Places({ expand }) {
	let places = {
		"Miền Bắc": ["Hà Nội", "Hải Phòng", "Hạ Long", "Bắc Ninh", "Phú Thọ"],
		"Miền Trung": ["Huế", "Đà Lạt", "Nha Trang", "Hội An", "Phan Thiết"],
		"Miền Nam": ["Phú Quốc", "Côn Đảo", "Vũng Tàu", "Bến Tre", "Cà Mau"],
	};

	const [isShown, setIsShown] = useState(false);

	return (
		<div
			className="mx-2 pe-4 ps-4 z-2"
			style={{ height: "var(--navbar__height)" }}
			onMouseEnter={() => {
				setIsShown(true);
			}}
			onMouseLeave={() => {
				setIsShown(false);
			}}
		>
			<Stack
				direction="horizontal"
				gap={2}
				className="position-relative top-50 start-50 translate-middle pe-4 m-0"
			>
				<p className="m-0 fs-2 text-black ">Tour</p>
				<Image
					src={process.env.PUBLIC_URL + "/Icons/down-arrow.svg"}
					height={12}
				/>
			</Stack>
			{isShown && (
				<Stack
					direction="horizontal"
					className="position-fixed border translate-middle-x p-0 bg-white"
					style={{
						top: "var(--navbar__height)",
						left: "50%",
						width: "800px",
					}}
				>
					{Object.keys(places).map((region) => {
						return (
							<Stack className="ms-auto me-auto p-4">
								<p className="p-3 fs-3">{region}</p>
								<hr />
								{places[region].map((place) => {
									return (
										<Link
											to={`/tours/${place}`}
											className="p-3 text-decoration-none text-black fs-4"
										>
											{place}
										</Link>
									);
								})}
							</Stack>
						);
					})}
				</Stack>
			)}
		</div>
	);
}

export default Places;
