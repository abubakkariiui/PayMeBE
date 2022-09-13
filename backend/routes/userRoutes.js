import express from "express";
import {
  authUser,
  DeleteUser,
  getAllUser,
  getUserById,
  handleApprove,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/getAllUser").get(getAllUser);
router.route("/:id").delete(DeleteUser);
router.route("/:id").get(getUserById);
router.route("/handleApprove/:id").post(handleApprove);
export default router;
