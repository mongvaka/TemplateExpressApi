import pool from "../../db";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
const checkUseraccount = async (req: Request, res: Response) => {
  const username = req.body.user_name;
  try {
    const queryComand = "SELECT * FROM user_table where user_name = $1";
    const result = await pool.query(queryComand, [username]);
    return result.rows;
  } catch (error) {
    return { error: error };
  }
};

const findUser = async (userReq: any) => {
  return await pool
    .query("SELECT * FROM vw_user_table_item WHERE user_name = $1", [
      userReq.user_name,
    ])
    .then((data: any) => data.rows[0])
    .catch((error: any) => {
      throw error.message;
    });
};
const getUserView = async (userReq: any) => {
  const result = await pool
    .query("SELECT * FROM vw_user_table_item WHERE user_name = $1", [
      userReq.user_name,
    ])
    .catch((error: any) => {
      throw error.message;
    });
  return result.rows[0];
};

const checkPassword = async (reqPassword: any, foundUser: any) => {
  const hashPassword = bcrypt.hashSync(reqPassword, bcrypt.genSaltSync(12));
  const res = await bcrypt
    .compare(reqPassword, foundUser.user_password)
    .then((result: any) => {
      if (result && result !== false) {
        return result;
      }
    })
    .catch(() => {
      throw new Error("Passwords do not match.");
    });
  return res;
};
export default {
  checkUseraccount,
  findUser,
  checkPassword,
  getUserView,
};
