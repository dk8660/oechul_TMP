import { index } from "cheerio/lib/api/traversing";
import express from "express";
import { response } from "express";
import { NotExtended } from "http-errors";
import {
  main,
  getinfo,
  getinfo_process,
  Delete,
  delete_process,
  update,
  update_process,
  edit_process,
  reference,
  result,
} from "../controllers/infoController";
import {
  groupMatching,
  groupGetinfo,
  groupGetinfo_process,
  groupInfos,
  groupMain,
  groupDelete,
  groupDelete_process,
} from "../controllers/groupController";
var indexRouter = express.Router();

indexRouter.get("/", main);

indexRouter.get("/getinfo", getinfo);

indexRouter.post("/getinfo_process", getinfo_process);

indexRouter.get("/delete", Delete);

indexRouter.post("/delete_process", delete_process);

indexRouter.get("/update", update);

indexRouter.post("/update_process", update_process);

indexRouter.post("/edit_process", edit_process);

indexRouter.get("/reference", reference);

indexRouter.post("/result", result);

indexRouter.get("/groupInfos", groupInfos);

indexRouter.get("/groupGetinfo", groupGetinfo);

indexRouter.post("/groupGetinfo_process", groupGetinfo_process);

indexRouter.get("/groupMatch", groupMatching);

indexRouter.get("/group", groupMain);

indexRouter.get("/groupDelete", groupDelete);

indexRouter.post("/groupDelete_process", groupDelete_process);

export default indexRouter;
