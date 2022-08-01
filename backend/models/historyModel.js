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
      type: Number,
    },
    receverPhone: {
      type: Number,
    },
    senderPhone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model("history", historySchema);

export default History;
