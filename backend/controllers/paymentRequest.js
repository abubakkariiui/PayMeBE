import asyncHandler from "express-async-handler";
import Agent from "../models/agentModel.js";
import Pay from "../models/paymentRequest.js";
const PayRequest = asyncHandler(async (req, res) => {
  const { franchiseSelect, agentNumber, amount } = req.body;
  const payData = await Pay.create({
    franchiseSelect,
    agentNumber,
    amount,
  });
  if (payData) {
    res.status(201).json({
      _id: payData._id,
      franchiseSelect: payData.franchiseSelect,
      agentNumber: payData.agentNumber,
      amount: payData.amount,
    });
  } else {
    res.status(400);
    throw new Error("payData not Saved");
  }
});

export { PayRequest };
