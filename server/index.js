import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { TourRouter, UserRouter } from "./routers/index.js";
import { useMiddlewares, useRouters } from "./config.js";
import db from "./db.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
// const DB_HOST = process.env.DATABASE_HOST || "jro.h.filess.io";
// const DB_DB = process.env.DATABASE_DB || "DatabaseSystemsHCMUT_rocketdue";
// const DB_PORT = process.env.DATABASE_PORT || 3307;
// const DB_USER = process.env.DATABASE_USER || "DatabaseSystemsHCMUT_rocketdue";
// const DB_PASS = process.env.DATABASE_PASS || "c4b96502d80064bec3ad38de196c70071dde72c8";

const app = express();

useMiddlewares(app, [
	morgan("dev"),
	cors(),
	express.urlencoded({ extended: true }),
	express.json(),
]);

db.connect(function (err) {
	if (err) {
		console.log("Error connecting:");
		console.log(err.stack);
	}
	console.log("Connected successfully to database.");
});
useRouters(app, {
	"/": TourRouter,
	"/user": UserRouter,
});

app.listen(PORT, () => {
	console.log("App listening on port", PORT);
});
