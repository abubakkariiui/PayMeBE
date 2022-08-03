import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import History from "../models/historyModel.js";

const historyPost = asyncHandler(async (req, res) => {
  const { amount, receiverNumber, senderNumber, senderName, receiverName } =
    req.body;
  const receiveUser = await User.findOne({ phone: receiverNumber });
  if (receiveUser) {
    receiveUser.amount = Number(receiveUser.amount) + Number(amount);
  }
  const updatedUser1 = await receiveUser.save();

  const senderUser = await User.findOne({ phone: senderNumber });
  if (senderUser) {
    senderUser.amount = senderUser.amount - Number(amount);
  }
  const updatedUser2 = await senderUser.save();

  const historyData = await History.create({
    receiverName,
    senderName,
    amount,
    receiverNumber,
    senderNumber,
  });

  if (historyData) {
    res.status(201).json({
      receverName: historyData.receverName,
      senderName: historyData.senderName,
      amount: historyData.amount,
      receverPhone: historyData.receverPhone,
      senderPhone: historyData.senderPhone,
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
