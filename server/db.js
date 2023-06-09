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

db.connect(function (err) {
	if (err) {
		console.log("Error connecting:");
		console.log(err.stack);
	}
	console.log("Connected successfully to database.");
});

export default db;
