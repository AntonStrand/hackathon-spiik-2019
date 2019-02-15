const passportJwt = require('passport-jwt')
const dotenv = require('dotenv')

dotenv.config()

const ExtractJWT = passportJwt.ExtractJwt
const Strategy = passportJwt.Strategy

const JWTOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT
}

module.exports = new Strategy(JWTOptions, (jwtPayload, done) => {
  // If the jwtPayload exists, user is authorized
  // Else a 401 is returned
  if (jwtPayload) {
    done(null, jwtPayload)
  }
})
