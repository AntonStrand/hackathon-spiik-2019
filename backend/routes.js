const router = require('express').Router()
const index = require('./routes/index')

router.use('/', index)

module.exports = router
