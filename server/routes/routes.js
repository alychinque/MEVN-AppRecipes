const express = require('express');
const router = express.Router();
const API = require('../controllers/api')

router.route('/')
    .post(API.createRecipe)

module.exports = router;