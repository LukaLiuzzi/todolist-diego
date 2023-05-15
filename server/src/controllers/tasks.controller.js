import {
	createTaskService,
	deleteTaskService,
	getTaskService,
	getTasksService,
} from '../services/tasks.services.js';

const getTasks = async (req, res) => {
	const { id } = req.params;

	if (id) {
		const task = await getTaskService(id);
		res.json(task);
	} else {
		const tasks = await getTasksService();
		res.json(tasks);
	}
};

const createTask = async (req, res) => {
	const { title, description, done } = req.body;
	if (!title || !description || done === undefined) {
		return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
	}

	const taskSaved = await createTaskService(title, description, done);
	res.json(taskSaved);
};

const deleteTask = async (req, res) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).json({ msg: 'Bad Request. ID is required' });
	}

	const taskDeleted = await deleteTaskService(id);
	res.json(taskDeleted);
};

export { getTasks, createTask, deleteTask };
