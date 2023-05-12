import { sortFunctions } from "../../utils";

function SortAndFilter({
	tours,
	setTours,
	setSort,
	setSource,
	setMaxPrice,
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
	return (
		<div className="tourlst__sortfilter">
			{/* sort */}
			<div className="tourlst__sort">
				<select
					onChange={(e) => {
						switch (e.target.value) {
							case "pa":
								setSort("price +");
								tours.sort(sortFunctions.priceAscending);
								break;
							case "pd":
								setSort("price -");
								tours.sort(sortFunctions.priceDescending);
								break;
							case "ta":
								setSort("time +");
								tours.sort(sortFunctions.timeAscending);
								break;
							case "td":
								setSort("time -");
								tours.sort(sortFunctions.timeDescending);
								break;

							default:
								break;
						}
						setTours([...tours]);
					}}
				>
					<option value="">none</option>
					<option value="pa">price +</option>
					<option value="pd">price -</option>
					<option value="ta">time +</option>
					<option value="td">time -</option>
				</select>
			</div>
			<div className="tourlst__filter">
				<form>
					<select
						onChange={(e) => {
							setSource(e.target.value);
						}}
					>
						<option value="">None</option>
						{provinces.map((province) => (
							<option value={province}>{province}</option>
						))}
					</select>
					<input
						type="number"
						min={0}
						placeholder="Max price"
						onChange={(e) => {
							setMaxPrice(e.target.value);
						}}
					/>
					<input
						type="number"
						min={0}
						placeholder="Min price"
						onChange={(e) => {
							setMinPrice(e.target.value);
						}}
					/>
					<input
						type="date"
						value={startDate}
						min={new Date().toISOString().slice(0, 10)}
						onChange={(e) => {
							setStartDate(e.target.value);
							console.log(e.target.value);
						}}
					/>
					<input
						type="date"
						value={endDate}
						min={new Date().toISOString().slice(0, 10)}
						onChange={(e) => {
							setEndDate(e.target.value);
						}}
					/>
				</form>
			</div>
		</div>
	);
}

export default SortAndFilter;
