import model from "../model/subscribe_trans_model";
import { Request } from "express";
let createSubscribeTransTable = async (req: Request) => {
  try {
    return await model.create(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSubscribeTransTableList = async (req: Request) => {
  try {
    return await model.list(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let editSubscribeTransTable = async (req: Request) => {
  try {
    return await model.edit(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let deleteSubscribeTransTable = async (req: Request) => {
  try {
    return await model.del(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSubscribeTransTableById = async (req: Request) => {
  try {
    return await model.view(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSubscribeTransDropdown = async (req: Request) => {
  try {
    return await model.Dropdown(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default {
  getSubscribeTransTableList,
  getSubscribeTransTableById,
  createSubscribeTransTable,
  editSubscribeTransTable,
  deleteSubscribeTransTable,
  getSubscribeTransDropdown,
};
