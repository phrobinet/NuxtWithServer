import express from 'express';
import auth from './routes/auth';
import mongoose from 'mongoose';
import User from '~/model/User';

const app = express();
const config = useRuntimeConfig();
// const router = express.Router()


// Connect to MongoDB
mongoose.connect(config.public.dbConnect, () => console.log('Connected ot DB!'))

// Middleware
app.use(express.json());

// Routes
app.use('/register', auth)




export default app;


