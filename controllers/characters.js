import { Router } from 'express';

// characters
const router = Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.post('/', (req, res) => {
  // TODO
});

export const characters = router;