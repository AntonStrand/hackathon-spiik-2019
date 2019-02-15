const router = require('express').Router()
const Accounts = require('../models/accounts')

router.get('/', (req, res) => {
  res.json('this is user')
})

router.post('/', (req, res) => {
  const { username, password, email } = req.body

  if (!username || !password || !email) {
    res.status(401).send('Invalid input')
  }

  new Accounts({ name: username, password: password, email: email })
    .save()
    .then(data => {
      res.json('Added user')
    })
    .catch(e => {
      if (e.code === 11000) {
        res.json('User already exist')
      } else {
        res.json('Unknown error')
      }
    })
})

router.get('/:userId', (req, resp) => {
  const userId = req.params.userId

  console.log(userId)
})

router.get('/:userId/children', (req, resp) => {
  const userId = req.params.userId

  console.log(userId + ' these are my children')
})

module.exports = router
