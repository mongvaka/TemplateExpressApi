import pool from "../db";
import featureList from "./feature";
let create = async () => {
  let featureListInsert: any = [];

  const oldFeatureList = await pool.query("SELECT * FROM feature_table");
  featureList.forEach((item: any, row: any) => {
    item.path.forEach((value: any, index: any) => {
      let valueStr =
        "( '" +
        value.feature +
        "', '" +
        value.path +
        "', '" +
        item.controller +
        "', '" +
        item.group +
        "', '" +
        item.type +
        "', '" +
        item.label +
        "' )";
      let createNew = true;
      oldFeatureList.rows.forEach((oldFeatureItem) => {
        if (
          item.group == oldFeatureItem.sysfeature_group &&
          value.feature == oldFeatureItem.sysfeature_name &&
          value.path == oldFeatureItem.path &&
          item.controller == oldFeatureItem.controller &&
          item.type == oldFeatureItem.type_feature &&
          item.label === oldFeatureItem.label_feature
        ) {
          createNew = false;
        }
      });
      if (createNew) {
        featureListInsert.push(valueStr);
      }
    });
  });
  try {
    // await pool.query("DELETE FROM access_table");
    // await pool.query("DELETE FROM subscribe_trans_table");
    // await pool.query("DELETE FROM feature_table");
    if (featureListInsert.length == 0) {
      return;
    }
    const newFeatureList = await pool.query(
      "INSERT INTO feature_table ( sysfeature_name , path , controller , sysfeature_group , type_feature , label_feature ) values " +
        featureListInsert.toString() +
        " RETURNING *",
      []
    );

    let addminSubscribe;
    addminSubscribe = await pool.query(
      "SELECT * FROM subscribe_table WHERE remark = 'AutoGenerateWithSystem'"
    );
    if (addminSubscribe.rows.length == 0) {
      addminSubscribe = await pool.query(
        "INSERT INTO subscribe_table ( subscribe_name , remark , is_active ) values ( 'PremuimSubscribe' , 'AutoGenerateWithSystem' , true ) RETURNING *"
      );
    }

    const adminModel = addminSubscribe.rows[0];

    // const featureListSelect = await pool.query("SELECT * FROM feature_table");

    let subscribeList: any = [];
    newFeatureList.rows.forEach((item) => {
      let featureModel =
        "( '" +
        adminModel.subscribe_uuid +
        "', '" +
        item.sysfeature_uuid +
        "', true )";
      subscribeList.push(featureModel);
    });
    let subscribe_trans = await pool.query(
      "INSERT INTO subscribe_trans_table ( subscribe_table_uuid , feature_table_uuid , is_active ) values " +
        subscribeList.toString() +
        " RETURNING *"
    );
    let roleModel: any;
    roleModel = await pool.query(
      "SELECT * FROM role_table WHERE remark = 'AMIN'"
    );
    if (roleModel.rows.length == 0) {
      roleModel = await pool.query(
        "INSERT INTO role_table ( remark , role_name , is_active ) values ( 'AMIN' , 'Amin' , true ) RETURNING *"
      );
    }
    let roleDetailList: any = [];
    subscribe_trans.rows.forEach((item) => {
      let roleDetailModel =
        "( '" +
        item.subscribe_trans_uuid +
        "', '" +
        roleModel.rows[0].role_uuid +
        "', true , true, true, true, true , true)";
      roleDetailList.push(roleDetailModel);
    });

    await pool.query(
      "INSERT INTO access_table ( subscribe_trans_table_uuid , role_table_uuid , can_create , can_edit , can_read , can_delete, can_action, is_active) values " +
        roleDetailList.toString(),
      []
    );
    console.log("Create feature complete");
  } catch (e: any) {
    console.log("e", e);
    throw new Error(e.message);
  }
};
export default {
  create,
};
