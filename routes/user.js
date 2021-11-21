import { index } from "cheerio/lib/api/traversing";
import express from "express";
import { response } from "express";
import { NotExtended } from "http-errors";
import {
  createAccount,
  createAccount_process,
  login,
  login_process,
} from "../controllers/userController";
var userRouter = express.Router();

userRouter
  .route("/createAccount")
  .get(createAccount)
  .post(createAccount_process);

userRouter.route("/login").get(login).post(login_process);

export default userRouter;
