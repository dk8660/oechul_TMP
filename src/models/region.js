import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  region: String,
  regionNumber: Number,
});

const region = mongoose.model("test", regionSchema);

export default region;
