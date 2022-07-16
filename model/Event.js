import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3
  },
  description: {
    type: String,
    required: true,
    min: 3
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    min: 3
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Event', eventSchema);