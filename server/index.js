const express = require("express");
const cors = require("cors");

// const json = require('json');

const app = express();

const result = [];

const fs = require("fs");
const csv = require("csv-parser");
const morgan = require("morgan");
fs.createReadStream("tours.csv")
	.pipe(csv({ headers: false, skipLines: 1 }))
	.on("data", (data) => {
		// console.log(data);
		// result.push(Object.values(data));
		result.push({
			source: data[0],
			destination: data[1],
			start: data[2],
			end: data[3],
			time: data[4],
			title: data[5],
			imgUrl: data[6],
			description: data[7],
			program: data[8],
			price: data[9],
			childrenPrice: data[10],
			linkUrl: data[11],
		});
	})
	.on("end", () => {
		// console.log(result);
	});

// console.log(__dirname);

// app.use(express.static(__dirname));
app.use(morgan("dev"));
app.use(cors({ origin: "*", methods: ["GET"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const payload = [
	{
		source: "Cần Thơ",
		destination: "Hà Nội - Đông Bắc",
		start: "31/05/2023",
		end: "05/06/2023",
		time: "5 ngày 4 đêm",
		title: "Hà Nội - Hà Giang - Cao Bằng - Lạng Sơn - Khởi hành từ Cần Thơ",
		imgUrl: "/uploads/destination/TrongNuoc/Caobang-BacCan/Bangioc-Caobang-Vietnam_36528265.jpg",
		description:
			"Thời gian : 5 ngày 4 đêm\nPhương tiện : Hàng không Vietnam Airlines\n- Dự kiến khởi hành: Thứ 4 cách tuần\n- Chụp ảnh lưu niệm tại...",
		program:
			"Ngày 01: CẦN THƠ - HÀ NỘI - HÀ GIANG (Ăn chiều, tối)\nBuổi sáng, tập trung tại Ga đi trong nước - Sân bay Cần Thơ. HDV Lữ hành Saigontourist đón quý khách và hỗ trợ làm thủ tục. Khởi hành ra Hà Nội (chuyến bay VNA lúc 10:20). Đáp xuống sân bay Nội Bài dùng cơm trưa. Sau đó, khởi hành đi Đến Hà Giang nhận phòng nghỉ ngơi. Buổi tối, đoàn tự do dạo phố, chụp ảnh lưu niệm tại Cột mốc số 0 tại thành phố Hà Giang. Nghỉ đêm tại Hà Giang.\n\nNgày 02: HÀ GIANG - ĐỒNG VĂN (Ăn sáng, chiều, tối)\nĐoàn tiếp tục hành trình đến Cao nguyên đá Đồng Văn - Công viên địa chất toàn cầu. Thưởng ngoạn cảnh sắc ngoạn mục từ những “vườn đá”, “rừng đá” tai mèo mang hình thù kỳ lạ cùng những dãy núi trùng điệp, hùng vĩ. Dừng chân ở Cổng trời Quản Bạ, chiêm ngưỡng Núi đôi Cô Tiên. Đến thung lũng Sà Phìn, tham quan Dinh thự nhà họ Vương - dòng họ giàu có và uy quyền nhất vùng một thời, khám phá những câu chuyện huyền bí, thú vị về “Vua Mèo”. Chinh phục Cột cờ Lũng Cú - nơi đánh dấu điểm địa đầu cực Bắc của Việt Nam. Nghỉ đêm tại Đồng Văn.\n\nNgày 03: ĐỒNG VĂN - CAO BẰNG (Ăn sáng, chiều, tối)\nBuổi sáng, đoàn tự do dạo phố cổ Đồng Văn, chợ phiên Đồng Văn (sáng Chủ Nhật hàng tuần). Vượt đèo Mã Pí Lèng - một trong “Tứ đại danh đèo” của vùng núi biên viễn phía Bắc. Chụp ảnh lưu niệm tại cột mốc “Con đường Hạnh Phúc”. Dừng chân chiêm ngưỡng cảnh quan hùng vĩ, nơi dòng sông Nho Quế chảy qua khe vực Tu Sản sâu hun hút, thăm thẳm giữa những vách núi dựng đứng, sừng sững. Qua Mèo Vạc, đoàn tiếp tục hành trình qua các địa danh Bảo Lâm, Bảo Lạc, Tĩnh Túc, Nguyên Bình,...đi Cao Bằng. Tiếp tục đến Bản Giốc. Nghỉ đêm tại khách sạn Cao Bằng.\n\nNgày 04: CAO BẰNG - LẠNG SƠN (Ăn sáng, chiều, tối)\nChiêm ngưỡng cảnh sắc đầy hùng vĩ và thơ mộng của thác Bản Giốc - một trong bốn thác nước là đường biên giới tự nhiên giữa các quốc gia lớn nhất thế giới, đi bè tre ngắm cận cảnh thác (tự túc chi phí). Tham quan động Ngườm Ngao, khám phá vẻ đẹp lung linh của một hang động đá vôi còn nguyên sơ. Khởi hành theo quốc lộ 4A đến Lạng Sơn, tham quan động Tam Thanh - ngắm núi Tô Thị, mua sắm tại chợ Đông Kinh. Buổi tối, đoàn tự do nghỉ ngơi hoặc chinh phục cột cờ Phai Vệ - ngắm toàn cảnh thành phố miền biên ải về đêm. Nghỉ đêm tại Lạng Sơn.\n\nNgày 05: LẠNG SƠN - HÀ NỘI - CẦN THƠ (Ăn sáng, chiều)\nSau bữa sáng, đoàn khởi hành về lại Hà Nội dùng cơm trưa. Đến sân bay Nội Bài làm thủ tục về lại Cần Thơ (Chuyến bay VNA lúc 15h50). Đến sân bay Cần Thơ, Qúy khách tự túc về lại tư gia. Kết thúc chương trình. Chào tạm biệt và hẹn gặp lại.\n*Điểm tham quan có thể sắp xếp lại cho phù hợp nhưng vẫn bảo đảm đầy đủ nội dung của chương trình.\n",
		price: 9990000,
		childrenPrice: 6700000,
		linkUrl:
			"/vi/tour-trong-nuoc/4702/ha-noi-ha-giang-cao-bang-lang-son-khoi-hanh-tu-can-tho",
	},
];

app.get("/", (req, res) => {
	res.json(result);
	res.end();
});

app.get("/user/:username/tours", (req, res) => {
	res.json(result.slice(0, 5));
	res.end();
});

app.post("/login", (req, res) => {
	console.log(req.body);
	res.status(200).json({ msg: "Performed login" });
});

app.post("/register", (req, res) => {
	console.log(req.body);
	res.status(200).json({ msg: "Performed login" });
});

app.listen(5000, () => {
	console.log("App listening on port 5000");
});
