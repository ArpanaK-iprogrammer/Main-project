const express = require('express');
const path = require('path');

const weather = require('../middleware/weather')

const app = express();

app.use(express.json());

const htmlPath = path.join(__dirname, '../public');
app.use(express.static(htmlPath));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'Index.html'));
});


app.post('/weather',weather)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});