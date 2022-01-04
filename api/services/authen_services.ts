import pool from "../../db";
import authen_model from "../model/authen_model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import accessFeatureModel from "../model/access_model";
import { Request, Response } from "express";
import jwtDecode from "jwt-decode";
import moment from "moment";
import dotenv from "dotenv";
import respons from "../shared/tools/respons_handler";

dotenv.config();
const checkUseraccount = async (req: Request, res: Response) => {
  try {
    let result: any = await authen_model.checkUseraccount(req, res);
    if (result.error) {
      return { error: result.error };
    } else {
      return result;
    }
  } catch (error: any) {
    return { error: error };
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const result = await authen_model.findUser(req.body).catch((error) => {
      // res.status(500).json("LABEL.USER_NOT_FOUND");
      respons.getErrorCreate("LABEL.USER_NOT_FOUND", req, res);
    });
    if (!result) {
      // res.status(500).json("LABEL.ERROR_EXCEPTION");
      respons.getErrorCreate("LABEL.ERROR_EXCEPTION", req, res);

      // throw new Error("LABEL.USER_NOT_FOUND");
    }
    if (await bcrypt.compare(req.body.user_password, result.correct_password)) {
      const accessList = await accessFeatureModel.list_acess_feature_view(
        result.role_uuid,
        result.subscribe_uuid
      );
      const user = {
        user_password: result.user_password,
        user_name: result.user_name,
        user_uuid: result.user_uuid,
      };
      result.refresh_token = generateRefreshToken(user, result.user_uuid);
      result.access_token = generateToken(user);
      result.access_feature = accessList;
    } else {
      // res.status(500).json("LABEL.PASSWORD_INCORRECT");
      respons.getErrorCreate("LABEL.PASSWORD_INCORRECT", req, res);
      // throw new Error("LABEL.PASSWORD_INCORRECT");
    }

    return result;
  } catch (error) {
    respons.getErrorCreate("LABEL.PASSWORD_INCORRECT", req, res);
  }
};
const register = async (req: Request, res: Response) => {
  try {
    const email = req.body.data.email;
    const table = req.body.table;
    const queryComand = "SELECT * FROM " + table + " WHERE email = $1";
    const newCom = await pool.query(queryComand, [email]);
    if (newCom.rows[0] === null) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.data.password, salt);
      req.body.data.password = hashedPassword;
      let keys: any = [];
      let datas: any = [];
      let value: any = [];
      req.body.data.create_date = moment(new Date(), "YYYY-MM-DDTHH:mm");
      Object.keys(req.body.data).forEach(function (key, index) {
        datas.push(req.body.data[key]);
        keys.push(key);
        value.push("$" + (index + 1));
      });
      const queryComand =
        "INSERT INTO " +
        table +
        " (" +
        keys.toString() +
        ") values (" +
        value.toString() +
        ") RETURNING *";
      const newCom = await pool.query(queryComand, datas);
      res.json(newCom.rows[0]);
    } else {
      return res.status(400).send("อีเมลล์นี้ถูกลงทะเบียนไปแล้ว");
    }
  } catch (error: any) {
    res.json(error.message);
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    const authorization = req.headers["authorization"]!.split(" ");
    const refreshToken = authorization[0];
    const queryComand = "SELECT * FROM tokens_table WHERE refresh_token = $1";
    const newCom = await pool.query(queryComand, [refreshToken]);
    if (newCom.rows[0] === null) {
      return res.status(403).send("โปรดเข้าสู่ระบบ");
    }
    try {
      let decoded: any = jwt.verify(
        refreshToken,
        process.env.ACCESS_TOKEN_SECRET_REFRESH!
      );
      if (decoded) {
        try {
          const user = {
            user_password: decoded.user_password,
            user_name: decoded.user_name,
            user_uuid: decoded.user_uuid,
          };
          const respon = {
            access_token: generateToken(user),
          };
          return respon;

          return respon;
        } catch (err) {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } catch (err) {
      throw new Error();
    }
  } catch (err) {
    throw new Error();
  }
};

function generateToken(user: any) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "3000m",
  });
}
const generateRefreshToken = (user: any, key: any) => {
  const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_REFRESH!);
  const sql = "DELETE FROM tokens_table WHERE create_user = $1";
  pool.query(sql, [key]);
  const queryComand =
    "INSERT INTO tokens_table ( refresh_token , create_user ) values ($1, $2) RETURNING *";
  pool.query(queryComand, [refreshToken, key]);
  return refreshToken;
};
let getUserNameFromToken = (req: Request) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader == null) {
      throw new Error();
    }
    const token = authHeader.split(" ")[0];
    const userModel: any = jwtDecode(token);
    return userModel.user_name;
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
};
export default {
  refreshToken,
  checkUseraccount,
  login,
  getUserNameFromToken,
};
