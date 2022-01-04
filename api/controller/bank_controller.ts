import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
import BankService from "../services/bankService";
let createBankTable = async (req: Request, res: Response) => {
  try {
    const bankService: BankService = new BankService();
    res.status(200).json(await bankService.createBankTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getBankTableList = async (req: Request, res: Response) => {
  try {
    const bankService: BankService = new BankService();
    res.status(200).json(await bankService.getBankTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editBankTable = async (req: Request, res: Response) => {
  try {
    const bankService: BankService = new BankService();
    res.status(200).json(await bankService.editBankTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteBankTable = async (req: Request, res: Response) => {
  try {
    const bankService: BankService = new BankService();
    res.status(200).json(await bankService.deleteBankTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getBankTableById = async (req: Request, res: Response) => {
  try {
    const bankService: BankService = new BankService();
    res.status(200).json(await bankService.getBankTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
let getBankDropdown = async (req: Request, res: Response) => {
  try {
    const bankService: BankService = new BankService();
    res.status(200).json(await bankService.getBankDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

export default {
  getBankTableList,
  getBankTableById,
  createBankTable,
  editBankTable,
  deleteBankTable,
  getBankDropdown,
};
