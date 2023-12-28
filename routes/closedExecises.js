import express from 'express';
import { getRandomClosedExecise,addClosedExecise,deleteClosedExecise,updateClosedExecise } from '../controllers/closedExeciseController.js';
const routerClosedExecise = express.Router();

routerClosedExecise.get('/', getRandomClosedExecise);

routerClosedExecise.post('/', addClosedExecise);

routerClosedExecise.delete('/:order', deleteClosedExecise);

routerClosedExecise.patch('/:order', updateClosedExecise)

export default routerClosedExecise