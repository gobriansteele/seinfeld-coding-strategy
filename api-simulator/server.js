const express = require('express');
const app = express();
const test = require('./test');
const port = 9011;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', function(req, res) {
  res.send('about');
});

app.use('/seinfeld', test);

app.listen(port, () =>
  console.log(`Seinfeld api-simulator running on port ${port}`)
);
