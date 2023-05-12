import { Link } from "react-router-dom";

function TourCard({ tour }) {
	return (
		<a
			href={"https://www.saigontourist.net" + tour.linkUrl}
			target="_blank"
			className="tourcard"
		>
			<div>
				<img src={"https://www.saigontourist.net" + tour.imgUrl} />
			</div>
			<div style={{ marginLeft: "50px", padding: "10px" }}>
				Title: {tour.title}
				<br />
				Start: {tour.start}
				<br />
				Time: {tour.time}
				<br />
				Price: {tour.price}
				<br />
				Children Price: {tour.childrenPrice}
				<br />
				Description: {tour.description}
				<br />
			</div>
		</a>
	);
}

export default TourCard;
