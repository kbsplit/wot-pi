var express = require('express'),
  actuatorsRoutes = require('./../routes/actuators'),
  sensorsRoutes = require('./../routes/sensors'),
  resources = require('./../resources/model'),
  cors = require('cors');

var app = express();

app.use(cors());

app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorsRoutes);

app.get('/pi', function (req, res) {
  res.send('This os the WoT Pi!')
});

module.exports = app;

