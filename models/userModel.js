import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true
      },
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      }
    },{timestamps:true}
)

//  static signup method

userSchema.statics.signup = async function(email,password,username){

  if(!email || !password){
    throw Error('All fields must be filled');
  }

  if(!validator.isEmail(email)){
    throw Error('Email not valid');
  }

  if(!validator.isStrongPassword(password)){
    throw Error('Password not strong enough');
  }
  const exists = await this.findOne({email})

  if (exists){
    throw Error("Email already in use")
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await this.create({email,username,password:hashedPassword})

  return user;
} 

userSchema.statics.login = async function(email,password){

  if(!email || !password){
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({email})

  if (!user){
    throw Error("not signed up yet ")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error('Incorrect password')
  }

  return user
}

const Users = mongoose.model('users', userSchema)

export default Users