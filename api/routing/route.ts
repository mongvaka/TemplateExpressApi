import * as express from "express";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
const route = express.Router();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
//#region Require Section
import branch_router from "./api/branch_routing";
import department_router from "./api/department_route";
import job_level_router from "./api/job_level_route";
import authen_router from "./api/authen_route";
import category_router from "./api/category_route";
import time_ticket_routing from "./api/timeticket_trans_routing";
import position_routing from "./api/position_routing";
import assessment_trans_router from "./api/assessment_trans_routing";
import employee_router from "./api/employee_routing";
import asset_category_routing from "./api/asset_category_routing";
import assets_router from "./api/assets_routing";
import company_category_routing from "./api/company_category_routing";
import contact_router from "./api/contact_routing";
import emergency_contact_routing from "./api/emergency_contact_routing";
import education_router from "./api/education_routing";
import nationality_routing from "./api/nationality_routing";
import leave_trans_routing from "./api/leave_trans_routing";
import certificate_trans_routing from "./api/certificate_trans_routing";
import sparepart_routing from "./api/spareparts_routing";
import customer_type_router from "./api/customer_type_routing";
import employee_category_routing from "./api/employee_category_routing";
import blacklist_routing from "./api/blacklist_routing";
import status_routing from "./api/status_routing";
import customer_branch_routing from "./api/customer_branch_routing";
import unit_routing from "./api/unit_routing";
import leave_trans_type_routing from "./api/leave_trans_type_routing";
import contact_person_routing from "./api/contact_person_routing";
import customer_routing from "./api/customer_routing";
import customer_category_routing from "./api/customer_category_routing";
import position_tarns_routing from "./api/position_trans_routing";
import district_routing from "./api/district_routing";
import warningtrans_routing from "./api/warning_trans_routing";
import worktime_type_routing from "./api/worktimetype_routing";
import backtowork_routing from "./api/backtowork_routing";
import training_tarns_routing from "./api/training_trans_routing";
import training_tarns_detail_routing from "./api/training_trans_detail_routing";
import salary_routing from "./api/salary_routing";
import country_routing from "./api/country_routing";
import province_routing from "./api/province_routing";
import subDistrict_routing from "./api/sub_district_routing";
import access_right_routing from "./api/access_rights_routing";
import register_station_routing from "./api/register_station_routing";
import role_ronting from "./api/role_routing";
import timeticket_routing from "./api/timeticket_routing";
import employee_status_routing from "./api/employee_status_routing";
import certificate_type_routing from "./api/certificate_type_routing";
import assessment_trans_type_routing from "./api/assessment_trans_type_routing";
import document_status_routing from "./api/document_status_routing";
import contact_type_routing from "./api/contact_type_routing";
import job_description_routing from "./api/job_description_routing";
import welfare_routing from "./api/welfare_routing";
import user_routing from "./api/user_routing";
import attachment_routing from "./api/attachment_routing";
import suplier_routing from "./api/suplier_routing";
import supplier_branch_routing from "./api/supplier_branch_routing";
import supplier_category_routing from "./api/supplier_category_routing";
import resign_routing from "./api/resign_routing";
import supplier_routing from "./api/supplier_routing";
import access_routing from "./api/access_routing";
import subscribe_trans_routing from "./api/subscribe_trans_routing";
import probation_trans_routing from "./api/probation_trans_routing";
import salarytrans_routing from "./api/salary_trans_routing";
import subscribe_routing from "./api/subscribe_routing";
import feature_routing from "./api/feature_routing";
import dashboard_routing from "./api/dashboard_routing";
import overtime_routing from "./api/overtime_routing";
import job_trans_routing from "./api/job_trans_routing";
import job_routing from "./api/job_routing";
import transfer_routing from "./api/transfer_trans_routing";
import bookmarkdocument_template from "./api/bookmarkdocument_template_routing";
import RevisionTimeTrans_routing from "./api/revision_time_trans_routing";
import inventorytransection_routing from "./api/inventorytransection_routing";
import part_routing from "./api/part_routing";
import warehouse from "./api/warehouse_routing";
import item_category_tabel_routing from "./api/item_category_tabel_routing";
import stockcut_routing from "./api/stockcut_routing";
import stockin_routing from "./api/stockin_routing";
import stockout_routing from "./api/stockout_routing";
import stockreturn_routing from "./api/stockreturn_routing";
import workexperience_routing from "./api/work_experiencen_routing";
import legalPunishment_routing from "./api/legal_punishment_routing";
import book_bank_routing from "./api/book_bank_routing";
import bank_routing from "./api/bank_routing";
import relative from "./api/relative_routing";
import car_routing from "./api/car_routing";
//#endregion
// route.use("/api/", (req: Request, res: Response) => {
//   console.log("hi");

