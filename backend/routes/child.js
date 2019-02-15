const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('this is child')
})

router.get('/:childId', (req, res) => {
  const childId = req.params.childId

  console.log(childId)
})

router.get('/:childId/wallet', (req, res) => {
  const childId = req.params.childId

  console.log(childId)
})

router.get('/:childId/wishlist', (req, res) => {
  const childId = req.params.childId

  console.log(childId)
})

router.get('/:childId/history', (req, res) => {
  const childId = req.params.childId

  console.log(childId)
})

module.exports = router
