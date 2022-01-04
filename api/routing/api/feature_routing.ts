import * as express from "express";
const router = express.Router();
import controller from "../../controller/feature_controller";
router.post("/getFeatureTableList", controller.getFeatureTableList);
router.post("/getFeatureTableById", controller.getFeatureTableById);
router.post("/createFeatureTable", controller.createFeatureTable);
router.post("/editFeatureTable", controller.editFeatureTable);
router.post("/deleteFeatureTable", controller.deleteFeatureTable);
export default router;
