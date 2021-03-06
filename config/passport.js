const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const AccountsRepository = require('../repositories/accounts.repository');

function configureStrategy(passport) {
  const accountsRepository = new AccountsRepository();
  const options = {
    ignoreExpiration: false,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };
  const jwtStrategy = new JwtStrategy(options, (jwt_payload, done) => {
    accountsRepository.findOne(jwt_payload.sub).then((account) => {
      if (account) {
        done(null, account);
      } else {
        done('Error getting the user account', false);
      }
    });
  });
  passport.use(jwtStrategy);
}

module.exports = configureStrategy;
