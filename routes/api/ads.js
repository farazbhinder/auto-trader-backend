const express = require('express');
const router = express.Router();

// @route   GET api/ads
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('default ads route');
});

module.exports = router;
