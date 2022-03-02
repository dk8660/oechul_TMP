import mongoose from "mongoose";

const Student_InfoSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  STnumber: { type: Number, required: true },
  Name: { type: String, required: true },
  Gender: { type: Number, required: true },
  Field: [{ type: Number, required: true }],
  instagramID: String,
  kakaoID: { type: String, required: true },
  KoM: { type: String, required: true },
  OwnMBTI: { type: Number, required: true },
  WantedMBTI: [{ type: Number }],
  Major: { type: String, required: true },
  MilitaryService: { type: Boolean, required: true },
  Smoker: { type: Boolean, required: true },
  Fre_Drinking: { type: String, required: true },
  SameGender: { type: Boolean, required: true },
  SameMajor: { type: Boolean, required: true },
  O_MilitaryService: { type: Boolean, required: true },
  O_Smoker: { type: Boolean, required: true },
  O_Fre_Drinking: { type: String },
  MatchedPeople: [{ type: Number }],
  MatchedScore: [{ type: Number }],
  isMatched: { type: Boolean, default: false },
  selectedPerson: { type: String },
});

const StInfo_Model = mongoose.model("StudentInfo", Student_InfoSchema);

export default StInfo_Model;
