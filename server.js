const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

// Get - redirect from root to /hello-world
app.get('/', (req, res) => {
  res.redirect('/hello-world');
});

// redirect to /hello-world from /hello-world.json
app.get('/hello-world', (req, res) => {
  res.redirect('/hello-world.json');
});

app.get('/hello-world.json', (req, res) => {
  res.json({});
});

app.get('/hello-world.png', (req, res) => {
  res.json({});
});

// Override default error message
app.use((req, res) => {
  res.status(404).send(`${req.method} is not supported on ${req.path}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
