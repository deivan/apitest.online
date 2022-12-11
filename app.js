const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const logDir = './logs';

if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

let accessLogStream = fs.createWriteStream(path.join(__dirname, `${logDir}/${Date.now()}.access.log`), { flags: 'a' });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.enable('trust proxy');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(logger('combined', { stream: accessLogStream }));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/', (req, res, next) => {
  console.log(req.requestType)
  res.status(404);
  if (req.accepts('html')) {
    res.render('notfound', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    res.json({ error: true, msg: 'Route not found' });
    return;
  }
});
  
app.listen(8010, () => {
  console.log(`Example app listening on port 8010!`);
});

