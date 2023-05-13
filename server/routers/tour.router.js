import { Router } from "express";

const TourRouter = Router();

TourRouter.get("/", (req, res) => {
	res.json(result);
	res.end();
});

export default TourRouter;
