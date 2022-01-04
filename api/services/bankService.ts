import { Request } from "express";
import { BankViewModel } from "../view_model/bankViewModel";
import { BankRepository } from "../model/bankRepository";
import { SearchParameter, SelectItems } from "../system_model";
import mTools from "../shared/tools/tools";
import { thowThisError } from "../shared/tools/error_handler";
export default class BankService {
  createBankTable = async (req: Request) => {
    try {
      const model: BankViewModel = new BankViewModel(req.body);
      const bankRepository: BankRepository = new BankRepository(req);
      return await bankRepository.create(model);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  getBankTableList = async (req: Request) => {
    try {
      const searchParameter: SearchParameter = mTools.getSearchParameter(
        req.body
      );
      const bankRepository: BankRepository = new BankRepository(req);
      return await bankRepository.getBankList(searchParameter);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  editBankTable = async (req: Request) => {
    try {
      const model: BankViewModel = new BankViewModel(req.body);
      const bankRepository: BankRepository = new BankRepository(req);
      return await bankRepository.edit(model.bank_uuid, model);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  deleteBankTable = async (req: Request) => {
    try {
      const id: string = req.body.primaryKey;
      const bankRepository: BankRepository = new BankRepository(req);
      return await bankRepository.delete(id);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  getBankTableById = async (req: Request) => {
    try {
      const primaryKey: string = req.body.primaryKey;
      const bankRepository: BankRepository = new BankRepository(req);
      return await bankRepository.getById(primaryKey);
    } catch (error: any) {
      thowThisError(error);
    }
  };

  getBankDropdown = async (req: Request) => {
    try {
      const searchParameter: SearchParameter = mTools.getSearchParameter(
        req.body
      );
      const bankRepository: BankRepository = new BankRepository(req);
      return await bankRepository.getDropdown(searchParameter);
    } catch (error: any) {
      thowThisError(error);
    }
  };
}
