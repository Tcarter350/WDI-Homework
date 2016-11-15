const Cake = require('../models/cake');

function cakesIndex(req, res) {
  Cake.find((err, cakes) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(cakes);
  });
}

function cakesCreate(req, res) {
  Cake.create(req.body, (err, cake) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(cake);
  });
}

function cakesShow(req, res) {
  Cake.findById(req.params.id, (err, cake) => {
    if(err) return res.status(500).json({ error: err });
    if(!cake) return res.status(404).json({ error: 'Not found' });
    return res.json(cake);
  });
}

function cakesUpdate(req, res) {
  Cake.findById(req.params.id, (err, cake) => {
    if(err) return res.status(500).json({ error: err });
    if(!cake) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      cake[key] = req.body[key];
    }

    cake.save((err, cake) => {
      if(err) return res.status(400).json({ error: err });
      res.json(cake);
    });
  });
}

function cakesDelete(req, res) {
  Cake.findById(req.params.id, (err, cake) => {
    if(err) return res.status(500).json({ error: err });
    if(!cake) return res.status(404).json({ error: 'Not found' });

    cake.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: cakesIndex,
  create: cakesCreate,
  show: cakesShow,
  update: cakesUpdate,
  delete: cakesDelete
};
