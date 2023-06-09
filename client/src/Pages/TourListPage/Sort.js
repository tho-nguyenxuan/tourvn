import { useContext } from "react";
import { Stack, Dropdown } from "react-bootstrap";
import { dictionary, sortFunctions } from "../../utils";
import { LanguageContext } from "../../App";
function Sort({ tours, setTours, sortFunc, setSortFunc }) {
	const { language } = useContext(LanguageContext);
	return (
		<Stack
			direction="horizontal"
			className="border border-2 border-black rounded-4 p-2 h-75 bg-white"
		>
			<p className="m-0 fs-3 p-2">{dictionary[language].sort}</p>
			<div className="vr mx-2" />

			<Dropdown className="m-2">
				<Dropdown.Toggle
					variant="light"
					className="bg-white px-3 py-0 fs-4"
					style={{ width: "160px" }}
				>
					{dictionary[language][sortFunc]}
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
									{dictionary[language][func]}
								</div>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</Stack>
	);
}

export default Sort;
