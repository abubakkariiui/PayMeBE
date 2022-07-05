import express from "express";
import {
  authAgent,
  registerAgent,
  updateAgentProfile } from "../controllers/agentController.js"

import { agentProtect } from "../middleware/agentMiddleware.js";
const router = express.Router();

router.route("/agentRegister").post(registerAgent);
router.post("/loginAgent", authAgent);
router.route("/agentProfile").post(agentProtect, updateAgentProfile);

export default router;
