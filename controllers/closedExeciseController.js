import closedExecises from "../models/closedExeciseModel.js";

const previousNumber = [];
let flag = false;
const getRandomClosedExecise = async (req,res) =>{
  let allClosedExecises = await closedExecises.find({});
  // Generate a random unique index
  let uniqueIndex;
  do {
    const test = Math.random() * allClosedExecises.length;
    uniqueIndex = Math.floor(test);
  } while (checkIfIndexExists(uniqueIndex));
  
  // Add the unique index to the array
  if(flag ==false){
    flag = true;
  }
  else{
    if(previousNumber.length ==0){
      previousNumber.push(uniqueIndex);
    }
    else{
      previousNumber[0] = uniqueIndex
    }
    flag = false;
  }
  res.json(allClosedExecises[uniqueIndex])
}

const addClosedExecise = async(req,res) =>{
  const {content,answers,correctAnswer,reason} = req.body;
  const order = (await closedExecises.find()).length+1;

  // add section
  try{
    const closedExecise = await closedExecises.create({order,content,answers,correctAnswer,reason});
    res.status(200).json(closedExecise);
  }catch(error){
    res.status(400).json({error: 'Nie udało się dodać zadania zamkniętego'});
  }
}

const deleteClosedExecise = async (req,res) =>{
  const {order} = req.params
  const execiseToDelete = await closedExecises.findOneAndDelete({order:order});
  if (!execiseToDelete){
    return res.status(404).json({error: 'Nie udało się usunąć zadania zamkniętego'});
  }
  res.status(200).json(section);
}

const updateClosedExecise = async (req,res) =>{
  const {order} = req.params

  const updatedExecise = await closedExecises.findOneAndUpdate({order:order}, {
    ...req.body
  });

  if (!updatedExecise){
    return res.status(404).json({error: 'Nie udało się zaktualizować zadania zamkniętego'});
  }
  res.status(200).json(updatedExecise);
}

const checkIfIndexExists = (index) => {
  return previousNumber.includes(index);
};

export {
  getRandomClosedExecise,
  addClosedExecise,
  deleteClosedExecise,
  updateClosedExecise,
}