import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import History from "../models/historyModel.js";
import generateToken from "../utils/generateToken.js";

const historyPost = asyncHandler(async (req, res) => {
  const { receverName, senderName, amount, receverPhone, senderPhone } =
    req.body;
  const user = await User.findOne({ phone: receverPhone });
  if (user) {
    user.amount = user.amount + amount;
  }
  res.json({
    _id: user._id,
    amount: user.amount,
    token: generateToken(user._id),
  });

  const updatedUser = await user.save();
  const historyData = await History.create({
    receverName,
    senderName,
    amount,
    receverPhone,
    senderPhone,
  });

  if (historyData) {
    res.status(201).json({
      receverName: employeData.receverName,
      senderName: employeData.senderName,
      amount: employeData.amount,
      receverPhone: employeData.receverPhone,
      senderPhone: employeData.senderPhone,
    });
  } else {
    res.status(400);
    throw new Error("History not Saved");
  }
});

const gethistorybyName = asyncHandler(async (req, res) => {
  const { receverName, senderName, receverPhone, senderPhone } = req.body;
  if (receverName) {
    const histry = await Employe.findOne({ receverName });
    if (histry) {
      res.status(201).json({
        employeData,
      });
    } else {
      res.status(400);
      throw new Error(" not Employe");
    }
  } else if (senderName) {
    const histry = await Employe.findOne({ senderName });
    if (histry) {
      res.status(201).json({
        employeData,
      });
    } else {
      res.status(400);
      throw new Error(" not Employe");
    }
  } else if (receverPhone) {
    const histry = await Employe.findOne({ receverPhone });
    if (histry) {
      res.status(201).json({
        employeData,
      });
    } else {
      res.status(400);
      throw new Error(" not Employe");
    }
  } else if (senderPhone) {
    const histry = await Employe.findOne({ receverPhone });
    if (histry) {
      res.status(201).json({
        employeData,
      });
    } else {
      res.status(400);
      throw new Error(" not Employe");
    }
  }
});

const getAllHistory = asyncHandler(async (req, res) => {
  const history = await History.find();
  res.json(history);
});

export { historyPost, gethistorybyName, getAllHistory };
