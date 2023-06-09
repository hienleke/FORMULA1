import { Request, Response, Router } from "express";
const raceRouter = Router();
import { getAlldriver } from "../controllers/driverController";

raceRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getAlldriver();
     response.json(result);
});

export default raceRouter;
