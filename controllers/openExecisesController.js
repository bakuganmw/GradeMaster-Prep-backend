import OpenExecises from "../models/openExecisesModel.js";

// get all
const getAllOpenExecises = async (req,res) =>{
  let allOpenExecises = await OpenExecises.find({});
  res.json(allOpenExecises);
  }

// get one workout
const getOneOpenExecise = async (req,res) => {
  const {chapter} = req.params;

  const openExecise = await OpenExecises.find({chapter: chapter});
  if (!openExecise){
    return res.status(404).json({error: 'No execise'});
  }
  res.status(200).json(openExecise);
  }

// create new open execise
  const  createOpenExecise = async (req,res) => {
    const {content,answers,chapter} = req.body;
    // add open execise
    try{
      const openExecise = await OpenExecises.create({content,answers,chapter});
      res.status(200).json(openExecise);
    }catch(error){
      res.status(400).json({error: error.message});
      console.log('problem with adding execise');
    }
  }
  // delete open execise
  const deleteOpenExecise = async (req,res) => {
    const {chapter} = req.params
  
    const deletedOpenExecise = await OpenExecises.findOneAndDelete({chapter: chapter});
  
    if (!deletedOpenExecise){
      return res.status(404).json({error: 'delete not happen'});
    }
    res.status(200).json(deletedOpenExecise);
  }
  // update open execise
  const updateOpenExecise = async (req,res) => {
    const {chapter} = req.params
  
    const updatedOpenExecise = await OpenExecises.findOneAndUpdate({chapter: chapter}, {
      ...req.body
    });
  
    if (!updatedOpenExecise){
      return res.status(404).json({error: 'No execise updated'});
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