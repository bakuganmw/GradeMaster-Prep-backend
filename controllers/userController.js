import Users from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const secret = '92fa9dfaf9dc42d5286b30d9b6896cfdacd862477b62b262bf1a000761a1b896'

const createToken = (_id) => {
  return jwt.sign({_id},secret, {expiresIn: '1d'});
}

const loginUser = async (req,res) => {
  const {email,password} = req.body;

  try{
    const user = await Users.login(email,password);
    // create token
    const token = createToken(user._id);
    res.status(200).json({email,token})
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