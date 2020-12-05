const { Router } = require('express');
// routes
const authRoute = require('./auth/auth.route.js');
const charactersRoute = require('./characters/characters.route.js');
// controllers
const AuthController = require('./auth/auth.controller.js');
const AccountsController = require('./accounts/accounts.controller.js');
const CharactersController = require('./characters/characters.controller.js');
// services
const CharactersService = require('../services/characters.service.js');
const AccountsService = require('../services/accounts.service.js');
// repositories
const AccountsRepository = require('../repositories/accounts.repository');

const router = Router();
const apiPrefix = '/api/v1';

// resolve dependencies
const accountsRepository = new AccountsRepository();
// services
const charactersService = new CharactersService();
const accountsService = new AccountsService(accountsRepository);
// controllers
const charactersController = new CharactersController(charactersService);
const authController = new AuthController(accountsService);
const accountsController = new AccountsController(accountsService);

// endpoints
router.use(`${apiPrefix}/auth`, authRoute(authController));
router.use(`${apiPrefix}/characters`, charactersRoute(charactersController));
router.use(`${apiPrefix}/accounts`, accountsRoute(accountsController));

module.exports = router;
