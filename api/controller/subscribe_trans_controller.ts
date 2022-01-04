import subscribe_transService from "../services/subscribe_trans_service";
import subscribeService from "../services/subscribe_service";
import featureService from "../services/feature_service";
import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
let createSubscribeTransTable = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await subscribe_transService.createSubscribeTransTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getSubscribeTransTableList = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await subscribe_transService.getSubscribeTransTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editSubscribeTransTable = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await subscribe_transService.editSubscribeTransTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteSubscribeTransTable = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await subscribe_transService.deleteSubscribeTransTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getSubscribeTransTableById = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json(await subscribe_transService.getSubscribeTransTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
let getSubscribeDropdown = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await subscribeService.getSubscribeDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
let getFeatureDropdown = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await featureService.getFeatureDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
  }
};
export default {
  getSubscribeTransTableList,
  getSubscribeTransTableById,
  createSubscribeTransTable,
  editSubscribeTransTable,
  deleteSubscribeTransTable,
  getSubscribeDropdown,
  getFeatureDropdown,
};
