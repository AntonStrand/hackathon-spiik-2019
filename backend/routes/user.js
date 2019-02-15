const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('this is user')
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
