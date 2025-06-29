const Society = require('../models/Society');

const getMatches = async (req, res) => {
  const preferences = req.body;

  try {
    const societies = await Society.find();

    const scored = societies.map(society => {
      let score = 0;

      if (society.avg_rent <= preferences.budget) score += 10;
      if (preferences.prefers_walkable && society.walkability_score > 70) score += 10;
      if (preferences.morning_walks && society.morning_walk_space) score += 10;
      if (society.diet_friendly.includes(preferences.diet_type)) score += 10;
      if (preferences.likes_nightlife && society.nightlife_score > 50) score += 10;

      preferences.priority_amenities.forEach(a => {
        if (society[a] && society[a] > 0) score += 2;
      });

      return { ...society._doc, match_score: score };
    });

    const sorted = scored.sort((a, b) => b.match_score - a.match_score);
    res.json(sorted.slice(0, 5));
  } catch (error) {
    res.status(500).json({ message: 'Error matching societies' });
  }
};

module.exports = { getMatches };
