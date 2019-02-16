const router = require('express').Router()
const Accounts = require('../models/accounts')
const ChildModel = require('../models/children')

const passport = require('passport')
const passportJWT = passport.authenticate('jwt', { session: false })

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

router.get('/children', passportJWT, (req, res) => {
  console.log('sdlfkjsd')
  const userId = req.params.userId

  console.log(userId + ' these are my children')
  res.send('wohooo')
})

router.post('/children', (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const childName = body.childName

  const child = new ChildModel({ name: childName, parentID: userId, saldo: 0 })

  child.save().then(() => {
    res.send()
  })
})

module.exports = router