//   res.sendStatus(200);
// });
//#region
route.use("/api/branch", authenticateToken, branch_router);
route.use("/api/department", authenticateToken, department_router);
route.use("/api/JobLevel", authenticateToken, job_level_router);
route.use("/api/auth", authen_router);
route.use("/api/position", authenticateToken, position_routing);
route.use("/api/AssessmentTrans", authenticateToken, assessment_trans_router);
route.use("/api/category", authenticateToken, category_router);
route.use("/api/TimeticketTrans", authenticateToken, time_ticket_routing);
route.use("/api/employee", authenticateToken, employee_router);
route.use("/api/ResignStatusEmployee", authenticateToken, resign_routing);
route.use("/api/AssetCategory", authenticateToken, asset_category_routing);
route.use("/api/assets", authenticateToken, assets_router);
route.use("/api/CompanyCategory", authenticateToken, company_category_routing);
route.use("/api/contact", authenticateToken, contact_router);
route.use("/api/CertificateType", authenticateToken, certificate_type_routing);
route.use("/api/ContactType", authenticateToken, contact_type_routing);
route.use("/api/Attachment", authenticateToken, attachment_routing);
route.use("/api/Suplier", authenticateToken, suplier_routing);
route.use(
  "/api/EmergencyContact",
  authenticateToken,
  emergency_contact_routing
);
route.use("/api/Education", authenticateToken, education_router);
route.use("/api/Nationality", authenticateToken, nationality_routing);
route.use("/api/BlackList", authenticateToken, blacklist_routing);
route.use("/api/PositionTrans", authenticateToken, position_tarns_routing);
route.use("/api/LeaveTransType", authenticateToken, leave_trans_type_routing);
route.use("/api/LeaveTrans", authenticateToken, leave_trans_routing);
route.use("/api/PositionTarns", authenticateToken, position_tarns_routing);
route.use("/api/LeaveTransType", authenticateToken, leave_trans_type_routing);
route.use("/api/ContactPerson", authenticateToken, contact_person_routing);
route.use("/api/Customer", authenticateToken, customer_routing);
route.use("/api/CustomerBranch", authenticateToken, customer_branch_routing);
route.use("/api/District", authenticateToken, district_routing);
route.use("/api/RegisterStation", authenticateToken, register_station_routing);
route.use("/api/District", authenticateToken, district_routing);
route.use("/api/WarningTrans", authenticateToken, warningtrans_routing);
route.use("/api/Worktimetype", authenticateToken, worktime_type_routing);
route.use("/api/BackToWork", authenticateToken, backtowork_routing);
route.use(
  "/api/SupplierCategory",
  authenticateToken,
  supplier_category_routing
);
route.use(
  "/api/SupplierCategory",
  authenticateToken,
  supplier_category_routing
);
route.use("/api/SupplierBranch", authenticateToken, supplier_branch_routing);
route.use("/api/Supplier", authenticateToken, supplier_routing);
route.use(
  "/api/CustomerCategory",
  authenticateToken,
  customer_category_routing
);
route.use("/api/PositionTarns", authenticateToken, position_tarns_routing);
route.use("/api/Spareparts", authenticateToken, sparepart_routing);
route.use("/api/CustomerType", authenticateToken, customer_type_router);
route.use("/api/Unit", authenticateToken, unit_routing);
route.use(
  "/api/EmployeeCategory",
  authenticateToken,
  employee_category_routing
);
route.use("/api/Status", authenticateToken, status_routing);
route.use(
  "/api/CertificateTrans",
  authenticateToken,
  certificate_trans_routing
);

