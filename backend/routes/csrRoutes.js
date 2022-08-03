import express from "express";
import {
  registerCSR,
  authCSR,
  updateCSRProfile,
  getAllCSR,
  DeleteCSR,
} from "../controllers/csrController.js";
import { protect } from "../middleware/csrMiddleware.js";
const router = express.Router();

router.route("/csrRegister").post(registerCSR);
router.post("/csrLogin", authCSR);
router.route("/csrProfile").post(protect, updateCSRProfile);
router.route("/getAllCsr").get(getAllCSR);
router.route("/:id").delete(DeleteCSR);

export default router;
