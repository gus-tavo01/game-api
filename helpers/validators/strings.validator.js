const validator = require('validator').default;

exports.isEmpty = (str, key) => {
  try {
    const result = validator.isEmpty(str);
    if (result) {
      return `'${key}' is empty`;
    }
    return null;
  } catch (error) {
    return null;
  }
};

exports.isString = (str, key) => {
  try {
    const result = typeof str === 'string';
    if (!result) {
      return `'${key}' is not a string`;
    }
    return null;
  } catch (error) {
    return null;
  }
};

exports.isEmail = (email, key) => {
  // TODO
  return null;
};
