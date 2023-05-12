import { useEffect, useState } from "react";
import axios from "axios";
import TourCard from "../TourListPage/TourCard";

function ChosenTours({ username }) {
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
		<div
			style={{
				width: "70%",
				// height: "500px",
				border: "1px solid black",
			}}
		>
			{tours.map((tour) => {
				return <TourCard tour={tour} />;
			})}
		</div>
	);
}

export default ChosenTours;
