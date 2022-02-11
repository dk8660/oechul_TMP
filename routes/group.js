import { index } from "cheerio/lib/api/traversing";
import express from "express";
import { response } from "express";
import { NotExtended } from "http-errors";
import {
  groupMatching,
  getinfo,
  getinfo_process,
  groupInfos,
  groupMain,
} from "../controllers/groupController";

var groupRouter = express.Router();

groupRouter.get("/", groupInfos);

groupRouter.get("/getinfo", getinfo);

groupRouter.post("/getinfo_process", getinfo_process);

groupRouter.post("/match", groupMatching);

groupRouter.get("/", groupMain);

export default groupRouter;
