const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Society = require('./models/Society');

dotenv.config();
// Dummy Data
const sampleSocieties = [
  {
    name: "Green Meadows",
    avg_rent: 18000,
    crime_rate: "Low",
    walkability_score: 85,
    gyms: 3,
    parks: 2,
    schools: 5,
    restaurants: 4,
    hospitals: 2,
    transport_score: 75,
    nightlife_score: 60,
    morning_walk_space: true,
    diet_friendly: ["Vegetarian", "Balanced"],
  },
  {
    name: "Sunset Heights",
    avg_rent: 22000,
    crime_rate: "Medium",
    walkability_score: 70,
    gyms: 1,
    parks: 1,
    schools: 2,
    restaurants: 5,
    hospitals: 1,
    transport_score: 60,
    nightlife_score: 80,
    morning_walk_space: false,
    diet_friendly: ["Vegan", "Balanced"],
  },
  {
    name: "Eco Nest",
    avg_rent: 15000,
    crime_rate: "Very Low",
    walkability_score: 90,
    gyms: 2,
    parks: 4,
    schools: 3,
    restaurants: 2,
    hospitals: 3,
    transport_score: 85,
    nightlife_score: 40,
    morning_walk_space: true,
    diet_friendly: ["Vegetarian", "Vegan"],
  },
  {
    name: "Urban Residency",
    avg_rent: 25000,
    crime_rate: "Medium",
    walkability_score: 60,
    gyms: 4,
    parks: 1,
    schools: 4,
    restaurants: 6,
    hospitals: 2,
    transport_score: 65,
    nightlife_score: 90,
    morning_walk_space: false,
    diet_friendly: ["Balanced", "Non-Vegetarian"],
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Society.deleteMany({});
    await Society.insertMany(sampleSocieties);
    console.log("✅ Societies inserted successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Failed to insert data:", err);
    process.exit(1);
  });
