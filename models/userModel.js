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

  if(!email || !password || !username){
    throw Error('Wszystkie pola muszą być wypełnione');
  }

  if(!validator.isEmail(email)){
    throw Error('Email nie jest poprawny');
  }

  if(!validator.isStrongPassword(password)){
    throw Error('Hasło nie jest dość silne.(Musi mieć 1 znak duży, 1 specjalny i składać się z min 8 znaków)');
  }
  const exists = await this.findOne({email})

  if (exists){
    throw Error("Email jest w użyciu")
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await this.create({email,username,password:hashedPassword})

  return user;
} 

userSchema.statics.login = async function(email,password){

  if(!email || !password){
    throw Error('Wszystkie pola muszą być wypełnione');
  }
  
  if(!validator.isEmail(email)){
    throw Error('Email nie jest poprawny');
  }

  const user = await this.findOne({email})

  if (!user){
    throw Error("Nie zarejestrowany email")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error('Nie właściwe hasło')
  }

  return user
}

const Users = mongoose.model('users', userSchema)

export default Users