const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Explicitly defining _id as ObjectId
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
