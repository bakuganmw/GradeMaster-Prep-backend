import Chapters from "../models/chapterModel.js";

// get all
const getAllChapters = async (req,res) =>{
    let allChapters = await Chapters.find({});
    res.json(allChapters);
  }

  //  get one chapter
const getOneChapter = async (req,res) => {
  const {chapterName,sectionName} = req.params
  
    const Chapter = await Chapters.find({sectionName: sectionName,chapterName:chapterName});
    if (!Chapter){
      return res.status(404).json({error: 'No Chapter'});
    }
    res.status(200).json(Chapter);
  }

  //  get sections chapter
const getSectionsChapters = async (req,res) => {
  const {sectionName} = req.params

  const Chapter = await Chapters.find({sectionName: sectionName});
  if (!Chapter){
    return res.status(404).json({error: 'No Chapter'});
  }
  res.status(200).json(Chapter);
}

// create new Chapter
const  createChapter = async (req,res) => {
  const {chapterName,sectionName} = req.body;
  const order = (await Chapters.find({sectionName:sectionName})).length+1;
  // add Chapter
  try{
    const Chapter = await Chapters.create({order,chapterName,sectionName});
    res.status(200).json(Chapter);
  }catch(error){
    res.status(400).json({error: error.message});
    console.log('problem with adding Chapter');
  }
}
  // delete Chapter
  const deleteChapter = async (req,res) => {
    const {chapterName,sectionName} = req.params
  
    console.log(chapterName)
    console.log(sectionName)
    const Chapter = await Chapters.findOneAndDelete({chapterName: chapterName,sectionName:sectionName});
  
    if (!Chapter){
      return res.status(404).json({error: 'delete not happen'});
    }
    res.status(200).json(Chapter);
  }
  // update Chapter
  const updateChapter = async (req,res) => {
    const {chapterName,sectionName} = req.params
  
    const Chapter = await Chapters.findOneAndUpdate({chapterName: chapterName,sectionName:sectionName}, {
      ...req.body
    });
  
    if (!Chapter){
      return res.status(404).json({error: 'No Chapter updated'});
    }
    res.status(200).json(Chapter);
  }
  
  // export
  
  export{
    createChapter,
    getAllChapters,
    getOneChapter,
    deleteChapter,
    updateChapter,
    getSectionsChapters
  }