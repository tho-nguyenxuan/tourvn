import { useContext } from "react";
import { Stack, Image, Dropdown } from "react-bootstrap";
import { LanguageContext } from "../App";

function Lan({ lan, src, setLanguage }) {
	return (
		<Stack
			direction="horizontal"
			gap={1}
			onClick={() => {
				if (setLanguage) setLanguage(lan);
			}}
		>
			<Image
				className=""
				src={process.env.PUBLIC_URL + src}
				height={36}
			/>
			<p
				className="m-0 fw-bold text-black fs-4"
				style={{ width: "32px" }}
			>
				{lan}
			</p>
		</Stack>
	);
}

function Language() {
	const languages = {
		vie: "/Icons/vie-flag.svg",
		eng: "/Icons/eng-flag.svg",
	};

	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<Dropdown className="m-2 z-1">
			<Dropdown.Toggle
				variant="light"
				style={{ expand: "none" }}
				className="no-after px-3 py-0 border rounded-pill"
			>
				<Lan lan={language} src={languages[language]} />
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{Object.keys(languages).map((lan) => {
					return (
						<Dropdown.Item>
							<Lan
								lan={lan}
								src={languages[lan]}
								setLanguage={(e) => setLanguage(e)}
							/>
						</Dropdown.Item>
					);
				})}
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default Language;
