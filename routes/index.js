const { Router } = require('express');
// routes
const authRoute = require('./auth/auth.route.js');
const charactersRoute = require('./characters/characters.route.js');
// controllers
const CharactersController = require('./characters/characters.controller.js');
const AuthController = require('./auth/auth.controller.js');

// services
const CharactersService = require('../services/characters.service.js');

const router = Router();
const apiPrefix = '/api/v1';

// resolve dependencies
const charactersService = new CharactersService();
const charactersController = new CharactersController(charactersService);
const authController = new AuthController();

// endpoints
router.use(`${apiPrefix}/auth`, authRoute(authController));
router.use(`${apiPrefix}/characters`, charactersRoute(charactersController));

module.exports = router;
