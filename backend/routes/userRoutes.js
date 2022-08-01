import express from "express";
import {
  authUser,
  getAllUser,
  postPayment,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/getAllUser").get(getAllUser);
router.route("/create").post(postPayment);

export default router;
