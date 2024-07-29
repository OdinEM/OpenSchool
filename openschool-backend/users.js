const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route POST /api/users/signup
// @desc Register new user
// @access Public
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).json({ msg: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
