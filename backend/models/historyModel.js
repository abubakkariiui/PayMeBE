import mongoose from "mongoose";

const historySchema = mongoose.Schema(
  {
    receverName: {
      type: String,
    },
    senderName: {
      type: String,
    },
    amount: {
      type: String,
    },
    receverPhone: {
      type: String,
    },
    senderPhone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model("history", historySchema);

export default History;
