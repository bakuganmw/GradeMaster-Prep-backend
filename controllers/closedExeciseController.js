import closedExecises from "../models/closedExeciseModel.js";

const getRandomClosedExecise = async (req,res) =>{
  let allClosedExecises = await closedExecises.find({});
  let test = Math.random()*allClosedExecises.length
  let randomNumber = Math.round(test) -1;
  console.log(randomNumber);
  console.log(test);
  res.json(allClosedExecises[randomNumber])
}

const addClosedExecise = async(req,res) =>{
  const {content,answers,correctAnswer,reason} = req.body;
  const order = (await closedExecises.find()).length+1;

  // add section
  try{
    const closedExecise = await closedExecises.create({order,content,answers,correctAnswer,reason});
    res.status(200).json(closedExecise);
  }catch(error){
    res.status(400).json({error: error.message});
    console.log('problem with adding a closed execise');
  }
}

const deleteClosedExecise = async (req,res) =>{
  const {order} = req.params
  const execiseToDelete = await closedExecises.findOneAndDelete({order:order});
  if (!execiseToDelete){
    return res.status(404).json({error: 'cannot find execise to delete'});
  }
  res.status(200).json(section);
}

const updateClosedExecise = async (req,res) =>{
  const {order} = req.params

  const updatedExecise = await closedExecises.findOneAndUpdate({order:order}, {
    ...req.body
  });

  if (!updatedExecise){
    return res.status(404).json({error: 'No execise updated'});
  }
  res.status(200).json(updatedExecise);
}
export {
  getRandomClosedExecise,
  addClosedExecise,
  deleteClosedExecise,
  updateClosedExecise,
}