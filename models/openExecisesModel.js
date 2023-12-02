import mongoose, { Schema } from "mongoose";

const Schema = mongoose.Schema;

const openExeciseSchema = new Schema(
  {
  content:{
    type:String,
    required:true
  },
  answers:{
    type:Array,
    required:true
  },
  chapter:{
    type:String,
    required:true
  }
  }
)

const openExecises = mongoose.model("open execises", openExeciseSchema);

export default openExecises;