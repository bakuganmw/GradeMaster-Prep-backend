import mongoose from "mongoose";
import openExecises from "../models/openExecisesModel";

// get all
const getAllOpenExecises = async (req,res) =>{
    let allOpenExecises = await openExecises.find({});
    res.json(allOpenExecises);
  }

// get one workout
const getOneOpenExecise = async (req,res) => {
    const {chapter} = req.params;
  
    const openExecise = await openExecises.find({chapter: chapter});
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
      const openExecise = await openExecises.create({content,answers,chapter});
      res.status(200).json(openExecise);
    }catch(error){
      res.status(400).json({error: error.message});
      console.log('problem with adding execise');
    }
  }
//   // delete Chapter
//   const deleteChapter = async (req,res) => {
//     const {id} = req.params
  
//     if(!mongoose.Types.ObjectId.isValid(id)){
//       return res.status(404).json({error: 'No valid id'});
//     }
  
//     const Chapter = await Chapters.findOneAndDelete({_id: id});
  
//     if (!Chapter){
//       return res.status(404).json({error: 'delete not happen'});
//     }
//     res.status(200).json(Chapter);
//   }
//   // update Chapter
//   const updateChapter = async (req,res) => {
//     const {id} = req.params
  
//     if(!mongoose.Types.ObjectId.isValid(id)){
//       return res.status(404).json({error: 'no valid id'});
//     }
  
//     const Chapter = await Chapters.findOneAndUpdate({_id: id}, {
//       ...req.body
//     });
  
//     if (!Chapter){
//       return res.status(404).json({error: 'No Chapter updated'});
//     }
//     res.status(200).json(Chapter);
//   }
  
//   // export
  
//   export{
//     createChapter,
//     getAllChapters,
//     getOneChapter,
//     deleteChapter,
//     updateChapter,
//   }