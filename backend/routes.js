const router = require('express').Router()
const user = require('./routes/user')
const child = require('./routes/child')
const login = require('./routes/login')

const passport = require('passport')

const passportJWT = passport.authenticate('jwt', { session: false })

router.use('/child', passportJWT, child)
router.use('/login', login)
router.use('/user', user)

module.exports = router
