import { SearchCondition, SearchParameter } from "./search_param_model";

export class Deletion {
  public uuid: string = "";
  public searchParams: SearchParameter;
}

export class RowIdentity {
  public uuid: string = "";
  public rowIndex: number;
  public isChild: boolean;
}

export class PaginationModel {
  public pageIndex: number;
  public itemPerPage: number;
  public totalRecord: number;
}

export class DataGridModel {
  public model: any[];
  public totalRecord: number;
}

export class ErrorResponse {
  headers: any;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
  error: ErrorModel;
}
export class ErrorModel {
  code: string;
  errorMessage: any[]; // 0 {key1:''}
  errorParameter: any[]; // {key1:[]}
  rowParameter: any[];
  message: string;
  source: string;
  stackTrace: string;
  messageList: string[];
  // requestId: string;
}

export class SelectItems {
  label: string;
  value: any;
  styleClass: string;
  icon: string;
  title: string;
  disabled: boolean;
  rowData: any;
}
export class FileModel {
  name: string;
  size: number;
  type: string;
}

export class FileUpload {
  fileInfos: FileInformation[];
  jsonStringParm: string;
}
export class FileInformation {
  fileName: string;
  contentType: string;
  base64: any;
  path: string;
  isPreviewable: boolean;
  isRemovable: boolean = true;
  fileDisplayName: string;
  type: string;
}
export class FileUploadStyle {
  id: string;
  style: string;
}
export class Environment {
  production: boolean;
  authURL: string;
  baseURL: string;
  userURL: string;
  reportServerPath: string;
  clientId: string;
  scope: string;
}

export class RefViewModel {
  refType: number;
  refUUID: string;
  refId: string;
  //recordType: RecordType;
  languageUUID: string;
  taxId: string;
  name: string;
  companyUUID: string;
  companyId: string;
  branchUUID: string;
  branchId: string;
}

export class JoinCondtion {
  public data: string[] = [];
  public equal: boolean = true;
}

export class LoggingModel {
  public timestamp: string = "";
  public logType: number = 0; // System, Normal
  public messageType: string = ""; // error, warn, info, success
  public topic: string = "";
  public message: string = "";
  public messages: string[];
  public origin: string = ""; // component title, SYSTEM (logType = System)
  public seen: boolean = false;

  public systemLogDetail: SystemLogModel;
}
export class SystemLogModel {
  public startTime: number = 0;
  public finishTime: number = 0;
  public elapsedTime: number = 0;
  public httpMethod: string = ""; // GET, POST, PUT, DELETE, PATCH
  public reqUrl: string = "";
  public statusCode: string = "";
  public statusText: string = "";
  public stackTrace: string = "";
  public reqBody: string = ""; // encrypted
  public isError: boolean = false;

  public requestId: string = "";

  public displayDetail: boolean = false;
  public displayStartTime: string = "";
  public displayFinishTime: string = "";
}

export class IConfirmation {
  public key: string;
  public isAccept: boolean;
}

export class ImportBankFile {
  public fileUpload: FileUpload = new FileUpload();
  public companyUUID: string = "";
  public description: string = "";
}

export class IRequest {
  public url: string;
  public duration: number;
  public begin: number;
}

export class IColumnWidth {
  public string: ISizing[];
  public decimal: ISizing[];
  public int: ISizing[];
}

export class ISizing {
  public width: number;
  public columns: string[];
}

export class IExportParam {
  public option: OptionModel;
  public searchParam: SearchParameter;
}

export class IKey {
  public oldValue: string;
  public newValue: string;
}

export class IFileName {
  public nameFormat: string;
  public dateFormat: string;
}

export class IReferenceType {
  public parent: string;
  public refId: string;
  public label: string;
  public refUUID: string;
}

export class ISubjectType {
  //public action: ACTIONTYPE;
  public state: boolean;
}

export class NotificationResponse {
  notificationType: string;
  notificationMessage: any[];
  notificationParameter: any[];
}
export class DummyResult {
  public dummmyUUID: string;
  public dummmyText: string;
  public dummmyAmount: number;
}

export class DummyParam {
  public dummmyUUID: string;
  public dummmyText: string;
  public dummmyAmount: number;
}

export class BaseOption {
  // show related info when in function mode
  public showRelInFnMode: boolean;
  // show function when in function mode
  public showFnInFnMode: boolean;
}

