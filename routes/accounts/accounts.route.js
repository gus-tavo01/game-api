const { Router } = require('express');

const accountsRouter = (controller) => {
  const router = Router();
  // router.get('/:id', controller.getById);
  // getByFilters
  router.post('/', controller.postAccount);
  // patch
  // delete
  return router;
};

module.exports = accountsRouter;
