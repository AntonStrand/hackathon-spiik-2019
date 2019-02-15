const router = require('express').Router()
const index = require('./routes/index')
const user = require('./routes/user')
const child = require('./routes/child')
const passport = require('passport')

const passportJWT = passport.authenticate('jwt', { session: false })

router.use('/', passportJWT, index)
router.use('/user', passportJWT, user)
router.use('/child', passportJWT, child)

module.exports = router
