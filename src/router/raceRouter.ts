import { Request, Response, Router } from "express";
const raceRouter = Router();
import { getleaderboarddriver } from "../controllers/driverController";

raceRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getleaderboarddriver();
     response.json(result);
});

export default raceRouter;
