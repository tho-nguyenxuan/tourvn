// import re

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

export { searchTour, sortFunctions };
