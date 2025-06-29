const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  name: String,
  avg_rent: Number,
  crime_rate: String,
  walkability_score: Number,
  gyms: Number,
  parks: Number,
  schools: Number,
  restaurants: Number,
  hospitals: Number,
  transport_score: Number,
  nightlife_score: Number,
  morning_walk_space: Boolean,
  diet_friendly: [String],
});

module.exports = mongoose.model('Society', societySchema);
