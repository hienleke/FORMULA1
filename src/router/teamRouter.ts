import { Request, Response, Router } from "express";
import { getAllTeam } from "../controllers/teamController";
const teamRouter = Router();

teamRouter.route("/leaderboards").get(async (request: Request, response: Response) => {
     let result = await getAllTeam();
     response.json(result);
});

export default teamRouter;
