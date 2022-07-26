import express from "express";
import {
  authFranchise,
  getAllFranchise,
  registerFranchise,
  updateFranchiseProfile,
} from "../controllers/franchiseController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/franchiseRegister").post(registerFranchise);
router.post("/franchiseLogin", authFranchise);
router.route("/franchiseProfile").post(protect, updateFranchiseProfile);
router.route("/getAllFranchise").get(getAllFranchise);

export default router;
