import { Request, Response, Router } from "express";
import { getleaderboardteam } from "../controllers/teamController";
const teamRouter = Router();

teamRouter.route("/leaderboards/:year").get(async (request: Request, response: Response) => {
     let result;
     let { year } = request.params;
     let { team } = request.query;
     result = await getleaderboardteam(Number(year), String(team));
     response.json(result);
});

export default teamRouter;
