import { getAll } from "../model/Fastest_Lap";

async function getleaderboardfasteslap() {
     return await getAll();
}

export { getleaderboardfasteslap };
