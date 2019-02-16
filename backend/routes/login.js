const router = require('express').Router()
const Accounts = require('../models/accounts')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

router.post('/', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(401).send('Invalid input')
  }

  Accounts.findOne({ name: username })
    .then(data => {
      if (!data) {
        res.json({ error: 'Invalid username or password' })
      } else {
        const dbPassword = data.password
        const id = data._id

        bcrypt.compare(password, dbPassword, (err, result) => {
          if (err) {
            console.log('Invalid username or password')
            res.json('Invalid username or password')
          }
          if (result) {
            jwt.sign(username, id)
              .then(token => res.json({ token: token }))
          }
        })
      }
    })
    .catch(err => {
      res.json('Error')
      console.log(err)
    })
})

module.exports = router
