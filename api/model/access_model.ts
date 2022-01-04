import pool from "../../db";
import handler from "../handler/access_handler";
import { Request } from "express";
let create = async (req: Request) => {
  try {
    let result = await pool.query(
      handler.getSqlCreate(req),
      handler.getValuesCreate(req)
    );
    return result.rows[0];
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let list = async (req: Request) => {
  try {
    let result = await pool.query(handler.getSqlList(req));
    handler.getRoWAuth(result.rows);
    return result.rows;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let list_acess_feature_view = async (
  role_table_uuid: string,
  subcribe_table_uuid: string
) => {
  try {
    let result = await pool.query(
      handler.getSqlAccessFeatureList(role_table_uuid, subcribe_table_uuid)
    );

    return handler.getEncript(result.rows);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

let edit = async (req: Request) => {
  try {
    const result = await pool.query(
      handler.getSqlEdit(req),
      handler.getValuesEdit(req)
    );
    return result.rows[0];
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let del = async (req: Request) => {
  try {
    const result = await pool.query(
      handler.getSqlDelete(),
      handler.getValuesDelete(req)
    );
    return result.rows[0];
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let view = async (req: Request) => {
  try {
    const key = req.body.primaryKey;
    const result = await pool.query(handler.getSqlView(), [key]);
    return result.rows[0];
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let Dropdown = async (req: Request) => {
  try {
    let result = await pool.query(handler.getSqlDropdown(req));
    return handler.toDropdown(result.rows);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default {
  list,
  create,
  edit,
  view,
  del,
  Dropdown,
  list_acess_feature_view,
};
