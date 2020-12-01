require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const routes = require('./routes/index');
// configurations
const configureStrategy = require('./config/passport');

const port = process.env.PORT || 3000;
const app = express();

// setup db, passport
configureStrategy(passport);
// configure DB

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use(passport.initialize());

app.listen(port);
