import mongoose from "mongoose";
const requestSchema = mongoose.Schema({
  franchiseSelect: {
    type: String,
  },
  agentNumber: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  createdUser: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Pay = mongoose.model("payRequest", requestSchema);

export default Pay;
