import express from 'express';
import { createOpenExecise, deleteOpenExecise, getAllOpenExecises, getOneOpenExecise, updateOpenExecise } from '../controllers/openExecisesController.js';
import { requireAuth } from '../middlewares/requireAuth.js';
const routerOpenExecises = express.Router();

routerOpenExecises.use(requireAuth)

routerOpenExecises.get('/',getAllOpenExecises)

routerOpenExecises.get('/:chapter', getOneOpenExecise)

routerOpenExecises.post('/', createOpenExecise)

routerOpenExecises.delete('/:chapter', deleteOpenExecise)

routerOpenExecises.patch('/:chapter', updateOpenExecise)

export default routerOpenExecises