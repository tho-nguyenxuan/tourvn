import { Link } from "react-router-dom";
import { Button, Image, Stack } from "react-bootstrap";
import { dictionary } from "../../utils";
import { useContext } from "react";
import { LanguageContext } from "../../App";

function TourCard({ tour }) {
	const { language } = useContext(LanguageContext);
	return (
		<Stack
			direction="horizontal"
			className="my-4 border border-1 rounded-5 w-75 align-self-center overflow-hidden"
		>
			<Image
				className="border-end border-1 border-black"
				src={tour.imgUrl}
				width={360}
				height={280}
			/>
			<Stack
				style={{ width: "480px" }}
				className="py-4 px-5 border-end border-1 border-black"
			>
				<p className="fs-2 fw-bold">{tour.title}</p>
				<hr className="border-2" />
				<p className="fs-4">{`${dictionary[language].duration}: ${tour.time}`}</p>
				<p className="fs-4">{`${dictionary[language].price}: ${parseInt(
					tour.price
				).toLocaleString()}`}</p>
				{tour.description && (
					<p className="fs-4">
						{`${dictionary[language].description}: ${tour.description}`}
					</p>
				)}
			</Stack>
			<Stack className="px-4 py-5">
				<p className="fs-2 text-decoration-underline">
					{dictionary[language].departureDate}
				</p>
				<p className="fs-3">{tour.start}</p>
				<Button className="mt-auto rounded-4">
					<Link
						to={tour.linkUrl}
						target="_blank"
						className="p-2 text-decoration-none"
					>
						<p className="m-0 fs-2 text-white">{`${dictionary[language].view} Tour`}</p>
					</Link>
				</Button>
			</Stack>
		</Stack>
	);
}

export default TourCard;
