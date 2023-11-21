import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  order: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
},{timestamps:true})

const Sections = mongoose.model('Section', sectionSchema)

export default Sections

