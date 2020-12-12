import { Schema, model } from "mongoose";

const urlSchema = new Schema(
  {
    shortcode: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
    },
    registeredOn: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    lastAccessed: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("Url", urlSchema);
