import { Router } from 'express';
import {
	createTask,
	deleteTask,
	getTasks,
} from '../controllers/tasks.controller.js';

const router = Router();

router.get('/:id?', getTasks);

router.post('/', createTask);

router.delete('/:id', deleteTask);

export default router;
