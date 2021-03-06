import * as express from "express";
const router = express.Router();
import controller from "../../controller/bank_controller";
router.post("/getBankTableList", controller.getBankTableList);
router.post("/getBankTableById", controller.getBankTableById);
router.post("/createBankTable", controller.createBankTable);
router.post("/editBankTable", controller.editBankTable);
router.post("/deleteBankTable", controller.deleteBankTable);
router.post("/getBankDropdown", controller.getBankDropdown);
export default router;
