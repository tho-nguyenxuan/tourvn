import { useState, useContext } from "react";
import { Form, Stack } from "react-bootstrap";
import ReactSlider from "react-slider";

import { dictionary } from "../../utils";
import { LanguageContext } from "../../App";

function Filter({ setDepartureDate, setDuration, setMaxPrice, setMinPrice }) {
	const MIN = 0,
		MAX = 20_000_000,
		STEP = 500_000;
	const [value, setValue] = useState([MIN, MAX]);
	const { language } = useContext(LanguageContext);
	return (
		<Stack
			direction="horizontal"
			className="tourlst__filter h-75 border border-2 border-black rounded-4 bg-white"
		>
			<Form className="d-flex w-100 justify-content-center">
				<Stack direction="horizontal" gap={3} className="p-1 mx-2">
					<Form.Label className="fs-3 m-0">
						{dictionary[language].filter}
					</Form.Label>

					<div className="vr" />

					<Form.Label className="fs-4 m-0">
						{dictionary[language].departureDate}
					</Form.Label>

					<Form.Control
						type="date"
						size="lg"
						className="fs-4"
						min={new Date().toISOString().substring(0, 10)}
						onChange={(e) => setDepartureDate(e.target.value)}
						style={{ width: "160px" }}
					/>

					<div className="vr" />

					<Form.Label className="fs-4 m-0">
						{dictionary[language].duration}
					</Form.Label>

					<Form.Select
						className="fs-4 m-0"
						style={{ width: "200px" }}
						onChange={(e) => setDuration(e.target.value)}
					>
						<option value="0" selected>
							{dictionary[language].option}
						</option>

						<option value="1">{dictionary[language].oneDay}</option>

						<option value="2">
							{dictionary[language].twoDays}
						</option>

						<option value="3">
							{dictionary[language].threeDays}
						</option>

						<option value="4">
							{dictionary[language].fourDays}
						</option>

						<option value="5">{dictionary[language].others}</option>
					</Form.Select>

					<div className="vr" />

					<Form.Label className="fs-4 m-0">
						{dictionary[language].price}
					</Form.Label>

					<Form.Label
						className="fs-4 m-0 text-end"
						style={{ width: "80px" }}
					>
						{value[0].toLocaleString()}
					</Form.Label>

					<ReactSlider
						className="horizontal-slider my-slider"
						thumbClassName="example-thumb my-thumb z-0"
						trackClassName="example-track my-track"
						value={value}
						min={MIN}
						max={MAX}
						step={STEP}
						renderThumb={(props, state) => (
							<div {...props}>{state.valueNow}</div>
						)}
						onChange={(value, index) => {
							setValue(value);
							setMinPrice(value[0]);
							setMaxPrice(value[1]);
						}}
						pearling
						minDistance={STEP}
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
	);
}

export default Filter;