route.use(
  "/api/PositionTarns",
  authenticateToken,
  training_tarns_detail_routing
);
route.use("/api/TrainingTrans", authenticateToken, training_tarns_routing);
route.use(
  "/api/TrainingTransDetail",
  authenticateToken,
  training_tarns_detail_routing
);
route.use("/api/Salary", authenticateToken, salary_routing);
route.use("/api/country", authenticateToken, country_routing);
route.use("/api/province", authenticateToken, province_routing);
route.use("/api/district/", authenticateToken, district_routing);
route.use("/api/subdistrict", authenticateToken, subDistrict_routing);
route.use("/api/AccessRights", authenticateToken, access_right_routing);
route.use("/api/role", authenticateToken, role_ronting);
route.use("/api/Timeticket", authenticateToken, timeticket_routing);
route.use("/api/EmployeeStatus", authenticateToken, employee_status_routing);
route.use(
  "/api/AssessmentTransType",
  authenticateToken,
  assessment_trans_type_routing
);
route.use("/api/DocumentStatus", authenticateToken, document_status_routing);
route.use("/api/JobDescription", authenticateToken, job_description_routing);
route.use("/api/User", authenticateToken, user_routing);
route.use("/api/Welfare", authenticateToken, welfare_routing);
route.use("/api/Employee", authenticateToken, employee_router);
route.use("/api/Resign", authenticateToken, resign_routing);
route.use("/api/Access", authenticateToken, access_routing);
route.use("/api/SubscribeTrans", authenticateToken, subscribe_trans_routing);
route.use("/api/Probationtrans", authenticateToken, probation_trans_routing);
route.use("/api/SalaryTrans", authenticateToken, salarytrans_routing);
route.use("/api/Subscribe", authenticateToken, subscribe_routing);
route.use("/api/Feature", authenticateToken, feature_routing);
route.use("/api/dashboard", authenticateToken, dashboard_routing);
route.use("/api/Overtime", authenticateToken, overtime_routing);
route.use("/api/JobTrans", authenticateToken, job_trans_routing);
route.use("/api/Job", authenticateToken, job_routing);
route.use("/api/TransferTrans", authenticateToken, transfer_routing);
route.use(
  "/api/Inventorytransection",
  authenticateToken,
  inventorytransection_routing
);
route.use("/api/Part", authenticateToken, part_routing);
route.use("/api/Stockcut", authenticateToken, stockcut_routing);
route.use("/api/Stockin", authenticateToken, stockin_routing);
route.use("/api/Stockout", authenticateToken, stockout_routing);
route.use("/api/Stockreturn", authenticateToken, stockreturn_routing);
route.use("/api/Bookbank", authenticateToken, book_bank_routing);
route.use("/api/Bank", authenticateToken, bank_routing);
route.use(
  "/api/ItemCategoryTabel",
  authenticateToken,
  item_category_tabel_routing
);
route.use(
  "/api/BookmarkdocumentTemplate",
  authenticateToken,
  bookmarkdocument_template
);

route.use(
  "/api/RevisionTimeTrans",
  authenticateToken,
  RevisionTimeTrans_routing
);
route.use("/api/warehouse", authenticateToken, warehouse);
route.use("/api/WorkExperience", authenticateToken, workexperience_routing);
route.use("/api/LegalPunishment", authenticateToken, legalPunishment_routing);
route.use("/api/relative", authenticateToken, relative);
route.use("/api/car", authenticateToken, car_routing);

//#endregion
function authenticateToken(req: any, res: any, next: any) {
  let authHeader = req.headers["authorization"];
  if (authHeader == null) {
    throw new Error();
  }
  let token = authHeader.split(" ")[0];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_TOKEN_SECRET!, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
export default route;
