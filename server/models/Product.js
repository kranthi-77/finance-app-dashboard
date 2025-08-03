import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Helper function to convert Decimal128 to Number for JSON
const decimalGetter = (v) => (v ? parseFloat(v.toString()) : v);

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    expense: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
