import express from 'express';
import { createSection, deleteSection, getAllSections, getOneSection, updateSection } from '../controllers/sectionController.js';

import { requireAuth } from '../middlewares/requireAuth.js';
const routerSection = express.Router();

routerSection.use(requireAuth)

routerSection.get('/',getAllSections)

routerSection.get('/:order', getOneSection)

routerSection.post('/', createSection)

routerSection.delete('/:order', deleteSection)

routerSection.patch('/:order', updateSection)

export default routerSection