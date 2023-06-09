import { Link } from "react-router-dom";
import { Button, Image, Stack } from "react-bootstrap";

function TourCard({ tour }) {
	return (
		<Stack
			direction="horizontal"
			className="my-4 border border-1 rounded-5 w-75 align-self-center overflow-hidden"
		>
			<Image
				className="border-end border-1 border-black"
				src={"https://saigontourist.net" + tour.imgUrl}
				width={400}
				height={300}
			/>
			<Stack
				style={{ width: "480px" }}
				className="py-4 px-5 border-end border-1 border-black"
			>
				<p className="fs-2 fw-bold">Title: {tour.title}</p>
				<hr className="border-2" />
				<p className="fs-4">Length: {tour.time}</p>
				<p className="fs-4">Price: {tour.price}</p>
				<p className="fs-4">Description: {tour.description}</p>
			</Stack>
			<Stack className="p-4">
				<p>Start</p>
				<p>Start: {tour.start}</p>
				<Button className="mt-auto">
					<Link
						to={"https://saigontourist.net" + tour.linkUrl}
						target="_blank"
						className="p-2 text-decoration-none"
					>
						<p className="m-0 fs-2 text-white">View Tour</p>
					</Link>
				</Button>
			</Stack>
		</Stack>
	);
}

export default TourCard;
