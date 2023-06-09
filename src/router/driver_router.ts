import { Request, Response, Router } from "express";
import { getAlldriver } from "../controllers/driverController";
const driverRouter = Router();

driverRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getAlldriver();
     response.json(result);
});

export default driverRouter;
