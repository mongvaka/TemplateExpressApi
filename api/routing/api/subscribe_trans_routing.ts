import * as express from "express";
const router = express.Router();
import controller from "../../controller/subscribe_trans_controller";
router.post(
  "/getSubscribeTransTableList",
  controller.getSubscribeTransTableList
);
router.post(
  "/getSubscribeTransTableById",
  controller.getSubscribeTransTableById
);
router.post("/createSubscribeTransTable", controller.createSubscribeTransTable);
router.post("/editSubscribeTransTable", controller.editSubscribeTransTable);
router.post("/deleteSubscribeTransTable", controller.deleteSubscribeTransTable);
router.post("/getSubscribeDropdown", controller.getSubscribeDropdown);
router.post("/getFeatureDropdown", controller.getFeatureDropdown);
export default router;
