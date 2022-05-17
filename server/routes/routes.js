const express = require('express');
const router = express.Router();
const API = require('../controllers/api')

router.route('/')
  .post(API.createRecipe)
  .get(API.getAllRecipes)
  
router.route('/:id')
  .put(API.updateRecipe)

module.exports = router;