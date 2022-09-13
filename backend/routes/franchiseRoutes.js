import express from "express";
import {
  authFranchise,
  DeleteFranchise,
  getAllFranchise,
  getFranchiseById,
  handleApprove,
  registerFranchise,
  updateFranchiseProfile,
} from "../controllers/franchiseController.js";
import { protect } from "../middleware/franchiseMiddleware.js";
const router = express.Router();

router.route("/franchiseRegister").post(registerFranchise);
router.post("/franchiseLogin", authFranchise);
router.route("/franchiseProfile").post(protect, updateFranchiseProfile);
router.route("/getAllFranchise").get(getAllFranchise);
router.route("/:id").delete(DeleteFranchise);
router.route("/:id").get(getFranchiseById);
router.route("/handleApprove/:id").post(handleApprove);


export default router;
