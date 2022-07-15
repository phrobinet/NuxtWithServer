import express from 'express';
import auth from './routes/auth';
import mongoose from 'mongoose';

const app = express();
const config = useRuntimeConfig();
// const router = express.Router()

// Connect to MongoDB
mongoose.connect(config.public.dbConnect, () => console.log('Connected ot DB!'))

// Middleware
app.use(express.json());

// Routes
app.use('/user', auth)

export default app;
