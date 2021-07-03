const express = require('express');
const FoodController = require('../controllers/FoodController');

const router = express.Router();

router.get('/create', FoodController.Food_create_get);
router.get('/', FoodController.Food_index);
router.post('/', FoodController.Food_create_post);
router.get('/:id', FoodController.Food_details);
router.delete('/:id', FoodController.Food_delete);

module.exports = router;