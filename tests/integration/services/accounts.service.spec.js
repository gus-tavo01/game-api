require('dotenv').config();
const AccountsRepository = require('../../../repositories/accounts.repository');
const AccountsService = require('../../../services/accounts.service');
const database = require('../../../config/database');

let accountsService;

beforeAll(() => {
  database();
  const accountsRepository = new AccountsRepository();
  accountsService = new AccountsService(accountsRepository);
});

describe('Characters Service E2E CRUD', () => {
  test('When inputs are valid, expect a successful response', async () => {
    // Arrange
    const username = 'yayis_boy';
    const accountRequest = {
      username,
      email: 'yayis.1@gmail.com',
      passwordHash:
        '$2b$10$BYM2CaCrbZ3U/113nDi2YeYhEia6/9I2hNssA0uFErSCgsSnVEpHm',
      createDate: new Date(),
    };

    // Act
    const resultCreate = await accountsService.post(accountRequest);
    const resultGet = await accountsService.getByUsername(username);
    const resultDelete = await accountsService.delete(resultGet.result.id);
    const resultConfirm = await accountsService.getByUsername(username);

    // Assert
    expect(resultGet.result).toMatchObject(resultCreate.result);
    expect(resultConfirm.result).toBe(null);
  });
});
