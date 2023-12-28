import mongoose from "mongoose";

const Schema = mongoose.Schema;

const closedExeciseSchema = new Schema(
    {
      order: {
        type: Number,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      answers: {
        type: Array,
        required: true,
      },
      correctAnswer: {
        type: String,
        required: true,
      },
      reason: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

const closedExecises = mongoose.model("closed execises", closedExeciseSchema);

export default closedExecises;