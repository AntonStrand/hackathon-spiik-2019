const router = require('express').Router()
const index = require('./routes/index')
const user = require('./routes/user')
const child = require('./routes/child')

router.use('/', index)
router.use('/user', user)
router.use('/child', child)

module.exports = router
