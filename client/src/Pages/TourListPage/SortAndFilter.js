import { Stack } from "react-bootstrap";
import { useState } from "react";

import Sort from "./Sort";
import Filter from "./Filter";

function SortAndFilter({
	tours,
	setTours,
	setDepartureDate,
	setDuration,
	setMaxPrice,
	setMinPrice,
}) {
	let provinces = [
		"TP. Hồ Chí Minh",
		"Ha Noi",
		"Da Nang",
		"Ca Mau",
		"Quang Ninh",
		"Can Tho",
	];

	const [sortFunc, setSortFunc] = useState("Not Specified");

	return (
		<Stack
			direction="horizontal"
			className="tourlst__sortfilter px-4 d-flex justify-content-between align-items-center w-100 align-self-center"
		>
			<Sort
				tours={tours}
				setTours={setTours}
				sortFunc={sortFunc}
				setSortFunc={setSortFunc}
			/>

			<Filter
				setDepartureDate={setDepartureDate}
				setDuration={setDuration}
				setMaxPrice={setMaxPrice}
				setMinPrice={setMinPrice}
			/>
		</Stack>
	);
}

export default SortAndFilter;
