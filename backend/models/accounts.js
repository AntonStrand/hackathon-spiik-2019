'use strict'

const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saltRounds = 10

/**
 * validateName check if the username only contain numbers, lowercase and uppercase letters.
 * And no other strange characters. And is between 3 and 10 characters long.
 * @param {string} str - string to check.
 * @returns {boolean} - boolean if pass test
 */
const validateName = str => /^[a-zA-Z-0-9_åÅäÄöÖ]{3,30}$/.test(str)

const accountSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: 'Username is required.',
    validate: [validateName, '\nUsername may only contain numbers, lowercase and uppercase letters.\nIt must be between 3 to 10 characters long.'],
    unique: true
  },
  password: {
    type: String,
    required: 'Password is required.'
  },
  email: {
    type: String,
    required: 'Email is required.'
  },
  children: [ ObjectId ]
})

/**
 * Middleware to hash password before saving them to database.
 */
accountSchema.pre('save', function (next) {
  // Only hash if the password has been modified or is new.
  if (!this.isModified('password')) return next()
  bcrypt.genSalt(saltRounds)
    .then(salt => bcrypt.hash(this.password, salt))
    .then(hash => {
      this.password = hash
      next()
    })
    .catch(e => console.log(e))
})

const User = mongoose.model('user', accountSchema)

module.exports = User

