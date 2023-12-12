import express from 'express';
import { loginUser, signupUser } from '../controllers/userController.js';
const routerUsers = express.Router();

routerUsers.post('/login', loginUser)

routerUsers.post('/signup', signupUser)



export default routerUsers;