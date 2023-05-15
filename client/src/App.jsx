import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/tasks')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setTasks(data);
			})
			.catch((err) => console.error(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { title, description } = e.target;
		const newTask = {
			title: title.value,
			description: description.value,
			done: false,
		};
		e.target.reset();

		fetch('http://localhost:3000/api/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setTasks([...tasks, data]);
			})
			.catch((err) => console.error(err));
	};

	const handleDelete = (id) => {
		fetch(`http://localhost:3000/api/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const newTasks = tasks.filter((task) => task._id !== id);
				setTasks(newTasks);
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<div>
				<h1>TODOLIST App</h1>
				<form
					onSubmit={(e) => handleSubmit(e)}
					style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
				>
					<input type='text' name='title' placeholder='Enter a task' />
					<textarea
						name='description'
						cols='30'
						rows='10'
						placeholder='Task description'
					></textarea>
					<button>Enviar</button>
				</form>

				{tasks.length > 0 &&
					tasks.map((task) => (
						<div
							key={task._id}
							style={{
								border: '1px solid black',
								margin: '10px 0',
								padding: '10px',
							}}
						>
							<h3>{task.title}</h3>
							<p>{task.description}</p>
							<p>{task.done ? 'Terminada' : 'Pendiente'}</p>

							<button onClick={() => handleDelete(task._id)}>Eliminar</button>
						</div>
					))}
			</div>
		</>
	);
}

export default App;
