import express from 'express';
import { createSection, deleteSection, getAllSections, getOneSection, updateSection } from '../controllers/sectionController.js';
const routerSection = express.Router();

routerSection.get('/',getAllSections)

routerSection.get('/:order', getOneSection)

routerSection.post('/', createSection)

routerSection.delete('/:order', deleteSection)

routerSection.patch('/:order', updateSection)

export default routerSection