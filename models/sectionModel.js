import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  order: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique:true
  }
},{timestamps:true})

// name plural and lowercased automatically by mongoDB
const Sections = mongoose.model('sections', sectionSchema)

export default Sections

