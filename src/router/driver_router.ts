import { Request, Response, Router } from "express";
import { getleaderboarddriver } from "../controllers/driverController";
const driverRouter = Router();

driverRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getleaderboarddriver();
     response.json(result);
});

export default driverRouter;
