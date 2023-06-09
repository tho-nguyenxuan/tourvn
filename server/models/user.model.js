var mysql = require("mysql");

var con = mysql.createConnection({
	host: HOST,
	user: USERNAME,
	password: PASSWORD,
	database: DATABASE,
	port: PORT,
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
	console.log(row);
});

import { createHash } from "crypto";

const password = "password";
const salt = "80zzm081sr@nd0m";

const passhash = createHash("sha256")
	.update(password)
	.update(createHash("sha256").update(salt, "utf8").digest("hex"))
	.digest("hex");
console.log(passhash);
