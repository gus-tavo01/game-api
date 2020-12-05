const AccountsService = require('../../../services/accounts.service');
const AccountsRepository = require('../../../repositories/accounts.repository');

// mocks
jest.mock('../../../repositories/accounts.repository');

let accountsRepository;
let accountsService;

beforeAll(() => {
  accountsRepository = new AccountsRepository();
  accountsService = new AccountsService(accountsRepository);
});

describe('accounts-service getByUsername', () => {
  afterEach(() => {
    accountsRepository.find.mockReset();
  });

  test('When username is valid, expect a successful service response', async () => {
    // Arrange
    const username = 'tavito';
    const mockResponse = [
      {
        username,
        passwordHash: 'asdasdasd',
        email: 'gustavoa.loera01@gmail.com',
        createDate: 'last christmas',
        lastLoginDate: 'yesterday',
        isActive: true,
      },
    ];

    accountsRepository.find = jest.fn(async () => mockResponse);

    // Act
    const serviceResponse = await accountsService.getByUsername(username);

    // Assert
    expect(serviceResponse.fields.length).not.toBeTruthy();
    expect(serviceResponse.result).toMatchObject(mockResponse[0]);
  });

  test('When username is empty, expect a validation error on response', async () => {
    // Arrange
    const username = '';

    // Act
    const serviceResponse = await accountsService.getByUsername(username);

    // Assert
    expect(serviceResponse.fields.length).toBeTruthy();
    expect(serviceResponse.result).toBe(null);
  });

  test('When username is not defined, expect a validation error on response', async () => {
    // Arrange
    const username = undefined;

    // Act
    const serviceResponse = await accountsService.getByUsername(username);

    // Assert
    expect(serviceResponse.fields.length).toBeTruthy();
    expect(serviceResponse.result).toBe(null);
  });
});
