const Recipe = require('../models/Recipe')

const createRecipe = async (req, res) => {
  const recipe = req.body
  const foundRecipe = await Recipe.findOne({ _id: req.body.id }).exec()
  if (!foundRecipe) {
    try {
      const result = await Recipe.create({
        "nameRecipe": recipe.nameRecipe,
        "preparationTime": recipe.prep,
        "steps": recipe.steps
      })
      res.status(201).json({ 'success': `New Recipe ${ recipe.nameRecipe } created!`})
    } catch (err) {
      res.status(500).json({'message': err.message})
    }
  } else {
    res.status(400).json({'message': `The ${req.body.nameRecipe} is in the database`})
  }
}

module.exports = { createRecipe }