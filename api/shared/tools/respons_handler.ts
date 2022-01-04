let getErrorCreate = (message: any, req: any, res: any) => {
  let errorRespons: any = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage: any = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorEdit = (message: any, req: any, res: any) => {
  let errorRespons: any = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage: any = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorDelete = (message: any, req: any, res: any) => {
  let errorRespons: any = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage: any = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorList = (message: any, req: any, res: any) => {
  let errorRespons: any = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage: any = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorDropdown = (message: any, req: any, res: any) => {
  let errorRespons: any = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage: any = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
let getErrorView = (message: any, req: any, res: any) => {
  let errorRespons: any = {};
  errorRespons["headers"] = req.headers;
  errorRespons["name"] = req.name;
  errorRespons["ok"] = req.ok;
  errorRespons["status"] = req.status;
  errorRespons["statusText"] = req.statusText;
  errorRespons["url"] = req.url;
  let errorMessage: any = {};
  errorMessage["code"] = "10001";
  errorMessage["errorMessage"] = ["LABEL.ERROR"];
  errorMessage["errorParameter"] = [];
  errorMessage["rowParameter"] = [];
  errorMessage["message"] = message;
  errorMessage["source"] = "source";
  errorMessage["stackTrace"] = "stackTrace";
  errorMessage["messageList"] = [];

  errorRespons["error"] = errorMessage;
  res.status(500).json(errorRespons);
};
export default {
  getErrorCreate,
  getErrorEdit,
  getErrorDelete,
  getErrorList,
  getErrorDropdown,
  getErrorView,
};
