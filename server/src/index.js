import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes.js';
import { connectDB } from './config.js';

const app = express();

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', tasksRoutes);

await connectDB();
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
