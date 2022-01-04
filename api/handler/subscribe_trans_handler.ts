import mTools from "../shared/tools/tools";
import mAuth from "../services/authen_services";
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
    keyList.push("subscribe_table_uuid");
    keyList.push("feature_table_uuid");
    keyList.push("is_active");
    keyList.push("create_by");
    keyList.push("create_date");
    return keyList;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getKeysEdit = (req: Request) => {
  try {
    let keyList = [];
    keyList.push("subscribe_trans_uuid");
    keyList.push("subscribe_table_uuid");
    keyList.push("feature_table_uuid");
    keyList.push("update_by");
    keyList.push("update_date");
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
      "INSERT INTO subscribe_trans_table (" +
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
    return "UPDATE subscribe_trans_table SET ( is_active , update_by , update_date ) = ( $1 , $2 , $3 ) WHERE subscribe_trans_uuid = $4 RETURNING *";
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlDropdown = (req: Request) => {
  try {
    return "SELECT * FROM vw_subscribe_trans_table_Dropdown ";
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlEdit = (req: Request) => {
  try {
    const keys = getKeysEdit(req);
    const index = getIndexEdit(req);
    return (
      "UPDATE subscribe_trans_table SET" +
      " ( " +
      keys +
      " ) = ( " +
      index +
      " ) " +
      "WHERE subscribe_trans_uuid = $1 RETURNING *"
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlList = (req: Request) => {
  try {
    return (
      "SELECT * FROM vw_subscribe_trans_table_list " +
      mTools.getConditionOnly(req)
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getSqlView = () => {
  try {
    return "SELECT * FROM vw_subscribe_trans_table_item WHERE subscribe_trans_uuid = $1";
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getValuesCreate = (model: any) => {
  try {
    var data = toCreateModel(model);
    let valuelist = [];
    valuelist.push(data.subscribe_table_uuid);
    valuelist.push(data.feature_table_uuid);
    valuelist.push(data.is_active);
    valuelist.push(data.create_by);
    valuelist.push(data.create_date);
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
    valuelist.push(mAuth.getUserNameFromToken(req));
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
    valuelist.push(data.subscribe_trans_uuid);
    valuelist.push(data.subscribe_table_uuid);
    valuelist.push(data.feature_table_uuid);
    valuelist.push(data.update_by);
    valuelist.push(data.update_date);
    return valuelist;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
let toCreateModel = (req: Request) => {
  try {
    const create_date = new Date().toISOString();
    var model: any = {};
    var body: any = {};
    model.subscribe_table_uuid = body["subscribe_table_uuid"];
    model.feature_table_uuid = body["feature_table_uuid"];
    model.is_active = true;
    model.create_by = mAuth.getUserNameFromToken(req);
    model.create_date = create_date;
    return model;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let toDropdown = (modelList: any) => {
  try {
    let optionList: any = [];
    modelList.forEach((model: any) => {
      let value = model["subscribe_trans_uuid"];
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
    return model["feature_group"] + " - " + model["feature_name"];
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let toEditModel = (req: Request) => {
  try {
    const update_date = new Date().toISOString();
    var model: any = {};
    var body: any = {};
    model.subscribe_trans_uuid = body["subscribe_trans_uuid"];
    model.subscribe_table_uuid = body["subscribe_table_uuid"];
    model.feature_table_uuid = body["feature_table_uuid"];
    model.update_by = mAuth.getUserNameFromToken(req);
    model.update_date = update_date;
    return model;
  } catch (e: any) {
    throw new Error(e.message);
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
};
