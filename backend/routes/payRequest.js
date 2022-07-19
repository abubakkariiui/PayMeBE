import express from "express";
import { PayRequest } from "../controllers/paymentRequest.js";

const router = express.Router();
router.route("/create").post(PayRequest);

export default router;