import { Request, Response, Router } from "express";
import { getleaderboardteam } from "../controllers/teamController";
const teamRouter = Router();

teamRouter.route("/leaderboards/").get(async (request: Request, response: Response) => {
     let result;
     let { year, team } = request.query;
     console.log(`input year : ${year} team : ${team}`);
     result = await getleaderboardteam(Number(year), String(team));
     response.json(result);
});

teamRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getleaderboardteam(null, null);
     response.json(result);
});

export default teamRouter;
