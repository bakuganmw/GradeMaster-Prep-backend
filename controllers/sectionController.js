import Sections from "../models/sectionModel.js";

const getAllSections = async (req,res) =>{
  let allSection = await Sections.find({});
  res.json(allSection);
}

const getOneSection = async (req,res) => {
  const {order} = req.params;
  const section = await Sections.find({order:order});
  if (!section){
    return res.status(404).json({error: 'Nie znaleziono działu'});
  }
  res.status(200).json(section);
}

const  createSection = async (req,res) => {
  const {name} = req.body;
  const order = (await Sections.find()).length+1;
  try{
    const section = await Sections.create({order,name});
    res.status(200).json(section);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

const deleteSection = async (req,res) => {
  const {order} = req.params
  const section = await Sections.findOneAndDelete({order:order});
  if (!section){
    return res.status(404).json({error: 'Nie udało się usunąć działu'});
  }
  res.status(200).json(section);
}

const updateSection = async (req,res) => {
  const {order} = req.params

  const section = await Sections.findOneAndUpdate({order:order}, {
    ...req.body
  });

  if (!section){
    return res.status(404).json({error: 'Nie udało się zaktualizować działu'});
  }
  res.status(200).json(section);
}

export{
  createSection,
  getAllSections,
  getOneSection,
  deleteSection,
  updateSection,
}