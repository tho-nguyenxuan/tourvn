import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { TourRouter, UserRouter } from "./routers/index.js";
import { useMiddlewares, useRouters } from "./config.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

useMiddlewares(app, [
	morgan("dev"),
	cors(),
	express.urlencoded({ extended: true }),
	express.json(),
]);

useRouters(app, {
	"/": TourRouter,
	"/user": UserRouter,
});

app.listen(PORT, () => {
	console.log("App listening on port", PORT);
});
