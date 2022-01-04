import model from "../model/feature_model";
import { Request } from "express";
let createFeatureTable = async (req: Request) => {
  try {
    return await model.create(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getFeatureTableList = async (req: Request) => {
  try {
    return await model.list(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let editFeatureTable = async (req: Request) => {
  try {
    return await model.edit(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let deleteFeatureTable = async (req: Request) => {
  try {
    return await model.del(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getFeatureTableById = async (req: Request) => {
  try {
    return await model.view(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getFeatureDropdown = async (req: Request) => {
  try {
    return await model.Dropdown(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default {
  getFeatureTableList,
  getFeatureTableById,
  createFeatureTable,
  editFeatureTable,
  deleteFeatureTable,
  getFeatureDropdown,
};
