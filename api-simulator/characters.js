const express = require('express');
const app = express();

const characters = [
  {
    character: 'Jerry',
    actor: 'Jerry Seinfeld'
  },
  { character: 'Elaine', actor: 'Julia Louis-Dreyfus' },
  { character: 'George', actor: 'Jason Alexander' }
];

app.get('/getAll', function(req, res) {
  res.send(characters);
});

module.exports = app;
