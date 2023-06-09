import { createReadStream } from "fs";
import csvParser from "csv-parser";
import db from "../db.js";

const result = [];

createReadStream("tours.csv")
	.pipe(csvParser({ headers: false, skipLines: 1 }))
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

const getTour = async (req, res) => {
	res.json(result);
	res.end();
};

export { getTour };
