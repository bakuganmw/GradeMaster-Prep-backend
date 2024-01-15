import express from 'express';
import { loginUser, signupUser, updateUser } from '../controllers/userController.js';
const routerUsers = express.Router();

routerUsers.post('/login', loginUser)

routerUsers.post('/signup', signupUser)

routerUsers.patch('/changeName/:email', updateUser)

export default routerUsers;