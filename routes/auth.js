import { Router } from 'express';
import { ApiResponse } from '../common/ApiResponse.js';

const auth = Router();

auth.post('/login', () => {});
auth.post('/register', (req, res) => {});

export default auth;
