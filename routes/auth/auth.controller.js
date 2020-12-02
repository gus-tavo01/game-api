const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ApiResponse = require('../../common/ApiResponse');
const AccountsService = require('../../services/accounts.service');

class AuthController {
  constructor() {
    // TODO
    // receive this as a dependency
    this.accountsService = new AccountsService();
  }

  login = async (req, res) => {
    const { username, password } = req.body;
    const apiResponse = new ApiResponse();
    const serviceResponse = await this.accountsService.getByUsername(username);

    if (serviceResponse.fields.length) {
      apiResponse.badRequest('Invalid username field', serviceResponse.fields);
      return res.status(apiResponse.statusCode).json(apiResponse);
    }

    if (!serviceResponse.result && !serviceResponse.fields.length) {
      apiResponse.unauthorized('Invalid credentials');
      return res.status(apiResponse.statusCode).json(apiResponse);
    }
    const account = serviceResponse.result;
    const passwordMatch = await bcrypt.compare(password, account.passwordHash);

    if (!passwordMatch) {
      apiResponse.unauthorized('Invalid credentials');
      return res.status(apiResponse.statusCode).json(apiResponse);
    }

    const secret = process.env.JWT_SECRET;
    const expiresIn = '2h';
    const payload = {
      iat: Date.now(),
      sub: account.id,
    };
    const token = jsonwebtoken.sign(payload, secret, { expiresIn });
    const result = { token, expiresIn };
    apiResponse.ok(result);
    return res.status(200).json(apiResponse);
  };

  createLogin = (req, res) => {};

  // TODO:
  // delete this  dummy route
  getProfile = (req, res) => {
    const { user } = req;
    res.status(200).json(user);
  };
}

module.exports = AuthController;
