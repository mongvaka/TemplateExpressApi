import roleService from "../services/role_service";
import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
let createRoleTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await roleService.createRoleTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getRoleTableList = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await roleService.getRoleTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editRoleTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await roleService.editRoleTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteRoleTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await roleService.deleteRoleTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getRoleTableById = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await roleService.getRoleTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
export default {
  getRoleTableList,
  getRoleTableById,
  createRoleTable,
  editRoleTable,
  deleteRoleTable,
};
