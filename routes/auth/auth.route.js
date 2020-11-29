const { Router } = require('express');

const authRouter = (controller) => {
  const router = Router();
  router.post('/login', controller.login);
  router.post('/register', controller.createLoginCredentials);
  return router;
};

module.exports = authRouter;
