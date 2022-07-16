import express from 'express';
import User from '~/model/User';
import { registerValidation, loginValidation } from '~/service/validation';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();

// Register a new user
app.post('/register', async (req, res) => {
  console.log("🌍🌏✨🌈🦄");
  // Validation of the data
  const {error} = registerValidation(req.body);
  if (error) return res.status(400).send(error.details);


  // Check if user already exists
  const emailExists = await User.findOne({email: req.body.email});
  if (emailExists) return res.status(400).send('L\'e-mail existe déjà');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.send({ user: user._id, name: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
});

// Login a user
app.post('/login', async (req, res) => {
  // Validation of data
  const {error} = loginValidation(req.body);
  if (error) return res.status(400).send(error.details);

  // Check if user exists
  const user = await User.findOne({email: req.body.email});
  if (!user) return res.status(400).send('L\'e-mail n\'existe pas');

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Le mot de passe est incorrect');

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  console.log('token:', token)
  // res.header('auth-token', token).send(token);
  // sessionStorage.setItem('troov-token', token);

  // Return the user
  res.send({ id: user._id, name: user.name });
})

export default app;