import { useState } from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ControlIcon({ direction }) {
	return (
		<div
			className={`d-flex h-100 w-75 flex-row${
				direction == "left" ? "" : "-reverse"
			}`}
		>
			<Image
				src={
					process.env.PUBLIC_URL +
					"/Icons/" +
					direction +
					"-arrow.svg"
				}
				width={64}
			/>
		</div>
	);
}

function Slideshow() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const slides = [
		"/da-lat.jpg",
		"/mien-tay.jpg",
		"/nha-trang.jpg",
		"/phong-nha-ke-bang.jpg",
		"/tay-bac.jpg",
		"/vinh-ha-long.jpg",
	];

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			slide
			controls
			interval={3000}
			nextIcon={<ControlIcon direction="right" />}
			prevIcon={<ControlIcon direction="left" />}
			className="p-4 z-0"
		>
			{slides.map((slide) => {
				return (
					<Carousel.Item>
						<Image
							className="d-block position-relative start-50 translate-middle-x"
							src={process.env.PUBLIC_URL + "/Sliders" + slide}
							alt="First slide"
							height={480}
						/>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default Slideshow;
