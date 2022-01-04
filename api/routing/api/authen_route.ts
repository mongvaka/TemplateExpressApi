import * as express from "express";
const router = express.Router();
import authen_controller from "../../controller/authen_controller";

router.post("/", authen_controller.checkUserAccount);
router.post("/login", authen_controller.login);
router.post("/getRefreshToken", authen_controller.refreshToken);

export default router;
