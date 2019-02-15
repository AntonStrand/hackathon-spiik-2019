const router = require('express').Router()
const index = require('./routes/index')
const user = require('./routes/user')
const child = require('./routes/child')
const login = require('./routes/login')

router.use('/', index)
router.use('/user', user)
router.use('/child', child)
router.use('/login', login)

module.exports = router
