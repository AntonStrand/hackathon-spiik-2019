'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * validateName check if the username only contain numbers, lowercase and uppercase letters.
 * And no other strange characters. And is between 3 and 10 characters long.
 * @param {string} str - string to check.
 * @returns {boolean} - boolean if pass test
 */
const validateName = str => /^[a-zA-Z-0-9_åÅäÄöÖ]{3,10}$/.test(str)

const childrenSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: 'Username is required.',
    validate: [validateName, '\nUsername may only contain numbers, lowercase and uppercase letters.\nIt must be between 3 to 10 characters long.']
  },
  parentID: {
    type: String,
    required: 'Parent name is required'
  },
  saldo: Number
})

const child = mongoose.model('Child', childrenSchema)

module.exports = child
