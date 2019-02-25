const express = require('express');
const fs = require('fs');
const app = express();
const test = require('./test');
const port = 9011;

app.get('/', (req, res) => {
  res.status(404).send('Must provide username in URL');
});

app.get('/:username', (req, res) => {
  const username = req.params.username;
  if (!username) {
    res.status(401).send('bad request');
  }
  fs.readFile(`data/${username}.json`, (err, rawData) => {
    const dataToSend = JSON.parse(rawData);
    res.send(dataToSend);
  });
});

app.use('/seinfeld', test);

app.listen(port, () =>
  console.log(`Seinfeld api-simulator running on port ${port}`)
);
