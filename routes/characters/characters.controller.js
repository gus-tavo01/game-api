class CharactersController {
  constructor(charactersService) {
    this.charactersService = charactersService;
  }

  getById = async (req, res) => {
    const id = req.params.id;
    const result = await this.charactersService.findById(id);
    // TODO
    // generate apiResponse
    return res.status(200).json(result);
  };

  create = (req, res) => {};
}

module.exports = CharactersController;
