import { getleaderboardfasteslap } from "../controllers/fastest_lapController";
import { Request, Response, Router } from "express";

const fastestlapRouter = Router();

fastestlapRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getleaderboardfasteslap();
     response.json(result);
});
fastestlapRouter.route("/getresult/:year").get(async (request: Request, response: Response) => {
     response.json("not found ahihi333");
});

export default fastestlapRouter;
