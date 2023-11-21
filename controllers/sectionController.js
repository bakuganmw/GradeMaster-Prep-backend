import Sections from "../models/SectionModel.js";
import mongoose from "mongoose";
// get all
const getAllSections = async (req,res) =>{
  let allSection = await Sections.find({});
  res.json(allSection);
}
//  get one workout
const getOneSection = async () => {
  const {id} = req.params;

  if(mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No section'});
  }

  const section = await Sections.find(id);
  if (!section){
    return res.status(404).json({error: 'No section'});
  }
  res.status(200).json(section);
}
// create new section
const  createSection = async (req,res) => {
  const {name} = req.body;
  const order = (await Sections.find()).length+1;
  // add section
  try{
    const section = await Sections.create({order,name})
    res.status(200).json(section)
  }catch(error){
    res.status(400).json({error: error.message});
    console.log('problem with adding section')
  }
}
// delete section
const deleteSection = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No valid id'});
  }

  const section = await Sections.findOneAndDelete({_id: id});

  if (!section){
    return res.status(404).json({error: 'delete not happen'});
  }
  res.status(200).json(section);
}
// update section
const updateSection = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'no valid id'});
  }

  const section = await Sections.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!section){
    return res.status(404).json({error: 'No section updated'});
  }
  res.status(200).json(section);
}

// export

export{
  createSection,
  getAllSections,
  getOneSection,
  deleteSection,
  updateSection,
}