import Users from "../models/userModel.js";
import bcrypt from 'bcrypt';
import MongoClient from 'mongodb';
// get all
// const getAllUsers = async (req,res) =>{
//     let allUsers = await Users.find({});
//     res.json(allUsers);
//   }

const loginUser = async (req,res) => {
  res.json({msg:'login'});
}

const signupUser = async (req,res) =>{
  const { email, username,  password } = req.body;
  try{
    const user = await Users.signup(email,password,username);
    res.status(200).json({email,username,user})
  }catch(error){
    res.status(400).json({error: error.message})
  }
  }

export{
    signupUser,
    loginUser,
}