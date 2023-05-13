import { Router } from "express";

const UserRouter = Router();

UserRouter.get("/:username/tours", (req, res) => {
	res.json(result.slice(0, 5));
	res.end();
})
	.post("/login", (req, res) => {
		console.log(req.body);
		res.status(200).json({ msg: "Performed login" });
	})
	.post("/register", (req, res) => {
		console.log(req.body);
		res.status(200).json({ msg: "Performed register" });
	});
export default UserRouter;
