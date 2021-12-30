import { index } from "cheerio/lib/api/traversing";
import express from "express";
import { response } from "express";
import { NotExtended } from "http-errors";
import { home, watch } from "../controllers/infoController";
import { matching, select } from "../controllers/matchingFunction";
var adminRouter = express.Router();

adminRouter.get("/", home);

adminRouter.get("/matching", matching);

adminRouter.get("/select", select);

adminRouter.get("/info/:id", watch);

export default adminRouter;
