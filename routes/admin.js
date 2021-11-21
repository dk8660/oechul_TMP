import { index } from "cheerio/lib/api/traversing";
import express from "express";
import { response } from "express";
import { NotExtended } from "http-errors";
import {
  home,
  Delete,
  delete_process,
  update,
  update_process,
  edit_process,
  watch,
} from "../controllers/infoController";
import { matching, select } from "../controllers/matchingFunction";
var adminRouter = express.Router();

adminRouter.get("/", home);

adminRouter.get("/delete", Delete);

adminRouter.post("/delete_process", delete_process);

adminRouter.get("/update", update);

adminRouter.post("/update_process", update_process);

adminRouter.post("/edit_process", edit_process);

adminRouter.get("/matching", matching);

adminRouter.get("/select", select);

adminRouter.get("/info/:id", watch);

export default adminRouter;
