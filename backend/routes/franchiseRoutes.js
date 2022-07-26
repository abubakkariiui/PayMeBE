import express from "express";
import {
  authFranchise,
  getAllFranchise,
  registerFranchise,
  updateFranchiseProfile,
} from "../controllers/franchiseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerFranchise);
router.post("/flogin", authFranchise);
router.route("/fprofile").post(protect, updateFranchiseProfile);
router.route("/getAllFranchise").get(getAllFranchise);

export default router;
