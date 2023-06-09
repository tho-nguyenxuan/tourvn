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

function getDuration(time) {
	const [res, ...arr] = time.split(" ");
	return res;
}

function convertDate(date) {
	const [day, month, year] = date.split("/");
	return `${year}-${month}-${day}`;
}

const sortFunctions = {
	byId: (a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0),
	priceAscending: (a, b) => a.price - b.price,
	priceDescending: (a, b) => b.price - a.price,
	dateAscending: (a, b) => {
		const [ad, am, ay] = a.start.split("/");
		const [bd, bm, by] = b.start.split("/");
		const adate = new Date(+ay, +am - 1, +ad);
		const bdate = new Date(+by, +bm - 1, +bd);
		return adate - bdate;
	},
	dateDescending: (a, b) => {
		const [ad, am, ay] = a.start.split("/");
		const [bd, bm, by] = b.start.split("/");
		const adate = new Date(+ay, +am - 1, +ad);
		const bdate = new Date(+by, +bm - 1, +bd);
		return bdate - adate;
	},
};

const dictionary = {
	eng: {
		search: "Search",
		wishlist: "Wishlist",
		login: "Log In",
		signup: "Sign Up",
		sort: "Sort",
		notSpecified: "Not Specified",
		priceAscending: "Price Ascending",
		priceDescending: "Price Descending",
		dateAscending: "Date Ascending",
		dateDescending: "Date Desscending",
		filter: "Filter",
		departureDate: "Departure Date",
		duration: "Duration",
		price: "Price",
		oneDay: "One Day",
		twoDays: "Two Days",
		threeDays: "Three Days",
		fourDays: "Four Days",
		others: "Others",
		option: "Select Your Option",
		view: "View",
		destination: "Destination",
		account: "Account",
		username: "Username",
		password: "Password",
		changeToRegister: "Don't Have An Account? Sign Up",
		changeToLogin: "Have An Account? Log In",
		name: "Name",
		confirmPassword: "Confirm Password",
		dob: "Date Of Birth",
		description: "Description",
	},
	vie: {
		search: "Tìm Kiếm",
		wishlist: "Yêu Thích",
		login: "Đăng Nhập",
		signup: "Đăng Ký",
		sort: "Sắp Xếp",
		notSpecified: "Không Chọn",
		priceAscending: "Giá Tăng Dần",
		priceDescending: "Giá GIảm Dần",
		dateAscending: "Ngày Khởi Hành Tăng Dần",
		dateDescending: "Ngày Khởi Hành Giảm Dần",
		filter: "Lọc",
		departureDate: "Ngày Khởi Hành",
		duration: "Thời Gian",
		price: "Giá",
		oneDay: "1 Ngày",
		twoDays: "2 Ngày",
		threeDays: "3 Ngày",
		fourDays: "4 Ngày",
		others: "Khác",
		option: "Lựa Chọn",
		view: "Xem",
		destination: "Điểm đến",
		account: "Tài Khoản",
		username: "Tên Đăng Nhập",
		password: "Mật Khẩu",
		changeToRegister: "Chưa Có Tài Khoản? Đăng Ký",
		changeToLogin: "Đã Có Tài Khoản? Đăng Nhập",
		name: "Tên",
		confirmPassword: "Xác Nhận Mật Khẩu",
		dob: "Ngày Sinh",
		description: "Mô Tả",
	},
};

export {
	searchTour,
	sortFunctions,
	ScrollButton,
	dictionary,
	getDuration,
	convertDate,
};
