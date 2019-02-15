const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const routes = require('./routes')

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', routes)

const port = 3001

app.listen(port, () => console.log('App listening on port ' + port))

