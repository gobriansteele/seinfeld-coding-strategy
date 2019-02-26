const express = require('express');
const app = express();
const test = require('./test');
const codingInfo = require('./codingInfo');
const port = 9011;

app.get('/', (req, res) => {
  res.status(404).send('Must provide username in URL');
});

app.use('/codingInfo', codingInfo);

app.use('/seinfeld', test);

app.listen(port, () =>
  console.log(`Seinfeld api-simulator running on port ${port}`)
);
