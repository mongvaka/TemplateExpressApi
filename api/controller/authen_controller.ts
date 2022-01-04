import authen_services from "../services/authen_services";
import users from "../shared/test_data/users";
import { Request, Response } from "express";
import respons from "../shared/tools/respons_handler";

//--Get list ---
//--Get ID ---

//--Create data ---

//--Update data ---

//--Delete data ---

//--Special Function ---

let checkUserAccount = async (req: Request, res: Response) => {
  let result: any = await authen_services.checkUseraccount(req, res);
  if (result.error) {
    res.status(500).json(result.error);
  } else {
    res.status(200).json(result);
  }
};

let login = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await authen_services.login(req, res));
  } catch (error: any) {
    respons.getErrorCreate(error.message, req, res);
  }
};
let refreshToken = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await authen_services.refreshToken(req, res));
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
export default {
  //getList: users
  // ,
  // getByID: xxxx,
  // create_Template: xxxx,
  // update_Template: xxxx,
  // delete_Template: xxxx,
  // special_function: xxxx
  refreshToken,
  checkUserAccount,
  login,
};
