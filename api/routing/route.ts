import * as express from "express";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
const route = express.Router();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
//#region Require Section

import authen_router from "./api/authen_route";

import access_right_routing from "./api/access_rights_routing";
import role_ronting from "./api/role_routing";

import access_routing from "./api/access_routing";
import subscribe_trans_routing from "./api/subscribe_trans_routing";

import subscribe_routing from "./api/subscribe_routing";
import feature_routing from "./api/feature_routing";

import bank_routing from "./api/bank_routing";

//#endregion
// route.use("/api/", (req: Request, res: Response) => {
//   console.log("hi");

//   res.sendStatus(200);
// });
//#region
route.use("/api/auth", authen_router);
route.use("/api/AccessRights", authenticateToken, access_right_routing);
route.use("/api/role", authenticateToken, role_ronting);

route.use("/api/Access", authenticateToken, access_routing);
route.use("/api/SubscribeTrans", authenticateToken, subscribe_trans_routing);
route.use("/api/Subscribe", authenticateToken, subscribe_routing);
route.use("/api/Feature", authenticateToken, feature_routing);
route.use("/api/Bank", authenticateToken, bank_routing);

//#endregion
function authenticateToken(req: any, res: any, next: any) {
  let authHeader = req.headers["authorization"];
  if (authHeader == null) {
    throw new Error();
  }
  let token = authHeader.split(" ")[0];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_TOKEN_SECRET!, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
export default route;
