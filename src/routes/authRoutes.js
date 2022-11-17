const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // create a new instance of a user
  try {

    const user = new User({ email, password });
    await user.save();

    res.send('You made a post request');
  } catch (err) {
    //  you can write either err.message or a custom message of your like!
    return res.status(422).send(err.message);
  }
});

module.exports = router;