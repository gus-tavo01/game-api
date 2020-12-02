const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ApiResponse = require('../../common/ApiResponse');

class AuthController {
  constructor(accountsService) {
    this.accountsService = accountsService;
  }

  login = async (req, res) => {
    const { username, password } = req.body;
    const apiResponse = new ApiResponse();
    try {
      const serviceResponse = await this.accountsService.getByUsername(
        username
      );

      if (serviceResponse.fields.length) {
        apiResponse.badRequest(
          'Invalid username field',
          serviceResponse.fields
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      if (!serviceResponse.result && !serviceResponse.fields.length) {
        apiResponse.unauthorized('Invalid credentials');
        return res.status(apiResponse.statusCode).json(apiResponse);
      }
      const account = serviceResponse.result;
      const passwordMatch = await bcrypt.compare(
        password,
        account.passwordHash
      );

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
    } catch (error) {
      apiResponse.internalServerError(error.message);
      return res.status(apiResponse.statusCode).json(apiResponse);
    }
  };

  createLogin = async (req, res) => {
    const { username, password } = req.body;
    const apiResponse = new ApiResponse();
    try {
      const getAccountResponse = await this.accountsService.getByUsername(
        username
      );

      if (!getAccountResponse.fields) {
        apiResponse.badRequest(
          'Please check your credentials for errors',
          getAccountResponse.fields
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      if (!!getAccountResponse.result) {
        apiResponse.conflict(`Username: '${username}' already exists`);
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const accountRequest = { username, passwordHash };
      const postAccountResponse = await this.accountsService.post(
        accountRequest
      );

      if (postAccountResponse.fields.length) {
        apiResponse.badRequest(
          'Please check your data for errors',
          postAccountResponse.fields
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      if (!postAccountResponse.result && !postAccountResponse.fields.length) {
        apiResponse.unprocessableEntity(
          'The account cannot be added, please try again later'
        );
        return res.status(apiResponse.statusCode).json(apiResponse);
      }

      apiResponse.created(postAccountResponse.result);
      return res.status(apiResponse.statusCode).json(apiResponse);
    } catch (error) {
      apiResponse.internalServerError(error.message);
      return res.status(apiResponse.statusCode).json(apiResponse);
    }
  };
}

module.exports = AuthController;
