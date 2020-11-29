const CharactersController = require('../../../routes/characters/characters.controller');
const CharactersService = require('../../../services/characters.service.js');
const { getMockReq, getMockRes } = require('@jest-mock/express');

// mocks
jest.mock('../../../services/characters.service.js');

const { res, clearMockRes } = getMockRes();

describe('GET Characters execution', () => {
  let mockCharactersService;
  let charactersController;

  beforeAll(() => {
    // mock controller dependencies
    mockCharactersService = new CharactersService();
    // controller setup
    charactersController = new CharactersController(mockCharactersService);
  });

  afterEach(() => {
    clearMockRes();
    mockCharactersService.findById.mockReset();
  });

  test('When request is valid, expect a successful response', async () => {
    // Arrange
    const character = {
      id: 24,
      level: 112,
      name: 'freezing',
      className: 'Ranger',
    };
    const req = getMockReq({
      params: {
        id: character.id,
      },
    });
    const expectedResponse = {
      statusCode: 200,
      payload: character,
      errorMessage: null,
    };

    const mockServiceResponse = { payload: character, fields: [] };
    mockCharactersService.findById = jest.fn(async () => mockServiceResponse);

    // Act
    const response = await charactersController.getById(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockServiceResponse);
  });
});
