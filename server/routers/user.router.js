import { Router } from "express";
import {
	getUserTours,
	postLogin,
	postRegister,
} from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.get("/:username/tours", getUserTours)
	.post("/login", postLogin)
	.post("/register", postRegister);

export default UserRouter;
