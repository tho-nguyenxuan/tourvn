import { Router } from "express";
import { getTour } from "../controllers/tour.controller.js";

const TourRouter = Router();

TourRouter.get("/", getTour);

export default TourRouter;
