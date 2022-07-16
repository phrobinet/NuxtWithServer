import express from 'express';
import auth from './routes/auth';
import event from './routes/event';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
const config = useRuntimeConfig();
// const router = express.Router()

// Connect to MongoDB
mongoose.connect(config.public.dbConnect, () => console.log('Connected ot DB!'))

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/user', auth)
app.use('/event', event)

export default app;
