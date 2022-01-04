import access_rightsService from "../services/access_rights_service";
import roleService from "../services/role_service";
import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
let createAccessRightsTable = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await access_rightsService.createAccessRightsTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAccessRightsTableList = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await access_rightsService.getAccessRightsTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAccessRightsTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await access_rightsService.editAccessRightsTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAccessRightsTable = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await access_rightsService.deleteAccessRightsTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAccessRightsTableById = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await access_rightsService.getAccessRightsTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
let getRoleDropdown = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await roleService.getRoleDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
export default {
  getAccessRightsTableList,
  getAccessRightsTableById,
  createAccessRightsTable,
  editAccessRightsTable,
  deleteAccessRightsTable,
  getRoleDropdown,
};
