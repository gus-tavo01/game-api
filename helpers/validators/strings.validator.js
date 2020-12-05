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

exports.hasLength = (str, length, key) => {
  try {
    const result = validator.isLength(str, length);
    if (!result) {
      return `'${key}' does not have expected characters length '${min}' - '${max}'`;
    }
    return null;
  } catch (err) {
    return null;
  }
};

exports.isEmail = (str, key) => {
  try {
    const result = validator.isEmail(str);
    if (!result) {
      return `'${key}' is not a valid email`;
    }
    return null;
  } catch (err) {
    return null;
  }
};
