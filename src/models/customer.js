const { Schema, model } = require("mongoose");

const customer = Schema(
  {
    _id: { type: String, lowercase: true, require: true },
    email: { type: String, lowercase: true, require: true },
    transaction: [
      {
        amount: { type: Number, require: true },
        reward: { type: Number, require: true },
        date: { type: String, require: true },
      },
    ],
    role: { type: String, default: "customer" },
    totalReward: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Customer", customer);
