import React from "react";

import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import axios from "axios";
import TourCard from "../TourListPage/TourCard";

function WishlistPage({ username }) {
	const [tours, setTours] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/user/" + username + "/tours")
			.then((res) => {
				setTours(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Stack className="tourlstpage px-5 align-items-center">
			<p className="fs-1 pt-5 fw-semibold w-75">Wishlist</p>
			<Stack className="tourlst m-0 my-5">
				{tours.map((tour) => {
					return <TourCard tour={tour} />;
				})}
			</Stack>
		</Stack>
	);
}

export default WishlistPage;
