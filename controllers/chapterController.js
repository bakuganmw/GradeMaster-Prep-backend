import Chapters from "../models/chapterModel.js";

const getAllChapters = async (req,res) =>{
    let allChapters = await Chapters.find({});
    res.json(allChapters);
  }

const getOneChapter = async (req,res) => {
  const {chapterName,sectionName} = req.params
  
    const Chapter = await Chapters.find({sectionName: sectionName,chapterName:chapterName});
    if (!Chapter){
      return res.status(404).json({error: 'Nie znaleziono podrozdział'});
    }
    res.status(200).json(Chapter);
  }

const getSectionsChapters = async (req,res) => {
  const {sectionName} = req.params

  const Chapter = await Chapters.find({sectionName: sectionName});
  if (!Chapter){
    return res.status(404).json({error: 'Nie znaleziono podrozdziału z danego rozdziału'});
  }
  res.status(200).json(Chapter);
}

const  createChapter = async (req,res) => {
  const {chapterName,sectionName} = req.body;
  const order = (await Chapters.find({sectionName:sectionName})).length+1;
  // add Chapter
  try{
    const Chapter = await Chapters.create({order,chapterName,sectionName});
    res.status(200).json(Chapter);
  }catch(error){
    res.status(400).json({error: 'Nie udało się dodać podrozdziału'});
  }
}

const deleteChapter = async (req,res) => {
  const {chapterName,sectionName} = req.params

  const Chapter = await Chapters.findOneAndDelete({chapterName: chapterName,sectionName:sectionName});

  if (!Chapter){
    return res.status(404).json({error: 'Nie udało się usunąć podrozdziału'});
  }
  res.status(200).json(Chapter);
}

const updateChapter = async (req,res) => {
  const {chapterName,sectionName} = req.params

  const Chapter = await Chapters.findOneAndUpdate({chapterName: chapterName,sectionName:sectionName}, {
    ...req.body
  });

  if (!Chapter){
    return res.status(404).json({error: 'Nie udało się zaktualizować podrozdziału'});
  }
  res.status(200).json(Chapter);
}
  
export{
  createChapter,
  getAllChapters,
  getOneChapter,
  deleteChapter,
  updateChapter,
  getSectionsChapters,
}