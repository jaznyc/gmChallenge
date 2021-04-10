const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 8080;
module.exports = app;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/api', require('./api'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const startListening = () => {
  app.listen(PORT, () => console.log(`playing it cool on port ${PORT}`));
};

startListening();
