import * as express from "express";
const router = express.Router();
import controller from "../../controller/role_controller";
router.post("/getRoleTableList", controller.getRoleTableList);
router.post("/getRoleTableById", controller.getRoleTableById);
router.post("/createRoleTable", controller.createRoleTable);
router.post("/editRoleTable", controller.editRoleTable);
router.post("/deleteRoleTable", controller.deleteRoleTable);
export default router;
