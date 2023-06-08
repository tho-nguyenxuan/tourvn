import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./TourListPage.css";

import TourCard from "./TourCard";
import { useLocation, useParams } from "react-router-dom";
import SortAndFilter from "./SortAndFilter";
import { searchTour } from "../../utils";
function TourList({ payload }) {
	let params = useParams();
	const [tours, setTours] = useState([]);

	// sort
	const [sort, setSort] = useState("");

	// filter
	const [source, setSource] = useState("");
	const [maxPrice, setMaxPrice] = useState(Infinity);
	const [minPrice, setMinPrice] = useState(0);
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const location = useLocation();

	useEffect(() => {
		setTours(payload);
		if (params.date) {
			setStartDate(params.date);
			window.history.replaceState(
				{ page: 1 },
				"TourVN",
				location.pathname.replace("/" + params.date, "")
			);
		}
	}, [payload]);

	return (
		<div className="tourlstpage">
			<img
				src="	https://www.saigontourist.net/uploads/destination/cover-tour-tag/cover-tour-hanoi.jpg"
				style={{ maxHeight: "500px" }}
			/>
			<SortAndFilter
				tours={tours}
				setTours={(val) => setTours(val)}
				setSort={(val) => setSort(val)}
				setSource={(val) => setSource(val)}
				setMaxPrice={(val) => setMaxPrice(val)}
				setMinPrice={(val) => setMinPrice(val)}
				startDate={startDate}
				setStartDate={(val) => setStartDate(val)}
				endDate={endDate}
				setEndDate={(val) => setEndDate(val)}
			/>
			<div className="tourlst">
				{tours.map(
					(tour) =>
						searchTour(params.searchKey, tour.title) &&
						searchTour(source, tour.source) && (
							<TourCard tour={tour} />
						)
				)}
			</div>
		</div>
	);
}

export default TourList;
