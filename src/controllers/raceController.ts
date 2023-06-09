import express from "express";
import { getAll } from "../model/Race";

async function getAllRace() {
     return await getAll();
}

export { getAllRace };
