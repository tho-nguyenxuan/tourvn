import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Image, Stack } from "react-bootstrap";
import "./TourListPage.css";

import TourCard from "./TourCard";
import { useLocation, useParams } from "react-router-dom";
import SortAndFilter from "./SortAndFilter";
import { convertDate, getDuration, searchTour } from "../../utils";
function TourList({ payload }) {
	let params = useParams();
	const [tours, setTours] = useState([]);

	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(20_000_000);
	const [departureDate, setDepartureDate] = useState(
		new Date().toISOString().substring(0, 10)
	);
	const [duration, setDuration] = useState("0");
	const location = useLocation();

	useEffect(() => {
		setTours(payload);
		if (params.date) {
			setDepartureDate(params.date);
			window.history.replaceState(
				{ page: 1 },
				"TourVN",
				location.pathname.replace("/" + params.date, "")
			);
		}
	}, [payload]);

	return (
		<Stack className="tourlstpage">
			<Image
				src="	https://www.saigontourist.net/uploads/destination/cover-tour-tag/cover-tour-hanoi.jpg"
				style={{ height: "480px" }}
			/>

			<Stack
				className="align-items-center my-5 px-5"
				style={{ backgroundColor: "#eff7ff" }}
			>
				<p className="fs-1 p-4 my-4 fw-bold">Destination</p>
				<SortAndFilter
					tours={tours}
					setTours={setTours}
					setMinPrice={setMinPrice}
					setMaxPrice={setMaxPrice}
					setDepartureDate={setDepartureDate}
					setDuration={setDuration}
				/>
			</Stack>

			<Stack className="tourlst m-0 my-5">
				{tours.map(
					(tour) =>
						searchTour(params.searchKey, tour.title) &&
						(duration == "0"
							? true
							: duration == "5"
							? getDuration(tour.time) >= duration
							: getDuration(tour.time) == duration) &&
						convertDate(tour.start) >= departureDate &&
						minPrice <= parseInt(tour.price) &&
						maxPrice >= parseInt(tour.price) && (
							<TourCard tour={tour} />
						)
				)}
			</Stack>
		</Stack>
	);
}

export default TourList;
