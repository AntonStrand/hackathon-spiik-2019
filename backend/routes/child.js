const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('this is child')
})

router.get('/:childId', (req, res) => {
  const childId = req.params.childId

  console.log(childId)
})

module.exports = router
