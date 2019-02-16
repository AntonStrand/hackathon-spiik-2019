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
  const {id} = req.user
  Accounts.findOne({_id: id}).then(data => {
    const result = data.children.map(child => {
      console.log(child)
      return ChildModel.findOne({ _id: child })
    })
    Promise.all(result).then(data => res.json(data))
  })
})

router.post('/children', passportJWT, (req, res) => {
  const { id } = req.user
  const childName = req.body.childName

  if (!childName) {
    res.json('No child name')
  } else {
    new ChildModel({ name: childName, parentID: id, saldo: 0 })
      .save().then(data => {
        const { _id } = data
        return Accounts.findOneAndUpdate({ _id: id }, {$addToSet: { children: _id }})
      }).then(data => {
        res.send('Child added!')
      })
  }
})

module.exports = router
