import express from "express";
import { historyPost,gethistorybyName, getAllHistory } from "../controllers/historyController.js";
const router = express.Router();

router.route("/create").post(historyPost);
router.route("/").get(getAllHistory);
router.route('/getHistory').post(gethistorybyName);

export default router;