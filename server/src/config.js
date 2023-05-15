import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const MONGO_URI =
	process.env.MONGO_URI || 'mongodb://127:0.0.1:27017/mern-tasks';

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database connected');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
		console.log('Database disconnected');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export { connectDB, disconnectDB, MONGO_URI };
