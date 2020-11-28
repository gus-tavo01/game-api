import { Router } from 'express';

// characters
const characters = Router();

characters.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

characters.post('/', (req, res) => {
  // TODO
});

export default characters;
