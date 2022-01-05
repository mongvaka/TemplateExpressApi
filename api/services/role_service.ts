import model from "../model/role_model";
import { Request } from "express";
let createRoleTable = async (req: Request) => {
  try {
    return await model.create(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getRoleTableList = async (req: Request) => {
  try {
    return await model.list(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let editRoleTable = async (req: Request) => {
  try {
    return await model.edit(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let deleteRoleTable = async (req: Request) => {
  try {
    return await model.del(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getRoleTableById = async (req: Request) => {
  try {
    return await model.view(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getRoleDropdown = async (req: Request) => {
  try {
    return await model.Dropdown(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default {
  getRoleTableList,
  getRoleTableById,
  createRoleTable,
  editRoleTable,
  deleteRoleTable,
  getRoleDropdown,
};
