const passport = require('passport');

function addBearerAuth(options) {
  const defaultOptions = { session: false };
  const jwtOptions = options || defaultOptions;
  return passport.authenticate('jwt', jwtOptions);
}

module.exports = addBearerAuth;
