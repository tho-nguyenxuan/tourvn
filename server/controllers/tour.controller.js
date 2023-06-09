import db from "../db.js";

const getTour = async (req, res) => {
	var temp = [];
	db.query("CALL DSTour()", function (error, results, fields) {
		if (error) console.log(error);
		for (const data of results[0]) {
			temp.push({
				// source: data[0],
				// destination: data[1],
				id: data.Ma,
				start: data.ThoiGianDi.toISOString()
					.substring(0, 10)
					.split("-")
					.reverse()
					.join("/"),
				// end: data[3],
				time: data.ThoiLuong,
				title: data.TieuDe,
				imgUrl: data.Anh,
				description: data.MoTa,
				// program: data[8],
				price: data.GiaNguoiLon,
				// childrenPrice: data[10],
				linkUrl: data.DuongLink,
			});
		}
		res.status(200).json(temp);
	});
};

export { getTour };
