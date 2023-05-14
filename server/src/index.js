import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/tasks", tasksRoutes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
    }
);