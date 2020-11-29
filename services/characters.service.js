// TODO
// use class based?

// remove
// create
// findById
// find
// update
// patch

class CharactersService {
  findById = async (id) => {
    console.log('--service');
    return { name: 'freezing', className: 'Cat', level: id };
  };
}

module.exports = CharactersService;
