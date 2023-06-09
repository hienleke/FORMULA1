import { getAll } from "../model/Driver";

async function getleaderboarddriver() {
     return await getAll();
}

export { getleaderboarddriver };
