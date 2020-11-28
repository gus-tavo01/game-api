import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// setup db, passport

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(port);
