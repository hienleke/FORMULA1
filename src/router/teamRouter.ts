import { Request, Response, Router } from "express";
import { getleaderboardteam } from "../controllers/teamController";
const teamRouter = Router();

teamRouter.route("/leaderboards/:year").get(async (request: Request, response: Response) => {
     let result;
     let { year } = request.params;
     let { team } = request.query;
     // if (!year && !team) result = await getleaderboardteam(null, null);
     // if (year) result = await getleaderboardteam(null, null);
     console.log(" year :", year, " team : ", team);
     result = await getleaderboardteam(null, null);
     response.json(result);
});

export default teamRouter;
