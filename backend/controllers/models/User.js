const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  age: Number,
  profession: String,
  budget: Number,
  prefers_walkable: Boolean,
  likes_nightlife: Boolean,
  morning_walks: Boolean,
  diet_type: String,
  commute_time_max: Number,
  priority_amenities: [String],
});

module.exports = mongoose.model('User', userSchema);
