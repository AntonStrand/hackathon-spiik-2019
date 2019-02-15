const router = require('express').Router()
const index = require('./index')

router.use('/', index)

module.exports = router