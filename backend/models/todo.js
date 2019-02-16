'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoSchema = new Schema({
  date: {
    type: Date,
  },
  name: {
    type: String,
    required: 'name is required.',
  },
  title: String,
  value: Number,
  isRecurring: Boolean,
  isCompleted: Boolean,
  description: String,
  childID: ObjectId 
})

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo

