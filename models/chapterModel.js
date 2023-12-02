import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chapterSchema = new Schema(
  {
    order: {
      type: Number,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
      unique:true,
    },
    sectionName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Chapters = mongoose.model("Chapter", chapterSchema);

export default Chapters;
