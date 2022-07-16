import express from 'express';
import Event from '~/model/Event';
import { eventValidation } from '~/service/validation';
import { tokenVerify } from '~/service/tokenService';

const app = express();

// Post an event
app.post('/', async(req, res) => {
  // Validation of data
  const {error} = eventValidation(req.body);
  if (error) return res.status(400).send(error.details);

  // Create a new event
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    dateEvent: req.body.dateEvent,
    location: req.body.location,
    userId: req.body.userId,
  });
  try {
    await event.save();
    res.send(event);
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
});

// Get all events
app.get('/', tokenVerify, async(req, res) => {
  try {
    const event = await Event.find();
    res.send(event);
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
})

// Get an event
app.get('/:eventId', async(req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    res.send(event);
  }
  catch (error) {
    res.status(500).json({ message: error.message });    
  }
})

// Update an event
app.patch('/:eventId', async(req, res) => {
  // Validation of data
  const {error} = eventValidation(req.body);
  if (error) return res.status(400).send(error.details);

  // Update Event
  try{
    console.log(req.body);
    const updatedEvent = await Event.findByIdAndUpdate({_id: req.params.eventId}, {$set: req.body});
    res.send(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
})

// Delete an event
app.delete('/:eventId', tokenVerify, async(req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.eventId);
    res.send(event);
  }
  catch (error) {
    res.status(500).json({ message: error.message });    
  }
})

export default app;