const profiles = require('../models/profiles');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));

module.exports = router;

router.get('/profiles', (req, res) => {
  profiles.find({}, (err, profiles) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('profiles/index', { profiles });
  });
});

router.get('/profiles/new', (req, res) => res.render('profiles/new'));
router.post('/profiles', (req, res) => {
    profiles.create(req.body.profiles, (err, profiles) => {
        if(err) return res.status(500).send("500: Server Error");
        res.redirect(301, '/profiles');
    });
});
