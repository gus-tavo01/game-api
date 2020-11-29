const { Router } = require('express');

// api/v1/characters
const charactersRoute = (controller) => {
  const router = Router();
  router.get('/:id', controller.getById);
  router.post('/', controller.create);
  // put
  // patch
  // get by filters
  // delete
  return router;
};

module.exports = charactersRoute;
