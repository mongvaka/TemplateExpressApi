import model from "../model/access_rights_model";
import { Request } from "express";
let createAccessRightsTable = async (req: Request) => {
  try {
    return await model.create(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getAccessRightsTableList = async (req: Request) => {
  try {
    return await model.list(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let editAccessRightsTable = async (req: Request) => {
  try {
    return await model.edit(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let deleteAccessRightsTable = async (req: Request) => {
  try {
    return await model.del(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getAccessRightsTableById = async (req: Request) => {
  try {
    return await model.view(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getAccessRightsDropdown = async (req: Request) => {
  try {
    return await model.Dropdown(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default {
  getAccessRightsTableList,
  getAccessRightsTableById,
  createAccessRightsTable,
  editAccessRightsTable,
  deleteAccessRightsTable,
  getAccessRightsDropdown,
};
