import { index } from "cheerio/lib/api/traversing";
import express from "express";
import { response } from "express";
import { NotExtended } from "http-errors";
import {
  home,
  getinfo,
  getinfo_process,
  reference,
  result,
} from "../controllers/infoController";
import { matching, select } from "../controllers/matchingFunction";
var indexRouter = express.Router();

indexRouter.get("/", home);

indexRouter.get("/getinfo", getinfo);

indexRouter.post("/getinfo_process", getinfo_process);

indexRouter.get("/reference", reference);

indexRouter.post("/result", result);

export default indexRouter;
