import express from 'express';
import { createSection, deleteSection, getAllSections, getOneSection, updateSection } from '../controllers/sectionController.js';
const routerSection = express.Router();

routerSection.get('/',getAllSections)

routerSection.get('/:id', getOneSection)

routerSection.post('/', createSection)

routerSection.delete('/:id', deleteSection)

routerSection.patch('/:id', updateSection)

export default routerSection