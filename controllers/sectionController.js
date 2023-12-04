import Sections from "../models/sectionModel.js";

// get all
const getAllSections = async (req,res) =>{
  let allSection = await Sections.find({});
  res.json(allSection);
}

//  get one section
const getOneSection = async (req,res) => {
  const {order} = req.params;
  console.log(order);
  const section = await Sections.find({order:order});
  if (!section){
    return res.status(404).json({error: 'No section found'});
  }
  res.status(200).json(section);
}

// create new section
const  createSection = async (req,res) => {
  const {name} = req.body;
  const order = (await Sections.find()).length+1;
  // add section
  try{
    const section = await Sections.create({order,name});
    res.status(200).json(section);
  }catch(error){
    res.status(400).json({error: error.message});
    console.log('problem with adding section');
  }
}

// delete section
const deleteSection = async (req,res) => {
  const {order} = req.params
  const section = await Sections.findOneAndDelete({order:order});
  if (!section){
    return res.status(404).json({error: 'delete did not  happen'});
  }
  res.status(200).json(section);
}

// update section
const updateSection = async (req,res) => {
  const {order} = req.params

  const section = await Sections.findOneAndUpdate({order:order}, {
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