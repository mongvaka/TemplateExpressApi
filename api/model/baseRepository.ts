import {
  Paginator,
  SearchCondition,
  SortCondition,
} from "./../system_model/search_param_model";
import { SearchResult } from "./../system_model/search_result";
import { Request } from "express";
import jwtDecode from "jwt-decode";
import { SearchParameter, SelectItems } from "../system_model";
import { ColumnType, ConditionType } from "../shared/constants/constant";
export class BaseRepository {
  company_uuid: string;
  branch_uuid: string;
  user_name: string;
  access_token: string;
  constructor(req: Request) {
    const authorizationArr = req.headers.authorization!.split(" ");
    this.branch_uuid = authorizationArr[2];
    this.company_uuid = authorizationArr[1];
    this.access_token = authorizationArr[0];
    this.getUserNameFromToken();
  }
  getUserNameFromToken(): void {
    try {
      const userModel: any = jwtDecode(this.access_token);
      this.user_name = userModel.user_name;
    } catch (e) {
      throw new Error();
    }
  }
  setSystemCreateFeild(model: any): any {
    model.create_date = new Date();
    model.update_date = null;
    model.update_by = null;
    model.branch_uuid = this.branch_uuid;
    model.company_uuid = this.company_uuid;
    model.create_by = this.user_name;
    model.is_active = true;
  }
  setSystemUpdateFeild(model: any): any {
    model.update_date = new Date();
    model.update_by = this.user_name;
    return model;
  }
  getConditionString(
    tableName: string,
    searchParam: SearchParameter,
    isCount: boolean
  ): string {
    try {
      const searchParameter: SearchParameter =
        this.cleanSearchParameter(searchParam);
      let conditionString: string = this.getSystemCondition(tableName);
      if (searchParameter) {
        if (searchParameter.searchCondition) {
          searchParameter.searchCondition.forEach((condition) => {
            let microConditionString = this.getMicroConditionString(condition);
            conditionString = `${conditionString} ${microConditionString}`;
          });
        }
      }
      let orderByString: string = this.getOrderByCondition(searchParameter);
      let paginatorString = this.getPaginatorString(searchParameter);
      if (isCount) {
        return conditionString;
      } else {
        return conditionString + orderByString + paginatorString;
      }
    } catch (error) {
      throw new Error();
    }
  }
  cleanSearchParameter(searchParam: SearchParameter): SearchParameter {
    let newSearchConditions: SearchCondition[] = [];
    let newSearchParameter: SearchParameter = searchParam;
    if (searchParam.searchCondition) {
      searchParam.searchCondition.forEach((conditionItem) => {
        const value: boolean =
          conditionItem.value == null || conditionItem.value == "";
        const values: boolean =
          conditionItem.values == null || conditionItem.values.length == 0;
        if (!(value && values)) {
          newSearchConditions.push(conditionItem);
        }
      });
      newSearchParameter.searchCondition = newSearchConditions;
    }
    return newSearchParameter;
  }
  getPaginatorString(searchParameter: SearchParameter): string {
    const limit: number =
      searchParameter.paginator == null ? 10 : searchParameter.paginator.rows;
    const offset: number =
      (searchParameter.paginator == null ? 0 : searchParameter.paginator.page) *
      limit;
    if (limit == -1) {
      return ` LIMIT 100 OFFSET ${offset}`;
    } else {
      return ` LIMIT ${limit} OFFSET ${offset}`;
    }
  }
  getOrderByCondition(searchParameter: SearchParameter): string {
    const columeList: SortCondition[] = searchParameter.sortCondition;
    let sortList: string[] = [];
    if (columeList) {
      if (columeList.length > 0) {
        columeList.forEach((item) => {
          const sortString = `${item.tableName}.${item.columnName} ${
            item.isAsc ? "ASC" : "DESC"
          }`;
          sortList.push(sortString);
        });
        return ` ORDER BY ${sortList.toString()}`;
      } else {
        return "";
      }
    } else {
      const isAses: boolean[] = searchParameter.isAscs;
      const sortColumns: string[] = searchParameter.sortColumns;
      const sortTable: string[] = searchParameter.sortTable;

      if (sortColumns) {
        for (var i = 0; i < sortColumns.length; i++) {
          const sortString = `${sortTable[i]}.${sortColumns[i]} ${
            isAses[i] ? "ASC" : "DESC"
          }`;
          sortList.push(sortString);
        }
        // return "";
        if (sortList.length > 0) {
          return ` ORDER BY ${sortList.toString()}`;
        } else {
          return "";
        }
      } else {
        return "";
      }
    }
  }
  getMicroConditionString(condition: SearchCondition): string {
    if (condition.conditionType) {
      switch (condition.conditionType) {
        case ConditionType.BOOL:
          return getConditionBoolean(condition);
        case ConditionType.DATE_RANGE:
          return getConditionDateRange(condition);
        case ConditionType.TIME_RANGE:
          return getConditionTimeRange(condition);
        case ConditionType.ENUM:
          return getConditionEnum(condition);
        case ConditionType.LIST:
          return getConditionList(condition);
        case ConditionType.NUMBER:
          return getConditionText(condition);
        case ConditionType.TEXT:
          return getConditionText(condition);
        default:
          return "";
      }
    } else {
      switch (condition.type) {
        case ColumnType.BOOLEAN:
          return getConditionBoolean(condition);
        case ColumnType.DATERANGE:
          return getConditionDateRange(condition);
        case ColumnType.ENUM:
          return getConditionEnum(condition);
        case ColumnType.MASTER:
          return getConditionList(condition);
        case ColumnType.INT:
          return getConditionText(condition);
        case ColumnType.STRING:
          return getConditionText(condition);
        default:
          return "";
      }
    }
  }
  getSystemCondition(tableName: string): string {
    return `${tableName}.company_uuid = '${this.company_uuid}' AND ${tableName}.branch_uuid = '${this.branch_uuid}' AND ${tableName}.is_active = true`;
  }
  getSingleSelectItem(value: string, label: string, rowData: any): SelectItems {
    let selectItem: SelectItems = new SelectItems();
    selectItem.value = value;
    selectItem.label = label;
    selectItem.rowData = rowData;
    return selectItem;
  }
  getLabel(value1: string, value2: string): string {
    return `${value1} - ${value2}`;
  }
  toSearchResult(
    dataList: any,
    totalRecord: number,
    searchParameter: SearchParameter
  ): SearchResult {
    const result = new SearchResult();
    const paginator: Paginator = new Paginator();
    let rows = 0;
    let page = 0;
    if (searchParameter) {
      rows =
        searchParameter.paginator == null ? 10 : searchParameter.paginator.rows;
      page =
        searchParameter.paginator == null ? 0 : searchParameter.paginator.page;
    }
    paginator.first = rows * page;
    paginator.rows = rows;
    paginator.pageCount = Math.ceil(totalRecord / rows);
    paginator.page = page + 1;
    paginator.totalRecord = totalRecord;
    result.paginator = paginator;
    result.results = dataList;
    return result;
  }
}
function getConditionBoolean(condition: SearchCondition): string {
  let columnName: String = "";
  if (condition.fieldName != undefined) {
    columnName = condition.fieldName;
  } else {
    columnName = condition.columnName;
  }
  return `AND ${condition.tableName}.${columnName}${condition.operator} ${condition.value}`;
}
function getConditionText(condition: SearchCondition): string {
  let columnName: String = "";
  if (condition.fieldName != undefined) {
    columnName = condition.fieldName;
  } else {
    columnName = condition.columnName;
  }
  return `AND ${condition.tableName}.${columnName} ${condition.operator} '${condition.value}'`;
}
function getConditionTimeRange(condition: SearchCondition): string {
  let columnName: String = "";
  if (condition.fieldName != undefined) {
    columnName = condition.fieldName;
  } else {
    columnName = condition.columnName;
  }
  return `AND  ${condition.tableName}.${columnName}  BETWEEN '${condition.values[0]}' AND '${condition.values[1]}'`;
}
function getConditionDateRange(condition: SearchCondition): string {
  let columnName: String = "";
  if (condition.fieldName != undefined) {
    columnName = condition.fieldName;
  } else {
    columnName = condition.columnName;
  }
  return `AND  ${condition.tableName}.${columnName}  BETWEEN '${condition.values[0]}' AND '${condition.values[1]}'`;
}

function getConditionEnum(condition: SearchCondition): string {
  let valueList: string[] = [];
  let columnName: String = "";
  if (condition.fieldName != undefined) {
    columnName = condition.fieldName;
  } else {
    columnName = condition.columnName;
  }
  condition.values.forEach((item) => {
    valueList.push("'" + item + "'");
  });
  return `AND ${
    condition.tableName
  }.${columnName} IN (${condition.values.toString()})`;
}

function getConditionList(condition: SearchCondition): string {
  let valueList: string[] = [];
  let columnName: String = "";
  if (condition.fieldName != undefined) {
    columnName = condition.fieldName;
  } else {
    columnName = condition.columnName;
  }
  condition.values.forEach((item) => {
    valueList.push("'" + item + "'");
  });
  return `AND ${
    condition.tableName
  }.${columnName} IN (${valueList.toString()})`;
}
