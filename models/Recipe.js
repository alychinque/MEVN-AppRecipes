const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  nameRecipe: {
    type: String,
    required: true
  },
  preparationTime: {
    type: Number,
    required: true
  },
  steps: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)