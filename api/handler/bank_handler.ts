import { Response } from "express";
import { Request } from "express";
import { BaseService } from "./../services/baseService";
import { BankTable } from "../entity";
import { BankViewModel } from "../view_model";
import { SelectItems } from "../system_model";
import { BankListViewModel } from "../view_model/bankListModel";

/**
 *static  name
 */
export class BankHandler extends BaseService {
  constructor(req: Request) {
    super(req);
  }
  toDropdown(rows: BankViewModel[]): SelectItems[] {
    let selectItems: SelectItems[] = [];
    rows.forEach((item) => {
      let selectItem: SelectItems = new SelectItems();
      selectItem.value = `${item.bank_code} - ${item.bank_name}`;
      selectItem.value = item.bank_uuid;
      selectItem.rowData = item;
      selectItems.push(selectItem);
    });
    return selectItems;
  }
}
