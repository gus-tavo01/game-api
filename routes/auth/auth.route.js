const { Router } = require('express');
const bearerAuth = require('../../helpers/addBearerAuth');

const authRouter = (controller) => {
  const router = Router();
  router.post('/login', controller.login);
  router.post('/register', controller.createLogin);
  router.get('/profile', bearerAuth(), controller.getProfile);
  return router;
};

module.exports = authRouter;
