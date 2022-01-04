import featureService from "../services/feature_service";
import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
let createFeatureTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await featureService.createFeatureTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getFeatureTableList = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await featureService.getFeatureTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editFeatureTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await featureService.editFeatureTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteFeatureTable = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await featureService.deleteFeatureTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getFeatureTableById = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await featureService.getFeatureTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
export default {
  getFeatureTableList,
  getFeatureTableById,
  createFeatureTable,
  editFeatureTable,
  deleteFeatureTable,
};
