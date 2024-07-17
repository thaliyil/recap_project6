import mongoose from "mongoose";

const { Schema } = mongoose;

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String },
    mapURL: { type: String, required: true },
    description: { type: String },
  },
  { collection: "location" }
);

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
