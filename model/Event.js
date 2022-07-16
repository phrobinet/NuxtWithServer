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
  dateEvent: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    min: 3
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Event', eventSchema);