var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const catRecordsRouter = require('./routes/cat_record.route');
const catsRouter = require('./routes/cat.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/cat-records', catRecordsRouter);

app.use('/cats', catsRouter);

app.use((err, req, res, next) => {
  res.status(500);
  res.json({ message: err.message });
})

const db = require('./db/models');

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Drop and re-synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

module.exports = app;
