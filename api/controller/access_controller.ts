import accessService from "../services/access_service";
import subscribeTransService from "../services/subscribe_trans_service";
import roleService from "../services/role_service";

import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
let createAccessTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await accessService.createAccessTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getAccessTableList = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await accessService.getAccessTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editAccessTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await accessService.editAccessTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteAccessTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await accessService.deleteAccessTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getAccessTableById = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await accessService.getAccessTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
let getSubscribeTransDropdown = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await subscribeTransService.getSubscribeTransDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
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
  getAccessTableList,
  getAccessTableById,
  createAccessTable,
  editAccessTable,
  deleteAccessTable,
  getSubscribeTransDropdown,
  getRoleDropdown,
};
