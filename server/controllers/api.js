const Recipe = require('../models/Recipe')

const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find()
  if (!recipes) return res.status(204).json({ 'message': 'No recipes found.' })
  res.json(recipes)
}

const createRecipe = async (req, res) => {
  const recipe = req.body
  const foundRecipe = await Recipe.findOne({ nameRecipe: req.body.nameRecipe }).exec()
  if (!foundRecipe) {
    try {
      const result = await Recipe.create({
        "nameRecipe": recipe.nameRecipe,
        "preparationTime": recipe.prep,
        "steps": recipe.steps,
        "image": recipe.image
      })
      res.status(201).json({ 'success': `New Recipe ${ recipe.nameRecipe } created!`})
    } catch (err) {
      res.status(500).json({'message': err.message})
    }
  } else {
    res.status(400).json({'message': `The ${req.body.nameRecipe} is in the database`})
  }
}

const updateRecipe = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ 'message': 'Recipe ID required.' });
  const foundRecipe = await Recipe.findOne({ _id: req.params.id }).exec();
  if (!foundRecipe) return res.status(204).json({ "message": `No Recipe matches ID ${req.body.id}` })
  try {
    foundRecipe.nameRecipe = req.body.nameRecipe
    foundRecipe.preparationTime = req.body.prep
    foundRecipe.steps = req.body.steps
    foundRecipe.image = req.body.image
    const result = await foundRecipe.save()
    res.json(result)
  } catch (err) {
    res.status(500).json({'message': err.message})
  }

}


module.exports = { createRecipe, getAllRecipes, updateRecipe }