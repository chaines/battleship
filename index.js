import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('Hello from the battleship api');
});

app.get('/api/test', (req, res) => {
  res.json({text: 'attempt to test the api'});
})

let server = app.listen(3001, () => {
  console.log(`server running at http://localhost:${server.address().port}`);
});