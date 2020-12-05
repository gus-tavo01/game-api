const { Router } = require('express');

const authRouter = (controller) => {
  const router = Router();
  router.post('/login', controller.login);
  return router;
};

module.exports = authRouter;
