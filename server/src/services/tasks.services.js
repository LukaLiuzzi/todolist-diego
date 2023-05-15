import Task from '../schemas/task.schema.js';
const getTaskService = async (id) => {
	try {
		const task = await Task.findById(id);
		return task;
	} catch (error) {
		console.log(error);
	}
};

const getTasksService = async () => {
	try {
		const tasks = await Task.find();
		return tasks;
	} catch (error) {
		console.log(error);
	}
};

const createTaskService = async (title, description, done) => {
	try {
		const newTask = new Task({
			title: title,
			description: description,
			done: done,
		});
		const taskSaved = await newTask.save();
		return taskSaved;
	} catch (error) {
		console.log(error);
	}
};

const deleteTaskService = async (id) => {
	try {
		const taskDeleted = await Task.findByIdAndDelete(id);
		return taskDeleted;
	} catch (error) {
		console.log(error);
	}
};

export {
	getTaskService,
	getTasksService,
	createTaskService,
	deleteTaskService,
};
