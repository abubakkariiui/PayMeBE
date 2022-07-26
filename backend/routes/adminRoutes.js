import express from "express";
import {
  authAdmin,
  registerAdmin,
  updateAdminProfile,
} from "../controllers/adminController.js";
const router = express.Router();

router.route("/adminRegister").post(registerAdmin);
router.post("/adminLogin", authAdmin);
router.route("/adminProfile").post(updateAdminProfile);

export default router;
