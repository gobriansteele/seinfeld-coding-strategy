var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/:username', (req, res) => {
  const username = req.params.username;
  if (!username) {
    res.status(401).send('bad request');
  }
  fs.readFile(`data/${username}.json`, (err, rawData) => {
    if (err) {
      res.status(500).send(err);
    }
    const dataToSend = JSON.parse(rawData);
    res.send(dataToSend);
  });
});

module.exports = router;
