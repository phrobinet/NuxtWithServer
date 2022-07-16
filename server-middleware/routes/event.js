import express from 'express';
import Event from '~/model/Event';
import { eventValidation } from '~/service/validation';

const app = express();

app.post('/', async(req, res) => {
  console.log("🦄🦄🦄✨🌈🦄🌍🌏🦄🦄🦄");
  // Validation of data
  const {error} = eventValidation(req.body);
  if (error) return res.status(400).send(error.details);

  // Create a new event
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    user: req.body.user,
  });
  try {
    await event.save();
    res.send({ event: event._id, title: event.title });
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
});

export default app;