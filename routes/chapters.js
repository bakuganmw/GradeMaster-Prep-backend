import express from 'express';
import { createChapter, deleteChapter, getAllChapters, getOneChapter, updateChapter, getSectionsChapters } from '../controllers/chapterController.js';
import { requireAuth } from '../middlewares/requireAuth.js';
const routerChapter = express.Router();

routerChapter.use(requireAuth)

routerChapter.get('/',getAllChapters)

routerChapter.get('/:sectionName/:chapterName', getOneChapter)

routerChapter.get('/:sectionName', getSectionsChapters)

routerChapter.post('/', createChapter)

routerChapter.delete('/:sectionName/:chapterName', deleteChapter)

routerChapter.patch('/:sectionName/:chapterName', updateChapter)

export default routerChapter