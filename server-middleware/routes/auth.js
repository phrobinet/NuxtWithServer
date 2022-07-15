import express from 'express';
import User from '~/model/User';

const app = express();

app.post('/register', async (req, res) => {
  console.log("🌍🌏✨🌈🦄");
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
});

export default app;