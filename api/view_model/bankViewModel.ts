import { BankTable } from "../entity";
import { BaseCompanyView } from "../system_model";

export class BankViewModel extends BaseCompanyView {
  bank_uuid: string;
  bank_code: string;
  bank_name: string;
  bank_branch: string;
  account_name: string;
  account_number: string;
  bank_category: number = 0;

  financial_amount: number;
  balance: number;
  spending_limit: number;

  constructor(json: any) {
    super();
    this.bank_uuid = json["bank_uuid"];
    this.bank_code = json["bank_code"];
    this.bank_name = json["bank_name"];
    this.bank_branch = json["bank_branch"];
    this.account_name = json["account_name"];
    this.account_number = json["account_number"];
    this.bank_category = json["bank_category"];
    this.financial_amount = json["financial_amount"];
    this.balance = json["balance"];
    this.spending_limit = json["spending_limit"];
  }
}
