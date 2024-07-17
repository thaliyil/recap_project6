import mongoose from "mongoose";

const { Schema } = mongoose;

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    image: { type: String },
    mapURL: { type: String },
    description: { type: String },
  },
  { collection: "location" }
);

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
