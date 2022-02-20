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
  groupDelete,
  groupDelete_process,
} from "../controllers/groupController";

var groupRouter = express.Router();

groupRouter.get("/groupInfos", groupInfos);

groupRouter.get("/getinfo", getinfo);

groupRouter.post("/getinfo_process", getinfo_process);

groupRouter.get("/match", groupMatching);

groupRouter.get("/", groupMain);

groupRouter.get("/groupDelete", groupDelete);

groupRouter.post("/groupDelete_process", groupDelete_process);

export default groupRouter;
