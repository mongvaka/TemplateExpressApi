import mTools from "../shared/tools/tools";
import jwtDecode from "jwt-decode";
import { Request } from "express";
let getIndexCreate = (req: Request) => {
  try {
    var data = toCreateModel(req);
    let indexList: any = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getIndexEdit = (req: Request) => {
  try {
    var data = toEditModel(req);
    let indexList: any = [];
    Object.keys(data).forEach((key, index) => {
      indexList.push("$" + (index + 1));
    });
    return indexList;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getKeysCreate = (req: Request) => {
  try {
    let keyList = [];
    keyList.push("subscribe_trans_table_uuid");
    keyList.push("role_table_uuid");
    keyList.push("can_create");
    keyList.push("can_edit");
    keyList.push("can_read");
    keyList.push("can_delete");
    keyList.push("can_action");
    keyList.push("company_uuid");
    keyList.push("branch_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    return keyList;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req: Request) => {
  try {
    let keyList = [];
    keyList.push("access_uuid");
    keyList.push("subscribe_trans_table_uuid");
    keyList.push("role_table_uuid");
    keyList.push("can_create");
    keyList.push("can_edit");
    keyList.push("can_read");
    keyList.push("can_delete");
    keyList.push("can_action");
    keyList.push("update_by");
    keyList.push("update_date");
    keyList.push("ref_uuid");
    keyList.push("ref_type");
    return keyList;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getRoWAuth = (list: any) => {
  list.forEach((element: any) => {
    element["rowAuthorize"] = 4;
  });
};
let getSqlCreate = (req: Request) => {
  try {
    const keys = getKeysCreate(req);
    const index = getIndexCreate(req);
    return (
      "INSERT INTO access_table (" +
      keys +
      ") values (" +
      index +
      ") RETURNING *"
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlDelete = () => {
  try {
    return "UPDATE access_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE access_uuid = $4 RETURNING *";
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req: Request) => {
  try {
    return "SELECT * FROM vw_access_table_Dropdown " + mTools.getCondition(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlEdit = (req: Request) => {
  try {
    const keys = getKeysEdit(req);
    const index = getIndexEdit(req);
    return (
      "UPDATE access_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE access_uuid = $1 RETURNING *"
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlList = (req: Request) => {
  try {
    return "SELECT * FROM vw_access_table_list " + mTools.getCondition(req);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlAccessFeatureList = (
  role_table_uuid: any,
  subcribe_table_uuid: any
) => {
  try {
    return (
      "SELECT * FROM vw_feature_acess_list WHERE role_table_uuid = '" +
      role_table_uuid +
      "' and" +
      " subscribe_table_uuid = '" +
      subcribe_table_uuid +
      "'"
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlView = () => {
  try {
    return "SELECT * FROM vw_access_table_item WHERE access_uuid = $1";
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model: any) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.subscribe_trans_table_uuid);
    valuelist.push(data.role_table_uuid);
    valuelist.push(data.can_create);
    valuelist.push(data.can_edit);
    valuelist.push(data.can_read);
    valuelist.push(data.can_delete);
    valuelist.push(data.can_action);
    valuelist.push(data.company_uuid);
    valuelist.push(data.branch_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    return valuelist;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getValuesDelete = (req: Request) => {
  try {
    const update_date = new Date().toISOString();
    const body: any = req.body;
    const key = body.primaryKey;
    let valuelist = [];
    valuelist.push(false);
    valuelist.push(getUserNameFromToken(req));
    valuelist.push(update_date);
    valuelist.push(key);
    return valuelist;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getValuesEdit = (model: any) => {
  try {
    var data = toEditModel(model);
    let valuelist = [];
    valuelist.push(data.access_uuid);
    valuelist.push(data.subscribe_trans_table_uuid);
    valuelist.push(data.role_table_uuid);
    valuelist.push(data.can_create);
    valuelist.push(data.can_edit);
    valuelist.push(data.can_read);
    valuelist.push(data.can_delete);
    valuelist.push(data.can_action);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    valuelist.push(data.ref_uuid);
    valuelist.push(data.ref_type);
    return valuelist;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req: Request): any => {
  try {
    const create_date = new Date().toISOString();
    var model: any = {};
    var body: any = {};
    model.subscribe_trans_table_uuid = body["subscribe_trans_table_uuid"];
    model.role_table_uuid = body["role_table_uuid"];
    model.can_create = body["can_create"];
    model.can_edit = body["can_edit"];
    model.can_read = body["can_read"];
    model.can_delete = body["can_delete"];
    model.can_action = body["can_action"];
    model.company_uuid = body["company_uuid"];
    model.branch_uuid = body["branch_uuid"];
    model.is_active = true;
    model.create_by = getUserNameFromToken(req);
    model.create_date = create_date;
    model.ref_uuid = body["ref_uuid"];
    model.ref_type = body["ref_type"];
    return model;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList: any) => {
  try {
    let optionList: any = [];
    modelList.forEach((model: any) => {
      let value = model["access_uuid"];
      let label = getLabel(model);
      let rowData = model;
      let DropdownModel = {
        value: value,
        label: label,
        rowData: rowData,
      };
      optionList.push(DropdownModel);
    });
    return optionList;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getLabel = (model: any) => {
  try {
    return (
      model["subscribe_trans_table_uuid"] + " - " + model["role_table_uuid"]
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let toEditModel = (req: Request) => {
  try {
    const update_date = new Date().toISOString();
    var model: any = {};
    var body: any = {};
    model.access_uuid = body["access_uuid"];
    model.subscribe_trans_table_uuid = body["subscribe_trans_table_uuid"];
    model.role_table_uuid = body["role_table_uuid"];
    model.can_create = body["can_create"];
    model.can_edit = body["can_edit"];
    model.can_read = body["can_read"];
    model.can_delete = body["can_delete"];
    model.can_action = body["can_action"];
    model.update_by = getUserNameFromToken(req);
    model.update_date = update_date;
    model.ref_uuid = body["ref_uuid"];
    model.ref_type = body["ref_type"];
    return model;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getEncript = (accessList: any) => {
  try {
    let accessListFiltered: any = [];
    accessList.forEach((item: any) => {
      let model = {
        path: item["path"],
        can_create: item["can_create"],
        can_edit: item["can_edit"],
        can_read: item["can_read"],
        can_delete: item["can_delete"],
        can_action: item["can_action"],
        expire_date: item["expire_date"],
        feature_label: item["label_feature"],
      };
      accessListFiltered.push(JSON.stringify(model));
    });
    return Buffer.from(JSON.stringify(accessListFiltered)).toString("base64");
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getUserNameFromToken = (req: Request) => {
  try {
    const headers: any = req.headers;
    const authHeader = headers["authorization"];
    if (authHeader == null) {
      throw new Error();
    }
    const token = authHeader.split(" ")[0];
    const userModel: any = jwtDecode(token);
    return userModel.user_name;
  } catch (error: any) {
    throw new Error(error);
  }
};
export default {
  toDropdown,
  getKeysEdit,
  getValuesEdit,
  getIndexEdit,
  getKeysCreate,
  getValuesCreate,
  getValuesDelete,
  getIndexCreate,
  getSqlCreate,
  getSqlEdit,
  getSqlList,
  getSqlDelete,
  getSqlView,
  getSqlDropdown,
  getRoWAuth,
  getSqlAccessFeatureList,
  getEncript,
};
