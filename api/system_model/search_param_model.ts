// import { BracketType, ColumnType, Operators } from 'app/shared/constants';

import { Operators } from "../shared/constants/constant";
export class SearchParameter {
  public tableKey: string;
  public urlPath: string;
  public searchCondition: SearchCondition[];
  public paginator: Paginator;
  public refTable: string;
  public branchFilterMode: string;
  public companyBaseGUID: string;
  public branchBaseGUID: string;
  public sortCondition: SortCondition[];
  public isAscs: boolean[];
  public sortColumns: string[];
  public sortTable: string[];
}
export interface SortCondition {
  isAsc: boolean;
  columnName: string;
  tableName: string;
}
export interface SearchCondition {
  columnName: string;
  tableName: string;
  fieldName: string;
  subColumnName: string;
  parameterName: string;
  value: string;
  values: string[];
  type: string;
  operator: string;
  isParentKey: boolean;
  equalityOperator: string;
  mockValues: string[];
  bracket: number;
  conditionType: number;
}

export class SearchResult<T> {
  public results: T[] = [];
  public paginator: Paginator;
}
export class Paginator {
  public page: number;
  public first: number;
  public rows: number;
  public pageCount: number;
  public totalRecord: number;
}
