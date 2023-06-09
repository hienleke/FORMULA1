import { getAll } from "../model/Team";

async function getAllTeam() {
     return await getAll();
}

export { getAllTeam };
