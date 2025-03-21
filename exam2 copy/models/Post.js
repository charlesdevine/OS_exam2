const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    max: 100
  },
  description: {
    type: String,
    require: true,
    max: 500
  },
  likes: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);