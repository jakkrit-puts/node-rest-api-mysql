const config = require("./../config/index");
const model = require("./../models/index");
const passport = require('passport');

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.JWT_KEY;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {

      const user = await model.User.findOne({
        where: {
          id: jwt_payload.id,
        },
      });

      if (!user) {
        return done(new Error("User Not Found!"), null);
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

module.exports.isLogin = passport.authenticate('jwt', { session: false });
