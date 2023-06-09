import express from "express";
import { getAll } from "../model/Race";

async function getleaderboardrace() {
     return await getAll();
}

export { getleaderboardrace };
