import OpenExecises from "../models/openExecisesModel.js";

const getAllOpenExecises = async (req,res) =>{
  let allOpenExecises = await OpenExecises.find({});
  res.json(allOpenExecises);
  }

const getOneOpenExecise = async (req,res) => {
  const {chapter} = req.params;

  const openExecise = await OpenExecises.find({chapter: chapter});
  if (!openExecise){
    return res.status(404).json({error: 'Nie znaleziono zadania otwartego'});
  }
  res.status(200).json(openExecise);
  }

const  createOpenExecise = async (req,res) => {
  const {content,answers,advice,chapter} = req.body;
  // add open execise
  try{
    const openExecise = await OpenExecises.create({content,answers,advice,chapter});
    res.status(200).json(openExecise);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

const deleteOpenExecise = async (req,res) => {
  const {chapter} = req.params

  const deletedOpenExecise = await OpenExecises.findOneAndDelete({chapter: chapter});

  if (!deletedOpenExecise){
    return res.status(404).json({error: 'Nie udało się usunąć zadania otwartego'});
  }
  res.status(200).json(deletedOpenExecise);
}

const updateOpenExecise = async (req,res) => {
  const {chapter} = req.params

  const updatedOpenExecise = await OpenExecises.findOneAndUpdate({chapter: chapter}, {
    ...req.body
  });

  if (!updatedOpenExecise){
    return res.status(404).json({error: 'Nie udało się zaktualizować zadania otwartego'});
  }
  res.status(200).json(updatedOpenExecise);
}

export{
  getAllOpenExecises,
  getOneOpenExecise,
  createOpenExecise,
  deleteOpenExecise,
  updateOpenExecise,
}