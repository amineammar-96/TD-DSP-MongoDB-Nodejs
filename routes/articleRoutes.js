const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getAllArticles);
router.delete('/delete/:id', articleController.deleteArticle);
router.put('/update/:id', articleController.updateArticle);


module.exports = router;
