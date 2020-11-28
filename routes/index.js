import { Router } from 'express';
// routes
import characters from './characters.js';
import auth from './auth.js';

const router = Router();
const apiPrefix = '/api/v1';

router.use(`${apiPrefix}/auth`, auth);
router.use(`${apiPrefix}/characters`, characters);

export default router;
