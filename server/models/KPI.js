import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Helper to convert Decimal128 to float (for getters)
const decimalGetter = (v) => (v ? parseFloat(v.toString()) : v);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    expenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    expenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    operationalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    nonOperationalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    totalRevenue: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    totalExpenses: {
      type: mongoose.Schema.Types.Decimal128,
      get: decimalGetter,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.Decimal128,
        get: decimalGetter,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
