import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectedUrl: {
      type: String,
      required: true,
    },
  },
  {}
);
export const Url = mongoose.model("Url", urlSchema);
