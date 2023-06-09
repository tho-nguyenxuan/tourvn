// import re

import { useState } from "react";
import { Image } from "react-bootstrap";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<div
			className="position-fixed s-50 z-1"
			style={{ bottom: "40px", right: "40px" }}
		>
			<Image
				src={process.env.PUBLIC_URL + "/Icons/up-arrow.svg"}
				onClick={scrollToTop}
				style={{ display: visible ? "inline" : "none" }}
				height={36}
			/>
		</div>
	);
};

function convertToEngLower(str) {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	return str;
}

function searchTour(searchStr, title) {
	searchStr = convertToEngLower(searchStr);
	searchStr = searchStr.replace(/\s\s+/g, " ").trim();

	title = convertToEngLower(title);
	title = title.replace(/\s\s+/g, " ").trim();

	return title.includes(searchStr);
}

const sortFunctions = {
	"Price Ascending": (a, b) => a.price - b.price,
	"Price Descending": (a, b) => b.price - a.price,
	"Time Ascending": (a, b) => {
		const [ad, am, ay] = a.start.split("/");
		const [bd, bm, by] = b.start.split("/");
		const adate = new Date(+ay, +am - 1, +ad);
		const bdate = new Date(+by, +bm - 1, +bd);
		return adate - bdate;
	},
	"Time Descending": (a, b) => {
		const [ad, am, ay] = a.start.split("/");
		const [bd, bm, by] = b.start.split("/");
		const adate = new Date(+ay, +am - 1, +ad);
		const bdate = new Date(+by, +bm - 1, +bd);
		return bdate - adate;
	},
};

export { searchTour, sortFunctions, ScrollButton };
