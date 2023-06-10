import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import raceRouter from "./router/raceRouter";
import fastestlapRouter from "./router/fastestlapRouter";
import driverRouter from "./router/driver_router";
import teamRouter from "./router/teamRouter";
import connectDB from "./db/db";
import { connectRds } from "./db/cache";
connectRds();

// init data

dotenv.config({ path: __dirname + "./.env" });
connectDB();
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/race", raceRouter);
app.use("/driver", driverRouter);
app.use("/team", teamRouter);
app.use("/fastestlap", fastestlapRouter);

const server = http.createServer(app);

server.listen(3000, () => {
     console.log("Server running on http://localhost:3000/");
});
