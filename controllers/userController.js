import Users from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { secret } from "../settings.js";

const createToken = (_id) => {
  return jwt.sign({_id},secret, {expiresIn: '1d'});
}

const loginUser = async (req,res) => {
  const {email,password} = req.body;

  try{
    const user = await Users.login(email,password);
    // create token
    const token = createToken(user._id);
    const username = user.username
    res.status(200).json({email,username,token})
  }catch(error){
  res.status(400).json({error: error.message})
  }
}

const signupUser = async (req,res) =>{
  const { email, username,  password } = req.body;
  try{
    const user = await Users.signup(email,password,username);
    // create token
    const token = createToken(user._id);
    res.status(200).json({email,username,token})
  }catch(error){
    res.status(400).json({error: error.message})
  }
  }

export{
  signupUser,
  loginUser,
}