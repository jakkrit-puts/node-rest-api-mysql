const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const passport = require('passport');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler')

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const unitRouter = require('./routes/unit');
const categoryRouter = require('./routes/category');

const app = express();

app.use(cors())
app.use(passport.initialize());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/unit', unitRouter);
app.use('/category', categoryRouter);

app.use(errorHandler);

module.exports = app;
