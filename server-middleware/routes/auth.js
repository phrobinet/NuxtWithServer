import express from 'express';
import bcrypt from 'bcryptjs';
import User from '~/model/User';
import { registerValidation, loginValidation } from '~/service/validation';
import { generateAccessToken } from '~/service/tokenService';


const app = express();

// Register a new user
app.post('/register', async (req, res) => {
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
  console.log("entered login");
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
  generateAccessToken(user, 204, res);

  // Return the user
  return res.send({ id: user._id, name: user.name })
})

// Logout a user
app.post('/logout', async (req, res) => {
  res.clearCookie('troov-token');
  res.send();
})

export default app;