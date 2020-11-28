import dotenv from 'dotenv';
import express from 'express';

// routes
import { authController } from './controllers/auth.controller.js';
import { charactersController } from './controllers/characters.controller.js';

dotenv.config();

const apiPrefix = '/api/v1';
const port = process.env.PORT || 3000;
const app = express();

// arrange controllers to routes
app.use(`${apiPrefix}/auth`, authController);
app.use(`${apiPrefix}/characters`, charactersController);

app.listen(port);
