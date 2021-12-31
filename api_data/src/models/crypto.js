import mongoose from "mongoose";

export const CryptoSchema = mongoose.Schema({
  time: { type: Date },
  symbol: { type: String },
  name: { type: String },
  block_time_in_minutes: { type: Number },
  image: { type: Object },
  market_data: { type: Object },
  last_updated: { type: String },
  localization: { type: Object },
});

export const Crypto = mongoose.model("Crypto", CryptoSchema);
