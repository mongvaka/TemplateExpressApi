import model from "../model/access_model";
import { Request } from "express";
let createAccessTable = async (req: Request) => {
  try {
    return await model.create(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getAccessTableList = async (req: Request) => {
  try {
    return await model.list(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let editAccessTable = async (req: Request) => {
  try {
    return await model.edit(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let deleteAccessTable = async (req: Request) => {
  try {
    return await model.del(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getAccessTableById = async (req: Request) => {
  try {
    return await model.view(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getAccessDropdown = async (req: Request) => {
  try {
    return await model.Dropdown(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default {
  getAccessTableList,
  getAccessTableById,
  createAccessTable,
  editAccessTable,
  deleteAccessTable,
  getAccessDropdown,
};
