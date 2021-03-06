const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const routes = require('./routes')
const mongoose = require('./config/mongoose.js')
const passport = require('passport')
const passportJWT = require('./models/passportJWT')

dotenv.config()

mongoose.run().catch(err => {
  console.log(err)
  process.exit(1)
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(passport.initialize())
passport.use(passportJWT)

app.use('/api', routes)

const port = 3001

app.listen(port, () => console.log('App listening on port ' + port))
