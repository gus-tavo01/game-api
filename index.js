import dotenv from 'dotenv';
import express from 'express';

// routes
import { characters } from './controllers/characters.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// arrange controllers to routes
app.use('/characters', characters);

app.listen(port);