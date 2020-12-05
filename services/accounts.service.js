const ServiceResponse = require('../common/ServiceResponse');
const stringValidator = require('../helpers/validators/strings.validator');

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
    serviceResponse.result = result[0];
    return serviceResponse;
  };

  post = async (account) => {
    const validations = [
      stringValidator.isString(account.username, 'username'),
      stringValidator.isEmpty(account.username, 'username'),
      stringValidator.isString(account.password, 'password'),
      stringValidator.isEmpty(account.password, 'password'),
      stringValidator.hasLength(
        account.password,
        { min: 8, max: 25 },
        'password'
      ),
      stringValidator.isString(account.email, 'email'),
      stringValidator.isEmail(account.email, 'email'),
    ];
    const serviceResponse = new ServiceResponse();
    serviceResponse.addValidationErrors(validations);

    if (serviceResponse.fields.length) {
      return serviceResponse;
    }

    const result = await this.accountsRepository.add(account);
    serviceResponse.result = result;
    return serviceResponse;
  };

  // delete
  // put/patch
  // get
}

module.exports = AccountsService;
