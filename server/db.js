import { createReadStream } from "fs";
import csvParser from "csv-parser";
import { config } from "dotenv";
config();

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

import {createConnection} from "mysql";

const DB_HOST = process.env.DATABASE_HOST;
const DB_DB = process.env.DATABASE_DB;
const DB_PORT = process.env.DATABASE_PORT;
const DB_USER = process.env.DATABASE_USER;
const DB_PASS = process.env.DATABASE_PASS;

var db = createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	database: DB_DB,
	port: DB_PORT,
});

export default db;
