const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // create a new instance of a user
  try {

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    //  you can write either err.message or a custom message of your like!
    return res.status(422).send(err.message);
  }
});

router.post('/signin', (req, res) => {
  
});

module.exports = router;