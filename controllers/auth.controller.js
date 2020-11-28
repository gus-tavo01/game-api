import { Router } from 'express';
import { ApiResponse } from '../common/ApiResponse.js';

const router = Router();

router.post('/login', () => {});
router.post('/register', (req, res) => {});

export const authController = router;
