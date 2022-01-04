import { CompanyTable } from "./../entity/CompanyTable";
import { BankTable } from "../entity/BankTable";
import { Request } from "express";
import { BankViewModel } from "../view_model";
import { getRepository, UpdateResult } from "typeorm";
import { BaseRepository } from "./baseRepository";
import { SearchParameter, SelectItems } from "../system_model";
import { ScBank } from "../schema/ScBank";
import { Uuid } from "../shared/tools/value_function";
import { ScCompany } from "../schema/ScCompany";
export class BankRepository extends BaseRepository {
  constructor(req: Request) {
    super(req);
  }
  private bankRepository = getRepository(BankTable);
  getQueryBuilder(conditionString: string) {
    return this.bankRepository
      .createQueryBuilder()
      .select(ScBank.tb.bank_name, ScBank.bank_name)
      .addSelect(ScBank.tb.bank_code, ScBank.bank_code)
      .addSelect(ScBank.tb.bank_uuid, ScBank.bank_uuid)
      .addSelect(ScBank.tb.bank_branch, ScBank.bank_branch)
      .addSelect(ScCompany.tb.company_name, ScCompany.jn.company_name)
      .addSelect(ScCompany.tb.company_id, ScCompany.jn.company_id)
      .from(BankTable, ScBank.tb_name)
      .leftJoin(
        CompanyTable,
        ScCompany.tb_name,
        `${ScCompany.tb.company_uuid} = ${ScBank.tb.company_uuid}`
      )
      .where(conditionString)
      .distinct();
  }
  async getBankList(searchParameter: SearchParameter): Promise<any> {
    const conditionString: string = this.getConditionString(
      ScBank.tb_name,
      searchParameter,
      false
    );
    const conditionCountString: string = this.getConditionString(
      ScBank.tb_name,
      searchParameter,
      true
    );
    const result = this.getQueryBuilder(conditionString);
    const resultCount = this.getQueryBuilder(conditionCountString);
    let totalRec: number = 0;
    totalRec = await resultCount.getCount();
    const rows = await result.getRawMany();
    return this.toSearchResult(rows, totalRec, searchParameter);
  }
  async create(model: BankViewModel): Promise<any> {
    model.bank_uuid = Uuid.newUuid();
    this.setSystemCreateFeild(model);
    return this.bankRepository.save(model);
  }
  async getById(id: string): Promise<any> {
    const result = await this.bankRepository
      .createQueryBuilder()
      .select(ScBank.tb.bank_name, ScBank.bank_name)
      .addSelect(ScBank.tb.bank_code, ScBank.bank_code)
      .addSelect(ScBank.tb.bank_uuid, ScBank.bank_uuid)
      .addSelect(ScBank.tb.bank_branch, ScBank.bank_branch)

      .addSelect(ScBank.tb.create_date, ScBank.create_date)
      .addSelect(ScBank.tb.update_date, ScBank.update_date)
      .addSelect(ScBank.tb.update_by, ScBank.update_by)
      .addSelect(ScBank.tb.create_by, ScBank.create_by)

      .addSelect(ScCompany.tb.company_name, ScCompany.company_name)
      .addSelect(ScCompany.tb.company_id, ScCompany.company_id)
      .from(BankTable, ScBank.tb_name)
      .leftJoin(
        CompanyTable,
        ScCompany.tb_name,
        `${ScCompany.tb.company_uuid} = ${ScBank.tb.company_uuid}`
      )
      .where(`${ScBank.tb.bank_uuid} = '${id}'`)
      .distinct()
      .getRawOne();
    return result;
  }
  async edit(id: string, model: BankViewModel): Promise<UpdateResult> {
    return this.bankRepository.update(id, model);
  }
  async delete(id: string): Promise<UpdateResult> {
    let model: BankTable = (await this.bankRepository.findOne(id)) as BankTable;
    model.is_active = false;
    return await this.bankRepository.update(id, model);
  }
  async getDropdown(searchParameter: SearchParameter): Promise<any> {
    let selecteItem: SelectItems[] = [];
    const conditionString: String = this.getConditionString(
      ScBank.tb_name,
      searchParameter,
      false
    );
    const result = await this.bankRepository
      .createQueryBuilder()
      .select(ScBank.tb.bank_uuid, ScBank.bank_uuid)
      .addSelect(ScBank.tb.bank_code, ScBank.bank_code)
      .addSelect(ScBank.tb.bank_name, ScBank.bank_name)
      .from(BankTable, ScBank.tb_name)
      .where(conditionString)
      .distinct()
      .getRawMany();
    result.forEach((model: BankViewModel) => {
      const label = this.getLabel(model.bank_code, model.bank_name);
      const singleSelectItem: SelectItems = this.getSingleSelectItem(
        model.bank_uuid,
        label,
        model
      );
      selecteItem.push(singleSelectItem);
    });
    return selecteItem;
  }
}
