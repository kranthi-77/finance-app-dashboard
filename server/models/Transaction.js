import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Helper function to convert Decimal128 to float for JSON responses
const decimalGetter = (v) => (v ? parseFloat(v.toString()) : v);

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
