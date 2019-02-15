const router = require('express').Router()
const index = require('./routes/index')
const user = require('./routes/user')
const child = require('./routes/child')
const login = require('./routes/login')

const passport = require('passport')

const passportJWT = passport.authenticate('jwt', { session: false })

router.use('/', passportJWT, index)
router.use('/child', passportJWT, child)
router.use('/login', login)
router.use('/user', passportJWT, user)


module.exports = router
