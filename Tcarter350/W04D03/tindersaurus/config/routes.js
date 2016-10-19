const Profiles = require('../models/profiles');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));

module.exports = router;

router.get('/profiles', (req, res) => {
  Profiles.find({}, (err, quotes) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('profiles/index', { quotes });
  });
});
