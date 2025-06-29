const express = require('express');
const { getMatches } = require('../controllers/matchController');
const router = express.Router();

router.post('/match', getMatches);

module.exports = router;
