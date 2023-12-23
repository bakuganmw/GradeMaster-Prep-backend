import  jwt  from "jsonwebtoken"
import { secret } from "../settings.js"
import Users from "../models/userModel.js"
const  requireAuth = async (req,res, next) =>{
  const {authorization} = req.headers

  if(!authorization){
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const {_id} = jwt.verify(token, secret);

    req.user = await Users.findOne({_id}).select('_id')
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({error: 'Request is not authorized'})
  }
}

export {requireAuth}