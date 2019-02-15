const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.JWT

const sign = (username, id) => {
  return new Promise((resolve, reject) => {
    jwt.sign({
      username,
      id
    }, secret, { expiresIn: '2 hours' },
    (err, token) => {
      if (err) return reject(err)
      return resolve(token)
    })
  })
}

module.exports = {
  sign
}
