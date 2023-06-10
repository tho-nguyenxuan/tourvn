import { createReadStream } from "fs";
import csvParser from "csv-parser";

const result = [];

createReadStream("tours.csv")
	.pipe(csvParser({ headers: false, skipLines: 1 }))
	.on("data", (data) => {
		// console.log(data);
		// result.push(Object.values(data));
		result.push({
			// source: data[0],
			// destination: data[1],
			start: data[2],
			// end: data[3],
			time: data[4],
			title: data[5],
			imgUrl: "https://saigontourist.net" + data[6],
			description: data[7],
			// program: data[8],
			price: data[9],
			// childrenPrice: data[10],
			linkUrl: "https://saigontourist.net" + data[11],
		});
	})
	.on("end", () => {
		// console.log(result);
	});

export { result };

import mysql from "mysql";

const DB_HOST =
	process.env.DATABASE_HOST || "containers-us-west-114.railway.app";
const DB_DB = process.env.DATABASE_DB || "railway";
const DB_PORT = process.env.DATABASE_PORT || 6781;
const DB_USER = process.env.DATABASE_USER || "root";
const DB_PASS = process.env.DATABASE_PASS || "O4DlxAGvznJ7RwV2ttI2";

var db = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	database: DB_DB,
	port: DB_PORT,
});

export default db;
