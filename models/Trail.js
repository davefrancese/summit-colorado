const mongoose = require("mongoose");
const { Schema } = mongoose;

const trailSchema = new Schema({
  peakName: String,
  trailHead_lat: String,
  trailHead_lng: String,
  parkingRestrictions: String,
  petRestrictions: String,
  campingRestrictions: String,
  licenseRequired: String,
  description: String,
  difficulty: String,
  elevation: String,
  elevationGain: String,
  isLoop: String,
  hikeInDistance: String,
  totalHikeDistance: String
});

mongoose.model("trails", trailSchema);
