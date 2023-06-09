import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Image, Stack } from "react-bootstrap";
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
	const [maxPrice, setMaxPrice] = useState(50000000);
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
		<Stack className="tourlstpage">
			<Image
				src="	https://www.saigontourist.net/uploads/destination/cover-tour-tag/cover-tour-hanoi.jpg"
				style={{ height: "480px" }}
			/>
			{/* <hr className="border border-2 border-black m-0 mt-5" /> */}
			<Stack
				className="align-items-center my-5 px-5"
				style={{ backgroundColor: "#eff7ff" }}
			>
				<p className="fs-1 p-4 my-4 fw-bold">Destination</p>
				<SortAndFilter
					tours={tours}
					setTours={(val) => setTours(val)}
					setSort={(val) => setSort(val)}
					setSource={(val) => setSource(val)}
					maxPrice={maxPrice}
					setMaxPrice={(val) => setMaxPrice(val)}
					minPrice={minPrice}
					setMinPrice={(val) => setMinPrice(val)}
					startDate={startDate}
					setStartDate={(val) => setStartDate(val)}
					endDate={endDate}
					setEndDate={(val) => setEndDate(val)}
				/>
			</Stack>
			{/* <hr className="border border-2 border-black m-0" /> */}
			<Stack className="tourlst m-0 my-5">
				{tours.map(
					(tour) =>
						searchTour(params.searchKey, tour.title) &&
						searchTour(source, tour.source) && (
							<TourCard tour={tour} />
						)
				)}
			</Stack>
		</Stack>
	);
}

export default TourList;
