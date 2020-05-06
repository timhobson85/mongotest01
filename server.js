const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  cors = require('cors'),
  app = express();

require('express-async-errors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

require('./server/routes.js')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`))
app.get('/', (req, res) => {
  res.send('<h1>mongoTest01</h1>');
});