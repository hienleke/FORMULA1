import { getAll } from "../model/Team";

async function getleaderboardteam(year: Number, team: String) {
     if (!year && !team) return await getAll();
}

export { getleaderboardteam };
