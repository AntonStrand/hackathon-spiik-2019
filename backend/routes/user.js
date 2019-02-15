const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('this is user')
})

module.exports = router
