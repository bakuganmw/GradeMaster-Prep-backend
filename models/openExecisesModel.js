import mongoose from "mongoose";

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
  advice:{
    type:Array,
    required:true
  },
  chapter:{
    type:String,
    required:true
  }
  }
)

const OpenExecises = mongoose.model("open execises", openExeciseSchema);

export default OpenExecises;