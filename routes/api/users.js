const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('default users route');
});

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with at least 6 characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('register users route');
  }
);

module.exports = router;
