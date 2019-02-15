'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: 'name is required.',
  },
  childId: ObjectId,
  price: Number,
  saldo: Number,
  category: String,
})

const wishlist =  mongoose.model('wishlist', wishlistSchema)

module.exports = wishlist

