import express from "express";
import {
  authAccountant,
  getAllAccountant,
  registerAccountant,
  updateAccountantProfile,
} from "../controllers/accountantController.js";
import { protect } from "../middleware/accountantMiddleware.js";
const router = express.Router();

router.route("/accountantRegister").post(registerAccountant);
router.post("/accountantLogin", authAccountant);
router.route("/accountantProfile").post(protect, updateAccountantProfile);
router.route("/getAllAccountant").get(getAllAccountant);

export default router;
