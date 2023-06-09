import { Stack, Dropdown, Form, Button, Image } from "react-bootstrap";
import { sortFunctions } from "../../utils";
import { useState } from "react";

import "rc-slider/assets/index.css";

import ReactSlider from "react-slider";

function PriceRange() {
	return (
		<>
			<Slider />
			<Range />
		</>
	);
}

function SortAndFilter({
	tours,
	setTours,
	setSort,
	setSource,
	maxPrice,
	setMaxPrice,
	minPrice,
	setMinPrice,
	startDate,
	setStartDate,
	endDate,
	setEndDate,
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
	const step = 500000;
	const MIN = 0,
		MAX = 100_000_000;
	const [value, setValue] = useState([MIN, MAX]);

	return (
		<Stack
			direction="horizontal"
			className="tourlst__sortfilter px-4 d-flex justify-content-between align-items-center w-100 align-self-center"
		>
			<Stack
				direction="horizontal"
				className="border border-2 border-black rounded-4 p-2 h-75"
			>
				<p className="m-0 fs-3 p-2">Sort</p>
				<div className="vr mx-2" />

				<Dropdown className="m-2">
					<Dropdown.Toggle
						variant="light"
						className="bg-white px-3 py-0 fs-4"
						style={{ width: "160px" }}
					>
						{sortFunc}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{Object.keys(sortFunctions).map((func) => {
							return (
								<Dropdown.Item>
									<div
										className="fs-4"
										onClick={() => {
											tours.sort(sortFunctions[func]);
											setSortFunc(func);
											setTours([...tours]);
										}}
									>
										{func}
									</div>
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</Stack>

			<Stack
				direction="horizontal"
				className="tourlst__filter h-75 border border-2 border-black rounded-4"
				// style={{ width: "1000px" }}
			>
				<Form className="d-flex w-100 justify-content-center">
					<Stack direction="horizontal" gap={3} className="p-1 mx-2">
						<Form.Label className="fs-3 m-0">Filter</Form.Label>
						<div className="vr" />
						<Form.Control
							type="date"
							size="lg"
							className="border border-0 fs-4"
							style={{ width: "160px" }}
						/>
						<div className="vr" />
						<Form.Label className="fs-4 m-0">Length</Form.Label>
						<Form.Select
							className="fs-4 m-0"
							style={{ width: "200px" }}
						>
							<option value="0" selected>
								Select your option
							</option>
							<option value="1">Trong ngày</option>
							<option value="2">2 ngày 1 đêm</option>
							<option value="3">3 ngày 2 đêm</option>
							<option value="4">4 ngày 3 đêm</option>
							<option value="5">Khác</option>
						</Form.Select>
						<div className="vr" />
						<Form.Label className="fs-4 m-0">Price</Form.Label>
						<Form.Label
							className="fs-4 m-0 text-end"
							style={{ width: "80px" }}
						>
							{value[0].toLocaleString()}
						</Form.Label>
						<ReactSlider
							className="horizontal-slider my-slider"
							thumbClassName="example-thumb my-thumb"
							trackClassName="example-track my-track"
							value={value}
							min={MIN}
							max={MAX}
							step={step}
							renderThumb={(props, state) => (
								<div {...props}>{state.valueNow}</div>
							)}
							onChange={(value, index) => {
								setValue(value);
							}}
							pearling
							minDistance={1}
						/>
						<Form.Label
							className="fs-4 m-0 text-end"
							style={{ width: "80px" }}
						>
							{value[1].toLocaleString()}
						</Form.Label>
					</Stack>
				</Form>
			</Stack>
		</Stack>
	);
}

export default SortAndFilter;
