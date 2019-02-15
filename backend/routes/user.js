const router = require('express').Router()
<<<<<<< HEAD
const Accounts = require('../models/accounts')
=======
const childModel = require('../models/children')
>>>>>>> dd5ab12bf24e1088851c47386597bbd3958a4692

router.get('/', (req, res) => {
  res.json('this is user')
})

<<<<<<< HEAD
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
=======
router.get('/children', (req, res) => {
>>>>>>> dd5ab12bf24e1088851c47386597bbd3958a4692
  const userId = req.params.userId

  console.log(userId + ' these are my children')
})

router.post('/children', (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const childName = body.childName

  const child = new childModel({ name: childName, parentID: userId, saldo: 0 })

  child.save().then(() => {
    res.send()
  })
})

module.exports = router
