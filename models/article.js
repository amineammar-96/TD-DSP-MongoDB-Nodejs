const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category:String,
  author:String,
  releaseDate:Date,
  description: String

});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
