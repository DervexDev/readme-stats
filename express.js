import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.listen(process.env.port || 9000);

app.get("/api/", statsCard);
app.get("/api/pin", repoCard);
app.get("/api/top-langs", langCard);
app.get("/api/wakatime", wakatimeCard);
app.get("/api/gist", gistCard);
