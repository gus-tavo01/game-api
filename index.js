require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const port = process.env.PORT || 3000;
const app = express();

// setup db, passport

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(port);
