const ServiceResponse = require('../common/ServiceResponse');
const stringValidator = require('../helpers/validators/strings.validator');
const accountMapper = require('../helpers/mappers/account.mapper');

class AccountsService {
  constructor(accountsRepository) {
    this.accountsRepository = accountsRepository;
  }

  getByUsername = async (username) => {
    const validations = [
      stringValidator.isString(username, 'username'),
      stringValidator.isEmpty(username, 'username'),
    ];
    const serviceResponse = new ServiceResponse();
    serviceResponse.addValidationErrors(validations);

    if (serviceResponse.fields.length) {
      return serviceResponse;
    }

    const result = await this.accountsRepository.find({ username });
    const mapped = accountMapper(result[0]);
    serviceResponse.result = mapped;
    return serviceResponse;
  };

  post = async (account) => {
    const validations = [
      stringValidator.isString(account.username, 'username'),
      stringValidator.isEmpty(account.username, 'username'),
      stringValidator.isString(account.passwordHash, 'password'),
      stringValidator.isEmpty(account.passwordHash, 'password'),
      stringValidator.hasLength(
        account.passwordHash,
        { min: 8, max: 25 },
        'password'
      ),
      stringValidator.isString(account.email, 'email'),
      stringValidator.isEmpty(account.email, 'email'),
      stringValidator.isEmail(account.email, 'email'),
    ];
    const serviceResponse = new ServiceResponse();
    serviceResponse.addValidationErrors(validations);

    if (serviceResponse.fields.length) {
      return serviceResponse;
    }
    const result = await this.accountsRepository.add(account);
    serviceResponse.result = accountMapper(result);
    return serviceResponse;
  };

  delete = async (id) => {
    const validations = [
      stringValidator.isString(id, 'id'),
      stringValidator.isEmpty(id, 'id'),
    ];
    const serviceResponse = new ServiceResponse();
    serviceResponse.addValidationErrors(validations);

    if (serviceResponse.fields.length) {
      return serviceResponse;
    }
    const result = await this.accountsRepository.removeOne(id);
    serviceResponse.result = result;
    return serviceResponse;
  };

  patch = async (id, requestObj) => {
    // validations
  };

  getByFilters = async (filters) => {
    // validations
  };
}

module.exports = AccountsService;
