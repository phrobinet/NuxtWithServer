import express from 'express';
import User from '~/model/User';
import { registerValidation } from '~/service/validation';
import bcrypt from 'bcryptjs';

const app = express();

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

export default app;