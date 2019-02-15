const router = require('express').Router()
const child = require('../models/children')

router.get('/', (req, res) => {
  res.json('this is user')
})

router.get('/:userId', (req, res) => {
  const userId = req.params.userId

  console.log(userId)
})

router.get('/:userId/children', (req, res) => {
  const userId = req.params.userId

  console.log(userId + ' these are my children')
})

router.post('/:userId/children', (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const childName = body.childName

  const fooBar = new child({ name: childName, parentID: userId, saldo: 0 })

  fooBar.save().then(() => {
    res.send()
  })
})

module.exports = router