export class OptionModel {
  public key: string;
  public columns: ColumnModel[] = [];
  public advanceColumns: ColumnModel[];
  public showPaginator = true;
  public autoSearch: boolean;
  public isAdvance: boolean;
  public canCreate: boolean;
  public canView: boolean;
  public canDelete: boolean;
  // public authorization: AccessMode = AccessMode.full;
  public exportFileName: string;
}

export class ColumnModel {
  public label: string;
  public textKey: string;
  public subTextKey: string;
  // public type: ColumnType;
  public format: any;
  public visibility: boolean;
  // public sorting: SortType = SortType.NONE;
  public masterList: SelectItems[];
  public parentKey: string;
  public width: any = { width: "100px" };
  // public operator: string = Operators.AND;
  public sortingOrder: number;
  public sortingKey: string;
  public searchingKey: string;
  public disabled: boolean = false;
  public disabledFilter: boolean = false;
  public order: number;
  public value: string = "";
  public values: any[] = [];
  // public equalityOperator: string = Operators.EQUAL;
  // public bracket: number = BracketType.None;
}

export class ConfigurationModel {
  public defaultLanguage: string = "";
  public dateFormat: string = "";
  public inputDateFormat: string = "";
  public inputDateTimeFormat: string = "";
  public environments: Environment[];

  public acceptedFileFormat: string = "";
  public fileSizeLimit: number = 0;

  public encryptionKey: string = "";
  public systemLogLevel: string = ""; // Error, All

  public interfaces: InterfaceWithSystems;

  public deploymentConfig: DeploymentConfig;
  public columnsWidth: IColumnWidth;
  public k2WorkflowPath: K2WorkflowPath;
  public excelfileNameFormat: IFileName;
  public toastTimeout: ToastTimeout;
  public actionHistoryStartflowOption: ActionHistoryStartflowOption;
}

export class InterfaceWithSystems {
  public MicrosoftAX: boolean = false;
  public K2: boolean = false;
}

export class DeploymentConfig {
  public enableEncryption: boolean = false;
  public errorMsgLevel: string = ""; // dev, prod
}

export class K2WorkflowPath {
  public MainFloder: string = "";
  public ApplicationWorkflow: string = "";
  public AgreementWorkflow: string = "";
  public CollectionActivityTranWorkflow: string = "";
  public CreditAppRequestWorkflow: string = "";
  public PurchaseWorkflow: string = "";
  public PurchaseEmailWorkflow: string = "";
  public ViewFlowURL: string = "";
}
export class ToastTimeout {
  public error: number = 10; // seconds
  public success: number = 5; // seconds
  public warning: number = 10; // seconds
  public info: number = 5; // seconds
}
export class ActionHistoryStartflowOption {
  public activityName: string = "";
  public actionName: string = "";
}

export class FormatConfigModel {
  public type: string = "";
  public max: number = 0;
  public min: number = 0;
  public grouping: boolean = false;
  public locale: string = "";
  public currency: string = "";
  public fractionDigits: number = 0;
  public suffix: string = "";
}

export class TranslateModel {
  public code: string = "";
  public parameters: string[] = [];
  public type: string = "";
  public row: string = "";
}

export class MessageModel {
  public topic: TranslateModel;
  public content: TranslateModel;
  public topics: TranslateModel[];
  public contents: TranslateModel[];
  public display: boolean;
}

export class PathParamModel {
  public pageId: string;
  public parentId: string;
  public path: string;
  public skipingPath: string;
  public action: string;
  public parameters: any;
}

export class GridFilterModel {
  public fact: boolean;
}

export class DataServiceModel {
  public url: string;
  public conditions: SearchCondition[];
}

export class FormValidationModel {
  public isValid: boolean;
  public invalidId: string[];
}

export class PageInformationModel {
  public pagePath: string;
  public servicePath: string;
  public skipingPath: string;
  public childPaths: PageInformationModel[];
}
export class RemovedUrl {
  public url: string;
  public removed: string;
}
export class FieldAccessing {
  public filedIds: string[];
  public readonly: boolean;
  public disable: boolean;
  public invisible: boolean;
}

export class ResponseModel {
  public key: string;
  public model: any;
}
export class RelatedKeyModel {
  public key: string;
  public textKey: string;
}
export class DocConVerifyTypeModel {
  //public docConVerifyType: DocConVerifyType;
  public refUUID: string;
}
export class KisDropdownOnFocusModel {
  public inputId: string;
  public readonly: boolean;
  public kisModel: any;
  public isLoadedOnFirstFocus: boolean;
  public options: SelectItems[];
}
