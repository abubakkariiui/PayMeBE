import asyncHandler from "express-async-handler";
import History from "../models/historyModel.js";

const historyPost = asyncHandler(async (req, res) => {
  const { receverName, senderName, amount, receverPhone,senderPhone } = req.body;

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
    throw new Error("Contact not Saved");
  }
});

const gethistorybyName = asyncHandler(async (req, res) => {
    const { receverName , senderName ,receverPhone,senderPhone } = req.body;
    if(receverName){
        const histry = await Employe.findOne({receverName})
        if (histry) {
            res.status(201).json({
              employeData
            });
          } else {
            res.status(400);
            throw new Error(" not Employe");
          }
    }else if(senderName){
        const histry = await Employe.findOne({senderName})
        if (histry) {
            res.status(201).json({
              employeData
            });
          } else {
            res.status(400);
            throw new Error(" not Employe");
          }
    }else if(receverPhone){
        const histry = await Employe.findOne({receverPhone})
        if (histry) {
            res.status(201).json({
              employeData
            });
          } else {
            res.status(400);
            throw new Error(" not Employe");
          }
    }else if(senderPhone){
        const histry = await Employe.findOne({receverPhone})
        if (histry) {
            res.status(201).json({
              employeData
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
  

export {historyPost ,gethistorybyName,getAllHistory};
