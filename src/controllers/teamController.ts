import { find } from "../model/Team";

async function getleaderboardteam(year: Number, team: String) {
     return await find(year, team);
}

export { getleaderboardteam };
